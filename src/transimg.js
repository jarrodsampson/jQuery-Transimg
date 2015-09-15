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
				frame: 		"diamond"	// frame styles, webkits only
                
            };

            // default settings
            if (options) {
             	$.extend(defaults, options);
         	}

         	function _show(target_elm, caption) {}

			function _hide(target_elm, caption) {}
           

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
							
					el.wrap( "<div class='trans'></div>" );
					$('.trans').append("<div class='caption'></div>");

					var circular = defaults['circular'] == true ? el.addClass( "circular" ) : '';
					var rounded = defaults['rounded'] == true ? el.addClass( "rounded" ) : '';
					var shadow = defaults['shadow'] == true ? el.addClass( "shadow" ) : '';

					methods.applyFrame(el, defaults['frame']);
					methods.determineBrowser(el, defaults['circular']);
					
					if (defaults['animSet'] == true)
					{
						methods.applyAnimation(el, defaults['animation'], defaults['animSpeed']);
					}
	
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

		},
		applyFrame: function(el, frame) {

			switch(frame)
			{
				case "bevel": el.removeClass( "circular" ).addClass("bevel");
				break;
				case "star": el.removeClass( "circular" ).addClass("star");
				break;
				case "message": el.removeClass( "circular" ).addClass("message");
				break;
				case "diamond": el.removeClass( "circular" ).addClass("diamond");
				break;
			}
		},
		determineBrowser: function(el, circleApplication) {
				var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
                    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
                var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
                var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
                    // At least Safari 3+: "[object HTMLElementConstructor]"
                var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
                var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6

                if (isFirefox == true || isIE == true)
                {
                    if (circleApplication == true)
					{
						el.addClass( "circular" );
					}
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