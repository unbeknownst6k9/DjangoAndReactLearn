#take the model and translate into json response

from rest_framework import serializers
from .models import ROOM


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = ROOM
        fields = ('id', 'code', 'host', 
                  'guest_can_pause', 'votes_to_skip', 'created_at')