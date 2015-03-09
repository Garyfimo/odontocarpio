from django.db import models

# Create your models here.
class Doctor(models.Model):
	nombre = models.CharField(max_length=50)
	especialidad = models.CharField(max_length=50)
	cop = models.CharField(max_length=20)
	universidad = models.CharField(max_length=150)
	cursos = models.CharField(max_length=250)
	url_imagen = models.URLField(null=True,max_length=250)
	def __unicode__(self):
		return self.nombre

class Banner(models.Model):
	url_imagen = models.URLField(null=True,max_length=250)

class Producto(models.Model):
	titulo = models.CharField(max_length=50)
	descripcion = models.TextField(max_length=450)
	url_imagen = models.URLField(null=True,max_length=250)
	def __unicode__(self):
		return self.descripcion

class Servicio(models.Model):
	titulo = models.CharField(max_length=50)
	descripcion = models.TextField(max_length=450)
	url_imagen = models.URLField(null=True,max_length=250)
	def __unicode__(self):
		return self.descripcion