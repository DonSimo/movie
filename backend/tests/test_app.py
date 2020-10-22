import json
from unittest.mock import patch

import pytest

from app import app
from exceptions import ApiError
from models import Film, Character


@pytest.fixture
def client():
    yield app.test_client()


@patch("app.movie_service.find_films")
def test_get_films(find_films_mock, client):
    find_films_mock.return_value = [Film({
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links "
                       "her to the mythical sky-kingdom of Laputa. ",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "release_date": "1986",
        "rt_score": "95",
    })]
    res = client.get("/api/films")
    assert res.status_code == 200
    json_res = json.loads(res.data)
    assert "Castle in the Sky" == json_res[0]["title"]


@patch("app.movie_service.find_films")
def test_get_films_when_connection_error_then_should_return_500_status(find_films, client):
    msg = "Failed to connect to https://ghibliapi.herokuapp.com/films"
    find_films.side_effect = ApiError(msg)
    res = client.get("/api/films")
    assert res.status_code == 500
    json_res = json.loads(res.data)
    assert msg in json_res["internal_error"]


@patch("app.movie_service.find_people_by_film")
def test_get_people_by_film_id(find_people, client):
    find_people.return_value = [Character({
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "films": [
            "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
        ]})]
    res = client.get("/api/people?film_id=2baf70d1-42bb-4437-b551-e5fed5a87abe")
    assert res.status_code == 200
    json_res = res.get_json()
    assert 'Pazu' == json_res[0]["name"]


@patch("app.movie_service.find_people_by_film")
def test_get_people_by_film_given_an_empty_film_id_as_param_should_return_400_status(find_people, client):
    find_people.return_value = [Character({
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "films": [
            "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
        ]})]
    res = client.get("/api/people")
    assert res.status_code == 400
    assert b"film_id parameter should not be empty" in res.data
