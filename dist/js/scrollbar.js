/*! formstone v1.1.4 [scrollbar.js] 2016-06-07 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./touch"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){q=b.$body}function d(a){v.iterate.call(w,i)}function e(){w=a(s.base)}function f(a){var b="";b+='<div class="'+t.bar+'" role="scrollbar">',b+='<div class="'+t.track+'">',b+='<button type="button" class="'+t.handle+'"></button>',b+="</div></div>",a.paddingRight=parseInt(this.css("padding-right"),10),a.paddingBottom=parseInt(this.css("padding-bottom"),10),a.thisClasses=[t.base,a.theme,a.customClass,a.horizontal?t.horizontal:""],this.addClass(a.thisClasses.join(" ")).wrapInner('<div class="'+t.content+'" />').prepend(b),a.$content=this.find(s.content),a.$bar=this.find(s.bar),a.$track=this.find(s.track),a.$handle=this.find(s.handle),a.trackMargin=parseInt(a.trackMargin,10),a.id=this.attr("id"),a.id?a.ariaId=a.id:(a.ariaId=a.rawGuid,this.attr("id",a.ariaId)),a.$bar.attr("aria-controls",a.ariaId).attr("aria-orientation",a.horizontal?"horizontal":"vertical"),a.$content.on(u.scroll,a,j),a.mouseWheel&&a.$content.on("DOMMouseScroll"+u.namespace+" mousewheel"+u.namespace,a,k),a.$track.fsTouch({axis:a.horizontal?"x":"y",pan:!0}).on(u.panStart,a,m).on(u.pan,a,n).on(u.panEnd,a,o),i(a),e()}function g(a){a.$track.fsTouch("destroy"),a.$bar.remove(),a.$content.off(u.namespace).contents().unwrap(),this.removeClass(a.thisClasses.join(" ")).off(u.namespace),this.attr("id")===a.rawGuid&&this.removeAttr("id")}function h(b,c,d){var e=d||b.duration,f={};if("number"!==a.type(c)){var g=a(c);if(g.length>0){var h=g.position();c=b.horizontal?h.left+b.$content.scrollLeft():h.top+b.$content.scrollTop()}else c="top"===c?0:"bottom"===c?b.horizontal?b.$content[0].scrollWidth:b.$content[0].scrollHeight:b.$content.scrollTop()}f[b.horizontal?"scrollLeft":"scrollTop"]=c,b.$content.stop().animate(f,e)}function i(a){a.$el.addClass(t.isSetup);var b={},c={},d={},e=0,f=!0;if(a.horizontal){a.barHeight=a.$content[0].offsetHeight-a.$content[0].clientHeight,a.frameWidth=a.$content.outerWidth(),a.trackWidth=a.frameWidth-2*a.trackMargin,a.scrollWidth=a.$content[0].scrollWidth,a.ratio=a.trackWidth/a.scrollWidth,a.trackRatio=a.trackWidth/a.scrollWidth,a.handleWidth=a.handleSize>0?a.handleSize:a.trackWidth*a.trackRatio,a.scrollRatio=(a.scrollWidth-a.frameWidth)/(a.trackWidth-a.handleWidth),a.handleBounds={left:0,right:a.trackWidth-a.handleWidth},a.$content.css({paddingBottom:a.barHeight+a.paddingBottom});var g=a.$content.scrollLeft();e=g*a.ratio,f=a.scrollWidth<=a.frameWidth,b={width:a.frameWidth},c={width:a.trackWidth,marginLeft:a.trackMargin,marginRight:a.trackMargin},d={width:a.handleWidth},a.$bar.attr("aria-valuemin",a.handleBounds.left).attr("aria-valuemax",a.handleBounds.right)}else{a.barWidth=a.$content[0].offsetWidth-a.$content[0].clientWidth,a.frameHeight=a.$content.outerHeight(),a.trackHeight=a.frameHeight-2*a.trackMargin,a.scrollHeight=a.$content[0].scrollHeight,a.ratio=a.trackHeight/a.scrollHeight,a.trackRatio=a.trackHeight/a.scrollHeight,a.handleHeight=a.handleSize>0?a.handleSize:a.trackHeight*a.trackRatio,a.scrollRatio=(a.scrollHeight-a.frameHeight)/(a.trackHeight-a.handleHeight),a.handleBounds={top:0,bottom:a.trackHeight-a.handleHeight};var h=a.$content.scrollTop();e=h*a.ratio,f=a.scrollHeight<=a.frameHeight,b={height:a.frameHeight},c={height:a.trackHeight,marginBottom:a.trackMargin,marginTop:a.trackMargin},d={height:a.handleHeight},a.$bar.attr("aria-valuemin",a.handleBounds.top).attr("aria-valuemax",a.handleBounds.bottom)}f?a.$el.removeClass(t.active):a.$el.addClass(t.active),a.$bar.css(b),a.$track.css(c),a.$handle.css(d),a.panning=!1,p(a,e),j({data:a}),a.$el.removeClass(t.setup)}function j(a){v.killEvent(a);var b=a.data,c={};if(!b.panning){if(b.horizontal){var d=b.$content.scrollLeft();0>d&&(d=0),b.handleLeft=d/b.scrollRatio,b.handleLeft>b.handleBounds.right&&(b.handleLeft=b.handleBounds.right),c={left:b.handleLeft},b.$bar.attr("aria-valuenow",b.handleLeft)}else{var e=b.$content.scrollTop();0>e&&(e=0),b.handleTop=e/b.scrollRatio,b.handleTop>b.handleBounds.bottom&&(b.handleTop=b.handleBounds.bottom),c={top:b.handleTop}}b.$handle.css(c),b.$bar.attr("aria-valuenow",b.handleTop)}}function k(a){var b,c,d=a.data;if(d.horizontal){var e=d.$content[0].scrollLeft,f=d.$content[0].scrollWidth,g=d.$content.outerWidth();if(b="DOMMouseScroll"===a.type?-40*a.originalEvent.detail:a.originalEvent.wheelDelta,c=b>0?"right":"left","left"===c&&-b>f-g-e)return d.$content.scrollLeft(f),l(a);if("right"===c&&b>e)return d.$content.scrollLeft(0),l(a)}else{var h=d.$content[0].scrollTop,i=d.$content[0].scrollHeight,j=d.$content.outerHeight();if(b="DOMMouseScroll"===a.type?-40*a.originalEvent.detail:a.originalEvent.wheelDelta,c=b>0?"up":"down","down"===c&&-b>i-j-h)return d.$content.scrollTop(i),l(a);if("up"===c&&b>h)return d.$content.scrollTop(0),l(a)}}function l(a){return v.killEvent(a),a.returnValue=!1,!1}function m(a){var b,c=a.data,d=c.$track.offset();c.panning=!0,b=c.horizontal?c.handleLeft=a.pageX-d.left-c.handleWidth/2:c.handleTop=a.pageY-d.top-c.handleHeight/2,p(c,b)}function n(a){var b,c=a.data;b=c.horizontal?c.handleLeft+a.deltaX:c.handleTop+a.deltaY,p(c,b)}function o(a){var b=a.data;b.panning=!1,b.horizontal?b.handleLeft+=a.deltaX:b.handleTop+=a.deltaY}function p(a,b){var c={};a.horizontal?(b<a.handleBounds.left&&(b=a.handleBounds.left),b>a.handleBounds.right&&(b=a.handleBounds.right),c={left:b},a.$content.scrollLeft(Math.round(b*a.scrollRatio))):(b<a.handleBounds.top&&(b=a.handleBounds.top),b>a.handleBounds.bottom&&(b=a.handleBounds.bottom),c={top:b},a.$content.scrollTop(Math.round(b*a.scrollRatio))),a.$handle.css(c)}var q,r=b.Plugin("scrollbar",{widget:!0,defaults:{customClass:"",duration:0,handleSize:0,horizontal:!1,mouseWheel:!0,theme:"fs-light",trackMargin:0},classes:["content","bar","track","handle","horizontal","setup","active"],methods:{_setup:c,_construct:f,_destruct:g,_resize:d,scroll:h,resize:i}}),s=r.classes,t=s.raw,u=r.events,v=r.functions,w=(b.$window,[])});