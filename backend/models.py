class Film:
    def __init__(self, info):
        self.id = info["id"]
        self.title = info["title"]
        self.director = info["director"]
        self.description = info["description"]
        self.producer = info["producer"]
        self.release_date = info["release_date"]
        self.rt_score = info["rt_score"]

    def __eq__(self, other):
        return isinstance(other, Film) and self.id == other.id


class Character:
    def __init__(self, info):
        self.id = info["id"]
        self.name = info["name"]
        self.gender = info["gender"]
        self.eye_color = info["eye_color"]
        self.hair_color = info["hair_color"]
        self.age = info["age"]
        self.films = info["films"]

    def __eq__(self, other):
        return isinstance(other, Character) and self.id == other.id

    def appeard_in(self, film_id):
        filtered_people = list(filter(lambda film: film.endswith(film_id), self.films))
        return len(filtered_people) > 0
