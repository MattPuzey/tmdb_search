from mock import MagicMock
import unittest

from app.handlers.search_handler import parse_query


class TestSearchHandler(unittest.TestCase):

    def test__search_handler__parse_query__WillReturnTheTextArgument__WhenPassedAnInstanceOfATornadoRequest(self):

        mock_request = MagicMock()
        mock_request.arguments = {'text': [b'some text']}
        text = parse_query(mock_request)

        self.assertEqual(text, 'some text')
