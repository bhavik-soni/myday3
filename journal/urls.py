from django.urls import path
from . import views
# from .views import IndexView, entry_view
from .views import entry_view

urlpatterns = [
    # path('', views.IndexView.as_view(), name='index'),
    path('', views.IndexView.as_view(), name='index'),
    path('api/entry/', entry_view, name='entry'),
    path('api/entry/<int:entry_pk>/', entry_view, name='entry-detail'),
    path('api/entry/author/<int:author_id>/', entry_view, name='entry-author'),
]
