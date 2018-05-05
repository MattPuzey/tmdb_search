import os
import json
import requests


api_key = os.environ.get('API_KEY')


def search_movie(search_string):
    print(api_key)
