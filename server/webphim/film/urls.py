from django.urls import path, include
from . import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register('film', views.FilmViewSet)
router.register('category', views.CategoryViewSet)

urlpatterns = [
    path('', include(router.urls))
]