import unittest

from mock import patch, MagicMock

from app.handlers.search_handler import SearchHandler
from app.api.tmdb import TMDBSearcher


class TestSearchHandler(unittest.TestCase):

    def test__search_handler__SearchHandler____init____WillHoldOntoReferenceToSearcher__WhenInstantiatedWithSearcher(self):



        searcher = TMDBSearcher()
        request = MagicMock()
        handler = SearchHandler(request, searcher)


        self.assertEqual(searcher, handler.searcher)
