from flask_testing import TestCase

from app import app


class HomeAppTest(TestCase):
    def create_app(self):
        app.config['TESTING'] = True
        return app

    def test_movie_home_page_called_with_context_path_movies(self):
        self.client.get('/movies')
        self.assert_template_used('index.html')

    def test_movie_home_page_called_without_context_path_should_redirect_to_movies_page(self):
        resp = self.client.get('/')
        self.assertRedirects(response=resp, location='/movies')
