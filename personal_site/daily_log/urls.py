from rest_framework import routers

from .views import SkillViewSet, DailyEntryViewSet, ProjectViewSet

router = routers.DefaultRouter()
router.register(r'skills', SkillViewSet, basename='skills')
router.register(r'daily-entries', DailyEntryViewSet, basename='daily-entry')
router.register(r'projects', ProjectViewSet, basename='projects')

urlpatterns = router.urls
