from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import MovieViewset, RatingViewset,UserViewset

router = routers.DefaultRouter()

router.register('movie', MovieViewset)
router.register('rating', RatingViewset)
router.register('user',UserViewset)

urlpatterns = [
    path('', include(router.urls)),
]
