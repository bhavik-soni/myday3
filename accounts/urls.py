from django.urls import path
from .views import my_login, my_logout, my_signup, get_data

app_name = 'accounts'

urlpatterns = [
    path("login/", my_login, name="login"),
    path("logout/", my_logout, name="logout"),
    path("signup/", my_signup, name="signup"),
    path("api/", get_data, name="get_data"),
]