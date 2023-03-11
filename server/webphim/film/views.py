from rest_framework import viewsets, permissions
from .models import Film, Category
from .serializers import FilmSerializer, CategorySerializer


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
        return q

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

