from rest_framework import serializers
from django.contrib.auth.models import User
from . models import Movie,Rating


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('id','username','password')
        extra_kwargs={'password':{'write_only':True,'required':True}}

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model=Movie
        fields=('id','title','descripiton','no_of_rating','avg_rating')

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model=Rating
        fields=('id','stars','user','movie')