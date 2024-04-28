from rest_framework import serializers
from .models import Portfolio


class PortfolioSerializer(serializers.ModelSerializer):
    skills = serializers.SerializerMethodField()

    class Meta:
        model = Portfolio
        fields = '__all__'

    def get_skills(self, obj):
        return [skill.name for skill in obj.skills.all()]
