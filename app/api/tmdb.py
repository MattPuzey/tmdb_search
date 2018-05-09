""" This module holds the TMDBSearcher class which extends the MovieSearcher. """
import json
import requests
from app.api.search import MovieSearcher
from config import API_KEY, API_URL
from app.constants import MOVIE_SEARCH_QUERY


class TMDBSearcher(MovieSearcher):
    """ This class is and implementation of MovieSearcher. Additional methods are present on the
    implementation that allow handling of TMDB APIs pagination of result-sets. """

    def get_movies(self, search_string):
        """ This function serves as the core "API" to the wider application and to the test suite. It
        is an implementation of the abstract method from the abstract parent. It is an interface to
        the movie search. """
        data = self.get_page(search_string, 1)
        page_number = data['page']
        total_pages = data['total_pages']
        results = data['results']

        while page_number < total_pages:
            page_number += 1
            data = self.get_page(search_string, page_number)
            page_number = data['page']
            total_pages = data['total_pages']
            results = results + data['results']

        return results

    def get_page(self, search_string, page_number):
        """ This function returns a specified page of a search from a paginated list of results on
        TMDB API. """
        unformatted_url = API_URL + MOVIE_SEARCH_QUERY

        url = unformatted_url.format(
            search_string=search_string,
            api_key=API_KEY,
            page_number=page_number
        )

        response = requests.get(url=url)
        body = json.loads(response.text)

        return body