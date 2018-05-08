import unittest

from mock import patch, MagicMock

from app.api.tmdb import TMDBSearcher


class TestSearch(unittest.TestCase):

    @patch('app.api.tmdb.requests')
    def test__tmdb__TMDBSearch__get_movies__WillReturnAListOfResults__WhenTMDBReturnsMultipleResults(self,
                                                                                       mock_requests):

        mock_respone = MagicMock()
        mock_respone.text = "{\"results\": [{\"title\": \"blade runner\"}]}"
        mock_requests.get.return_value = mock_respone
        expected_results = [{
            'title': 'blade runner'
        }]

        searcher = TMDBSearcher()
        actual_results = searcher.get_movies('blade runner')

        self.assertEqual(expected_results, actual_results)

    @patch('app.api.tmdb.requests')
    def test__tmdb__TMDBSearch__get_movies__WillReturnAnEmptyList__WhenTMDBReturnsZeroMovies(self,
                                                                               mock_requests):
        mock_respone = MagicMock()
        mock_respone.text = "{\"results\": []}"
        mock_requests.get.return_value = mock_respone
        expected_results = []

        searcher = TMDBSearcher()
        actual_results = searcher.get_movies('blade runner')

        self.assertEqual(expected_results, actual_results)
