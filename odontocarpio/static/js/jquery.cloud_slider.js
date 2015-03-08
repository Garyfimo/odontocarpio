/*PLUGIN PARA CREAR EL SLIDER */
/*PLUGIN CREADO POR MIGUEL CUADROS GÁLVEZ - TODOS LOS DERECHOS RESERVADOS */


(function($) {
    $.fn.extend({
        cloudSlider: function(optns) {
            var own = this;
            var options = {
                total: $(own).find("> li").length,
                active: $(own).find("> li").length + 1,
                tofadeout: 0,
                duration: 5000,
                width: "800px",
                height: "600px",
                backgroundmode: false,
                controls: false,
                idsliderplay: null,
                autoplay: true,
                gallerymode: false,
                titlegallery: "Galería de Fotos",
                relativemode:false,
                outercontrols:false
            };
            $.extend(options, optns);

            function slide() {
                options.tofadeout = options.active;
                if (options.active >= options.total) { //esta validacion sirve para que sea ciclica y se llame al primer slide si alcanzo el limite de slides
                    options.active = 0;
                }
                else if (options.active < 1) {
                    options.active = options.total;
                }
                if(options.relativemode){
                    $(own).find("> li:nth-child(" + options.tofadeout + ")").css({"position":"absolute"});
                }
                $(own).find("> li:nth-child(" + options.tofadeout + ")").fadeOut(); //oculto todos los slides
                options.active++; //esto hace que cuando se vuelva a llamar, cambie el numero del slide para pasar al siguiente
                if(options.relativemode){
                     $(own).find("> li:nth-child(" + options.active + ")").css({"position":"relative"});
                }
                $(own).find("> li:nth-child(" + options.active + ")").fadeIn(); // y solo muestro el que esta active

            }
            function next() {
                clearInterval(options.idsliderplay);
                slide();
            }
            function prev() {
                clearInterval(options.idsliderplay);
                options.tofadeout = options.active;
                if (options.active > options.total) { //esta validacion sirve para que sea ciclica y se llame al primer slide si alcanzo el limite de slides
                    options.active = 1;
                }
                else if (options.active <= 1) {
                    options.active = options.total + 1;
                }
                if(options.relativemode){
                    $(own).find("> li:nth-child(" + options.tofadeout + ")").css({"position":"absolute"});
                }
                $(own).find("> li:nth-child(" + options.tofadeout + ")").fadeOut(); //oculto todos los slides
                options.active--; //esto hace que cuando se vuelva a llamar, cambie el numero del slide para pasar al siguiente
                if(options.relativemode){
                     $(own).find("> li:nth-child(" + options.active + ")").css({"position":"relative"});
                }
                $(own).find("> li:nth-child(" + options.active + ")").fadeIn(); // y solo muestro el que esta active


            }
            function goto(event) {
                clearInterval(options.idsliderplay);
                options.tofadeout = options.active;
                $(own).find("> li:nth-child(" + options.tofadeout + ")").fadeOut(); //oculto todos los slides
                options.active = event.data.number;
                $(own).find("> li:nth-child(" + event.data.number + ")").fadeIn(); // y solo muestro el que esta active
            }

            if (options.gallerymode) {
                $(own).css({"width": "calc(" + options.width + " * 0.7)", "height": options.height, "float": "right"});
                var aside_bar = "<aside class='cloudSlider_aside'><h3>" + options.titlegallery + "</h3>";
                $(own).find("> li").each(function() {
                    aside_bar += "<img src='" + $(this).find("> img").attr("src") + "' alt='' />";
                });
                aside_bar += "</aside>";
                $(own).before(aside_bar);
                for (var k = 1; k <= $(".cloudSlider_aside").children().length; k++) {
                    $(".cloudSlider_aside").find("> img:nth-child(" + k + ")").click({number: (k - 1)}, goto);
                }
                $(".cloudSlider_aside").css({"width": "calc(" + options.width + " * 0.3)"});
            }
            else {
                $(own).css({"width": options.width, "height": options.height});
            }

            if (options.backgroundmode) {
                for (var i = 1; i <= options.total; i++) {
                    $(own).find("> li:nth-child(" + i + ") > img").css({"opacity": "0"});
                    $(own).find("> li:nth-child(" + i + ")").css({"background-image": "url(" + $(own).find("> li:nth-child(" + i + ") > img").attr("src") + ")", "background-position": "center", "background-size": "cover", "background-repeat": "no-repeat"});
                }
            }

            if (options.controls) {
                var controls = "<ol class='controls' id='prev'>&larr;</ol> <ol class='controls' id='next'>&rarr;</ol>";
                $(own).append(controls);
                $(own).find("> #next").click(next);
                $(own).find("> #prev").click(prev);

            }
            if (options.relativemode){
                $(own).css({"position":"relative"});
                $(own).find("> li").css({"position":"relative"});
            }
            if (options.outercontrols){
               $(own).find("> #next").css({"right":"-50px","border-radius":"50px"});
               $(own).find("> #prev").css({"left":"-50px","border-radius":"50px"});
            }

            $(own).find("> li").fadeOut(); //oculto todos los slides
            slide();
            if (options.autoplay) {
                options.idsliderplay = setInterval(slide, options.duration); //llamo a slide cuando este listo el documento
            }

        }
    });
})(jQuery);

