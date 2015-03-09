from django.shortcuts import render
from .models import Producto, Servicio
# Create your views here.
def home(request):
	lista_productos = Producto.objects.all()
	lista_servicios = Servicio.objects.all()
	context = {
		'productos' : lista_productos,
		'servicios' : lista_servicios,
	}
	return render(request,'odontocarpio/index.html',context)