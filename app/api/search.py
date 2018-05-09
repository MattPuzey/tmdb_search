""" This module contains an abstraction to the Movie search. """
from abc import ABC, abstractmethod


class MovieSearcher(ABC):
    """ This class is and abstraction for searching movies. This abstract base class can be used as
     an interface to any backend that can return movies based on search strings. The wider
     application is able to work against this interface in order to invert the flow of control and
     decouple clients to API such as TMDB from TMDB. This provides extensibility and scope to swap
     the implementation of the search out for alternative backends (for Rotten Tomatoes API for
     example)."""

    @abstractmethod
    def get_movies(self, search_string):
        pass
