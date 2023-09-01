from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets,status
from . models import Movie,Rating
from .serializers import MovieSerializer,RatingSerializer
# Create your views here.

class MovieViewset(viewsets.ModelViewSet):
    queryset=Movie.objects.all()
    serializer_class=MovieSerializer
    @action(detail=True,methods=['POST'])
    def rate_movie(self,request,pk=None):
        response={'message':'its working now'}
        return Response(response,status=status.HTTP_200_OK)

class RatingViewset(viewsets.ModelViewSet):
    queryset=Rating.objects.all()
    serializer_class=RatingSerializer
