import tornado.ioloop
import tornado.web
from api import search


class MainHandler(tornado.web.RequestHandler):

    def get(self):
        results = search.movie('blade runner 2049')
        print(results)
        response = {'results': results}
        self.write(response)

    def set_default_headers(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Credentials', True)
        self.set_header('Access-Control-Allow-Methods', 'GET, OPTIONS')


def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ])


if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
