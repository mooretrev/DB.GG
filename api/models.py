from django.db import models

from django.db.models.fields import TextField

# Create your models here.
class ModelBase(models.Model):
    '''
    Contains fields that all models should have
    '''
    class Meta:
        abstract = True
    id = models.AutoField(primary_key=True)

class Developer(ModelBase):
    name = models.TextField(default='')

class Publisher(ModelBase):
    name = models.TextField(default='')

class Game(ModelBase):
    id = models.AutoField(primary_key=1)
    name = models.TextField(default='')
    description = models.TextField(default='')
    coverart = models.TextField(default='')
    copies_sold = models.IntegerField(default=-1)
    date_released = models.TextField(default='')
    publisher = models.ForeignKey(
        Publisher,
        default=None,
        blank=True,
        null=True,
        on_delete=models.SET_NULL)
    developer = models.ForeignKey(
        Developer,
        default=None,
        blank=True,
        null=True,
        on_delete=models.SET_NULL)

class Genre(ModelBase):
    name = TextField(default='')


class GenreToGame(ModelBase): 
    game = models.ForeignKey(
        Game,
        default=None,
        blank=True,
        null=True,
        on_delete=models.SET_NULL)
    genre = models.ForeignKey(
        Genre,
        default=None,
        blank=True,
        null=True,
        on_delete=models.SET_NULL)

