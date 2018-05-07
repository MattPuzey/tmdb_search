import os
import tornado.ioloop
import tornado.web
from api import search, handler

public_root = os.path.join(os.path.dirname(__file__), 'static')


class SearchHandler(handler.BaseHandler):

    def get(self):
        results = search.movie('blade runner 2049')
        print(results)
        response = {'results': results}
        self.write(response)


class HomepageHandler(handler.BaseHandler):

    def get(self):
        self.render(os.path.join(public_root, 'index.html'))


def make_app():
    return tornado.web.Application([
        (r'/', HomepageHandler),
        (r'/public/(.*)', tornado.web.StaticFileHandler, {'path': public_root}),
        (r'/search', SearchHandler)
    ])


if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
