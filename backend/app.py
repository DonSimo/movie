from json import JSONEncoder

from flask import Flask, jsonify, request, make_response
from flask_cors import CORS

from exceptions import ApiError
from models import Film, Character
from services import MovieService
from spi import GhibliRepository

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

movie_service = MovieService(GhibliRepository())


class MovieEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Film) or isinstance(obj, Character):
            return obj.__dict__
        return JSONEncoder.default(self, obj)


@app.errorhandler(ApiError)
def handle_api_error(e):
    return {"internal_error": e.message}, 500


@app.route('/movies/api/films', methods=['GET'])
def get_films():
    films = movie_service.find_films()
    return jsonify(films)


@app.route('/movies/api/people', methods=['GET'])
def get_people_by_film():
    film_id = request.args.get("film_id")
    if film_id is None or len(film_id) == 0:
        return make_response(jsonify({"error": "film_id parameter should not be empty"}), 400)

    people = movie_service.find_people_by_film(film_id)

    return jsonify(people)


app.json_encoder = MovieEncoder

if __name__ == '__main__':
    app.run()
