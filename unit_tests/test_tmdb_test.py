import unittest
from mock import patch
from src.api import tmdb


class TestTheMovieDatabase(unittest.TestCase):

    @patch('src.api.tmdb.requests')
    def test__tmdb__search_movie___WillReturnAListOfResults__WhenTMDBReturnsMultipleResults(self,
                                                                                            mock_requests):

        mock_requests.get.return_value = {
            'results': [{
                'title': 'bladerunner'
            }]
        }
        expected_results = [{
            'title': 'bladerunner'
        }]

        actual_results = tmdb.search_movie('bladerunner')

        self.assertEqual(expected_results, actual_results)

    @patch('src.api.tmdb.requests')
    def test__tmdb__search_movie___WillReturnAnEmptyList__WhenTMDBReturnsZeroMovies(self,
                                                                                    mock_requests):
        mock_requests.get.return_value = {
            'results': []
        }
        expected_results = []

        actual_results = tmdb.search_movie('bladerunner')

        self.assertEqual(expected_results, actual_results)
