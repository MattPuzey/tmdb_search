""" This module holds reusable strings and integers for the application. It consolidates changes to
these values. """
import os
ROOT = os.path.join(os.path.dirname(__file__), os.pardir)
PUBLIC_ROOT = os.path.join(ROOT, 'static')

MOVIE_SEARCH_QUERY = '?query="{search_string}"&api_key={api_key}&page={page_number}'