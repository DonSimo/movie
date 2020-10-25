from json import JSONEncoder

from flask import Flask, jsonify, render_template, url_for, redirect, make_response
from flask_cors import CORS

from exceptions import ApiError
from models import Film, Character
from services import MovieService
from spi import GhibliRepository

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config["CORS_HEADERS"] = "Content-Type"

movie_service = MovieService(GhibliRepository())


class MovieEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Film) or isinstance(obj, Character):
            return obj.__dict__
        return JSONEncoder.default(self, obj)


@app.errorhandler(ApiError)
def handle_api_error(e):
    return {"internal_error": e.message}, 500


@app.route('/api/films', methods=['GET'])
def get_films():
    films = movie_service.find_films()
    return jsonify(films)


@app.route('/api/films/<film_id>', methods=['GET'])
def get_film_by_id(film_id):
    film = movie_service.find_film_by_id(film_id)
    if film is None:
        return make_response(jsonify(f"Film not found with id:  {film_id}"), 404)
    return jsonify(film)


@app.route('/api/films/<film_id>/people', methods=['GET'])
def get_people_by_film(film_id):
    people = movie_service.find_people_by_film(film_id)
    return jsonify(people)


@app.route('/api/people', methods=['GET'])
def get_all_people():
    people = movie_service.find_people()
    return jsonify(people)


@app.route('/api/people/<character_id>', methods=['GET'])
def get_people_by_character_id(character_id):
    character = movie_service.find_character_by_id(character_id)
    if character is None:
        return make_response(jsonify(f"Character not found with id:  {character_id}"), 404)
    return jsonify(character)


@app.route('/')
def redirect_to_home():
    return redirect(url_for('home'))


@app.route('/movies')
def home():
    return render_template("index.html")


app.json_encoder = MovieEncoder

if __name__ == '__main__':
    app.run()
