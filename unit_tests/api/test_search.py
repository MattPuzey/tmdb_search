import unittest

from mock import patch, MagicMock

from app.api import search


class TestSearch(unittest.TestCase):

    @patch('app.api.search.requests')
    def test__search__movie___WillReturnAListOfResults__WhenTMDBReturnsMultipleResults(self,
                                                                                       mock_requests):

        mock_respone = MagicMock()
        mock_respone.text = "{\"results\": [{\"title\": \"blade runner\"}]}"
        mock_requests.get.return_value = mock_respone
        expected_results = [{
            'title': 'blade runner'
        }]

        actual_results = search.movie('blade runner')

        self.assertEqual(expected_results, actual_results)

    @patch('app.api.search.requests')
    def test__search__movie___WillReturnAnEmptyList__WhenTMDBReturnsZeroMovies(self,
                                                                               mock_requests):
        mock_respone = MagicMock()
        mock_respone.text = "{\"results\": []}"
        mock_requests.get.return_value = mock_respone
        expected_results = []

        actual_results = search.movie('blade runner')

        self.assertEqual(expected_results, actual_results)
