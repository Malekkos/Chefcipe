from random import choices
from django.db import models
from django.db.models.functions import Now

# Create your models here.

class User(models.Model):
  class GenderTypes(models.TextChoices):
    MALE = "Male"
    FEMALE = "Female"
    OTHER = "Other"
  
  username = models.CharField(max_length=25)
  first_name = models.CharField(max_length=25)
  last_name = models.CharField(max_length=25)
  gender = models.CharField(max_length=9, choices=GenderTypes, default=GenderTypes.MALE)
  date_signed_up = models.DateTimeField(db_default=Now())


class Recipes(models.Model):
  dish_name = models.CharField(max_length=50)
  ingredients = models.CharField(max_length=500)
  steps = models.CharField(max_length=2000, default="None")
  # author = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
  # date_posted = models.DateTimeField(db_default=Now())