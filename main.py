import os
import tornado.ioloop
import tornado.web
from api import search, handler

public_root = os.path.join(os.path.dirname(__file__), 'static')


class SearchHandler(handler.BaseHandler):

    def get(self):
        query_string = self.request.arguments
        search_text = query_string.get('text')[0].decode('utf-8')
        results = search.movie(search_text)
        print(results)
        self.write({'results': results})


class HomePageHandler(handler.BaseHandler):

    def get(self):
        self.render(os.path.join(public_root, 'index.html'))


def make_app():
    return tornado.web.Application([
        (r'/', HomePageHandler),
        (r'/public/(.*)', tornado.web.StaticFileHandler, {'path': public_root}),
        (r'/search', SearchHandler)
    ])


if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
