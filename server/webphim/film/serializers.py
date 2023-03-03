from rest_framework.serializers import ModelSerializer
from .models import Film, Category


class FilmSerializer(ModelSerializer):
    class Meta:
        model = Film
        fields = ['id', 'name', 'created_date', 'category']


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']