from django.shortcuts import render
from api import models, serializers
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class GameView(ModelViewSet):
    queryset = models.Game.objects.order_by('name')
    serializer_class = serializers.GameSerializer
    filterset_fields = '__all__'
    ordering_fields = '__all__'


# Create your views here.
class PublisherView(ModelViewSet):
    queryset = models.Publisher.objects.order_by('name')
    serializer_class = serializers.PublisherSerializer
    filterset_fields = '__all__'
    ordering_fields = '__all__'


# # Create your views here.
class DeveloperView(ModelViewSet):
    queryset = models.Developer.objects.order_by('name')
    serializer_class = serializers.DeveloperSerializer
    filterset_fields = '__all__'
    ordering_fields = '__all__'
