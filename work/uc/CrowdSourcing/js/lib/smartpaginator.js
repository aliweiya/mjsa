/* smartpaginator */
;(function(c){c.fn.extend({smartpaginator:function(z){var a=c.extend({totalrecords:0,recordsperpage:0,length:10,next:"Next",prev:"Prev",first:"First",last:"Last",go:"Go",theme:"green",display:"double",initval:1,datacontainer:"",dataelement:"",onchange:null,controlsalways:!1},z);return this.each(function(){function u(d){q.find("span").remove();var b=(d+1)*a.recordsperpage;b>a.totalrecords&&(b=a.totalrecords);q.append(c("\x3cspan/\x3e").append(c("\x3cb/\x3e").text(d*a.recordsperpage+1))).append(c("\x3cspan/\x3e").text("-")).append(c("\x3cspan/\x3e").append(c("\x3cb/\x3e").text(b))).append(c("\x3cspan/\x3e").text("\u6761\uff0c\u5171 ")).append(c("\x3cspan/\x3e").append(c("\x3cb/\x3e").text(a.totalrecords+"\u6761")))}function v(d){f.find("li").remove();if(!(a.totalrecords<=a.recordsperpage)){for(var b=d;b<d+a.length&&b!=g;b++)f.append(c("\x3cli/\x3e").append(c("\x3ca\x3e").attr("id",b+1).addClass(a.theme).addClass("normal").attr("href","javascript:void(0)").text(b+1)).click(function(){e=d+c(this).closest("li").prevAll().length;h(e)}));u(d);k.val(d+1);f.find("li a").addClass(a.theme).removeClass("active");f.find("li:eq(0) a").addClass(a.theme).addClass("active");b=(f.find("li:eq(0) a").outerWidth()+2*parseInt(f.find("li:eq(0)").css("margin-left")))*f.find("li").length;f.css({width:b});w(d)}}function h(d){var b=a.length/2;0<a.length%2&&(b=(a.length+1)/2);var h=0;if(0<=d&&d<g){d>=b&&(g-d>b?h=d-(b-1):g>a.length&&(h=g-a.length));v(h);u(e);f.find("li a").removeClass("active");k.val(e+1);f.find('li a[id\x3d"'+(d+1)+'"]').addClass("active");b=e*a.recordsperpage;d=b+a.recordsperpage;d>a.totalrecords&&(d=a.totalrecords%d);if(x&&null!=a.onchange)a.onchange(e+1,b,d);if(null!=t&&0<t.length)for(r.css("display","none"),0<c(r[0]).find("th").length&&(c(r[0]).css("display",""),b++,d++);b<d;b++)c(r[b]).css("display","");w()}}function w(){g>a.length?(0<e?a.controlsalways?l.css("display","").removeClass("disabled"):l.css("display",""):a.controlsalways?l.css("display","").addClass("disabled"):l.css("display","none"),e>a.length/2-1?a.controlsalways?m.css("display","").removeClass("disabled"):m.css("display",""):a.controlsalways?m.css("display","").addClass("disabled"):m.css("display","none"),e==g-1?a.controlsalways?n.css("display","").addClass("disabled"):n.css("display","none"):a.controlsalways?n.css("display","").removeClass("disabled"):n.css("display",""),g>a.length&&e<g-a.length/2-1?a.controlsalways?p.css("display","").removeClass("disabled"):p.css("display",""):a.controlsalways?p.css("display","").addClass("disabled"):p.css("display","none")):a.controlsalways?(m.css("display","").addClass("disabled"),l.css("display","").addClass("disabled"),n.css("display","").addClass("disabled"),p.css("display","").addClass("disabled")):(m.css("display","none"),l.css("display","none"),n.css("display","none"),p.css("display","none"))}var e=0,g=parseInt(a.totalrecords/a.recordsperpage);0<a.totalrecords%a.recordsperpage&&g++;var x=!1,q=c(this).addClass("pager").addClass(a.theme);q.find("ul").remove();q.find("div").remove();q.find("span").remove();var t,r;""!=a.datacontainer&&(t=c("#"+a.datacontainer),r=c(""+a.dataelement+"",t));var f=c("\x3cul/\x3e"),l=c("\x3cdiv/\x3e").text(a.prev).click(function(){e=parseInt(f.find("li a.active").text())-1;h(--e)}).addClass("btn"),n=c("\x3cdiv/\x3e").text(a.next).click(function(){e=parseInt(f.find("li a.active").text());h(e)}).addClass("btn"),m=c("\x3cdiv/\x3e").text(a.first).click(function(){e=0;h(0)}).addClass("btn"),p=c("\x3cdiv/\x3e").text(a.last).click(function(){e=g-1;h(e)}).addClass("btn"),k=c("\x3cinput/\x3e").attr("type","text").keydown(function(a){var b;b=k;var c=b.get(0).selectionStart,e=b.get(0).selectionEnd,f=document.selection;b=f&&0!=f.createRange().text.length?!0:f||0==b.val().substring(c,e).length?!1:!0;b&&k.val("");48<=a.which&&58>a.which?(b=parseInt(k.val()+(a.which-48)),0<b&&b<=g||a.preventDefault()):8!=a.which&&46!=a.which&&a.preventDefault()}),y=c("\x3cinput/\x3e").attr("type","button").attr("value",a.go).addClass("btn").click(function(){if(""==k.val())return!1;e=parseInt(k.val())-1;h(e)});q.append(m).append(l).append(f).append(n).append(p).append(c("\x3cdiv/\x3e").addClass("short").append(k).append(y));"single"==a.display&&(y.css("display","none"),k.css("display","none"));v(0);0==a.initval&&(a.initval=1);e=a.initval-1;h(e);x=!0})}})})(jQuery);