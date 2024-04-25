from django.urls import path
from rest_framework import routers

from backend.personal_site.blog.views import PostViewSet

router = routers.DefaultRouter()
router.register('posts', PostViewSet.as_view(), basename='posts')