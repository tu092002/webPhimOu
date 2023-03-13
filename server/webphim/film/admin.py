from django.contrib import admin
from .models import Category, Film, User

# Register your models here.
admin.site.register(User)
admin.site.register(Category)
admin.site.register(Film)