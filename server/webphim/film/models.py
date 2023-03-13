from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name
    

class Film(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(max_length=255)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)
    thumbnail = models.ImageField(upload_to='static/%y/%m/', null=True)
    srcFilm = models.TextField(max_length=500)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    def __str__(self):
        return self.name


class User(models.Model):
    name = models.CharField(max_length=100, unique=True)
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100, unique=True)
    def __str__(self):
        return self.name
