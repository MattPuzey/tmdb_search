import unittest

from mock import patch, MagicMock

from app.api.tmdb import TMDBSearcher


class TestSearch(unittest.TestCase):

    @patch('app.api.tmdb.requests')
    def test__tmdb__TMDBSearch__get_movies__WillReturnAListOfResults__WhenTMDBReturnsMultipleResults(self,
                                                                                       mock_requests):

        mock_response = MagicMock()
        mock_response.text = "{\"results\": [{\"title\": \"blade runner\"}], \"page\": 1, \"total_pages\": 1}"
        mock_requests.get.return_value = mock_response
        expected_results = [{
            'title': 'blade runner'
        }]

        searcher = TMDBSearcher()
        actual_results = searcher.get_movies('blade runner')

        self.assertEqual(expected_results, actual_results)

    @patch('app.api.tmdb.requests')
    def test__tmdb__TMDBSearch__get_movies__WillReturnAnEmptyList__WhenTMDBReturnsZeroMovies(self,
                                                                               mock_requests):
        mock_response = MagicMock()
        mock_response.text = "{\"results\": [], \"page\": 1, \"total_pages\": 1}"
        mock_requests.get.return_value = mock_response
        expected_results = []

        searcher = TMDBSearcher()
        actual_results = searcher.get_movies('blade runner')

        self.assertEqual(expected_results, actual_results)


    @patch('app.api.tmdb.requests')
    def test__tmdb__TMDBSearch__get_movies__WillReturnThreePagesOfResults__WhenTMDBReturnsThreePages(
            self,
            mock_requests):
        first_response = MagicMock()
        first_response.text = "{\"results\": [{\"title\": \"blade runner\"}], \"page\": 1, \"total_pages\": 3}"
        second_response = MagicMock()
        second_response.text = "{\"results\": [{\"title\": \"blade runner 2049\"}], \"page\": 2, \"total_pages\": 3}"
        third_response = MagicMock()
        third_response.text = "{\"results\": [{\"title\": \"blade runner extended\"}], \"page\": 3, \"total_pages\": 3}"


        mock_requests.get.side_effect = [first_response, second_response, third_response]
        expected_results = [
            {
                'title': 'blade runner'
            },
            {
                'title': 'blade runner 2049'
            },
            {
                'title': 'blade runner extended'
            }
        ]

        searcher = TMDBSearcher()
        actual_results = searcher.get_movies('blade runner')

        self.assertEqual(expected_results, actual_results)
