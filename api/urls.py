from django.urls import path, include
from rest_framework import routers
from api import views


router = routers.DefaultRouter()
router.register(r'game', views.GameView)
router.register(r'developer', views.DeveloperView)
router.register(r'publisher', views.PublisherView)
router.register(r'genre', views.GenreView)
router.register(r'genretogame', views.GenreToGameView)

urlpatterns = [
    path('', include(router.urls)),
]
