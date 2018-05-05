import tornado.ioloop
import tornado.web
from api import search


class MainHandler(tornado.web.RequestHandler):

    def get(self):
        results = search.movie('blade runner')
        print(results)
        response = {'results': results}
        self.write(response)


def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ])


if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
