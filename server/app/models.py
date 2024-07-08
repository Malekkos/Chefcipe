from django.db import models

# Create your models here.


class Recipes(models.Model):
  dish_name = models.CharField(max_length=50)
  ingredients = models.CharField(max_length=500)
  # author = models.ForeignKey()
  # date_posted = models.DateTimeField(_(""), auto_now=False, auto_now_add=False)