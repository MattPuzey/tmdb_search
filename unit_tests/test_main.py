import os
from mock import MagicMock, patch
import unittest

from tornado.web import StaticFileHandler

from main import make_app
from app.handlers.home_handler import HomePageHandler
from app.handlers.search_handler import SearchHandler


class TestMain(unittest.TestCase):

    @patch('main.TMDBSearcher')
    @patch('main.tornado.web.Application')
    def test__main__make_app__WillInstantiateTMDBSearcher__WhenCalled(self, mock_app, mock_searcher):

        make_app()

        mock_searcher.assert_called_with()

    @patch('main.TMDBSearcher')
    @patch('main.tornado.web.Application')
    def test__main__make_app__WillInjectSearcherIntoTheSearchHandler__WhenCalled(self, mock_app, mock_searcher):

        main_path = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))

        searcher_instance = mock_searcher.return_value
        expected_args = [('/', HomePageHandler),
                         ('/public/(.*)', StaticFileHandler, {'path': main_path + '/static'}),
                         ('/search', SearchHandler, {'searcher': searcher_instance})]

        make_app()

        mock_app.assert_called_with(expected_args)