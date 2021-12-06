from api import models
from rest_framework import serializers

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Game
        fields = '__all__'

class DeveloperSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Developer
        fields = '__all__'


class PublisherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Publisher
        fields = '__all__'

class GenreToGameSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.GenreToGame
        fields = '__all__'

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Genre
        fields = '__all__'