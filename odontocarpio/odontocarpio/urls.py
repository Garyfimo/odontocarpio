from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'citas.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    #url(r'^a/$', 'citas.views.send_mail', name='send_mail'),
    url(r'^admin/', include(admin.site.urls)),
)
