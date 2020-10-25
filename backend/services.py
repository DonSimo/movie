from exceptions import ValidationError
from spi import MovieRepository


class MovieService:
    def __init__(self, repository: MovieRepository) -> None:
        self.repository = repository

    def find_films(self):
        return self.repository.find_films()

    def find_film_by_id(self, film_id):
        if film_id is None or len(film_id) == 0:
            raise ValidationError("Film id should not be empty")

        return self.repository.find_film_by_id(film_id)

    def find_people_by_film(self, film_id):
        people = self.repository.find_people()
        return list(filter(lambda character: character.appeard_in(film_id), people))

    def find_people(self):
        return self.repository.find_people()
