""" This module contains an abstraction to the Movie search."""
from abc import ABC, abstractmethod


class MovieSearcher(ABC):

    @abstractmethod
    def get_movies(self, search_string):
        pass
