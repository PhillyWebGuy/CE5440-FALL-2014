(function ( $ ) {
   $.fn.toggleMenu = function( options ) {
       
       var settings = $.extend({
           // These are the defaults.
           hoverOn: "hoverOnMenu",
           overOff: "hoverOffMenu"
       }, options );
       
       this.each(function(index, value) {
                $(this).find("li").mouseover(function() {
                    $(this).toggleClass(settings.hoverOn, true);
                    $(this).toggleClass(settings.hoverOff, false);
                });
                $(this).find("li").mouseout(function() {
                    $(this).toggleClass(settings.hoverOn, false);
                    $(this).toggleClass(settings.hoverOff, true);
                });
            });
       
       
       
       
   };
}( jQuery ));
