import json
import requests
from app.api.search import MovieSearcher
from config import API_KEY, API_URL
from app.constants import MOVIE_SEARCH_QUERY


class TMDBSearcher(MovieSearcher):

    def get_movies(self, search_string):

        unformatted_url = API_URL + MOVIE_SEARCH_QUERY

        url = unformatted_url.format(
            search_string=search_string,
            api_key=API_KEY
        )

        response = requests.get(url=url)
        body = json.loads(response.text)

        return body['results']
