import abc

import requests
import requests_cache

from exceptions import ApiError
from models import Film, Character


class MovieRepository(abc.ABC):
    @abc.abstractmethod
    def find_films(self):
        pass

    @abc.abstractmethod
    def find_film_by_id(self, film_id):
        pass

    @abc.abstractmethod
    def find_people(self):
        pass

    @abc.abstractmethod
    def find_character_by_id(self, character_id):
        pass


class GhibliRepository(MovieRepository):
    BASE_URL = "https://ghibliapi.herokuapp.com"

    def __init__(self) -> None:
        requests_cache.install_cache(cache_name="ghibli_cache", backend="sqlite", expire_after=60)

    def _uri(self, path):
        return f"{self.BASE_URL}/{path}"

    def find(self, path):
        full_uri = self._uri(path)
        try:
            resp = requests.get(full_uri)
            if resp.status_code == 200:
                return resp.json()
            else:
                return None
        except ConnectionError:
            raise ApiError(f"Failed to connect to {full_uri}")

    def find_films(self):
        json_result = self.find("films")
        return [Film(film_info) for film_info in json_result]

    def find_film_by_id(self, film_id):
        json_result = self.find(f"films/{film_id}")
        if json_result is None:
            return None
        return Film(json_result)

    def find_people(self):
        json_result = self.find("people")
        return [Character(character_info) for character_info in json_result]

    def find_character_by_id(self, character_id):
        json_result = self.find(f"people/{character_id}")
        if json_result is None:
            return None
        return Character(json_result)
