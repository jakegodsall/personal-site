from rest_framework import routers

from .views import PortfolioViewSet

router = routers.DefaultRouter()
router.register("", PortfolioViewSet, basename="portfolio")

urlpatterns = router.urls