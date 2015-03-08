from django.db import models

# Create your models here.
class Doctor(models.Model):
	nombre = models.CharField(max_length=50)
	especialidad = models.CharField(max_length=50)
	cop = models.CharField(max_length=20)
	universidad = models.CharField(max_length=50)
	cursos = models.CharField(max_length=50)
	def __unicode__(self):
		return self.nombre

class Banner(models.Model):
	url_imagen = models.URLField(null=True,max_length=250)

class Producto(models.Model):
	descripcion = models.CharField(max_length=50)
	url_imagen = models.URLField(null=True,max_length=250)
	def __unicode__(self):
		return self.descripcion

class Servicio(models.Model):
	descripcion = models.CharField(max_length=50)
	url_imagen = models.URLField(null=True,max_length=250)
	def __unicode__(self):
		return self.descripcion