from rest_framework import serializers

from . models import *

class RecipeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Recipes
    fields = ["dish_name", "ingredients", "steps"]

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ["username", "first_name", "last_name", "gender", "date_signed_up"]