window.ol||(window.ol={});(function(){var b={max:Number.MAX_VALUE,exceedCallback:null},a=function(f){var d=f.length,e=f.replace(/[^\x00-\xff]/g,"").length,c=(e%2==0?e/2:parseInt(e/2)+1)+(d-e);return c};ol.wordCount=function(c,g,e){var f=jQuery,d=f.isArray(e);f(c).each(function(j){var h=d?e[j]:e;h=f.extend({},b,h);if(typeof(g)=="function"){g.call(this,a(this.value))}else{f(g).eq(j).html(a(this.value))}f(this).bind("keyup",function(){var i=a(this.value);if(i>h.max){if(h.exceedCallback){h.exceedCallback()}}if(typeof(g)=="function"){g.call(this,i)}else{f(g).eq(j).html(i)}})})}})();