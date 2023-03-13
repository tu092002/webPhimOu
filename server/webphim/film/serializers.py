from rest_framework.serializers import ModelSerializer
from .models import Film, Category, User


class FilmSerializer(ModelSerializer):
    def get_image(self, film):
        if film.thumbnail:
            request = self.context.get('request')
            return request.build_absolute_uri('/static/%s' % film.thumbnail.name) if request else ''
    class Meta:
        model = Film
        fields = ['id', 'name', 'created_date', 'category', 'thumbnail', 'description', 'srcFilm']


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'username']