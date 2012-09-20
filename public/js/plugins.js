// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

// Jquery Easing
// http://gsgd.co.uk/sandbox/jquery/easing/
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});

// jQuery Nivo Slider v3.1
// http://nivo.dev7studios.com
(function(a){var b=function(b,c){var d=a.extend({},a.fn.nivoSlider.defaults,c);var e={currentSlide:0,currentImage:"",totalSlides:0,running:false,paused:false,stop:false,controlNavEl:false};var f=a(b);f.data("nivo:vars",e).addClass("nivoSlider");var g=f.children();g.each(function(){var b=a(this);var c="";if(!b.is("img")){if(b.is("a")){b.addClass("nivo-imageLink");c=b}b=b.find("img:first")}var d=d===0?b.attr("width"):b.width(),f=f===0?b.attr("height"):b.height();if(c!==""){c.css("display","none")}b.css("display","none");e.totalSlides++});if(d.randomStart){d.startSlide=Math.floor(Math.random()*e.totalSlides)}if(d.startSlide>0){if(d.startSlide>=e.totalSlides){d.startSlide=e.totalSlides-1}e.currentSlide=d.startSlide}if(a(g[e.currentSlide]).is("img")){e.currentImage=a(g[e.currentSlide])}else{e.currentImage=a(g[e.currentSlide]).find("img:first")}if(a(g[e.currentSlide]).is("a")){a(g[e.currentSlide]).css("display","block")}var h=a('<img class="nivo-main-image" src="#" />');h.attr("src",e.currentImage.attr("src")).show();f.append(h);a(window).resize(function(){f.children("img").width(f.width());h.attr("src",e.currentImage.attr("src"));h.stop().height("auto");a(".nivo-slice").remove();a(".nivo-box").remove()});f.append(a('<div class="nivo-caption"></div>'));var i=function(b){var c=a(".nivo-caption",f);if(e.currentImage.attr("title")!=""&&e.currentImage.attr("title")!=undefined){var d=e.currentImage.attr("title");if(d.substr(0,1)=="#")d=a(d).html();if(c.css("display")=="block"){setTimeout(function(){c.html(d)},b.animSpeed)}else{c.html(d);c.stop().fadeIn(b.animSpeed)}}else{c.stop().fadeOut(b.animSpeed)}};i(d);var j=0;if(!d.manualAdvance&&g.length>1){j=setInterval(function(){o(f,g,d,false)},d.pauseTime)}if(d.directionNav){f.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+d.prevText+'</a><a class="nivo-nextNav">'+d.nextText+"</a></div>");a("a.nivo-prevNav",f).live("click",function(){if(e.running){return false}clearInterval(j);j="";e.currentSlide-=2;o(f,g,d,"prev")});a("a.nivo-nextNav",f).live("click",function(){if(e.running){return false}clearInterval(j);j="";o(f,g,d,"next")})}if(d.controlNav){e.controlNavEl=a('<div class="nivo-controlNav"></div>');f.after(e.controlNavEl);for(var k=0;k<g.length;k++){if(d.controlNavThumbs){e.controlNavEl.addClass("nivo-thumbs-enabled");var l=g.eq(k);if(!l.is("img")){l=l.find("img:first")}if(l.attr("data-thumb"))e.controlNavEl.append('<a class="nivo-control" rel="'+k+'"><img src="'+l.attr("data-thumb")+'" alt="" /></a>')}else{e.controlNavEl.append('<a class="nivo-control" rel="'+k+'">'+(k+1)+"</a>")}}a("a:eq("+e.currentSlide+")",e.controlNavEl).addClass("active");a("a",e.controlNavEl).bind("click",function(){if(e.running)return false;if(a(this).hasClass("active"))return false;clearInterval(j);j="";h.attr("src",e.currentImage.attr("src"));e.currentSlide=a(this).attr("rel")-1;o(f,g,d,"control")})}if(d.pauseOnHover){f.hover(function(){e.paused=true;clearInterval(j);j=""},function(){e.paused=false;if(j===""&&!d.manualAdvance){j=setInterval(function(){o(f,g,d,false)},d.pauseTime)}})}f.bind("nivo:animFinished",function(){h.attr("src",e.currentImage.attr("src"));e.running=false;a(g).each(function(){if(a(this).is("a")){a(this).css("display","none")}});if(a(g[e.currentSlide]).is("a")){a(g[e.currentSlide]).css("display","block")}if(j===""&&!e.paused&&!d.manualAdvance){j=setInterval(function(){o(f,g,d,false)},d.pauseTime)}d.afterChange.call(this)});var m=function(b,c,d){if(a(d.currentImage).parent().is("a"))a(d.currentImage).parent().css("display","block");a('img[src="'+d.currentImage.attr("src")+'"]',b).not(".nivo-main-image,.nivo-control img").width(b.width()).css("visibility","hidden").show();var e=a('img[src="'+d.currentImage.attr("src")+'"]',b).not(".nivo-main-image,.nivo-control img").parent().is("a")?a('img[src="'+d.currentImage.attr("src")+'"]',b).not(".nivo-main-image,.nivo-control img").parent().height():a('img[src="'+d.currentImage.attr("src")+'"]',b).not(".nivo-main-image,.nivo-control img").height();for(var f=0;f<c.slices;f++){var g=Math.round(b.width()/c.slices);if(f===c.slices-1){b.append(a('<div class="nivo-slice" name="'+f+'"><img src="'+d.currentImage.attr("src")+'" style="position:absolute; width:'+b.width()+"px; height:auto; display:block !important; top:0; left:-"+(g+f*g-g)+'px;" /></div>').css({left:g*f+"px",width:b.width()-g*f+"px",height:e+"px",opacity:"0",overflow:"hidden"}))}else{b.append(a('<div class="nivo-slice" name="'+f+'"><img src="'+d.currentImage.attr("src")+'" style="position:absolute; width:'+b.width()+"px; height:auto; display:block !important; top:0; left:-"+(g+f*g-g)+'px;" /></div>').css({left:g*f+"px",width:g+"px",height:e+"px",opacity:"0",overflow:"hidden"}))}}a(".nivo-slice",b).height(e);h.stop().animate({height:a(d.currentImage).height()},c.animSpeed)};var n=function(b,c,d){if(a(d.currentImage).parent().is("a"))a(d.currentImage).parent().css("display","block");a('img[src="'+d.currentImage.attr("src")+'"]',b).not(".nivo-main-image,.nivo-control img").width(b.width()).css("visibility","hidden").show();var e=Math.round(b.width()/c.boxCols),f=Math.round(a('img[src="'+d.currentImage.attr("src")+'"]',b).not(".nivo-main-image,.nivo-control img").height()/c.boxRows);for(var g=0;g<c.boxRows;g++){for(var i=0;i<c.boxCols;i++){if(i===c.boxCols-1){b.append(a('<div class="nivo-box" name="'+i+'" rel="'+g+'"><img src="'+d.currentImage.attr("src")+'" style="position:absolute; width:'+b.width()+"px; height:auto; display:block; top:-"+f*g+"px; left:-"+e*i+'px;" /></div>').css({opacity:0,left:e*i+"px",top:f*g+"px",width:b.width()-e*i+"px"}));a('.nivo-box[name="'+i+'"]',b).height(a('.nivo-box[name="'+i+'"] img',b).height()+"px")}else{b.append(a('<div class="nivo-box" name="'+i+'" rel="'+g+'"><img src="'+d.currentImage.attr("src")+'" style="position:absolute; width:'+b.width()+"px; height:auto; display:block; top:-"+f*g+"px; left:-"+e*i+'px;" /></div>').css({opacity:0,left:e*i+"px",top:f*g+"px",width:e+"px"}));a('.nivo-box[name="'+i+'"]',b).height(a('.nivo-box[name="'+i+'"] img',b).height()+"px")}}}h.stop().animate({height:a(d.currentImage).height()},c.animSpeed)};var o=function(b,c,d,e){var f=b.data("nivo:vars");if(f&&f.currentSlide===f.totalSlides-1){d.lastSlide.call(this)}if((!f||f.stop)&&!e){return false}d.beforeChange.call(this);if(!e){h.attr("src",f.currentImage.attr("src"))}else{if(e==="prev"){h.attr("src",f.currentImage.attr("src"))}if(e==="next"){h.attr("src",f.currentImage.attr("src"))}}f.currentSlide++;if(f.currentSlide===f.totalSlides){f.currentSlide=0;d.slideshowEnd.call(this)}if(f.currentSlide<0){f.currentSlide=f.totalSlides-1}if(a(c[f.currentSlide]).is("img")){f.currentImage=a(c[f.currentSlide])}else{f.currentImage=a(c[f.currentSlide]).find("img:first")}if(d.controlNav){a("a",f.controlNavEl).removeClass("active");a("a:eq("+f.currentSlide+")",f.controlNavEl).addClass("active")}i(d);a(".nivo-slice",b).remove();a(".nivo-box",b).remove();var g=d.effect,j="";if(d.effect==="random"){j=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDown","sliceUpDownLeft","fold","fade","boxRandom","boxRain","boxRainReverse","boxRainGrow","boxRainGrowReverse");g=j[Math.floor(Math.random()*(j.length+1))];if(g===undefined){g="fade"}}if(d.effect.indexOf(",")!==-1){j=d.effect.split(",");g=j[Math.floor(Math.random()*j.length)];if(g===undefined){g="fade"}}if(f.currentImage.attr("data-transition")){g=f.currentImage.attr("data-transition")}f.running=true;var k=0,l=0,o="",q="",r="",s="";if(g==="sliceDown"||g==="sliceDownRight"||g==="sliceDownLeft"){m(b,d,f);k=0;l=0;o=a(".nivo-slice",b);if(g==="sliceDownLeft"){o=a(".nivo-slice",b)._reverse()}o.each(function(){var c=a(this);c.css({top:"0px"});if(l===d.slices-1){setTimeout(function(){c.animate({opacity:"1.0"},d.animSpeed,"",function(){b.trigger("nivo:animFinished")})},100+k)}else{setTimeout(function(){c.animate({opacity:"1.0"},d.animSpeed)},100+k)}k+=50;l++})}else if(g==="sliceUp"||g==="sliceUpRight"||g==="sliceUpLeft"){m(b,d,f);k=0;l=0;o=a(".nivo-slice",b);if(g==="sliceUpLeft"){o=a(".nivo-slice",b)._reverse()}o.each(function(){var c=a(this);c.css({bottom:"0px"});if(l===d.slices-1){setTimeout(function(){c.animate({opacity:"1.0"},d.animSpeed,"",function(){b.trigger("nivo:animFinished")})},100+k)}else{setTimeout(function(){c.animate({opacity:"1.0"},d.animSpeed)},100+k)}k+=50;l++})}else if(g==="sliceUpDown"||g==="sliceUpDownRight"||g==="sliceUpDownLeft"){m(b,d,f);k=0;l=0;var t=0;o=a(".nivo-slice",b);if(g==="sliceUpDownLeft"){o=a(".nivo-slice",b)._reverse()}o.each(function(){var c=a(this);if(l===0){c.css("top","0px");l++}else{c.css("bottom","0px");l=0}if(t===d.slices-1){setTimeout(function(){c.animate({opacity:"1.0"},d.animSpeed,"",function(){b.trigger("nivo:animFinished")})},100+k)}else{setTimeout(function(){c.animate({opacity:"1.0"},d.animSpeed)},100+k)}k+=50;t++})}else if(g==="fold"){m(b,d,f);k=0;l=0;a(".nivo-slice",b).each(function(){var c=a(this);var e=c.width();c.css({top:"0px",width:"0px"});if(l===d.slices-1){setTimeout(function(){c.animate({width:e,opacity:"1.0"},d.animSpeed,"",function(){b.trigger("nivo:animFinished")})},100+k)}else{setTimeout(function(){c.animate({width:e,opacity:"1.0"},d.animSpeed)},100+k)}k+=50;l++})}else if(g==="fade"){m(b,d,f);q=a(".nivo-slice:first",b);q.css({width:b.width()+"px"});q.animate({opacity:"1.0"},d.animSpeed*2,"",function(){b.trigger("nivo:animFinished")})}else if(g==="slideInRight"){m(b,d,f);q=a(".nivo-slice:first",b);q.css({width:"0px",opacity:"1"});q.animate({width:b.width()+"px"},d.animSpeed*2,"",function(){b.trigger("nivo:animFinished")})}else if(g==="slideInLeft"){m(b,d,f);q=a(".nivo-slice:first",b);q.css({width:"0px",opacity:"1",left:"",right:"0px"});q.animate({width:b.width()+"px"},d.animSpeed*2,"",function(){q.css({left:"0px",right:""});b.trigger("nivo:animFinished")})}else if(g==="boxRandom"){n(b,d,f);r=d.boxCols*d.boxRows;l=0;k=0;s=p(a(".nivo-box",b));s.each(function(){var c=a(this);if(l===r-1){setTimeout(function(){c.animate({opacity:"1"},d.animSpeed,"",function(){b.trigger("nivo:animFinished")})},100+k)}else{setTimeout(function(){c.animate({opacity:"1"},d.animSpeed)},100+k)}k+=20;l++})}else if(g==="boxRain"||g==="boxRainReverse"||g==="boxRainGrow"||g==="boxRainGrowReverse"){n(b,d,f);r=d.boxCols*d.boxRows;l=0;k=0;var u=0;var v=0;var w=[];w[u]=[];s=a(".nivo-box",b);if(g==="boxRainReverse"||g==="boxRainGrowReverse"){s=a(".nivo-box",b)._reverse()}s.each(function(){w[u][v]=a(this);v++;if(v===d.boxCols){u++;v=0;w[u]=[]}});for(var x=0;x<d.boxCols*2;x++){var y=x;for(var z=0;z<d.boxRows;z++){if(y>=0&&y<d.boxCols){(function(c,e,f,h,i){var j=a(w[c][e]);var k=j.width();var l=j.height();if(g==="boxRainGrow"||g==="boxRainGrowReverse"){j.width(0).height(0)}if(h===i-1){setTimeout(function(){j.animate({opacity:"1",width:k,height:l},d.animSpeed/1.3,"",function(){b.trigger("nivo:animFinished")})},100+f)}else{setTimeout(function(){j.animate({opacity:"1",width:k,height:l},d.animSpeed/1.3)},100+f)}})(z,y,k,l,r);l++}y--}k+=100}}};var p=function(a){for(var b,c,d=a.length;d;b=parseInt(Math.random()*d,10),c=a[--d],a[d]=a[b],a[b]=c);return a};var q=function(a){if(this.console&&typeof console.log!=="undefined"){console.log(a)}};this.stop=function(){if(!a(b).data("nivo:vars").stop){a(b).data("nivo:vars").stop=true;q("Stop Slider")}};this.start=function(){if(a(b).data("nivo:vars").stop){a(b).data("nivo:vars").stop=false;q("Start Slider")}};d.afterLoad.call(this);return this};a.fn.nivoSlider=function(c){return this.each(function(d,e){var f=a(this);if(f.data("nivoslider")){return f.data("nivoslider")}var g=new b(this,c);f.data("nivoslider",g)})};a.fn.nivoSlider.defaults={effect:"random",slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3e3,startSlide:0,directionNav:true,controlNav:true,controlNavThumbs:false,pauseOnHover:true,manualAdvance:false,prevText:"Prev",nextText:"Next",randomStart:false,beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};a.fn._reverse=[].reverse})(jQuery)

// Twitter Bootstrap (Jquery)
// http://twitter.github.com/bootstrap
!function(a){a(function(){a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;a("body").addClass("modal-open"),this.isShown=!0,this.escape(),this.backdrop(function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in").attr("aria-hidden",!1).focus(),b.enforceFocus(),c?b.$element.one(a.support.transition.end,function(){b.$element.trigger("shown")}):b.$element.trigger("shown")})},hide:function(b){b&&b.preventDefault();var c=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,a("body").removeClass("modal-open"),this.escape(),a(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),a.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var b=this;a(document).on("focusin.modal",function(a){b.$element[0]!==a.target&&!b.$element.has(a.target).length&&b.$element.focus()})},escape:function(){var a=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(b){b.which==27&&a.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),b.hideModal()},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),b.hideModal()})},hideModal:function(a){this.$element.hide().trigger("hidden"),this.backdrop()},removeBackdrop:function(){this.$backdrop.remove(),this.$backdrop=null},backdrop:function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.options.backdrop!="static"&&this.$backdrop.click(a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,a.proxy(this.removeBackdrop,this)):this.removeBackdrop()):b&&b()}},a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a(function(){a("body").on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f).one("hide",function(){c.focus()})})})}(window.jQuery),!function(a){function d(){e(a(b)).removeClass("open")}function e(b){var c=b.attr("data-target"),d;return c||(c=b.attr("href"),c=c&&c.replace(/.*(?=#[^\s]*$)/,"")),d=a(c),d.length||(d=b.parent()),d}var b="[data-toggle=dropdown]",c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(b){var c=a(this),f,g;if(c.is(".disabled, :disabled"))return;return f=e(c),g=f.hasClass("open"),d(),g||(f.toggleClass("open"),c.focus()),!1},keydown:function(b){var c,d,f,g,h,i;if(!/(38|40|27)/.test(b.keyCode))return;c=a(this),b.preventDefault(),b.stopPropagation();if(c.is(".disabled, :disabled"))return;g=e(c),h=g.hasClass("open");if(!h||h&&b.keyCode==27)return c.click();d=a("[role=menu] li:not(.divider) a",g);if(!d.length)return;i=d.index(d.filter(":focus")),b.keyCode==38&&i>0&&i--,b.keyCode==40&&i<d.length-1&&i++,~i||(i=0),d.eq(i).focus()}},a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.dropdown.Constructor=c,a(function(){a("html").on("click.dropdown.data-api touchstart.dropdown.data-api",d),a("body").on("click.dropdown touchstart.dropdown.data-api",".dropdown",function(a){a.stopPropagation()}).on("click.dropdown.data-api touchstart.dropdown.data-api",b,c.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api",b+", [role=menu]",c.prototype.keydown)})}(window.jQuery),!function(a){function b(b,c){var d=a.proxy(this.process,this),e=a(b).is("body")?a(window):a(b),f;this.options=a.extend({},a.fn.scrollspy.defaults,c),this.$scrollElement=e.on("scroll.scroll-spy.data-api",d),this.selector=(this.options.target||(f=a(b).attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=a("body"),this.refresh(),this.process()}b.prototype={constructor:b,refresh:function(){var b=this,c;this.offsets=a([]),this.targets=a([]),c=this.$body.find(this.selector).map(function(){var b=a(this),c=b.data("target")||b.attr("href"),d=/^#\w/.test(c)&&a(c);return d&&d.length&&[[d.position().top,c]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},process:function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},activate:function(b){var c,d;this.activeTarget=b,a(this.selector).parent(".active").removeClass("active"),d=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',c=a(d).parent("li").addClass("active"),c.parent(".dropdown-menu").length&&(c=c.closest("li.dropdown").addClass("active")),c.trigger("activate")}},a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("scrollspy"),f=typeof c=="object"&&c;e||d.data("scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.defaults={offset:10},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),!function(a){var b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target"),e,f,g;d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;e=c.find(".active a").last()[0],g=a.Event("show",{relatedTarget:e}),b.trigger(g);if(g.isDefaultPrevented())return;f=a(d),this.activate(b.parent("li"),c),this.activate(f,f.parent(),function(){b.trigger({type:"shown",relatedTarget:e})})},activate:function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g):g(),e.removeClass("in")}},a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a(function(){a("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})})}(window.jQuery),!function(a){var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f;this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.enabled=!0,this.options.trigger=="click"?this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this)):this.options.trigger!="manual"&&(e=this.options.trigger=="hover"?"mouseenter":"focus",f=this.options.trigger=="hover"?"mouseleave":"blur",this.$element.on(e+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(f+"."+this.type,this.options.selector,a.proxy(this.leave,this))),this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){return b=a.extend({},a.fn[this.type].defaults,b,this.$element.data()),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},enter:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.show)return c.show();clearTimeout(this.timeout),c.hoverState="in",this.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!c.options.delay||!c.options.delay.hide)return c.hide();c.hoverState="out",this.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},show:function(){var a,b,c,d,e,f,g;if(this.hasContent()&&this.enabled){a=this.tip(),this.setContent(),this.options.animation&&a.addClass("fade"),f=typeof this.options.placement=="function"?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement,b=/in/.test(f),a.remove().css({top:0,left:0,display:"block"}).appendTo(b?this.$element:document.body),c=this.getPosition(b),d=a[0].offsetWidth,e=a[0].offsetHeight;switch(b?f.split(" ")[1]:f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}a.css(g).addClass(f).addClass("in")}},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},hide:function(){function d(){var b=setTimeout(function(){c.off(a.support.transition.end).remove()},500);c.one(a.support.transition.end,function(){clearTimeout(b),c.remove()})}var b=this,c=this.tip();return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d():c.remove(),this},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(b){return a.extend({},b?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}},a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;e||d.data("tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!0}}(window.jQuery),!function(a){var b=function(a,b){this.init("popover",a,b)};b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content > *")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-content")||(typeof c.content=="function"?c.content.call(b[0]):c.content),a},tip:function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}}),a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("popover"),f=typeof c=="object"&&c;e||d.data("popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.defaults=a.extend({},a.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery),!function(a){var b=function(b,c){this.options=a.extend({},a.fn.affix.defaults,c),this.$window=a(window).on("scroll.affix.data-api",a.proxy(this.checkPosition,this)),this.$element=a(b),this.checkPosition()};b.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var b=a(document).height(),c=this.$window.scrollTop(),d=this.$element.offset(),e=this.options.offset,f=e.bottom,g=e.top,h="affix affix-top affix-bottom",i;typeof e!="object"&&(f=g=e),typeof g=="function"&&(g=e.top()),typeof f=="function"&&(f=e.bottom()),i=this.unpin!=null&&c+this.unpin<=d.top?!1:f!=null&&d.top+this.$element.height()>=b-f?"bottom":g!=null&&c<=g?"top":!1;if(this.affixed===i)return;this.affixed=i,this.unpin=i=="bottom"?d.top-c:null,this.$element.removeClass(h).addClass("affix"+(i?"-"+i:""))},a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("affix"),f=typeof c=="object"&&c;e||d.data("affix",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.defaults={offset:0},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery),!function(a){var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed").remove()}var c=a(this),d=c.attr("data-target"),e;d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),e=a(d),b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,f):f()},a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a(function(){a("body").on("click.alert.data-api",b,c.prototype.close)})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.button.defaults,c)};b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a+="Text",d.resetText||c.data("resetText",c[e]()),c[e](d[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.parent('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active"),this.$element.toggleClass("active")},a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("button"),f=typeof c=="object"&&c;e||d.data("button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.defaults={loadingText:"loading..."},a.fn.button.Constructor=b,a(function(){a("body").on("click.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle")})})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.collapse.defaults,c),this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.prototype={constructor:b,dimension:function(){var a=this.$element.hasClass("width");return a?"width":"height"},show:function(){var b,c,d,e;if(this.transitioning)return;b=this.dimension(),c=a.camelCase(["scroll",b].join("-")),d=this.$parent&&this.$parent.find("> .accordion-group > .in");if(d&&d.length){e=d.data("collapse");if(e&&e.transitioning)return;d.collapse("hide"),e||d.data("collapse",null)}this.$element[b](0),this.transition("addClass",a.Event("show"),"shown"),a.support.transition&&this.$element[b](this.$element[0][c])},hide:function(){var b;if(this.transitioning)return;b=this.dimension(),this.reset(this.$element[b]()),this.transition("removeClass",a.Event("hide"),"hidden"),this.$element[b](0)},reset:function(a){var b=this.dimension();return this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth,this.$element[a!==null?"addClass":"removeClass"]("collapse"),this},transition:function(b,c,d){var e=this,f=function(){c.type=="show"&&e.reset(),e.transitioning=0,e.$element.trigger(d)};this.$element.trigger(c);if(c.isDefaultPrevented())return;this.transitioning=1,this.$element[b]("in"),a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,f):f()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}},a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("collapse"),f=typeof c=="object"&&c;e||d.data("collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.defaults={toggle:!0},a.fn.collapse.Constructor=b,a(function(){a("body").on("click.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e).data("collapse")?"toggle":c.data();c[a(e).hasClass("in")?"addClass":"removeClass"]("collapsed"),a(e).collapse(f)})})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=c,this.options.slide&&this.slide(this.options.slide),this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.prototype={cycle:function(b){return b||(this.paused=!1),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},to:function(b){var c=this.$element.find(".item.active"),d=c.parent().children(),e=d.index(c),f=this;if(b>d.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){f.to(b)}):e==b?this.pause().cycle():this.slide(b>e?"next":"prev",a(d[b]))},pause:function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle()),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this,j=a.Event("slide",{relatedTarget:e[0]});this.sliding=!0,f&&this.pause(),e=e.length?e:this.$element.find(".item")[h]();if(e.hasClass("active"))return;if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),this.$element.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)})}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}},a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("carousel"),f=a.extend({},a.fn.carousel.defaults,typeof c=="object"&&c),g=typeof c=="string"?c:f.slide;e||d.data("carousel",e=new b(this,f)),typeof c=="number"?e.to(c):g?e[g]():f.interval&&e.cycle()})},a.fn.carousel.defaults={interval:5e3,pause:"hover"},a.fn.carousel.Constructor=b,a(function(){a("body").on("click.carousel.data-api","[data-slide]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=!e.data("modal")&&a.extend({},e.data(),c.data());e.carousel(f),b.preventDefault()})})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.typeahead.defaults,c),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.$menu=a(this.options.menu).appendTo("body"),this.source=this.options.source,this.shown=!1,this.listen()};b.prototype={constructor:b,select:function(){var a=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(a)).change(),this.hide()},updater:function(a){return a},show:function(){var b=a.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:b.top+b.height,left:b.left}),this.$menu.show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(b){var c;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(c=a.isFunction(this.source)?this.source(this.query,a.proxy(this.process,this)):this.source,c?this.process(c):this)},process:function(b){var c=this;return b=a.grep(b,function(a){return c.matcher(a)}),b=this.sorter(b),b.length?this.render(b.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){var b=[],c=[],d=[],e;while(e=a.shift())e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?c.push(e):d.push(e):b.push(e);return b.concat(c,d)},highlighter:function(a){var b=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return a.replace(new RegExp("("+b+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(b){var c=this;return b=a(b).map(function(b,d){return b=a(c.options.item).attr("data-value",d),b.find("a").html(c.highlighter(d)),b[0]}),b.first().addClass("active"),this.$menu.html(b),this},next:function(b){var c=this.$menu.find(".active").removeClass("active"),d=c.next();d.length||(d=a(this.$menu.find("li")[0])),d.addClass("active")},prev:function(a){var b=this.$menu.find(".active").removeClass("active"),c=b.prev();c.length||(c=this.$menu.find("li").last()),c.addClass("active")},listen:function(){this.$element.on("blur",a.proxy(this.blur,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this)),(a.browser.webkit||a.browser.msie)&&this.$element.on("keydown",a.proxy(this.keydown,this)),this.$menu.on("click",a.proxy(this.click,this)).on("mouseenter","li",a.proxy(this.mouseenter,this))},move:function(a){if(!this.shown)return;switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:a.preventDefault(),this.prev();break;case 40:a.preventDefault(),this.next()}a.stopPropagation()},keydown:function(b){this.suppressKeyPressRepeat=!~a.inArray(b.keyCode,[40,38,9,13,27]),this.move(b)},keypress:function(a){if(this.suppressKeyPressRepeat)return;this.move(a)},keyup:function(a){switch(a.keyCode){case 40:case 38:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}a.stopPropagation(),a.preventDefault()},blur:function(a){var b=this;setTimeout(function(){b.hide()},150)},click:function(a){a.stopPropagation(),a.preventDefault(),this.select()},mouseenter:function(b){this.$menu.find(".active").removeClass("active"),a(b.currentTarget).addClass("active")}},a.fn.typeahead=function(c){return this.each(function(){var d=a(this),e=d.data("typeahead"),f=typeof c=="object"&&c;e||d.data("typeahead",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},a.fn.typeahead.Constructor=b,a(function(){a("body").on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(b){var c=a(this);if(c.data("typeahead"))return;b.preventDefault(),c.typeahead(c.data())})})}(window.jQuery);

// Open ID login (Jquery)
// http://jvance.com/pages/jQueryOpenIdPlugin.xhtml
$.fn.openid=function(){var a=$(this);var b=a.find("input[name=openid_username]");var c=a.find("input[name=openid_identifier]");var d=a.find("div:has(input[name=openid_username])>span:eq(0)");var e=a.find("div:has(input[name=openid_username])>span:eq(1)");var f=a.find("fieldset:has(input[name=openid_username])");var g=a.find("fieldset:has(input[name=openid_identifier])");var h=function(){if(b.val().length<1){b.focus();return false}c.val(d.text()+b.val()+e.text());return true};var i=function(){if(c.val().length<1){c.focus();return false}return true};var j=function(){var b=$(this);b.parent().find("li").removeClass("highlight");b.addClass("highlight");f.fadeOut();g.fadeOut();a.unbind("submit.openid").on("submit.openid",function(){c.val(a.find("li.highlight span").text())});a.submit();return false};var k=function(){var b=$(this);b.parent().find("li").removeClass("highlight");b.addClass("highlight");f.hide();g.show();c.focus();a.unbind("submit.openid").on("submit.openid",i);return false};var l=function(){var b=$(this);b.parent().find("li").removeClass("highlight");b.addClass("highlight");g.hide();f.show();a.find("label[for=openid_username] span").text(b.attr("title"));d.text(b.find("span").text().split("username")[0]);e.text("").text(b.find("span").text().split("username")[1]);c.focus();a.unbind("submit.openid").on("submit.openid",h);return false};a.find("li.direct").click(j);a.find("li.openid").click(k);a.find("li.username").click(l);c.keypress(function(a){if(a.which&&a.which==13||a.keyCode&&a.keyCode==13){return i()}});b.keypress(function(a){if(a.which&&a.which==13||a.keyCode&&a.keyCode==13){return h()}});a.find("li span").hide();a.find("li").css("line-height",0).css("cursor","pointer");a.find("li:eq(0)").click();return this};

// jQuery Form Plugin
// http://jquery.malsup.com/form/
(function(a){function c(b){var c=b.data;if(!b.isDefaultPrevented()){b.preventDefault();a(this).ajaxSubmit(c)}}function d(b){var c=b.target;var d=a(c);if(!d.is(":submit,input:image")){var e=d.closest(":submit");if(e.length===0){return}c=e[0]}var f=this;f.clk=c;if(c.type=="image"){if(b.offsetX!==undefined){f.clk_x=b.offsetX;f.clk_y=b.offsetY}else if(typeof a.fn.offset=="function"){var g=d.offset();f.clk_x=b.pageX-g.left;f.clk_y=b.pageY-g.top}else{f.clk_x=b.pageX-c.offsetLeft;f.clk_y=b.pageY-c.offsetTop}}setTimeout(function(){f.clk=f.clk_x=f.clk_y=null},100)}function e(){if(!a.fn.ajaxSubmit.debug)return;var b="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log){window.console.log(b)}else if(window.opera&&window.opera.postError){window.opera.postError(b)}}"use strict";var b={};b.fileapi=a("<input type='file'/>").get(0).files!==undefined;b.formdata=window.FormData!==undefined;a.fn.ajaxSubmit=function(c){function x(b){var d=new FormData;for(var e=0;e<b.length;e++){d.append(b[e].name,b[e].value)}if(c.extraData){for(var f in c.extraData)if(c.extraData.hasOwnProperty(f))d.append(f,c.extraData[f])}c.data=null;var g=a.extend(true,{},a.ajaxSettings,c,{contentType:false,processData:false,cache:false,type:"POST"});if(c.uploadProgress){g.xhr=function(){var a=jQuery.ajaxSettings.xhr();if(a.upload){a.upload.onprogress=function(a){var b=0;var d=a.loaded||a.position;var e=a.total;if(a.lengthComputable){b=Math.ceil(d/e*100)}c.uploadProgress(a,d,e,b)}}return a}}g.data=null;var h=g.beforeSend;g.beforeSend=function(a,b){b.data=d;if(h)h.call(b,a,c)};a.ajax(g)}function y(b){function x(a){var b=a.contentWindow?a.contentWindow.document:a.contentDocument?a.contentDocument:a.document;return b}function A(){function g(){try{var a=x(o).readyState;e("state = "+a);if(a&&a.toLowerCase()=="uninitialized")setTimeout(g,50)}catch(b){e("Server abort: ",b," (",b.name,")");F(w);if(t)clearTimeout(t);t=undefined}}var b=h.attr("target"),c=h.attr("action");f.setAttribute("target",m);if(!d){f.setAttribute("method","POST")}if(c!=j.url){f.setAttribute("action",j.url)}if(!j.skipEncodingOverride&&(!d||/post/i.test(d))){h.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})}if(j.timeout){t=setTimeout(function(){s=true;F(v)},j.timeout)}var i=[];try{if(j.extraData){for(var k in j.extraData){if(j.extraData.hasOwnProperty(k)){i.push(a('<input type="hidden" name="'+k+'">').attr("value",j.extraData[k]).appendTo(f)[0])}}}if(!j.iframeTarget){n.appendTo("body");if(o.attachEvent)o.attachEvent("onload",F);else o.addEventListener("load",F,false)}setTimeout(g,15);f.submit()}finally{f.setAttribute("action",c);if(b){f.setAttribute("target",b)}else{h.removeAttr("target")}a(i).remove()}}function F(b){if(p.aborted||E){return}try{C=x(o)}catch(c){e("cannot access response document: ",c);b=w}if(b===v&&p){p.abort("timeout");return}else if(b==w&&p){p.abort("server abort");return}if(!C||C.location.href==j.iframeSrc){if(!s)return}if(o.detachEvent)o.detachEvent("onload",F);else o.removeEventListener("load",F,false);var d="success",f;try{if(s){throw"timeout"}var g=j.dataType=="xml"||C.XMLDocument||a.isXMLDoc(C);e("isXml="+g);if(!g&&window.opera&&(C.body===null||!C.body.innerHTML)){if(--D){e("requeing onLoad callback, DOM not available");setTimeout(F,250);return}}var h=C.body?C.body:C.documentElement;p.responseText=h?h.innerHTML:null;p.responseXML=C.XMLDocument?C.XMLDocument:C;if(g)j.dataType="xml";p.getResponseHeader=function(a){var b={"content-type":j.dataType};return b[a]};if(h){p.status=Number(h.getAttribute("status"))||p.status;p.statusText=h.getAttribute("statusText")||p.statusText}var i=(j.dataType||"").toLowerCase();var k=/(json|script|text)/.test(i);if(k||j.textarea){var m=C.getElementsByTagName("textarea")[0];if(m){p.responseText=m.value;p.status=Number(m.getAttribute("status"))||p.status;p.statusText=m.getAttribute("statusText")||p.statusText}else if(k){var q=C.getElementsByTagName("pre")[0];var r=C.getElementsByTagName("body")[0];if(q){p.responseText=q.textContent?q.textContent:q.innerText}else if(r){p.responseText=r.textContent?r.textContent:r.innerText}}}else if(i=="xml"&&!p.responseXML&&p.responseText){p.responseXML=G(p.responseText)}try{B=I(p,i,j)}catch(b){d="parsererror";p.error=f=b||d}}catch(b){e("error caught: ",b);d="error";p.error=f=b||d}if(p.aborted){e("upload aborted");d=null}if(p.status){d=p.status>=200&&p.status<300||p.status===304?"success":"error"}if(d==="success"){if(j.success)j.success.call(j.context,B,"success",p);if(l)a.event.trigger("ajaxSuccess",[p,j])}else if(d){if(f===undefined)f=p.statusText;if(j.error)j.error.call(j.context,p,d,f);if(l)a.event.trigger("ajaxError",[p,j,f])}if(l)a.event.trigger("ajaxComplete",[p,j]);if(l&&!--a.active){a.event.trigger("ajaxStop")}if(j.complete)j.complete.call(j.context,p,d);E=true;if(j.timeout)clearTimeout(t);setTimeout(function(){if(!j.iframeTarget)n.remove();p.responseXML=null},100)}var f=h[0],g,i,j,l,m,n,o,p,q,r,s,t;var u=!!a.fn.prop;if(a(":input[name=submit],:input[id=submit]",f).length){alert('Error: Form elements must not have name or id of "submit".');return}if(b){for(i=0;i<k.length;i++){g=a(k[i]);if(u)g.prop("disabled",false);else g.removeAttr("disabled")}}j=a.extend(true,{},a.ajaxSettings,c);j.context=j.context||j;m="jqFormIO"+(new Date).getTime();if(j.iframeTarget){n=a(j.iframeTarget);r=n.attr("name");if(!r)n.attr("name",m);else m=r}else{n=a('<iframe name="'+m+'" src="'+j.iframeSrc+'" />');n.css({position:"absolute",top:"-1000px",left:"-1000px"})}o=n[0];p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(b){var c=b==="timeout"?"timeout":"aborted";e("aborting upload... "+c);this.aborted=1;n.attr("src",j.iframeSrc);p.error=c;if(j.error)j.error.call(j.context,p,c,b);if(l)a.event.trigger("ajaxError",[p,j,c]);if(j.complete)j.complete.call(j.context,p,c)}};l=j.global;if(l&&0===a.active++){a.event.trigger("ajaxStart")}if(l){a.event.trigger("ajaxSend",[p,j])}if(j.beforeSend&&j.beforeSend.call(j.context,p,j)===false){if(j.global){a.active--}return}if(p.aborted){return}q=f.clk;if(q){r=q.name;if(r&&!q.disabled){j.extraData=j.extraData||{};j.extraData[r]=q.value;if(q.type=="image"){j.extraData[r+".x"]=f.clk_x;j.extraData[r+".y"]=f.clk_y}}}var v=1;var w=2;var y=a("meta[name=csrf-token]").attr("content");var z=a("meta[name=csrf-param]").attr("content");if(z&&y){j.extraData=j.extraData||{};j.extraData[z]=y}if(j.forceSync){A()}else{setTimeout(A,10)}var B,C,D=50,E;var G=a.parseXML||function(a,b){if(window.ActiveXObject){b=new ActiveXObject("Microsoft.XMLDOM");b.async="false";b.loadXML(a)}else{b=(new DOMParser).parseFromString(a,"text/xml")}return b&&b.documentElement&&b.documentElement.nodeName!="parsererror"?b:null};var H=a.parseJSON||function(a){return window["eval"]("("+a+")")};var I=function(b,c,d){var e=b.getResponseHeader("content-type")||"",f=c==="xml"||!c&&e.indexOf("xml")>=0,g=f?b.responseXML:b.responseText;if(f&&g.documentElement.nodeName==="parsererror"){if(a.error)a.error("parsererror")}if(d&&d.dataFilter){g=d.dataFilter(g,c)}if(typeof g==="string"){if(c==="json"||!c&&e.indexOf("json")>=0){g=H(g)}else if(c==="script"||!c&&e.indexOf("javascript")>=0){a.globalEval(g)}}return g}}if(!this.length){e("ajaxSubmit: skipping submit process - no element selected");return this}var d,f,g,h=this;if(typeof c=="function"){c={success:c}}d=this.attr("method");f=this.attr("action");g=typeof f==="string"?a.trim(f):"";g=g||window.location.href||"";if(g){g=(g.match(/^([^#]+)/)||[])[1]}c=a.extend(true,{url:g,success:a.ajaxSettings.success,type:d||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},c);var i={};this.trigger("form-pre-serialize",[this,c,i]);if(i.veto){e("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(c.beforeSerialize&&c.beforeSerialize(this,c)===false){e("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var j=c.traditional;if(j===undefined){j=a.ajaxSettings.traditional}var k=[];var l,m=this.formToArray(c.semantic,k);if(c.data){c.extraData=c.data;l=a.param(c.data,j)}if(c.beforeSubmit&&c.beforeSubmit(m,this,c)===false){e("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[m,this,c,i]);if(i.veto){e("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var n=a.param(m,j);if(l){n=n?n+"&"+l:l}if(c.type.toUpperCase()=="GET"){c.url+=(c.url.indexOf("?")>=0?"&":"?")+n;c.data=null}else{c.data=n}var o=[];if(c.resetForm){o.push(function(){h.resetForm()})}if(c.clearForm){o.push(function(){h.clearForm(c.includeHidden)})}if(!c.dataType&&c.target){var p=c.success||function(){};o.push(function(b){var d=c.replaceTarget?"replaceWith":"html";a(c.target)[d](b).each(p,arguments)})}else if(c.success){o.push(c.success)}c.success=function(a,b,d){var e=c.context||c;for(var f=0,g=o.length;f<g;f++){o[f].apply(e,[a,b,d||h,h])}};var q=a("input:file:enabled[value]",this);var r=q.length>0;var s="multipart/form-data";var t=h.attr("enctype")==s||h.attr("encoding")==s;var u=b.fileapi&&b.formdata;e("fileAPI :"+u);var v=(r||t)&&!u;if(c.iframe!==false&&(c.iframe||v)){if(c.closeKeepAlive){a.get(c.closeKeepAlive,function(){y(m)})}else{y(m)}}else if((r||t)&&u){x(m)}else{a.ajax(c)}for(var w=0;w<k.length;w++)k[w]=null;this.trigger("form-submit-notify",[this,c]);return this};a.fn.ajaxForm=function(b){b=b||{};b.delegation=b.delegation&&a.isFunction(a.fn.on);if(!b.delegation&&this.length===0){var f={s:this.selector,c:this.context};if(!a.isReady&&f.s){e("DOM not ready, queuing ajaxForm");a(function(){a(f.s,f.c).ajaxForm(b)});return this}e("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)"));return this}if(b.delegation){a(document).off("submit.form-plugin",this.selector,c).off("click.form-plugin",this.selector,d).on("submit.form-plugin",this.selector,b,c).on("click.form-plugin",this.selector,b,d);return this}return this.ajaxFormUnbind().bind("submit.form-plugin",b,c).bind("click.form-plugin",b,d)};a.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};a.fn.formToArray=function(c,d){var e=[];if(this.length===0){return e}var f=this[0];var g=c?f.getElementsByTagName("*"):f.elements;if(!g){return e}var h,i,j,k,l,m,n;for(h=0,m=g.length;h<m;h++){l=g[h];j=l.name;if(!j){continue}if(c&&f.clk&&l.type=="image"){if(!l.disabled&&f.clk==l){e.push({name:j,value:a(l).val(),type:l.type});e.push({name:j+".x",value:f.clk_x},{name:j+".y",value:f.clk_y})}continue}k=a.fieldValue(l,true);if(k&&k.constructor==Array){if(d)d.push(l);for(i=0,n=k.length;i<n;i++){e.push({name:j,value:k[i]})}}else if(b.fileapi&&l.type=="file"&&!l.disabled){if(d)d.push(l);var o=l.files;if(o.length){for(i=0;i<o.length;i++){e.push({name:j,value:o[i],type:l.type})}}else{e.push({name:j,value:"",type:l.type})}}else if(k!==null&&typeof k!="undefined"){if(d)d.push(l);e.push({name:j,value:k,type:l.type,required:l.required})}}if(!c&&f.clk){var p=a(f.clk),q=p[0];j=q.name;if(j&&!q.disabled&&q.type=="image"){e.push({name:j,value:p.val()});e.push({name:j+".x",value:f.clk_x},{name:j+".y",value:f.clk_y})}}return e};a.fn.formSerialize=function(b){return a.param(this.formToArray(b))};a.fn.fieldSerialize=function(b){var c=[];this.each(function(){var d=this.name;if(!d){return}var e=a.fieldValue(this,b);if(e&&e.constructor==Array){for(var f=0,g=e.length;f<g;f++){c.push({name:d,value:e[f]})}}else if(e!==null&&typeof e!="undefined"){c.push({name:this.name,value:e})}});return a.param(c)};a.fn.fieldValue=function(b){for(var c=[],d=0,e=this.length;d<e;d++){var f=this[d];var g=a.fieldValue(f,b);if(g===null||typeof g=="undefined"||g.constructor==Array&&!g.length){continue}if(g.constructor==Array)a.merge(c,g);else c.push(g)}return c};a.fieldValue=function(b,c){var d=b.name,e=b.type,f=b.tagName.toLowerCase();if(c===undefined){c=true}if(c&&(!d||b.disabled||e=="reset"||e=="button"||(e=="checkbox"||e=="radio")&&!b.checked||(e=="submit"||e=="image")&&b.form&&b.form.clk!=b||f=="select"&&b.selectedIndex==-1)){return null}if(f=="select"){var g=b.selectedIndex;if(g<0){return null}var h=[],i=b.options;var j=e=="select-one";var k=j?g+1:i.length;for(var l=j?g:0;l<k;l++){var m=i[l];if(m.selected){var n=m.value;if(!n){n=m.attributes&&m.attributes["value"]&&!m.attributes["value"].specified?m.text:m.value}if(j){return n}h.push(n)}}return h}return a(b).val()};a.fn.clearForm=function(b){return this.each(function(){a("input,select,textarea",this).clearFields(b)})};a.fn.clearFields=a.fn.clearInputs=function(b){var c=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var d=this.type,e=this.tagName.toLowerCase();if(c.test(d)||e=="textarea"){this.value=""}else if(d=="checkbox"||d=="radio"){this.checked=false}else if(e=="select"){this.selectedIndex=-1}else if(b){if(b===true&&/hidden/.test(d)||typeof b=="string"&&a(this).is(b))this.value=""}})};a.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||typeof this.reset=="object"&&!this.reset.nodeType){this.reset()}})};a.fn.enable=function(a){if(a===undefined){a=true}return this.each(function(){this.disabled=!a})};a.fn.selected=function(b){if(b===undefined){b=true}return this.each(function(){var c=this.type;if(c=="checkbox"||c=="radio"){this.checked=b}else if(this.tagName.toLowerCase()=="option"){var d=a(this).parent("select");if(b&&d[0]&&d[0].type=="select-one"){d.find("option").selected(false)}this.selected=b}})};a.fn.ajaxSubmit.debug=false})(jQuery);

// Jquery Tablesorter
// http://tablesorter.com/docs/
(function($){$.extend({tablesorter:new function(){function benchmark(a,b){log(a+","+((new Date).getTime()-b.getTime())+"ms")}function log(a){if(typeof console!="undefined"&&typeof console.debug!="undefined"){console.log(a)}else{alert(a)}}function buildParserCache(a,b){if(a.config.debug){var c=""}if(a.tBodies.length==0)return;var d=a.tBodies[0].rows;if(d[0]){var e=[],f=d[0].cells,g=f.length;for(var h=0;h<g;h++){var i=false;if($.metadata&&$(b[h]).metadata()&&$(b[h]).metadata().sorter){i=getParserById($(b[h]).metadata().sorter)}else if(a.config.headers[h]&&a.config.headers[h].sorter){i=getParserById(a.config.headers[h].sorter)}if(!i){i=detectParserForColumn(a,d,-1,h)}if(a.config.debug){c+="column:"+h+" parser:"+i.id+"\n"}e.push(i)}}if(a.config.debug){log(c)}return e}function detectParserForColumn(a,b,c,d){var e=parsers.length,f=false,g=false,h=true;while(g==""&&h){c++;if(b[c]){f=getNodeFromRowAndCellIndex(b,c,d);g=trimAndGetNodeText(a.config,f);if(a.config.debug){log("Checking if value was empty on row:"+c)}}else{h=false}}for(var i=1;i<e;i++){if(parsers[i].is(g,a,f)){return parsers[i]}}return parsers[0]}function getNodeFromRowAndCellIndex(a,b,c){return a[b].cells[c]}function trimAndGetNodeText(a,b){return $.trim(getElementText(a,b))}function getParserById(a){var b=parsers.length;for(var c=0;c<b;c++){if(parsers[c].id.toLowerCase()==a.toLowerCase()){return parsers[c]}}return false}function buildCache(a){if(a.config.debug){var b=new Date}var c=a.tBodies[0]&&a.tBodies[0].rows.length||0,d=a.tBodies[0].rows[0]&&a.tBodies[0].rows[0].cells.length||0,e=a.config.parsers,f={row:[],normalized:[]};for(var g=0;g<c;++g){var h=$(a.tBodies[0].rows[g]),i=[];if(h.hasClass(a.config.cssChildRow)){f.row[f.row.length-1]=f.row[f.row.length-1].add(h);continue}f.row.push(h);for(var j=0;j<d;++j){i.push(e[j].format(getElementText(a.config,h[0].cells[j]),a,h[0].cells[j]))}i.push(f.normalized.length);f.normalized.push(i);i=null}if(a.config.debug){benchmark("Building cache for "+c+" rows:",b)}return f}function getElementText(a,b){var c="";if(!b)return"";if(!a.supportsTextContent)a.supportsTextContent=b.textContent||false;if(a.textExtraction=="simple"){if(a.supportsTextContent){c=b.textContent}else{if(b.childNodes[0]&&b.childNodes[0].hasChildNodes()){c=b.childNodes[0].innerHTML}else{c=b.innerHTML}}}else{if(typeof a.textExtraction=="function"){c=a.textExtraction(b)}else{c=$(b).text()}}return c}function appendToTable(a,b){if(a.config.debug){var c=new Date}var d=b,e=d.row,f=d.normalized,g=f.length,h=f[0].length-1,i=$(a.tBodies[0]),j=[];for(var k=0;k<g;k++){var l=f[k][h];j.push(e[l]);if(!a.config.appender){var m=e[l].length;for(var n=0;n<m;n++){i[0].appendChild(e[l][n])}}}if(a.config.appender){a.config.appender(a,j)}j=null;if(a.config.debug){benchmark("Rebuilt table:",c)}applyWidget(a);setTimeout(function(){$(a).trigger("sortEnd")},0)}function buildHeaders(a){if(a.config.debug){var b=new Date}var c=$.metadata?true:false;var d=computeTableHeaderCellIndexes(a);$tableHeaders=$(a.config.selectorHeaders,a).each(function(b){this.column=d[this.parentNode.rowIndex+"-"+this.cellIndex];this.order=formatSortingOrder(a.config.sortInitialOrder);this.count=this.order;if(checkHeaderMetadata(this)||checkHeaderOptions(a,b))this.sortDisabled=true;if(checkHeaderOptionsSortingLocked(a,b))this.order=this.lockedOrder=checkHeaderOptionsSortingLocked(a,b);if(!this.sortDisabled){var c=$(this).addClass(a.config.cssHeader);if(a.config.onRenderHeader)a.config.onRenderHeader.apply(c)}a.config.headerList[b]=this});if(a.config.debug){benchmark("Built headers:",b);log($tableHeaders)}return $tableHeaders}function computeTableHeaderCellIndexes(a){var b=[];var c={};var d=a.getElementsByTagName("THEAD")[0];var e=d.getElementsByTagName("TR");for(var f=0;f<e.length;f++){var g=e[f].cells;for(var h=0;h<g.length;h++){var i=g[h];var j=i.parentNode.rowIndex;var k=j+"-"+i.cellIndex;var l=i.rowSpan||1;var m=i.colSpan||1;var n;if(typeof b[j]=="undefined"){b[j]=[]}for(var o=0;o<b[j].length+1;o++){if(typeof b[j][o]=="undefined"){n=o;break}}c[k]=n;for(var o=j;o<j+l;o++){if(typeof b[o]=="undefined"){b[o]=[]}var p=b[o];for(var q=n;q<n+m;q++){p[q]="x"}}}}return c}function checkCellColSpan(a,b,c){var d=[],e=a.tHead.rows,f=e[c].cells;for(var g=0;g<f.length;g++){var h=f[g];if(h.colSpan>1){d=d.concat(checkCellColSpan(a,headerArr,c++))}else{if(a.tHead.length==1||h.rowSpan>1||!e[c+1]){d.push(h)}}}return d}function checkHeaderMetadata(a){if($.metadata&&$(a).metadata().sorter===false){return true}return false}function checkHeaderOptions(a,b){if(a.config.headers[b]&&a.config.headers[b].sorter===false){return true}return false}function checkHeaderOptionsSortingLocked(a,b){if(a.config.headers[b]&&a.config.headers[b].lockedOrder)return a.config.headers[b].lockedOrder;return false}function applyWidget(a){var b=a.config.widgets;var c=b.length;for(var d=0;d<c;d++){getWidgetById(b[d]).format(a)}}function getWidgetById(a){var b=widgets.length;for(var c=0;c<b;c++){if(widgets[c].id.toLowerCase()==a.toLowerCase()){return widgets[c]}}}function formatSortingOrder(a){if(typeof a!="Number"){return a.toLowerCase()=="desc"?1:0}else{return a==1?1:0}}function isValueInArray(a,b){var c=b.length;for(var d=0;d<c;d++){if(b[d][0]==a){return true}}return false}function setHeadersCss(a,b,c,d){b.removeClass(d[0]).removeClass(d[1]);var e=[];b.each(function(a){if(!this.sortDisabled){e[this.column]=$(this)}});var f=c.length;for(var g=0;g<f;g++){e[c[g][0]].addClass(d[c[g][1]])}}function fixColumnWidth(a,b){var c=a.config;if(c.widthFixed){var d=$("<colgroup>");$("tr:first td",a.tBodies[0]).each(function(){d.append($("<col>").css("width",$(this).width()))});$(a).prepend(d)}}function updateHeaderSortCount(a,b){var c=a.config,d=b.length;for(var e=0;e<d;e++){var f=b[e],g=c.headerList[f[0]];g.count=f[1];g.count++}}function multisort(table,sortList,cache){if(table.config.debug){var sortTime=new Date}var dynamicExp="var sortWrapper = function(a,b) {",l=sortList.length;for(var i=0;i<l;i++){var c=sortList[i][0];var order=sortList[i][1];var s=table.config.parsers[c].type=="text"?order==0?makeSortFunction("text","asc",c):makeSortFunction("text","desc",c):order==0?makeSortFunction("numeric","asc",c):makeSortFunction("numeric","desc",c);var e="e"+i;dynamicExp+="var "+e+" = "+s;dynamicExp+="if("+e+") { return "+e+"; } ";dynamicExp+="else { "}var orgOrderCol=cache.normalized[0].length-1;dynamicExp+="return a["+orgOrderCol+"]-b["+orgOrderCol+"];";for(var i=0;i<l;i++){dynamicExp+="}; "}dynamicExp+="return 0; ";dynamicExp+="}; ";if(table.config.debug){benchmark("Evaling expression:"+dynamicExp,new Date)}eval(dynamicExp);cache.normalized.sort(sortWrapper);if(table.config.debug){benchmark("Sorting on "+sortList.toString()+" and dir "+order+" time:",sortTime)}return cache}function makeSortFunction(a,b,c){var d="a["+c+"]",e="b["+c+"]";if(a=="text"&&b=="asc"){return"("+d+" == "+e+" ? 0 : ("+d+" === null ? Number.POSITIVE_INFINITY : ("+e+" === null ? Number.NEGATIVE_INFINITY : ("+d+" < "+e+") ? -1 : 1 )));"}else if(a=="text"&&b=="desc"){return"("+d+" == "+e+" ? 0 : ("+d+" === null ? Number.POSITIVE_INFINITY : ("+e+" === null ? Number.NEGATIVE_INFINITY : ("+e+" < "+d+") ? -1 : 1 )));"}else if(a=="numeric"&&b=="asc"){return"("+d+" === null && "+e+" === null) ? 0 :("+d+" === null ? Number.POSITIVE_INFINITY : ("+e+" === null ? Number.NEGATIVE_INFINITY : "+d+" - "+e+"));"}else if(a=="numeric"&&b=="desc"){return"("+d+" === null && "+e+" === null) ? 0 :("+d+" === null ? Number.POSITIVE_INFINITY : ("+e+" === null ? Number.NEGATIVE_INFINITY : "+e+" - "+d+"));"}}function makeSortText(a){return"((a["+a+"] < b["+a+"]) ? -1 : ((a["+a+"] > b["+a+"]) ? 1 : 0));"}function makeSortTextDesc(a){return"((b["+a+"] < a["+a+"]) ? -1 : ((b["+a+"] > a["+a+"]) ? 1 : 0));"}function makeSortNumeric(a){return"a["+a+"]-b["+a+"];"}function makeSortNumericDesc(a){return"b["+a+"]-a["+a+"];"}function sortText(a,b){if(table.config.sortLocaleCompare)return a.localeCompare(b);return a<b?-1:a>b?1:0}function sortTextDesc(a,b){if(table.config.sortLocaleCompare)return b.localeCompare(a);return b<a?-1:b>a?1:0}function sortNumeric(a,b){return a-b}function sortNumericDesc(a,b){return b-a}function getCachedSortType(a,b){return a[b].type}var parsers=[],widgets=[];this.defaults={cssHeader:"header",cssAsc:"headerSortUp",cssDesc:"headerSortDown",cssChildRow:"expand-child",sortInitialOrder:"asc",sortMultiSortKey:"shiftKey",sortForce:null,sortAppend:null,sortLocaleCompare:true,textExtraction:"simple",parsers:{},widgets:[],widgetZebra:{css:["even","odd"]},headers:{},widthFixed:false,cancelSelection:true,sortList:[],headerList:[],dateFormat:"us",decimal:"/.|,/g",onRenderHeader:null,selectorHeaders:"thead th",debug:false};this.benchmark=benchmark;this.construct=function(a){return this.each(function(){if(!this.tHead||!this.tBodies)return;var b,c,d,e,f,g=0,h;this.config={};f=$.extend(this.config,$.tablesorter.defaults,a);b=$(this);$.data(this,"tablesorter",f);d=buildHeaders(this);this.config.parsers=buildParserCache(this,d);e=buildCache(this);var i=[f.cssDesc,f.cssAsc];fixColumnWidth(this);d.click(function(a){var c=b[0].tBodies[0]&&b[0].tBodies[0].rows.length||0;if(!this.sortDisabled&&c>0){b.trigger("sortStart");var g=$(this);var h=this.column;this.order=this.count++%2;if(this.lockedOrder)this.order=this.lockedOrder;if(!a[f.sortMultiSortKey]){f.sortList=[];if(f.sortForce!=null){var j=f.sortForce;for(var k=0;k<j.length;k++){if(j[k][0]!=h){f.sortList.push(j[k])}}}f.sortList.push([h,this.order])}else{if(isValueInArray(h,f.sortList)){for(var k=0;k<f.sortList.length;k++){var l=f.sortList[k],m=f.headerList[l[0]];if(l[0]==h){m.count=l[1];m.count++;l[1]=m.count%2}}}else{f.sortList.push([h,this.order])}}setTimeout(function(){setHeadersCss(b[0],d,f.sortList,i);appendToTable(b[0],multisort(b[0],f.sortList,e))},1);return false}}).mousedown(function(){if(f.cancelSelection){this.onselectstart=function(){return false};return false}});b.bind("update",function(){var a=this;setTimeout(function(){a.config.parsers=buildParserCache(a,d);e=buildCache(a)},1)}).bind("updateCell",function(a,b){var c=this.config;var d=[b.parentNode.rowIndex-1,b.cellIndex];e.normalized[d[0]][d[1]]=c.parsers[d[1]].format(getElementText(c,b),b)}).bind("sorton",function(a,b){$(this).trigger("sortStart");f.sortList=b;var c=f.sortList;updateHeaderSortCount(this,c);setHeadersCss(this,d,c,i);appendToTable(this,multisort(this,c,e))}).bind("appendCache",function(){appendToTable(this,e)}).bind("applyWidgetId",function(a,b){getWidgetById(b).format(this)}).bind("applyWidgets",function(){applyWidget(this)});if($.metadata&&$(this).metadata()&&$(this).metadata().sortlist){f.sortList=$(this).metadata().sortlist}if(f.sortList.length>0){b.trigger("sorton",[f.sortList])}applyWidget(this)})};this.addParser=function(a){var b=parsers.length,c=true;for(var d=0;d<b;d++){if(parsers[d].id.toLowerCase()==a.id.toLowerCase()){c=false}}if(c){parsers.push(a)}};this.addWidget=function(a){widgets.push(a)};this.formatFloat=function(a){var b=parseFloat(a);return isNaN(b)?0:b};this.formatInt=function(a){var b=parseInt(a);return isNaN(b)?0:b};this.isDigit=function(a,b){return/^[-+]?\d*$/.test($.trim(a.replace(/[,.']/g,"")))};this.clearTableBody=function(a){if($.browser.msie){function b(){while(this.firstChild)this.removeChild(this.firstChild)}b.apply(a.tBodies[0])}else{a.tBodies[0].innerHTML=""}}}});$.fn.extend({tablesorter:$.tablesorter.construct});var ts=$.tablesorter;ts.addParser({id:"text",is:function(a){return true},format:function(a){return $.trim(a.toLocaleLowerCase())},type:"text"});ts.addParser({id:"digit",is:function(a,b){var c=b.config;return $.tablesorter.isDigit(a,c)},format:function(a){return $.tablesorter.formatFloat(a)},type:"numeric"});ts.addParser({id:"currency",is:function(a){return/^[Â£$â‚¬?.]/.test(a)},format:function(a){return $.tablesorter.formatFloat(a.replace(new RegExp(/[Â£$â‚¬]/g),""))},type:"numeric"});ts.addParser({id:"ipAddress",is:function(a){return/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(a)},format:function(a){var b=a.split("."),c="",d=b.length;for(var e=0;e<d;e++){var f=b[e];if(f.length==2){c+="0"+f}else{c+=f}}return $.tablesorter.formatFloat(c)},type:"numeric"});ts.addParser({id:"url",is:function(a){return/^(https?|ftp|file):\/\/$/.test(a)},format:function(a){return jQuery.trim(a.replace(new RegExp(/(https?|ftp|file):\/\//),""))},type:"text"});ts.addParser({id:"isoDate",is:function(a){return/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},format:function(a){return $.tablesorter.formatFloat(a!=""?(new Date(a.replace(new RegExp(/-/g),"/"))).getTime():"0")},type:"numeric"});ts.addParser({id:"percent",is:function(a){return/\%$/.test($.trim(a))},format:function(a){return $.tablesorter.formatFloat(a.replace(new RegExp(/%/g),""))},type:"numeric"});ts.addParser({id:"usLongDate",is:function(a){return a.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/))},format:function(a){return $.tablesorter.formatFloat((new Date(a)).getTime())},type:"numeric"});ts.addParser({id:"shortDate",is:function(a){return/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(a)},format:function(a,b){var c=b.config;a=a.replace(/\-/g,"/");if(c.dateFormat=="us"){a=a.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$1/$2")}else if(c.dateFormat=="uk"){a=a.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$2/$1")}else if(c.dateFormat=="dd/mm/yy"||c.dateFormat=="dd-mm-yy"){a=a.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3")}return $.tablesorter.formatFloat((new Date(a)).getTime())},type:"numeric"});ts.addParser({id:"time",is:function(a){return/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(a)},format:function(a){return $.tablesorter.formatFloat((new Date("2000/01/01 "+a)).getTime())},type:"numeric"});ts.addParser({id:"metadata",is:function(a){return false},format:function(a,b,c){var d=b.config,e=!d.parserMetadataName?"sortValue":d.parserMetadataName;return $(c).metadata()[e]},type:"numeric"});ts.addWidget({id:"zebra",format:function(a){if(a.config.debug){var b=new Date}var c,d=-1,e;$("tr:visible",a.tBodies[0]).each(function(b){c=$(this);if(!c.hasClass(a.config.cssChildRow))d++;e=d%2==0;c.removeClass(a.config.widgetZebra.css[e?0:1]).addClass(a.config.widgetZebra.css[e?1:0])});if(a.config.debug){$.tablesorter.benchmark("Applying Zebra widget",b)}}})})(jQuery);

// jQuery Cookie Plugin v1.2
// https://github.com/carhartl/jquery-cookie
(function(a,b,c){function e(a){return a}function f(a){return decodeURIComponent(a.replace(d," "))}var d=/\+/g;a.cookie=function(d,g,h){if(g!==c&&!/Object/.test(Object.prototype.toString.call(g))){h=a.extend({},a.cookie.defaults,h);if(g===null){h.expires=-1}if(typeof h.expires==="number"){var i=h.expires,j=h.expires=new Date;j.setDate(j.getDate()+i)}g=String(g);return b.cookie=[encodeURIComponent(d),"=",h.raw?g:encodeURIComponent(g),h.expires?"; expires="+h.expires.toUTCString():"",h.path?"; path="+h.path:"",h.domain?"; domain="+h.domain:"",h.secure?"; secure":""].join("")}h=g||a.cookie.defaults||{};var k=h.raw?e:f;var l=b.cookie.split("; ");for(var m=0,n;n=l[m]&&l[m].split("=");m++){if(k(n.shift())===d){return k(n.join("="))}}return null};a.cookie.defaults={};a.removeCookie=function(b,c){if(a.cookie(b,c)!==null){a.cookie(b,null,c);return true}return false}})(jQuery,document);

// CLEditor WYSIWYG HTML Editor v1.3.0
// http://premiumsoftware.net/cleditor
(function(a){function b(b){var c=this,d=b.target,e=a.data(d,A),f=T[e],g=f.popupName,h=R[g];if(!(c.disabled||a(d).attr(E)==E)){var k={editor:c,button:d,buttonName:e,popup:h,popupName:g,command:f.command,useCSS:c.options.useCSS};if(f.buttonClick&&f.buttonClick(b,k)===false)return false;if(e=="source"){if(v(c)){delete c.range;c.$area.hide();c.$frame.show();d.title=f.title}else{c.$frame.hide();c.$area.show();d.title="Show Rich Text"}setTimeout(function(){q(c)},100)}else if(!v(c))if(g){var l=a(h);if(g=="url"){if(e=="link"&&s(c)===""){t(c,"A selection is required when inserting a link.",d);return false}l.children(":button").unbind(D).bind(D,function(){var b=l.find(":text"),d=a.trim(b.val());d!==""&&i(c,k.command,d,null,k.button);b.val("http://");n();j(c)})}else g=="pastetext"&&l.children(":button").unbind(D).bind(D,function(){var a=l.find("textarea"),b=a.val().replace(/\n/g,"<br />");b!==""&&i(c,k.command,b,null,k.button);a.val("");n();j(c)});if(d!==a.data(h,z)){u(c,h,d);return false}return}else if(e=="print")c.$frame[0].contentWindow.print();else if(!i(c,k.command,k.value,k.useCSS,d))return false;j(c)}}function c(b){b=a(b.target).closest("div");b.css(y,b.data(A)?"#FFF":"#FFC")}function d(b){a(b.target).closest("div").css(y,"transparent")}function e(b){var c=b.data.popup,d=b.target;if(!(c===R.msg||a(c).hasClass(M))){var e=a.data(c,z),f=a.data(e,A),g=T[f],h=g.command,k,l=this.options.useCSS;if(f=="font")k=d.style.fontFamily.replace(/"/g,"");else if(f=="size"){if(d.tagName=="DIV")d=d.children[0];k=d.innerHTML}else if(f=="style")k="<"+d.tagName+">";else if(f=="color")k=m(d.style.backgroundColor);else if(f=="highlight"){k=m(d.style.backgroundColor);if(O)h="backcolor";else l=true}c={editor:this,button:e,buttonName:f,popup:c,popupName:g.popupName,command:h,value:k,useCSS:l};if(!(g.popupClick&&g.popupClick(b,c)===false)){if(c.command&&!i(this,c.command,c.value,c.useCSS,e))return false;n();j(this)}}}function f(a){for(var b=1,c=0,d=0;d<a.length;++d){b=(b+a.charCodeAt(d))%65521;c=(c+b)%65521}return c<<16|b}function g(b,e,f,g,h){if(R[b])return R[b];var i=a(F).hide().addClass(J).appendTo("body");if(g)i.html(g);else if(b=="color"){e=e.colors.split(" ");e.length<10&&i.width("auto");a.each(e,function(b,c){a(F).appendTo(i).css(y,"#"+c)});f=L}else if(b=="font")a.each(e.fonts.split(","),function(b,c){a(F).appendTo(i).css("fontFamily",c).html(c)});else if(b=="size")a.each(e.sizes.split(","),function(b,c){a(F).appendTo(i).html("<font size="+c+">"+c+"</font>")});else if(b=="style")a.each(e.styles,function(b,c){a(F).appendTo(i).html(c[1]+c[0]+c[1].replace("<","</"))});else if(b=="url"){i.html('Enter URL:<br><input type=text value="http://" size=35><br><input type=button value="Submit">');f=M}else if(b=="pastetext"){i.html("Paste your content here and click submit.<br /><textarea cols=40 rows=3></textarea><br /><input type=button value=Submit>");f=M}if(!f&&!g)f=K;i.addClass(f);O&&i.attr(G,"on").find("div,font,p,h1,h2,h3,h4,h5,h6").attr(G,"on");if(i.hasClass(K)||h===true)i.children().hover(c,d);R[b]=i[0];return i[0]}function h(a,b){if(b){a.$area.attr(E,E);a.disabled=true}else{a.$area.removeAttr(E);delete a.disabled}try{if(O)a.doc.body.contentEditable=!b;else a.doc.designMode=!b?"on":"off"}catch(c){}q(a)}function i(a,b,c,d,e){r(a);if(!O){if(d===undefined||d===null)d=a.options.useCSS;a.doc.execCommand("styleWithCSS",0,d.toString())}d=true;var f;if(O&&b.toLowerCase()=="inserthtml")k(a).pasteHTML(c);else{try{d=a.doc.execCommand(b,0,c||null)}catch(g){f=g.description;d=false}d||("cutcopypaste".indexOf(b)>-1?t(a,"For security reasons, your browser does not support the "+b+" command. Try using the keyboard shortcut or context menu instead.",e):t(a,f?f:"Error executing the "+b+" command.",e))}q(a);return d}function j(a){setTimeout(function(){v(a)?a.$area.focus():a.$frame[0].contentWindow.focus();q(a)},0)}function k(a){if(O)return l(a).createRange();return l(a).getRangeAt(0)}function l(a){if(O)return a.doc.selection;return a.$frame[0].contentWindow.getSelection()}function m(a){var b=/rgba?\((\d+), (\d+), (\d+)/.exec(a),c=a.split("");if(b)for(a=(b[1]<<16|b[2]<<8|b[3]).toString(16);a.length<6;)a="0"+a;return"#"+(a.length==6?a:c[1]+c[1]+c[2]+c[2]+c[3]+c[3])}function n(){a.each(R,function(b,c){a(c).hide().unbind(D).removeData(z)})}function o(){var b=a("link[href$='jquery.cleditor.css']").attr("href");return b.substr(0,b.length-19)+"images/"}function p(b){var c=b.$main,d=b.options;b.$frame&&b.$frame.remove();var e=b.$frame=a('<iframe frameborder="0" src="javascript:true;">').hide().appendTo(c),f=e[0].contentWindow,g=b.doc=f.document,i=a(g);g.open();g.write(d.docType+"<html>"+(d.docCSSFile===""?"":'<head><link rel="stylesheet" type="text/css" href="'+d.docCSSFile+'" /></head>')+'<body style="'+d.bodyStyle+'"></body></html>');g.close();O&&i.click(function(){j(b)});w(b);if(O){i.bind("beforedeactivate beforeactivate selectionchange keypress",function(a){if(a.type=="beforedeactivate")b.inactive=true;else if(a.type=="beforeactivate"){!b.inactive&&b.range&&b.range.length>1&&b.range.shift();delete b.inactive}else if(!b.inactive){if(!b.range)b.range=[];for(b.range.unshift(k(b));b.range.length>2;)b.range.pop()}});e.focus(function(){r(b)})}(a.browser.mozilla?i:a(f)).blur(function(){x(b,true)});i.click(n).bind("keyup mouseup",function(){q(b)});Q?b.$area.show():e.show();a(function(){var a=b.$toolbar,f=a.children("div:last"),g=c.width();f=f.offset().top+f.outerHeight()-a.offset().top+1;a.height(f);f=(/%/.test(""+d.height)?c.height():parseInt(d.height))-f;e.width(g).height(f);b.$area.width(g).height(P?f-2:f);h(b,b.disabled);q(b)})}function q(b){if(!Q&&a.browser.webkit&&!b.focused){b.$frame[0].contentWindow.focus();window.focus();b.focused=true}var c=b.doc;if(O)c=k(b);var d=v(b);a.each(b.$toolbar.find("."+H),function(e,f){var g=a(f),h=a.cleditor.buttons[a.data(f,A)],i=h.command,j=true;if(b.disabled)j=false;else if(h.getEnabled){j=h.getEnabled({editor:b,button:f,buttonName:h.name,popup:R[h.popupName],popupName:h.popupName,command:h.command,useCSS:b.options.useCSS});if(j===undefined)j=true}else if((d||Q)&&h.name!="source"||O&&(i=="undo"||i=="redo"))j=false;else if(i&&i!="print"){if(O&&i=="hilitecolor")i="backcolor";if(!O||i!="inserthtml")try{j=c.queryCommandEnabled(i)}catch(k){j=false}}if(j){g.removeClass(I);g.removeAttr(E)}else{g.addClass(I);g.attr(E,E)}})}function r(a){O&&a.range&&a.range[0].select()}function s(a){r(a);if(O)return k(a).text;return l(a).toString()}function t(a,b,c){var d=g("msg",a.options,N);d.innerHTML=b;u(a,d,c)}function u(b,c,d){var f,g,h=a(c);if(d){var i=a(d);f=i.offset();g=--f.left;f=f.top+i.height()}else{i=b.$toolbar;f=i.offset();g=Math.floor((i.width()-h.width())/2)+f.left;f=f.top+i.height()-2}n();h.css({left:g,top:f}).show();if(d){a.data(c,z,d);h.bind(D,{popup:c},a.proxy(e,b))}setTimeout(function(){h.find(":text,textarea").eq(0).focus().select()},100)}function v(a){return a.$area.is(":visible")}function w(b,c){var d=b.$area.val(),e=b.options,g=e.updateFrame,h=a(b.doc.body);if(g){var i=f(d);if(c&&b.areaChecksum==i)return;b.areaChecksum=i}d=g?g(d):d;d=d.replace(/<(?=\/?script)/ig,"<");if(e.updateTextArea)b.frameChecksum=f(d);if(d!=h.html()){h.html(d);a(b).triggerHandler(B)}}function x(b,c){var d=a(b.doc.body).html(),e=b.options,g=e.updateTextArea,h=b.$area;if(g){var i=f(d);if(c&&b.frameChecksum==i)return;b.frameChecksum=i}d=g?g(d):d;if(e.updateFrame)b.areaChecksum=f(d);if(d!=h.val()){h.val(d);a(b).triggerHandler(B)}}a.cleditor={defaultOptions:{width:540,height:300,controls:"bold italic underline strikethrough subscript superscript | font size style | color highlight removeformat | bullets numbering | outdent indent | alignleft center alignright justify | undo redo | rule image link unlink | cut copy paste pastetext | print source",colors:"FFF FCC FC9 FF9 FFC 9F9 9FF CFF CCF FCF CCC F66 F96 FF6 FF3 6F9 3FF 6FF 99F F9F BBB F00 F90 FC6 FF0 3F3 6CC 3CF 66C C6C 999 C00 F60 FC3 FC0 3C0 0CC 36F 63F C3C 666 900 C60 C93 990 090 399 33F 60C 939 333 600 930 963 660 060 366 009 339 636 000 300 630 633 330 030 033 006 309 303",fonts:"Arial,Arial Black,Comic Sans MS,Courier New,Narrow,Garamond,Georgia,Impact,Sans Serif,Serif,Tahoma,Trebuchet MS,Verdana",sizes:"1,2,3,4,5,6,7",styles:[["Paragraph","<p>"],["Header 1","<h1>"],["Header 2","<h2>"],["Header 3","<h3>"],["Header 4","<h4>"],["Header 5","<h5>"],["Header 6","<h6>"]],useCSS:false,docType:'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">',docCSSFile:"",bodyStyle:"margin:4px; font:10pt Arial,Verdana; cursor:text"},buttons:{init:"bold,,|italic,,|underline,,|strikethrough,,|subscript,,|superscript,,|font,,fontname,|size,Font Size,fontsize,|style,,formatblock,|color,Font Color,forecolor,|highlight,Text Highlight Color,hilitecolor,color|removeformat,Remove Formatting,|bullets,,insertunorderedlist|numbering,,insertorderedlist|outdent,,|indent,,|alignleft,Align Text Left,justifyleft|center,,justifycenter|alignright,Align Text Right,justifyright|justify,,justifyfull|undo,,|redo,,|rule,Insert Horizontal Rule,inserthorizontalrule|image,Insert Image,insertimage,url|link,Insert Hyperlink,createlink,url|unlink,Remove Hyperlink,|cut,,|copy,,|paste,,|pastetext,Paste as Text,inserthtml,|print,,|source,Show Source"},imagesPath:function(){return o()}};a.fn.cleditor=function(b){var c=a([]);this.each(function(d,e){if(e.tagName=="TEXTAREA"){var f=a.data(e,C);f||(f=new cleditor(e,b));c=c.add(f)}});return c};var y="backgroundColor",z="button",A="buttonName",B="change",C="cleditor",D="click",E="disabled",F="<div>",G="unselectable",H="cleditorButton",I="cleditorDisabled",J="cleditorPopup",K="cleditorList",L="cleditorColor",M="cleditorPrompt",N="cleditorMsg",O=a.browser.msie,P=/msie\s6/i.test(navigator.userAgent),Q=/iphone|ipad|ipod/i.test(navigator.userAgent),R={},S,T=a.cleditor.buttons;a.each(T.init.split("|"),function(a,b){var c=b.split(","),d=c[0];T[d]={stripIndex:a,name:d,title:c[1]===""?d.charAt(0).toUpperCase()+d.substr(1):c[1],command:c[2]===""?d:c[2],popupName:c[3]===""?d:c[3]}});delete T.init;cleditor=function(e,f){var h=this;h.options=f=a.extend({},a.cleditor.defaultOptions,f);var i=h.$area=a(e).hide().data(C,h).blur(function(){w(h,true)}),j=h.$main=a(F).addClass("cleditorMain").width(f.width).height(f.height),k=h.$toolbar=a(F).addClass("cleditorToolbar").appendTo(j),l=a(F).addClass("cleditorGroup").appendTo(k);a.each(f.controls.split(" "),function(e,i){if(i==="")return true;if(i=="|"){a(F).addClass("cleditorDivider").appendTo(l);l=a(F).addClass("cleditorGroup").appendTo(k)}else{var j=T[i],m=a(F).data(A,j.name).addClass(H).attr("title",j.title).bind(D,a.proxy(b,h)).appendTo(l).hover(c,d),n={};if(j.css)n=j.css;else if(j.image)n.backgroundImage="url("+o()+j.image+")";if(j.stripIndex)n.backgroundPosition=j.stripIndex*-24;m.css(n);O&&m.attr(G,"on");j.popupName&&g(j.popupName,f,j.popupClass,j.popupContent,j.popupHover)}});j.insertBefore(i).append(i);if(!S){a(document).click(function(b){b=a(b.target);b.add(b.parents()).is("."+M)||n()});S=true}/auto|%/.test(""+f.width+f.height)&&a(window).resize(function(){p(h)});p(h)};var U=cleditor.prototype;a.each([["clear",function(a){a.$area.val("");w(a)}],["disable",h],["execCommand",i],["focus",j],["hidePopups",n],["sourceMode",v,true],["refresh",p],["select",function(a){setTimeout(function(){v(a)?a.$area.select():i(a,"selectall")},0)}],["selectedHTML",function(b){r(b);b=k(b);if(O)return b.htmlText;var c=a("<layer>")[0];c.appendChild(b.cloneContents());return c.innerHTML},true],["selectedText",s,true],["showMessage",t],["updateFrame",w],["updateTextArea",x]],function(a,b){U[b[0]]=function(){for(var a=[this],c=0;c<arguments.length;c++)a.push(arguments[c]);a=b[1].apply(this,a);if(b[2])return a;return this}});U.change=function(b){var c=a(this);return b?c.bind(B,b):c.trigger(B)}})(jQuery);

// Simple Wysimwym Editor (Markdown editor)

BLANKLINE = '';
Wysiwym = {};

$.fn.wysiwym = function(markupSet, options) {
    this.EDITORCLASS = 'wysiwym-editor';           // Class to use for the wysiwym editor
    this.BUTTONCLASS = 'btn-toolbar';               // Class to use for the wysiwym buttons
    this.HELPCLASS = 'wysiwym-help';               // Class to use for the wysiwym help
    this.HELPTOGGLECLASS = 'wysiwym-help-toggle';  // Class to use for the wysiwym help
    this.textelem = this;                          // Javascript textarea element
    this.textarea = $(this);                       // jQuery textarea object
    this.editor = undefined;                       // jQuery div wrapper around this editor
    this.markup = new markupSet(this);             // Wysiwym Markup set to use
    this.defaults = {                              // Default option values
        containerButtons: undefined,               // jQuery elem to place buttons (makes one by default)
        containerHelp: undefined,                  // jQuery elem to place help (makes one by default)
        helpEnabled: true,                         // Set true to display the help dropdown
        helpToggle: true,                          // Set true to use a toggle link for help
        helpToggleElem: undefined,                 // jQuery elem to toggle help (makes <a> by default)
        helpTextShow: 'Markup help',        // Toggle text to display when help is not visible
        helpTextHide: 'hide Markup help'         // Toggle text to display when help is visible
    };
    this.options = $.extend(this.defaults, options ? options : {});

    // Add the button container and all buttons
    this.initializeButtons = function() {
        var markup = this.markup;
        if (this.options.containerButtons == undefined)
            this.options.containerButtons = $("<div></div>").insertBefore(this.textarea);
        this.options.containerButtons.addClass(this.BUTTONCLASS);

        this.options.btngroup = $("<div class='btn-group'></div>").appendTo(this.options.containerButtons);

        for (var i=0; i<markup.buttons.length; i++) {
            // Create the button
            var button = markup.buttons[i];

            if (button==='|') {
                this.options.btngroup = $("<div class='btn-group'></div>").appendTo(this.options.containerButtons);
                continue;
            }

            var jqbutton = button.create();
            var data = $.extend({markup:this.markup}, button.data);
            jqbutton.bind('click', data, button.callback);
            this.options.btngroup.append(jqbutton);
        }
    };

    // Initialize the AutoIndent trigger
    this.initializeAutoIndent = function() {
        if (this.markup.autoindents) {
            var data = {markup:this.markup};
            this.textarea.bind('keydown', data, Wysiwym.autoIndent);
        }
    };

    // Initialize the help syntax dropdown
    this.initializeHelp = function() {
        if (this.options.helpEnabled) {
            if (this.options.containerHelp == undefined)
                this.options.containerHelp = $("<div></div>").insertAfter(this.textarea);
            this.options.containerHelp.addClass(this.HELPCLASS);
            // Add the help table and items
            var helpBody = $('<tbody></tbody>');
            var helpTable = $('<table class="table"></table>').append(helpBody);
            for (var i=0; i<this.markup.help.length; i++) {
                var item = this.markup.help[i];
                helpBody.append('<tr><th>'+ item.label +'</th><td>'+ item.syntax +'</td></tr>');
            };
            this.options.containerHelp.append(helpTable);
        }
    };

    // Initialize the Help Toggle Button
    this.initializeHelpToggle = function() {
        if (this.options.helpToggle && this.options.helpEnabled) {
            var self = this;  // Required for use inside click callback
            if (this.options.helpToggleElem == undefined)
                this.options.helpToggleElem = $("<a href='#'>"+ this.options.helpTextShow +"</a>");
            this.options.helpToggleElem.addClass(this.HELPTOGGLECLASS);
            this.options.helpToggleElem.bind('click', function() {
                if (self.options.containerHelp.is(':visible')) {
                    self.options.containerHelp.slideUp('fast');
                    $(this).text(self.options.helpTextShow);
                } else {
                    self.options.containerHelp.slideDown('fast');
                    $(this).text(self.options.helpTextHide);
                }
                return false;
            });
            this.options.containerHelp.before(this.options.helpToggleElem).hide();
        }
    };

    // Initialize the Wysiwym Editor
    this.editor = $('<div class="'+ this.EDITORCLASS +'"></div>');
    this.textarea.wrap(this.editor);
    this.initializeButtons();
    this.initializeAutoIndent();
    this.initializeHelp();
    this.initializeHelpToggle();
};


/*----------------------------------------------------------------------------------------------
 * Wysiwym Selection
 * Manipulate the textarea selection
 *--------------------------------------------------------------------------------------------- */
Wysiwym.Selection = function(wysiwym) {
    this.lines = wysiwym.lines;                 // Reference to wysiwym.lines
    this.start = { line:0, position:0 },        // Current cursor start positon
    this.end = { line:0, position:0 },          // Current cursor end position

    // Return a string representation of this object.
    this.toString = function() {
        var str = 'SELECTION: '+ this.length() +' chars\n';
        str += 'START LINE: '+ this.start.line +'; POSITION: '+ this.start.position +'\n';
        str += 'END LINE: '+ this.end.line +'; POSITION: '+ this.end.position +'\n';
        return str;
    };

    // Add a line prefix, reguardless if it's already set or not.
    this.addLinePrefixes = function(prefix) {
        for (var i=this.start.line; i <= this.end.line; i++) {
            this.lines[i] = prefix + this.lines[i];
        }
        this.start.position += prefix.length;
        this.end.position += prefix.length;
    };

    // Add the specified prefix to the selection
    this.addPrefix = function(prefix) {
        var numlines = this.lines.length;
        var line = this.lines[this.start.line];
        var newline = line.substring(0, this.start.position) +
            prefix + line.substring(this.start.position, line.length);
        this.lines[this.start.line] = newline;
        this.start.position += prefix.length;
        if (this.start.line == this.end.line)
            this.end.position += prefix.length;
        // Check we need to update the scroll height;  This is very slightly
        // off because height != scrollHeight. A fix would be nice.
        if (prefix.indexOf('\n') != -1) {
            var scrollHeight = wysiwym.textelem.scrollHeight;
            var lineheight = parseInt(scrollHeight / numlines);
            wysiwym.scroll += lineheight;
        }

    };

    // Add the specified suffix to the selection
    this.addSuffix = function(suffix) {
        var line = this.lines[this.end.line];
        var newline = line.substring(0, this.end.position) +
            suffix + line.substring(this.end.position, line.length);
        this.lines[this.end.line] = newline;
    };

    // Append the specified text to the selection
    this.append = function(text) {
        var line = this.lines[this.end.line];
        var newline = line.substring(0, this.end.position) +
            text + line.substring(this.end.position, line.length);
        this.lines[this.end.line] = newline;
        this.end.position += text.length;
    };

    // Return an array of lines in the selection
    this.getLines = function() {
        var selectedlines = [];
        for (var i=this.start.line; i <= this.end.line; i++)
            selectedlines[selectedlines.length] = this.lines[i];
        return selectedlines;
    };

    // Return true if selected text contains has the specified prefix
    this.hasPrefix = function(prefix) {
        var line = this.lines[this.start.line];
        var start = this.start.position - prefix.length;
        if ((start < 0) || (line.substring(start, this.start.position) != prefix))
            return false;
        return true;
    };

    // Return true if selected text contains has the specified suffix
    this.hasSuffix = function(suffix) {
        var line = this.lines[this.end.line];
        var end = this.end.position + suffix.length;
        if ((end > line.length) || (line.substring(this.end.position, end) != suffix))
            return false;
        return true;
    };

    // Insert the line before the selection to the specified text. If force is
    // set to false and the line is already set, it will be left alone.
    this.insertPreviousLine = function(newline, force) {
        force = force !== undefined ? force : true;
        var prevnum = this.start.line - 1;
        if ((force) || ((prevnum >= 0) && (this.lines[prevnum] != newline))) {
            this.lines.splice(this.start.line, 0, newline);
            this.start.line += 1;
            this.end.line += 1;
        }
    };

    // Insert the line after the selection to the specified text. If force is
    // set to false and the line is already set, it will be left alone.
    this.insertNextLine = function(newline, force) {
        force = force !== undefined ? force : true;
        var nextnum = this.end.line + 1;
        if ((force) || ((nextnum < this.lines.length) && (this.lines[nextnum] != newline)))
            this.lines.splice(nextnum, 0, newline);
    };

    // Return true if selected text is wrapped with prefix & suffix
    this.isWrapped = function(prefix, suffix) {
        return ((this.hasPrefix(prefix)) && (this.hasSuffix(suffix)));
    };

    // Return the selection length
    this.length = function() {
        return this.val().length;
    };

    // Return true if all lines have the specified prefix. Optionally
    // specify prefix as a regular expression.
    this.linesHavePrefix = function(prefix) {
        for (var i=this.start.line; i <= this.end.line; i++) {
            var line = this.lines[i];
            if ((typeof(prefix) == 'string') && (!line.startswith(prefix))) {
                return false;
            } else if ((typeof(prefix) != 'string') && (!line.match(prefix))) {
                return false;
            }
        }
        return true;
    };

    // Prepend the specified text to the selection
    this.prepend = function(text) {
        var line = this.lines[this.start.line];
        var newline = line.substring(0, this.start.position) +
            text + line.substring(this.start.position, line.length);
        this.lines[this.start.line] = newline;
        // Update Class Variables
        if (this.start.line == this.end.line)
            this.end.position += text.length;
    };

    // Remove the prefix from each line in the selection. If the line
    // does not contain the specified prefix, it will be left alone.
    // Optionally specify prefix as a regular expression.
    this.removeLinePrefixes = function(prefix) {
        for (var i=this.start.line; i <= this.end.line; i++) {
            var line = this.lines[i];
            var match = prefix;
            // Check prefix is a regex
            if (typeof(prefix) != 'string')
                match = line.match(prefix)[0];
            // Do the replace
            if (line.startswith(match)) {
                this.lines[i] = line.substring(match.length, line.length);
                if (i == this.start.line)
                    this.start.position -= match.length;
                if (i == this.end.line)
                    this.end.position -= match.length;
            }

        }
    };

    // Remove the previous line. If regex is specified, it will
    // only be removed if there is a match.
    this.removeNextLine = function(regex) {
        var nextnum = this.end.line + 1;
        var removeit = false;
        if ((nextnum < this.lines.length) && (regex) && (this.lines[nextnum].match(regex)))
            removeit = true;
        if ((nextnum < this.lines.length) && (!regex))
            removeit = true;
        if (removeit)
            this.lines.splice(nextnum, 1);
    };

    // Remove the specified prefix from the selection
    this.removePrefix = function(prefix) {
        if (this.hasPrefix(prefix)) {
            var line = this.lines[this.start.line];
            var start = this.start.position - prefix.length;
            var newline = line.substring(0, start) +
                line.substring(this.start.position, line.length);
            this.lines[this.start.line] = newline;
            this.start.position -= prefix.length;
            if (this.start.line == this.end.line)
                this.end.position -= prefix.length;
        }
    };

    // Remove the previous line. If regex is specified, it will
    // only be removed if there is a match.
    this.removePreviousLine = function(regex) {
        var prevnum = this.start.line - 1;
        var removeit = false;
        if ((prevnum >= 0) && (regex) && (this.lines[prevnum].match(regex)))
            removeit = true;
        if ((prevnum >= 0) && (!regex))
            removeit = true;
        if (removeit) {
            this.lines.splice(prevnum, 1);
            this.start.line -= 1;
            this.end.line -= 1;
        }
    };

    // Remove the specified suffix from the selection
    this.removeSuffix = function(suffix) {
        if (this.hasSuffix(suffix)) {
            var line = this.lines[this.end.line];
            var end = this.end.position + suffix.length;
            var newline = line.substring(0, this.end.position) +
                line.substring(end, line.length);
            this.lines[this.end.line] = newline;
        }
    };

    // Set the prefix of each selected line. If the prefix is already and
    // set, the line willl be left alone.
    this.setLinePrefixes = function(prefix, increment) {
        increment = increment ? increment : false;
        for (var i=this.start.line; i <= this.end.line; i++) {
            if (!this.lines[i].startswith(prefix)) {
                // Check if prefix is incrementing
                if (increment) {
                    var num = parseInt(prefix.match(/\d+/)[0]);
                    prefix = prefix.replace(num, num+1);
                }
                // Add the prefix to the line
                var numspaces = this.lines[i].match(/^\s*/)[0].length;
                this.lines[i] = this.lines[i].lstrip();
                this.lines[i] = prefix + this.lines[i];
                if (i == this.start.line)
                    this.start.position += prefix.length - numspaces;
                if (i == this.end.line)
                    this.end.position += prefix.length - numspaces;
            }
        }
    };

    // Unwrap the selection prefix & suffix
    this.unwrap = function(prefix, suffix) {
        this.removePrefix(prefix);
        this.removeSuffix(suffix);
    };

    // Remove blank lines from before and after the selection.  If the
    // previous or next line is not blank, it will be left alone.
    this.unwrapBlankLines = function() {
        wysiwym.selection.removePreviousLine(/^\s*$/);
        wysiwym.selection.removeNextLine(/^\s*$/);
    };

    // Return the selection value
    this.val = function() {
        var value = '';
        for (var i=0; i < this.lines.length; i++) {
            var line = this.lines[i];
            if ((i == this.start.line) && (i == this.end.line)) {
                return line.substring(this.start.position, this.end.position);
            } else if (i == this.start.line) {
                value += line.substring(this.start.position, line.length) +'\n';
            } else if ((i > this.start.line) && (i < this.end.line)) {
                value += line +'\n';
            } else if (i == this.end.line) {
                value += line.substring(0, this.end.position)
            }
        }
        return value;
    };

    // Wrap the selection with the specified prefix & suffix
    this.wrap = function(prefix, suffix) {
        this.addPrefix(prefix);
        this.addSuffix(suffix);
    };

    // Wrap the selected lines with blank lines.  If there is already
    // a blank line in place, another one will not be added.
    this.wrapBlankLines = function() {
        if (wysiwym.selection.start.line > 0)
            wysiwym.selection.insertPreviousLine(BLANKLINE, false);
        if (wysiwym.selection.end.line < wysiwym.lines.length - 1)
            wysiwym.selection.insertNextLine(BLANKLINE, false);
    };

}


/*----------------------------------------------------------------------------------------------
 * Wysiwym Textarea
 * This can used used for some or all of your textarea modifications. It will keep track of
 * the the current text and selection positions. The general idea is to keep track of the
 * textarea in terms of Line objects.  A line object contains a lineType and supporting text.
 *--------------------------------------------------------------------------------------------- */
Wysiwym.Textarea = function(textarea) {
    this.textelem = textarea.get(0);                // Javascript textarea element
    this.textarea = textarea;                       // jQuery textarea object
    this.lines = [];                                // Current textarea lines
    this.selection = new Wysiwym.Selection(this);   // Selection properties & manipulation
    this.scroll = this.textelem.scrollTop;          // Current cursor scroll position

    // Return a string representation of this object.
    this.toString = function() {
        var str = 'TEXTAREA: #'+ this.textarea.attr('id') +'\n';
        str += this.selection.toString();
        str += 'SCROLL: '+ this.scroll +'px\n';
        str += '---\n';
        for (var i=0; i<this.lines.length; i++)
            str += 'LINE '+ i +': '+ this.lines[i] +'\n';
        return str;
    };

    // Return the current text value of this textarea object
    this.getProperties = function() {
        var newtext = '';           // New textarea value
        var selectionStart = 0;     // Absolute cursor start position
        var selectionEnd = 0;       // Absolute cursor end position
        for (var i=0; i < this.lines.length; i++) {
            if (i == this.selection.start.line)
                selectionStart = newtext.length + this.selection.start.position;
            if (i == this.selection.end.line)
                selectionEnd = newtext.length + this.selection.end.position;
            newtext += this.lines[i];
            if (i != this.lines.length - 1)
                newtext += '\n';
        }
        return [newtext, selectionStart, selectionEnd];
    };

    // Return the absolute start and end selection postions
    // StackOverflow #1: http://goo.gl/2vSnF
    // StackOverflow #2: http://goo.gl/KHm0d
    this.getSelectionStartEnd = function() {
        if (typeof(this.textelem.selectionStart) == 'number') {
            var startpos = this.textelem.selectionStart;
            var endpos = this.textelem.selectionEnd;
            if (this.textelem.value.indexOf('\r\n') !== -1) {
              //this fixes Opera, it has \r\n's instead of \n's
              startpos -= (this.textelem.value.substring(0, startpos).match(/\r\n/g)||[]).length;
              endpos -= (this.textelem.value.substring(0, endpos).match(/\r\n/g)||[]).length;
            }
        } else {
            this.textelem.focus();
            var text = this.textelem.value.replace(/\r\n/g, '\n');
            var textlen = text.length;
            var range = document.selection.createRange();
            var textrange = this.textelem.createTextRange();
            textrange.moveToBookmark(range.getBookmark());
            var endrange = this.textelem.createTextRange();
            endrange.collapse(false);
            if (textrange.compareEndPoints('StartToEnd', endrange) > -1) {
                var startpos = textlen;
                var endpos = textlen;
            } else {
                var startpos = -textrange.moveStart('character', -textlen);
                //startpos += text.slice(0, startpos).split('\n').length - 1;
                if (textrange.compareEndPoints('EndToEnd', endrange) > -1) {
                    var endpos = textlen;
                } else {
                    var endpos = -textrange.moveEnd('character', -textlen);
                    //endpos += text.slice(0, endpos).split('\n').length - 1;
                }
            }
        }
        return [startpos, endpos];
    };

    // Update the textarea with the current lines and cursor settings
    this.update = function() {
        var properties = this.getProperties();
        var newtext = properties[0];
        var selectionStart = properties[1];
        var selectionEnd = properties[2];
        this.textarea.val(newtext);
        if (this.textelem.setSelectionRange) {
            if (this.textelem.value.indexOf('\r\n') !== -1) {
              //this fixes Opera, it has \r\n's instead of \n's
              var virtual = newtext.replace(/\r\n/g,'\n');
              var deltaStart = (virtual.substring(0, selectionStart).match(/\n/g)||[]).length;
              var deltaEnd = (virtual.substring(0, selectionEnd).match(/\n/g)||[]).length;
              this.textelem.setSelectionRange(selectionStart + deltaStart, selectionEnd + deltaEnd);
            }else{
              this.textelem.setSelectionRange(selectionStart, selectionEnd);
            }
        } else if (this.textelem.createTextRange) {
            var range = this.textelem.createTextRange();
            range.collapse(true);
            range.moveStart('character', selectionStart);
            range.moveEnd('character', selectionEnd - selectionStart);
            range.select();
        }
        this.textelem.scrollTop = this.scroll;
        this.textarea.focus();
    };

    // Initialize the Wysiwym.Textarea
    this.init = function() {
        var text = textarea.val().replace(/\r\n/g, '\n');
        var selectionInfo = this.getSelectionStartEnd(this.textelem);
        var selectionStart = selectionInfo[0];
        var selectionEnd = selectionInfo[1];
        var endline = 0;
        while (endline >= 0) {
            var endline = text.indexOf('\n');
            var line = text.substring(0, endline >= 0 ? endline : text.length);
            if ((selectionStart <= line.length) && (selectionEnd >= 0)) {
                if (selectionStart >= 0) {
                    this.selection.start.line = this.lines.length;
                    this.selection.start.position = selectionStart;
                }
                if (selectionEnd <= line.length) {
                    this.selection.end.line = this.lines.length;
                    this.selection.end.position = selectionEnd;
                }
            }
            this.lines[this.lines.length] = line;
            text = endline >= 0 ? text.substring(endline + 1, text.length) : '';
            selectionStart -= endline + 1;
            selectionEnd -= endline + 1;
        }
        // Tweak the selection end position if its on the edge
        if ((this.selection.end.position == 0) && (this.selection.end.line != this.selection.start.line)) {
            this.selection.end.line -= 1;
            this.selection.end.position = this.lines[this.selection.end.line].length;
        }
    };
    this.init();
};


/*----------------------------------------------------------------------------------------------
 * Wysiwym Button
 * Represents a single button in the Wysiwym editor.
 *--------------------------------------------------------------------------------------------- */
Wysiwym.Button = function(name, callback, data, cssclass) {
    this.name = name;                  // Button Name
    this.callback = callback;          // Callback function for this button
    this.data = data ? data : {};      // Callback arguments
    this.cssclass = cssclass;          // CSS Class to apply to button

    // Return the CSS Class for this button
    this.getCssClass = function() {
        if (!this.cssclass)
            return "icon-" + this.name.toLowerCase().replace(' ', '');
        return "icon-" + this.cssclass;
    };

    // Create and return a new Button jQuery element
    this.create = function() {
        var button = $("<div></div>").addClass('btn');
        var icon = $('<i class=""></i>').addClass(this.getCssClass()).attr('title',this.name);
        var text = $('<span class="text">'+ this.name +'</span>');
        text.attr('unselectable', 'on');
        icon.attr('unselectable', 'on');
        button.append(icon).append(text);
        return button;
    };
}


/*----------------------------------------------------------------------------------------------
 * Wysiwym Button Callbacks
 * Useful functions to help easily create Wysiwym buttons
 *--------------------------------------------------------------------------------------------- */
// Wrap the selected text with a prefix and suffix string.
Wysiwym.span = function(event) {
    var markup = event.data.markup;    // (required) Markup Language
    var prefix = event.data.prefix;    // (required) Text wrap prefix
    var suffix = event.data.suffix;    // (required) Text wrap suffix
    var text = event.data.text;        // (required) Default wrap text (if nothing selected)
    var wysiwym = new Wysiwym.Textarea(markup.textarea);
    if (wysiwym.selection.isWrapped(prefix, suffix)) {
        wysiwym.selection.unwrap(prefix, suffix);
    } else if (wysiwym.selection.length() == 0) {
        wysiwym.selection.append(text);
        wysiwym.selection.wrap(prefix, suffix);
    } else {
        wysiwym.selection.wrap(prefix, suffix);
    }
    wysiwym.update();
};

// Prefix each line in the selection with the specified text.
Wysiwym.list = function(event) {
    var markup = event.data.markup;    // (required) Markup Language
    var prefix = event.data.prefix;    // (required) Line prefix text
    var wrap = event.data.wrap;        // (optional) If true, wrap list with blank lines
    var regex = event.data.regex;      // (optional) Set to regex matching prefix to increment num
    var wysiwym = new Wysiwym.Textarea(markup.textarea);
    if (wysiwym.selection.linesHavePrefix(regex?regex:prefix)) {
        wysiwym.selection.removeLinePrefixes(regex?regex:prefix);
        if (wrap) { wysiwym.selection.unwrapBlankLines(); }
    } else {
        wysiwym.selection.setLinePrefixes(prefix, regex);
        if (wrap) { wysiwym.selection.wrapBlankLines(); }
    }
    wysiwym.update();
};

// Prefix each line in the selection according based off the first selected line.
Wysiwym.block = function(event) {
    var markup = event.data.markup;    // (required) Markup Language
    var prefix = event.data.prefix;    // (required) Line prefix text
    var wrap = event.data.wrap;        // (optional) If true, wrap list with blank lines
    var wysiwym = new Wysiwym.Textarea(markup.textarea);
    var firstline = wysiwym.selection.getLines()[0];
    if (firstline.startswith(prefix)) {
        wysiwym.selection.removeLinePrefixes(prefix);
        if (wrap) { wysiwym.selection.unwrapBlankLines(); }
    } else {
        wysiwym.selection.addLinePrefixes(prefix);
        if (wrap) { wysiwym.selection.wrapBlankLines(); }
    }
    wysiwym.update();
};


/*----------------------------------------------------------------------------------------------
 * Wysiwym AutoIndent
 * Handles auto-indentation when enter is pressed
 *--------------------------------------------------------------------------------------------- */
Wysiwym.autoIndent = function(event) {
    // Only continue if keyCode == 13
    if (event.keyCode != 13)
        return true;
    // ReturnKey pressed, lets indent!
    var markup = event.data.markup;    // Markup Language
    var wysiwym = new Wysiwym.Textarea(markup.textarea);
    var linenum = wysiwym.selection.start.line;
    var line = wysiwym.lines[linenum];
    var postcursor = line.substring(wysiwym.selection.start.position, line.length);
    // Make sure nothing is selected & there is no text after the cursor
    if ((wysiwym.selection.length() != 0) || (postcursor))
        return true;
    // So far so good; check for a matching indent regex
    for (var i=0; i < markup.autoindents.length; i++) {
        var regex = markup.autoindents[i];
        var matches = line.match(regex);
        if (matches) {
            var prefix = matches[0];
            var suffix = line.substring(prefix.length, line.length);
            // NOTE: If a selection is made in the regex, it's assumed that the
            // matching text is a number should be auto-incremented (ie: #. lists).
            if (matches.length == 2) {
                var num = parseInt(matches[1]);
                prefix = prefix.replace(matches[1], num+1);
            }
            if (suffix) {
                // Regular auto-indent; Repeat the prefix
                wysiwym.selection.addPrefix('\n'+ prefix);
                wysiwym.update();
                return false;
            } else {
                // Return on blank indented line (clear prefix)
                wysiwym.lines[linenum] = BLANKLINE;
                wysiwym.selection.start.position = 0;
                wysiwym.selection.end.position = wysiwym.selection.start.position;
                if (markup.exitindentblankline) {
                    wysiwym.selection.addPrefix('\n');
                }
                wysiwym.update();
                return false;
            }
        }
    }
    return true;
}


/* ---------------------------------------------------------------------------
 * Wysiwym Markdown
 * Markdown markup language for the Wysiwym editor
 * Reference: http://daringfireball.net/projects/markdown/syntax
 *---------------------------------------------------------------------------- */
Wysiwym.Markdown = function(textarea) {
    this.textarea = textarea;    // jQuery textarea object

    // Initialize the Markdown Buttons
    this.buttons = [
        new Wysiwym.Button('<i class="icon-bold" title="Bold"></i>', Wysiwym.span,  {prefix:'**', suffix:'**', text:'bold text'}),
        new Wysiwym.Button('<i class="icon-italic" title="Italic"></i>', Wysiwym.span,  {prefix:'_',  suffix:'_',  text:'italic text'}),
        new Wysiwym.Button('<i class="icon-link" title="Link"></i>',   Wysiwym.span,  {prefix:'[',  suffix:'](http://example.com)', text:'link text'}),
	'|',
		new Wysiwym.Button('<i class="icon-comments-alt" title="Quote"></i>',  Wysiwym.list,  {prefix:'> ', wrap:true, text:'quote text'}),
        new Wysiwym.Button('<i class="icon-list-ul" title="Bullet List"></i>', Wysiwym.list, {prefix:'* ', wrap:true}),
        new Wysiwym.Button('<i class="icon-list-ol" title="Numered List"></i>', Wysiwym.list, {prefix:'0. ', wrap:true, regex:/^\s*\d+\.\s/}),
    '|',
    	new Wysiwym.Button('<i class="icon-picture" title="Image"></i>',   Wysiwym.span,  {prefix:'![Alt text](',  suffix:' "Optional title")', text:'image url'}),
    ];

    // Configure auto-indenting
    this.exitindentblankline = true;    // True to insert blank line when exiting auto-indent ;)
    this.autoindents = [                // Regex lookups for auto-indent
        /^\s*\*\s/,                     // Bullet list
        /^\s*(\d+)\.\s/,                // Number list (number selected for auto-increment)
        /^\s*\>\s/,                     // Quote list
        /^\s{4}\s*/                     // Code block
    ];

    // Syntax items to display in the help box
    this.help = [
        { label: 'Bold',   syntax: '**bold**' },
        { label: 'Italic', syntax: '_italics_' },
        { label: 'Link',   syntax: '[pk!](http://google.com)' },
        { label: 'Blockquote', syntax: '&gt; quoted text' },
        { label: 'Bullet List', syntax: '* list item' },
        { label: 'Number List', syntax: '1. list item' },
        { label: 'Image', syntax: '![Alt text](imageurl "Optional title")' },

    ];
};

/*----------------------------------------------------------------------
 * Additional Javascript Prototypes
 *-------------------------------------------------------------------- */
String.prototype.strip = function() { return this.replace(/^\s+|\s+$/g, ''); };
String.prototype.lstrip = function() { return this.replace(/^\s+/, ''); };
String.prototype.rstrip = function() { return this.replace(/\s+$/, ''); };
String.prototype.startswith = function(str) { return this.substring(0, str.length) == str; };
String.prototype.endswith = function(str) { return this.substring(str.length, this.length) == str; };