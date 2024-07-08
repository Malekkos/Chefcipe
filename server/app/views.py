from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response

from . models import *
from . serializer import *

# Create your views here.
    
class UserView(APIView):
  def get(self, request):
    output = [{
      "username": output.username,
      "first_name": output.first_name,
      "last_name": output.last_name,
      "gender": output.gender,
      "date_signed_up": output.date_signed_up
      } for output in User.objects.all()]
    return Response(output)

class RecipesView(APIView):
  def get(self, request):
    output = [{
      "dish_name": output.dish_name,
      "ingredients": output.ingredients,
      # "author": output.author,
      "date_posted": output.date_posted
      } for output in Recipes.objects.all()]
    return Response(output)
  
  def post(self, request):
    serializer = RecipeSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
      serializer.save()
      return Response(serializer.data)