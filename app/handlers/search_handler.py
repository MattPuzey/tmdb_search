""" This module contains """
from app.handlers.base_handler import BaseHandler


class SearchHandler(BaseHandler):
    """ This class is a tornado handler in charge of performing movie searches based off query
    parameters on the inbound request. The API should be injected into the constructor. The API
    must implement MovieSearcher."""

    def initialize(self, searcher):
        self.searcher = searcher

    def get(self):
        search_text = parse_query(self.request)
        results = self.searcher.get_movies(search_text)
        self.write({'results': results})

    def post(self):
        pass


def parse_query(request):
    query_string = request.arguments
    search_text = query_string.get('text')[0].decode('utf-8')
    return search_text
