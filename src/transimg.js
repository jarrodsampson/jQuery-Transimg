/**
 * transimg.js v1.1
 *
 * Copyright (c) 2015 Planlodge (http://www.planlodge.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
(function($) {

    'use strict';


    var methods = {

        init: function(options) {

            var defaults = {
				
				circular:	false, 		// round image
				rounded:	false, 		// rounded corners only
				shadow:		true,  		// addin in box shadows
				animSet:	true,  		// allow sub animation effects
				animation:	"fadeUp",	// default animation
				animSpeed:	1000,   	// set duration speed for animation
				showCaption:true,		// show image captions
				overlay:	true,		// show overlay on hover
				zoom:		true		// allow zoom on image
                
            };

            // default settings
            options = $.extend(defaults, options);

           

            return this.each(function(){


                var el = $(this);
				var caption = el.attr("data-title"); 
				var srcCheck = el.attr("src");
				if (!srcCheck || 0 === srcCheck.length)
				{
					alert("Error: Please Make Sure Selectors are Images");
				}
				else
				{
					
					if (defaults['overlay'] == true)
				{
					$("body").append("<div id='overlay-transimg'></div>");
				}
				
				el.wrap( "<div class='trans'></div>" );
				$('.trans').append("<div class='caption'></div>");

				if (defaults['circular'] == true)
				{
					el.addClass( "circular" );
				}
				
				if (defaults['rounded'] == true)
				{
					el.removeClass( "circular" ).addClass( "rounded" );
				}
				
				if (defaults['shadow'] == true)
				{
					el.addClass( "shadow" );
				}
				
				if (defaults['animSet'] == true)
				{
					methods.applyAnimation(el, defaults['animation'], defaults['animSpeed']);
				}
				
				
				
				
					$('.trans').on('mouseover', function(){
					
						$('#overlay-transimg').fadeIn(200);
						el.css({"z-index": 999999, "position": "relative"});
						
						if (defaults['zoom'] == true)
						{
							$('.trans').animate({ 'zoom': 1.1 }, 400);
						}
						
						if (defaults['showCaption'] == true)
						{
							$('.caption').text(caption).fadeIn(500);
						}
					});
					$('.trans').on('mouseout', function(){
						
						$('#overlay-transimg').fadeOut(200);
						el.css({"z-index": 99, "position": "relative"});
						
						if (defaults['zoom'] == true)
						{
							$('.trans').animate({ 'zoom': 1 }, 400);
						}
						
						if (defaults['showCaption'] == true)
						{
							$('.caption').text(caption).fadeOut(500);
						}
						
					});
					
					
				}
				
				
				
				
                
				
                 
            });

        },
		applyAnimation: function(el, anim, sp) {
			
			switch(anim)
			{
				case "fade":
					el.addClass("fadeIn");
				break;
				case "fadeDown":
					el.addClass("fadeInDown");
				break;
				case "fadeUp":
					el.addClass("fadeInUp");
				break;
				case "spin":
					el.addClass("spin-in");
				break
			}
			
			
			
		}
       
    }

    // function method
    $.fn.transimg = function(method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist");
        }
    };


}(jQuery));