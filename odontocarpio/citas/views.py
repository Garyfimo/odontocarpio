from django.shortcuts import render
from django.conf import settings
from .models import Producto, Servicio, Doctor, Banner
from django.core.mail import send_mail
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
