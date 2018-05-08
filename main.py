import tornado.ioloop
import tornado.web

from app.constants import PUBLIC_ROOT
from app.handlers.home_handler import HomePageHandler
from app.handlers.search_handler import SearchHandler
from app.api.tmdb import TMDBSearcher


def make_app():
    searcher = TMDBSearcher()

    return tornado.web.Application([
        (r'/', HomePageHandler),
        (r'/public/(.*)', tornado.web.StaticFileHandler, {'path': PUBLIC_ROOT}),
        (r'/search', SearchHandler, {'searcher': searcher})
    ])


if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
