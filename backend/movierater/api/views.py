from django.shortcuts import render
from rest_framework import viewsets
from . models import Movie,Rating
from .serializers import MovieSerializer,RatingSerializer
# Create your views here.

class MovieViewset(viewsets.ModelViewSet):
    queryset=Movie.objects.all()
    serializer_class=MovieSerializer

class RatingViewset(viewsets.ModelViewSet):
    queryset=Rating.objects.all()
    serializer_class=RatingSerializer
