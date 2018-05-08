import os
from app.handlers.base_handler import BaseHandler
from app.constants import PUBLIC_ROOT


class HomePageHandler(BaseHandler):

    def get(self):
        self.render(os.path.join(PUBLIC_ROOT, 'index.html'))
