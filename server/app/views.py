from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response

from . models import *
from . serializer import *

# Create your views here.

class RecipesView(APIView):
  def get(self, request):
    output = [{
      "dish_name": output.dish_name,
      "ingredients": output.ingredients,
      # "date_posted": output.date_posted
      } for output in Recipes.objects.all()]
    return Response(output)
  
  def post(self, request):
    serializer = RecipeSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
      serializer.save()
      return Response(serializer.data)