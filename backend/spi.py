import abc

import requests

from exceptions import ApiError
from models import Film, Character


class MovieRepository(abc.ABC):
    @abc.abstractmethod
    def find_films(self):
        pass

    @abc.abstractmethod
    def find_people(self):
        pass


class GhibliRepository(MovieRepository):
    BASE_URL = "https://ghibliapi.herokuapp.com"

    def _uri(self, path):
        return f"{self.BASE_URL}/{path}"

    def find(self, path):
        full_uri = self._uri(path)
        try:
            resp = requests.get(full_uri)
            if resp.ok:
                return resp.json()
        except ConnectionError:
            raise ApiError(f"Failed to connect to {full_uri}")

    def find_films(self):
        json_result = self.find("films")
        return [Film(film_info) for film_info in json_result]

    def find_people(self):
        json_result = self.find("people")
        return [Character(character_info) for character_info in json_result]
