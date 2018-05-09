from mock import MagicMock, patch
import unittest
from main import make_app


class TestMain(unittest.TestCase):

    def test__main__make_app__WillInjectTMDBSearcherIntoSearchHandler__WhenCalled(self):


        app = make_app()

        self.assertEqual(app, '')
