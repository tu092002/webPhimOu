from rest_framework import viewsets, permissions
from .models import Film, Category
from .serializers import FilmSerializer, CategorySerializer


class FilmViewSet(viewsets.ModelViewSet):
    queryset = Film.objects.filter(active=True)
    serializer_class = FilmSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer