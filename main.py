import tornado.ioloop
import tornado.web
from api import search, handler


class MainHandler(handler.BaseHandler):

    def get(self):
        results = search.movie('blade runner 2049')
        print(results)
        response = {'results': results}
        self.write(response)


def make_app():
    return tornado.web.Application([
        (r'/', MainHandler),
    ])


if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
