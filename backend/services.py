from spi import MovieRepository


class MovieService:
    def __init__(self, repository: MovieRepository) -> None:
        self.repository = repository

    def find_films(self):
        return self.repository.find_films()

    def find_people_by_film(self, film_id):
        people = self.repository.find_people()
        return list(filter(lambda character: character.appeard_in(film_id), people))