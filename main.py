""" This is the main module for the application. It is in charge of creating and configuring the
tornado web server app. """
import tornado.ioloop
import tornado.web

from app.constants import PUBLIC_ROOT
from app.handlers.home_handler import HomePageHandler
from app.handlers.search_handler import SearchHandler
from app.api.tmdb import TMDBSearcher


def make_app():
    """ This function returns an Application instance which holds the request handlers for the app.
    """
    searcher = TMDBSearcher()

    return tornado.web.Application([
        (r'/', HomePageHandler),
        (r'/public/(.*)', tornado.web.StaticFileHandler, {'path': PUBLIC_ROOT}),
        (r'/search', SearchHandler, {'searcher': searcher})
    ])


if __name__ == '__main__':
    """ This function is the entry point for the application. """
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
