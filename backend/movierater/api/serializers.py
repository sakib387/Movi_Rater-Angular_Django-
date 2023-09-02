from rest_framework import serializers

from . models import Movie,Rating

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model=Movie
        fields=('id','title','descripiton','no_of_rating','avg_rating')

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model=Rating
        fields=('id','stars','user','movie')