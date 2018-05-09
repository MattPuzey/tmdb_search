""" This module holds the handler for the homepage of the application. """
import os
from app.handlers.base_handler import BaseHandler
from app.constants import PUBLIC_ROOT


class HomePageHandler(BaseHandler):
    """ This homepage class is simply responsible for serving the static page the application runs
    on. At present this application is implemented as a SPA on top of this template. """
    def get(self):
        self.render(os.path.join(PUBLIC_ROOT, 'index.html'))
