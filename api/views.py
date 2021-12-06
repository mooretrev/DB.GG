from django.shortcuts import render
from api import models, serializers
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class GameView(ModelViewSet):
    queryset = models.Game.objects.order_by('name')
    serializer_class = serializers.GameSerializer
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    search_fields = ['name']


class PublisherView(ModelViewSet):
    queryset = models.Publisher.objects.order_by('name')
    serializer_class = serializers.PublisherSerializer
    filterset_fields = '__all__'
    ordering_fields = '__all__'


class DeveloperView(ModelViewSet):
    queryset = models.Developer.objects.order_by('name')
    serializer_class = serializers.DeveloperSerializer
    filterset_fields = '__all__'
    ordering_fields = '__all__'

class GenreView(ModelViewSet):
    queryset = models.Genre.objects.order_by('name')
    serializer_class = serializers.GenreSerializer
    filterset_fields = '__all__'
    ordering_fields = '__all__'

class GenreToGameView(ModelViewSet):
    queryset = models.GenreToGame.objects.order_by('pk')
    serializer_class = serializers.GenreToGameSerializer
    filterset_fields = '__all__'
    ordering_fields = '__all__'
