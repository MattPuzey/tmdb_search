import os
import json
import requests


API_KEY = os.environ.get('API_KEY')
API_URL = 'https://api.themoviedb.org/3/search/movie?query="{search_string}"&api_key={api_key}'


def movie(search_string):

    url = API_URL.format(
        search_string=search_string,
        api_key=API_KEY
    )

    response = requests.get(url=url)
    body = json.loads(response.text)

    return body['results']
