from django.shortcuts import render
from rest_framework import generics
from .models import ROOM
from .serializers import RoomSerializer

# Create your views here.
#the inheritant CreateAPIView allows you to view and create the room
class RoomView(generics.ListAPIView):
    queryset = ROOM.objects.all()
    serializer_class = RoomSerializer
