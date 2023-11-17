from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ExpensesViewSet, ExpensesViewSet, ExpensesViewSet, ExpensesViewSet

router = DefaultRouter()
router.register("expenses", ExpensesViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
