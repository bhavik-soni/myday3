from django.views.generic.base import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin


class IndexView(LoginRequiredMixin, TemplateView):
    template_name = 'journal/index.html'
    login_url = "login"

    def get_context_data(self):
        return

