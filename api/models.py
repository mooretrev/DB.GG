from django.db import models
from django.contrib.auth.models import User
from datetime import datetime


class ModelBase(models.Model):
    '''
    Contains fields that all models should have
    '''
    class Meta:
        abstract = True
    id = models.AutoField(primary_key=True)

    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)


class CreatorBase(ModelBase):
    '''
    Base class for Developer and Publisher

    Both models (Developer and Publisher) have the same exact fields
    '''
    class Meta:
        abstract = True

    name = models.TextField(default='')
    website = models.TextField(default='')


class Developer(CreatorBase):
    pass


class Publisher(CreatorBase):
    pass


class Tag(ModelBase):
    tag = models.TextField()


class Game(ModelBase):
    name = models.TextField(default='')
    description = models.TextField(default='')
    coverart = models.TextField(default='')
    copies_sold = models.IntegerField(default=-1)
    date_released = models.DateField(default=datetime.now)
    best_seller = models.BooleanField(default=False)
    hot_list = models.BooleanField(default=False)
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


class GameTag(ModelBase):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)


class Played(ModelBase):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)


class ReviewBase(ModelBase):
    '''
    Base model for all review models
    '''
    class Meta:
        abstract = True

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()
    title = models.TextField()
    description = models.TextField()


class GameReview(ReviewBase):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)


class PublisherReview(ReviewBase):
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)


class DeveloperReview(ReviewBase):
    developer = models.ForeignKey(Developer, on_delete=models.CASCADE)
