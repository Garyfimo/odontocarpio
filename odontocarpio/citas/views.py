from django.shortcuts import render
from .models import Producto, Servicio, Doctor, Banner
# Create your views here.
def home(request):
	lista_productos = Producto.objects.all()
	lista_servicios = Servicio.objects.all()
	lista_doctores = Doctor.objects.all()
	lista_banners = Banner.objects.all()
	context = {
		'productos' : lista_productos,
		'servicios' : lista_servicios,
		'doctores' : lista_doctores,
		'banners' : lista_banners,
	}
	return render(request,'odontocarpio/index.html',context)