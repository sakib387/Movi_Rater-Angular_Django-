from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator,MinValueValidator
# Create your models here.
class Movie(models.Model):
    title=models.CharField(max_length=32)
    descripiton=models.TextField(max_length=360)
    def no_of_rating(self):
        rating=Rating.objects.filter(movie=self)
        return len(rating)
    def avg_rating(self):
        rating=Rating.objects.filter(movie=self)
        sum=0
        for value in rating:
            sum+=value.stars
        if(len(rating)>0):
            return sum/len(rating)
        else :
            return 0

class Rating(models.Model):
    movie=models.ForeignKey(Movie,on_delete=models.CASCADE)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    stars=models.IntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])
    class Meta:
        unique_together=(('user','movie'))
        index_together=(('user','movie'))