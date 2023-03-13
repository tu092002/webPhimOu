from rest_framework import viewsets, permissions
from .models import Film, Category, User
from .serializers import FilmSerializer, CategorySerializer, UserSerializer


class FilmViewSet(viewsets.ModelViewSet):
    queryset = Film.objects.filter(active=True)
    serializer_class = FilmSerializer

    def get_queryset(self):
        q = self.queryset

        kw = self.request.query_params.get('kw')
        if kw:
            q = q.filter(subject__icontains=kw)

        cate_id = self.request.query_params.get('category_id')
        if cate_id:
            q = q.filter(category_id=cate_id)
        id = self.request.query_params.get('id')
        if id:
            q = q.filter(id=id)
        return q

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

