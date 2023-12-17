from django.urls import path
from .views import CategoryViewSet, ProductViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('products', ProductViewSet, basename='products')  # Corregir aquí
router.register('categories', CategoryViewSet, basename='categories')  # Corregir aquí

urlpatterns = router.urls