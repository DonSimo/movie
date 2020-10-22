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
