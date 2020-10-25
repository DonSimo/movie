import pytest

from exceptions import ValidationError
from models import Film, Character
from services import MovieService
from spi import MovieRepository


class GhibliMockRepo(MovieRepository):
    def find_film_by_id(self, film_id):
        if film_id == "2baf70d1-42bb-4437-b551-e5fed5a87abe":
            return Film({
                "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
                "title": "Castle in the Sky",
                "description": "The orphan Sheeta inherited a mysterious crystal that links "
                               "her to the mythical sky-kingdom of Laputa. ",
                "director": "Hayao Miyazaki",
                "producer": "Isao Takahata",
                "release_date": "1986",
                "rt_score": "95",
            })
        return None

    def find_films(self):
        films = [{
            "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
            "title": "Castle in the Sky",
            "description": "The orphan Sheeta inherited a mysterious crystal that links "
                           "her to the mythical sky-kingdom of Laputa. ",
            "director": "Hayao Miyazaki",
            "producer": "Isao Takahata",
            "release_date": "1986",
            "rt_score": "95",
        }]
        return [Film(info) for info in films]

    def find_people(self):
        people = [{
            "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
            "name": "Pazu",
            "gender": "Male",
            "age": "13",
            "eye_color": "Black",
            "hair_color": "Brown",
            "films": [
                "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
            ]
        },
            {
                "id": "fc196c4f-0201-4ed2-9add-c6403f7c4d32",
                "name": "Baron Humbert von Gikkingen",
                "gender": "Male",
                "age": "NA",
                "eye_color": "Green",
                "hair_color": "Yellow",
                "films": [
                    "https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
                    "https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81"
                ],
            },
        ]
        return [Character(info) for info in people]

    def find_character_by_id(self, character_id):
        if character_id == "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01":
            return Character(
                {
                    "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
                    "name": "Pazu",
                    "gender": "Male",
                    "age": "13",
                    "eye_color": "Black",
                    "hair_color": "Brown",
                    "films": [
                        "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
                    ]
                })
        return None


@pytest.fixture
def movie_service():
    return MovieService(GhibliMockRepo())


def test_find_films(movie_service):
    films = movie_service.find_films()
    assert len(films) > 0
    title = "Castle in the Sky"
    titles = list(map(lambda film: film.title, films))
    assert title in titles


def test_find_film_by_id(movie_service):
    film_id = "2baf70d1-42bb-4437-b551-e5fed5a87abe"
    film = movie_service.find_film_by_id(film_id)
    assert film is not None
    assert film.title == "Castle in the Sky"


def test_find_film_by_id_throw_validation_error_when_given_an_empty_film_id(movie_service):
    with pytest.raises(ValidationError):
        movie_service.find_film_by_id("")


def test_find_film_by_id_throw_validation_error_when_given_none_as_film_id(movie_service):
    with pytest.raises(ValidationError):
        movie_service.find_film_by_id(None)


def test_find_people_appeared_in_film(movie_service):
    film_id = "2baf70d1-42bb-4437-b551-e5fed5a87abe"
    people = movie_service.find_people_by_film(film_id)
    assert len(people) > 0
    names = list(map(lambda character: character.name, people))
    assert "Pazu" in names


def test_find_no_people_appeared_in_film(movie_service):
    film_id = "2baf7021-42bb-4437-b551-e5fed5a87abe"
    people = movie_service.find_people_by_film(film_id)
    assert len(people) == 0


def test_find_all_people(movie_service):
    people = movie_service.find_people()
    assert len(people) > 0
    names = list(map(lambda character: character.name, people))
    assert "Pazu" in names
    assert "Baron Humbert von Gikkingen" in names


def test_find_people_by_film_return_empty_list_when_no_people_found_for_film(movie_service):
    film_id = "dummy_id"
    people = movie_service.find_people_by_film(film_id)
    assert len(people) == 0


def test_find_character_by_id(movie_service):
    character_id = "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01"
    character = movie_service.find_character_by_id(character_id)
    assert character is not None
    assert "Pazu" == character.name


def test_find_character_by_id_throw_validation_error_when_given_an_empty_id(movie_service):
    with pytest.raises(ValidationError):
        movie_service.find_character_by_id("")


def test_find_character_by_id_throw_validation_error_when_given_none(movie_service):
    with pytest.raises(ValidationError):
        movie_service.find_character_by_id(None)
