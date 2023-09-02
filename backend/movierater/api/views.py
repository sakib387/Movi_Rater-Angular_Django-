from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth.models import User
from rest_framework import viewsets,status
from . models import Movie,Rating
from .serializers import MovieSerializer,RatingSerializer
from rest_framework.authentication import TokenAuthentication
# Create your views here.

class MovieViewset(viewsets.ModelViewSet):
    queryset=Movie.objects.all()
    serializer_class=MovieSerializer
    authentication_classes=(TokenAuthentication,)
    @action(detail=True,methods=['POST'])
    def rate_movie(self,request,pk=None):
        print(request.data)
        if 'stars' in request.data:
            movie=Movie.objects.get(id=pk)
            user=request.user
            #user=User.objects.get(id=1)
            print(user)
            stars=request.data['stars']
            try:
                rating=Rating.objects.get(user=user.id,movie=movie.id)
                rating.stars=stars
                rating.save()
                serializer=RatingSerializer(rating,many=False)
                response={'message':'Rating updated','result':serializer.data}
                return Response(response,status=status.HTTP_200_OK)
                
            except:
                rating= Rating.objects.create(user=user,movie=movie,stars=stars)
                serializer=RatingSerializer(rating,many=False)
                response={'message':'Rating created','result':serializer.data}
                return Response(response,status=status.HTTP_200_OK)
        else:
            response={'message':'No stars found'}
            return Response(response,status=status.HTTP_400_BAD_REQUEST)

class RatingViewset(viewsets.ModelViewSet):
    queryset=Rating.objects.all()
    serializer_class=RatingSerializer
    authentication_classes=(TokenAuthentication,)
