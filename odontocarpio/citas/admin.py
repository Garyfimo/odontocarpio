from django.contrib import admin
from .models import Doctor, Servicio, Producto, Banner
# Register your models here.

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
	pass

@admin.register(Servicio)
class ServicioAdmin(admin.ModelAdmin):
	pass

@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
	pass

@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
	pass
