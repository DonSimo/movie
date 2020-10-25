from unittest.mock import patch

import pytest

from exceptions import ApiError
from spi import GhibliRepository


@pytest.fixture
def ghibli_repo():
    return GhibliRepository()


@patch("spi.requests.get")
def test_find_films(mock_get, ghibli_repo):
    mock_get.return_value.status_code = 200
    mock_get.return_value.json.return_value = [{
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links "
                       "her to the mythical sky-kingdom of Laputa. ",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "release_date": "1986",
        "rt_score": "95",
    }]
    films = ghibli_repo.find_films()
    assert len(films) > 0
    assert "Castle in the Sky" == films[0].title


@patch("spi.requests.get")
def test_find_film_by_id(mock_get, ghibli_repo):
    mock_get.return_value.status_code = 200
    mock_get.return_value.json.return_value = {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom "
                       "of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, "
                       "she makes her way to the ruins of the once-great civilization. "
                       "Sheeta and Pazu must outwit the evil Muska,"
                       " who plans to use Laputa's science to make himself ruler of the world.",
        "director": "Hayao Miyazaki",
        "producer": "Isao Takahata",
        "release_date": "1986",
        "rt_score": "95",
        "people": [
            "https://ghibliapi.herokuapp.com/people/"
        ],
        "species": [
            "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
        ],
        "locations": [
            "https://ghibliapi.herokuapp.com/locations/"
        ],
        "vehicles": [
            "https://ghibliapi.herokuapp.com/vehicles/"
        ],
        "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe",
    }
    film = ghibli_repo.find_film_by_id("2baf70d1-42bb-4437-b551-e5fed5a87abe")
    assert "Castle in the Sky" == film.title
    assert "2baf70d1-42bb-4437-b551-e5fed5a87abe" == film.id


@patch("spi.requests.get")
def test_get_film_by_id_when_not_found_then_return_none(mock_get, ghibli_repo):
    mock_get.return_value.status_code = 404
    film = ghibli_repo.find_film_by_id("id_not_found")
    assert film is None


@patch("spi.requests.get")
def test_find_people(mock_get, ghibli_repo):
    mock_get.return_value.status_code = 200
    mock_get.return_value.json.return_value = [{
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "films": [
            "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
        ]}]
    people = ghibli_repo.find_people()
    assert len(people) > 0
    assert "Pazu" == people[0].name


@patch("spi.requests.get")
def test_find_when_failed_to_connect_to_ghibli_api_then_throw_error(mock_get, ghibli_repo):
    with pytest.raises(ApiError):
        mock_get.side_effect = ConnectionError()
        ghibli_repo.find("films")


@patch("spi.requests.get")
def test_find_character_by_id(mock_get, ghibli_repo):
    mock_get.return_value.status_code = 200
    mock_get.return_value.json.return_value = {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "films": [
            "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
        ]}
    character = ghibli_repo.find_character_by_id("fe93adf2-2f3a-4ec4-9f68-5422f1b87c01")
    assert character is not None
    assert "Pazu" == character.name


@patch("spi.requests.get")
def test_find_character_by_id_when_not_found_then_return_none(mock_get, ghibli_repo):
    mock_get.return_value.status_code = 404
    character = ghibli_repo.find_character_by_id("e93adf2-2f3a-4ec4-9f68-5422f1b87c01")
    assert character is None
