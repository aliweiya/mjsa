/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 3.0.3
*/
(function(d){if(void 0===d.fn.inputmask){var S=function(e){var a=document.createElement("input");e="on"+e;var d=e in a;d||(a.setAttribute(e,"return;"),d="function"==typeof a[e]);return d},I=function(e,a,c){return(e=c.aliases[e])?(e.alias&&I(e.alias,void 0,c),d.extend(!0,c,e),d.extend(!0,c,a),!0):!1},J=function(e){function a(a){function d(a,f,e,c){this.matches=[];this.isGroup=a||!1;this.isOptional=f||!1;this.isQuantifier=e||!1;this.isAlternator=c||!1;this.quantifier={min:1,max:1}}function c(a,f,d){var g=
e.definitions[f];d=void 0!=d?d:a.matches.length;if(g&&!v){for(var m=g.prevalidator,u=m?m.length:0,h=1;h<g.cardinality;h++){var n=u>=h?m[h-1]:[],r=n.validator,n=n.cardinality;a.matches.splice(d++,0,{fn:r?"string"==typeof r?RegExp(r):new function(){this.test=r}:/./,cardinality:n?n:1,optionality:a.isOptional,casing:g.casing,def:g.definitionSymbol||f})}a.matches.splice(d++,0,{fn:g.validator?"string"==typeof g.validator?RegExp(g.validator):new function(){this.test=g.validator}:/./,cardinality:g.cardinality,
optionality:a.isOptional,casing:g.casing,def:g.definitionSymbol||f})}else a.matches.splice(d++,0,{fn:null,cardinality:0,optionality:a.isOptional,casing:null,def:f}),v=!1}for(var h=/(?:[?*+]|\{[0-9]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,v=!1,q=new d,f,g=[],u=[];f=h.exec(a);)switch(f=f[0],f.charAt(0)){case e.optionalmarker.end:case e.groupmarker.end:var n=g.pop();0<g.length?g[g.length-1].matches.push(n):q.matches.push(n);break;case e.optionalmarker.start:g.push(new d(!1,!0));break;case e.groupmarker.start:g.push(new d(!0));
break;case e.quantifiermarker.start:n=new d(!1,!1,!0);f=f.replace(/[{}]/g,"");var r=f.split(",");f=isNaN(r[0])?r[0]:parseInt(r[0]);r=1==r.length?f:isNaN(r[1])?r[1]:parseInt(r[1]);n.quantifier={min:f,max:r};if("*"==r||"+"==r)e.greedy=!1;if(0<g.length){r=g[g.length-1].matches;f=r.pop();if(!f.isGroup){var z=new d(!0);z.matches.push(f);f=z}r.push(f);r.push(n)}else f=q.matches.pop(),f.isGroup||(z=new d(!0),z.matches.push(f),f=z),q.matches.push(f),q.matches.push(n);break;case e.escapeChar:v=!0;break;case e.alternatormarker:break;
default:0<g.length?c(g[g.length-1],f):(0<q.matches.length&&(n=q.matches[q.matches.length-1],n.isGroup&&(n.isGroup=!1,c(n,e.groupmarker.start,0),c(n,e.groupmarker.end))),c(q,f))}0<q.matches.length&&u.push(q);return u}function c(c,h){e.numericInput&&(c=c.split("").reverse().join(""));if(void 0!=c&&""!=c){if(0<e.repeat||"*"==e.repeat||"+"==e.repeat)c=e.groupmarker.start+c+e.groupmarker.end+e.quantifiermarker.start+("*"==e.repeat?0:"+"==e.repeat?1:e.repeat)+","+e.repeat+e.quantifiermarker.end;void 0==
d.inputmask.masksCache[c]&&(d.inputmask.masksCache[c]={mask:c,maskToken:a(c),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:h});return d.extend(!0,{},d.inputmask.masksCache[c])}}var h=[];d.isFunction(e.mask)&&(e.mask=e.mask.call(this,e));d.isArray(e.mask)?d.each(e.mask,function(a,d){void 0!=d.mask?h.push(c(d.mask.toString(),d)):h.push(c(d.toString()))}):(1==e.mask.length&&!1==e.greedy&&0!=e.repeat&&(e.placeholder=""),h=void 0!=e.mask.mask?c(e.mask.mask.toString(),e.mask):c(e.mask.toString()));
return h},da="function"===typeof ScriptEngineMajorVersion?ScriptEngineMajorVersion():10<=(new Function("/*@cc_on return @_jscript_version; @*/"))(),t=navigator.userAgent,ea=null!==t.match(/iphone/i),fa=null!==t.match(/android.*safari.*/i),ga=null!==t.match(/android.*chrome.*/i),Y=null!==t.match(/android.*firefox.*/i),Z=/Kindle/i.test(t)||/Silk/i.test(t)||/KFTT/i.test(t)||/KFOT/i.test(t)||/KFJWA/i.test(t)||/KFJWI/i.test(t)||/KFSOWI/i.test(t)||/KFTHWA/i.test(t)||/KFTHWI/i.test(t)||/KFAPWA/i.test(t)||
/KFAPWI/i.test(t),T=S("paste")?"paste":S("input")?"input":"propertychange",F=function(e,a,c){function h(b,A,d){A=A||0;var f=[],c,l=0,g;do{if(!0===b&&e.validPositions[l]){var p=e.validPositions[l];g=p.match;c=p.locator.slice();f.push(null==g.fn?g.def:!0===d?p.input:a.placeholder.charAt(l%a.placeholder.length))}else c=v(l,!0,c,l-1),c=c[a.greedy||A>l?0:c.length-1],g=c.match,c=c.locator.slice(),f.push(null==g.fn?g.def:a.placeholder.charAt(l%a.placeholder.length));l++}while((void 0==K||l-1<K)&&null!=g.fn||
null==g.fn&&""!=g.def||A>=l);f.pop();return f}function m(b){var a=e;a.buffer=void 0;a.tests={};!0!==b&&(a._buffer=void 0,a.validPositions={},a.p=-1)}function H(b){var a=e;b=-1;for(var f in a.validPositions)a=parseInt(f),a>b&&(b=a);return b}function B(b,f,x,k){if(a.insertMode&&void 0!=e.validPositions[b]&&void 0==k){k=d.extend(!0,{},e.validPositions);for(var c=t(z());c>b&&0<=c;c--)if(r(c)){var l=t(c),g=e.validPositions[l];void 0!=g&&D(c).def==D(l).def&&void 0==e.validPositions[c]&&!1!==n(c,g.input,
x,!0)&&delete e.validPositions[l]}if(void 0==e.validPositions[b])e.validPositions[b]=f;else return e.validPositions=d.extend(!0,{},k),!1}else e.validPositions[b]=f;return!0}function D(b){return e.validPositions[b]?e.validPositions[b].match:v(b)[0].match}function v(b,a,f,d){function c(a,f,d,e){function A(d,e,k){var l=g;if(g==b&&void 0==d.matches)return p.push({match:d,locator:e.reverse()}),!0;if(void 0!=d.matches)if(d.isGroup&&!0!==k){if(d=A(a.matches[x+1],e))return!0}else if(d.isOptional){var u=d;
if(d=c(d,f,e,k))d=p[p.length-1].match,(d=0==u.matches.indexOf(d))&&(h=!0),g=l}else{if(!d.isAlternator)if(d.isQuantifier&&!0!==k)for(l=d,k=0<f.length&&!0!==k?f.shift():0;k<(isNaN(l.quantifier.max)?k+1:l.quantifier.max)&&g<=b;k++){if(u=a.matches[a.matches.indexOf(l)-1],d=A(u,[k].concat(e),!0))if(d=p[p.length-1].match,k>l.quantifier.min-1&&(d.optionalQuantifier=!0),d=0==u.matches.indexOf(d))if(k>l.quantifier.min-1){h=!0;g=b;break}else return!0;else return!0}else if(d=c(d,f,e,k))return!0}else g++}for(var x=
0<f.length?f.shift():0;x<a.matches.length;x++)if(!0!==a.matches[x].isQuantifier){var k=A(a.matches[x],[x].concat(d),e);if(k&&g==b)return k;if(g>b)break}}var l=e.maskToken,g=f?d:0;d=f||[0];var p=[],h=!1;if(!0!==a&&e.tests[b]&&!e.validPositions[b])return e.tests[b];if(void 0==f){for(a=b-1;void 0==(f=e.validPositions[a])&&-1<a;)a--;if(void 0!=f&&-1<a)g=a,d=f.locator.slice();else{for(a=b-1;void 0==(f=e.tests[a])&&-1<a;)a--;void 0!=f&&-1<a&&(g=a,d=f[0].locator.slice())}}for(a=d.shift();a<l.length&&!(c(l[a],
d,[a])&&g==b||g>b);a++);(0==p.length||h&&2>p.length)&&p.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]});return e.tests[b]=p}function q(){void 0==e._buffer&&(e._buffer=h(!1,1));return e._buffer}function f(){void 0==e.buffer&&(e.buffer=h(!0,H(),!0));return e.buffer}function g(b,a){for(var e=f(),k=b;k<a;k++)if(e[k]!=P(k)){var c=v(k,!1)[0];B(k,d.extend({},c,{input:u(e[k],c.match)}),!0)}}function u(b,a){switch(a.casing){case "upper":b=b.toUpperCase();break;case "lower":b=
b.toLowerCase()}return b}function n(b,A,x,k){function c(b,A,x,k){var l=!1;d.each(v(b,!x),function(c,h){for(var p=h.match,n=A?1:0,E="",r=f(),Q=p.cardinality;Q>n;Q--)E+=void 0==e.validPositions[b-(Q-1)]?P(b-(Q-1)):e.validPositions[b-(Q-1)].input;A&&(E+=A);l=null!=p.fn?p.fn.test(E,r,b,x,a):A!=p.def&&A!=a.skipOptionalPartCharacter||""==p.def?!1:{c:p.def,pos:b};if(!1!==l)return n=void 0!=l.c?l.c:A,n=n==a.skipOptionalPartCharacter?p.def:n,E=b,l.refreshFromBuffer?(r=l.refreshFromBuffer,x=!0,E=void 0!=l.pos?
l.pos:b,h=v(E,!x)[0],!0===r?(e.validPositions={},g(0,f().length)):g(r.start,r.end)):!0!==l&&l.pos!=b&&(E=l.pos,g(b,E),h=v(E,!x)[0]),0<c&&m(!0),B(E,d.extend({},h,{input:u(n,p)}),x,k)||(l=!1),!1});return l}x=!0===x;var l=c(b,A,x,k);if(!x&&(a.insertMode||void 0==e.validPositions[C(b)])&&!1===l&&!r(b))for(var h=b+1,p=C(b);h<=p;h++)if(l=c(h,A,x,k),!1!==l){b=h;break}!0===l&&(l={pos:b});return l}function r(b){b=D(b);return null!=b.fn?b.fn:!1}function z(){var b;K=s.prop("maxLength");-1==K&&(K=void 0);if(!1==
a.greedy){b=H()+1;for(var d=D(b);null!=d.fn||""!=d.def;)d=D(++b),!0!==d.optionality&&(d=v(b),d=d[d.length-1].match);b=h(!0,b).length;e.tests={}}else b=f().length;return void 0==K||b<K?b:K}function C(b){var d=z();if(b>=d)return d;for(;++b<d&&!r(b)&&(!0!==a.nojumps||a.nojumpsThreshold>b););return b}function t(b){if(0>=b)return 0;for(;0<--b&&!r(b););return b}function G(b,a,d){b._valueSet(a.join(""));void 0!=d&&w(b,d)}function P(b){var d=D(b);return null==d.fn?d.def:a.placeholder.charAt(b%a.placeholder.length)}
function N(b,a,f,k,c){k=void 0!=k?k.slice():I(b._valueGet()).split("");m();a&&b._valueSet("");d.each(k,function(k,g){if(!0===c){var h=e.p,h=-1==h?h:t(h),n=-1==h?k:C(h);-1==d.inArray(g,q().slice(h+1,n))&&U.call(b,void 0,!0,g.charCodeAt(0),a,f,k)}else U.call(b,void 0,!0,g.charCodeAt(0),a,f,k),f=f||0<k&&k>e.p})}function F(b){return d.inputmask.escapeRegex.call(this,b)}function I(b){return b.replace(RegExp("("+F(q().join(""))+")*$"),"")}function J(b){var a=f().slice(),d;for(d=a.length-1;0<=d;d--){var e=
D(d);if((e.optionality||e.optionalQuantifier)&&a[d]==P(d))a.pop();else break}G(b,a)}function R(b,e){if(!b.data("_inputmask")||!0!==e&&b.hasClass("hasDatepicker"))return b[0]._valueGet();var c=d.map(f(),function(b,a){return r(a)&&n(a,b,!0)?b:null}),c=(y?c.reverse():c).join(""),k=(y?f().reverse():f()).join("");return d.isFunction(a.onUnMask)?a.onUnMask.call(b,k,c,a):c}function L(b){!y||"number"!=typeof b||a.greedy&&""==a.placeholder||(b=f().length-b);return b}function w(b,f,e){b=b.jquery&&0<b.length?
b[0]:b;if("number"==typeof f){f=L(f);e=L(e);e="number"==typeof e?e:f;var c=d(b).data("_inputmask")||{};c.caret={begin:f,end:e};d(b).data("_inputmask",c);d(b).is(":visible")&&(b.scrollLeft=b.scrollWidth,!1==a.insertMode&&f==e&&e++,b.setSelectionRange?(b.selectionStart=f,b.selectionEnd=e):b.createTextRange&&(b=b.createTextRange(),b.collapse(!0),b.moveEnd("character",e),b.moveStart("character",f),b.select()))}else return c=d(b).data("_inputmask"),!d(b).is(":visible")&&c&&void 0!=c.caret?(f=c.caret.begin,
e=c.caret.end):b.setSelectionRange?(f=b.selectionStart,e=b.selectionEnd):document.selection&&document.selection.createRange&&(b=document.selection.createRange(),f=0-b.duplicate().moveStart("character",-1E5),e=f+b.text.length),f=L(f),e=L(e),{begin:f,end:e}}function O(b){if(d.isFunction(a.isComplete))return a.isComplete.call(s,b,a);if("*"!=a.repeat){var f=!1,e=t(z());if(H()==e)for(var f=!0,c=0;c<=e;c++){var g=r(c);if(g&&(void 0==b[c]||b[c]==P(c))||!g&&b[c]!=P(c)){f=!1;break}}return f}}function S(b){b=
d._data(b).events;d.each(b,function(b,a){d.each(a,function(b,a){if("inputmask"==a.namespace&&"setvalue"!=a.type){var d=a.handler;a.handler=function(b){if(this.readOnly||this.disabled)b.preventDefault;else return d.apply(this,arguments)}}})})}function ha(b){function a(b){if(void 0==d.valHooks[b]||!0!=d.valHooks[b].inputmaskpatch){var f=d.valHooks[b]&&d.valHooks[b].get?d.valHooks[b].get:function(b){return b.value},e=d.valHooks[b]&&d.valHooks[b].set?d.valHooks[b].set:function(b,a){b.value=a;return b};
d.valHooks[b]={get:function(b){var a=d(b);if(a.data("_inputmask")){if(a.data("_inputmask").opts.autoUnmask)return a.inputmask("unmaskedvalue");b=f(b);a=(a=a.data("_inputmask").maskset._buffer)?a.join(""):"";return b!=a?b:""}return f(b)},set:function(b,a){var f=d(b),c=e(b,a);f.data("_inputmask")&&f.triggerHandler("setvalue.inputmask");return c},inputmaskpatch:!0}}}var f;Object.getOwnPropertyDescriptor&&(f=Object.getOwnPropertyDescriptor(b,"value"));if(f&&f.get){if(!b._valueGet){var e=f.get,c=f.set;
b._valueGet=function(){return y?e.call(this).split("").reverse().join(""):e.call(this)};b._valueSet=function(b){c.call(this,y?b.split("").reverse().join(""):b)};Object.defineProperty(b,"value",{get:function(){var b=d(this),a=d(this).data("_inputmask"),f=a.maskset;return a&&a.opts.autoUnmask?b.inputmask("unmaskedvalue"):e.call(this)!=f._buffer.join("")?e.call(this):""},set:function(b){c.call(this,b);d(this).triggerHandler("setvalue.inputmask")}})}}else document.__lookupGetter__&&b.__lookupGetter__("value")?
b._valueGet||(e=b.__lookupGetter__("value"),c=b.__lookupSetter__("value"),b._valueGet=function(){return y?e.call(this).split("").reverse().join(""):e.call(this)},b._valueSet=function(b){c.call(this,y?b.split("").reverse().join(""):b)},b.__defineGetter__("value",function(){var b=d(this),a=d(this).data("_inputmask"),f=a.maskset;return a&&a.opts.autoUnmask?b.inputmask("unmaskedvalue"):e.call(this)!=f._buffer.join("")?e.call(this):""}),b.__defineSetter__("value",function(b){c.call(this,b);d(this).triggerHandler("setvalue.inputmask")})):
(b._valueGet||(b._valueGet=function(){return y?this.value.split("").reverse().join(""):this.value},b._valueSet=function(b){this.value=y?b.split("").reverse().join(""):b}),a(b.type))}function $(b,d,c){if(a.numericInput||y){switch(d){case a.keyCode.BACKSPACE:d=a.keyCode.DELETE;break;case a.keyCode.DELETE:d=a.keyCode.BACKSPACE}y&&(b=c.end,c.end=c.begin,c.begin=b)}c.begin==c.end?(b=d==a.keyCode.BACKSPACE?c.begin-1:c.begin,a.isNumeric&&""!=a.radixPoint&&f()[b]==a.radixPoint&&(c.begin=f().length-1==b?c.begin:
d==a.keyCode.BACKSPACE?b:C(b),c.end=c.begin),d==a.keyCode.BACKSPACE?c.begin=t(c.begin):d==a.keyCode.DELETE&&c.end++):1!=c.end-c.begin||a.insertMode||d==a.keyCode.BACKSPACE&&c.begin--;b=c.begin;var g=c.end;for(d=C(b-1);b<g;b++)delete e.validPositions[b];b=g;for(g=z();b<g;b++){var h=e.validPositions[b],l=e.validPositions[d];void 0!=h&&void 0==l&&(D(d).def==h.match.def&&!1!==n(d,h.input,!0)&&delete e.validPositions[b],d=C(d))}m(!0);d=C(-1);H()<d?e.p=d:e.p=c.begin}function V(b){W=!1;var c=this,h=d(c),
k=b.keyCode,n=w(c);k==a.keyCode.BACKSPACE||k==a.keyCode.DELETE||ea&&127==k||b.ctrlKey&&88==k?(b.preventDefault(),88==k&&(M=f().join("")),$(c,k,n),G(c,f(),e.p),c._valueGet()==q().join("")&&h.trigger("cleared"),a.showTooltip&&h.prop("title",e.mask)):k==a.keyCode.END||k==a.keyCode.PAGE_DOWN?setTimeout(function(){var d=C(H());a.insertMode||d!=z()||b.shiftKey||d--;w(c,b.shiftKey?n.begin:d,d)},0):k==a.keyCode.HOME&&!b.shiftKey||k==a.keyCode.PAGE_UP?w(c,0,b.shiftKey?n.begin:0):k==a.keyCode.ESCAPE||90==k&&
b.ctrlKey?(N(c,!0,!1,M.split("")),h.click()):k!=a.keyCode.INSERT||b.shiftKey||b.ctrlKey?!1!=a.insertMode||b.shiftKey||(k==a.keyCode.RIGHT?setTimeout(function(){var b=w(c);w(c,b.begin)},0):k==a.keyCode.LEFT&&setTimeout(function(){var b=w(c);w(c,b.begin-1)},0)):(a.insertMode=!a.insertMode,w(c,a.insertMode||n.begin!=z()?n.begin:n.begin-1));var h=w(c),l=a.onKeyDown.call(this,b,f(),a);l&&!0===l.refreshFromBuffer&&(e.validPositions={},g(0,f().length),w(c,h.begin,h.end));aa=-1!=d.inArray(k,a.ignorables)}
function U(b,c,g,h,u,l){if(void 0==g&&W)return!1;W=!0;var r=d(this);b=b||window.event;g=c?g:b.which||b.charCode||b.keyCode;if(!(!0===c||b.ctrlKey&&b.altKey)&&(b.ctrlKey||b.metaKey||aa))return!0;if(g){!0!==c&&46==g&&!1==b.shiftKey&&","==a.radixPoint&&(g=44);var p,q;g=String.fromCharCode(g);c?(l=u?l:H()+1,p={begin:l,end:l}):p=w(this);if(l=y?1<p.begin-p.end||1==p.begin-p.end&&a.insertMode:1<p.end-p.begin||1==p.end-p.begin&&a.insertMode)e.undoPositions=d.extend(!0,{},e.validPositions),$(this,a.keyCode.DELETE,
p),a.insertMode||(a.insertMode=!a.insertMode,B(p.begin,void 0,u),a.insertMode=!a.insertMode),l=!a.multi;var z=f().join("").indexOf(a.radixPoint);a.isNumeric&&!0!==c&&-1!=z&&(a.greedy&&p.begin<=z?(p.begin=t(p.begin),p.end=p.begin):g==a.radixPoint&&(p.begin=z,p.end=p.begin));e.writeOutBuffer=!0;p=p.begin;var s=n(p,g,u);!1!==s&&(!0!==s&&(p=void 0!=s.pos?s.pos:p,g=void 0!=s.c?s.c:g),m(!0),q=C(p),e.p=q);if(!1!==h){var v=this;setTimeout(function(){a.onKeyValidation.call(v,s,a)},0);if(e.writeOutBuffer&&
!1!==s){var D=f();h=c?void 0:a.numericInput?p>z?t(q):g==a.radixPoint?q-1:t(q-1):q;G(this,D,h);!0!==c&&setTimeout(function(){!0===O(D)&&r.trigger("complete");X=!0;r.trigger("input")},0)}else l&&(e.buffer=void 0,e.validPositions=e.undoPositions)}else l&&(e.buffer=void 0,e.validPositions=e.undoPositions);a.showTooltip&&r.prop("title",e.mask);b&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}}function ba(b){var c=d(this),h=b.keyCode,k=f();(b=a.onKeyUp.call(this,b,k,a))&&!0===b.refreshFromBuffer&&
(e.validPositions={},g(0,f().length));h==a.keyCode.TAB&&a.showMaskOnFocus&&(c.hasClass("focus.inputmask")&&0==this._valueGet().length?(m(),k=f(),G(this,k),w(this,0),M=f().join("")):(G(this,k),k.join("")==q().join("")&&-1!=d.inArray(a.radixPoint,k)?(w(this,L(0)),c.click()):w(this,L(0),L(z()))))}function ca(b){if(!0===X&&"input"==b.type)return X=!1,!0;var c=this,e=d(c);if("propertychange"==b.type&&c._valueGet().length<=z())return!0;setTimeout(function(){var b=d.isFunction(a.onBeforePaste)?a.onBeforePaste.call(c,
c._valueGet(),a):c._valueGet();N(c,!1,!1,b.split(""),!0);G(c,f());!0===O(f())&&e.trigger("complete");e.click()},0)}function ia(b){var c=d(this),e=w(this),g=this._valueGet(),g=g.replace(RegExp("("+F(q().join(""))+")*"),"");e.begin>g.length&&(w(this,g.length),e=w(this));1!=f().length-g.length||g.charAt(e.begin)==f()[e.begin]||g.charAt(e.begin+1)==f()[e.begin]||r(e.begin)?(N(this,!1,!1,g.split("")),G(this,f()),!0===O(f())&&c.trigger("complete"),c.click()):(b.keyCode=a.keyCode.BACKSPACE,V.call(this,b));
b.preventDefault()}function ja(b){s=d(b);if(s.is(":input")){s.data("_inputmask",{maskset:e,opts:a,isRTL:!1});a.showTooltip&&s.prop("title",e.mask);ha(b);a.numericInput&&(a.isNumeric=a.numericInput);("rtl"==b.dir||a.numericInput&&a.rightAlignNumerics||a.isNumeric&&a.rightAlignNumerics)&&s.css("text-align","right");if("rtl"==b.dir||a.numericInput){b.dir="ltr";s.removeAttr("dir");var c=s.data("_inputmask");c.isRTL=!0;s.data("_inputmask",c);y=!0}s.unbind(".inputmask");s.removeClass("focus.inputmask");
s.closest("form").bind("submit",function(){M!=f().join("")&&s.change()}).bind("reset",function(){setTimeout(function(){s.trigger("setvalue")},0)});s.bind("mouseenter.inputmask",function(){!d(this).hasClass("focus.inputmask")&&a.showMaskOnHover&&this._valueGet()!=f().join("")&&G(this,f())}).bind("blur.inputmask",function(){var b=d(this),c=this._valueGet(),e=f();b.removeClass("focus.inputmask");M!=f().join("")&&b.change();a.clearMaskOnLostFocus&&""!=c&&(c==q().join("")?this._valueSet(""):J(this));!1===
O(e)&&(b.trigger("incomplete"),a.clearIncomplete&&(m(),a.clearMaskOnLostFocus?this._valueSet(""):(e=q().slice(),G(this,e))))}).bind("focus.inputmask",function(){var b=d(this),c=this._valueGet();a.showMaskOnFocus&&!b.hasClass("focus.inputmask")&&(!a.showMaskOnHover||a.showMaskOnHover&&""==c)&&this._valueGet()!=f().join("")&&G(this,f(),C(H()));b.addClass("focus.inputmask");M=f().join("")}).bind("mouseleave.inputmask",function(){var b=d(this);a.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||this._valueGet()==
b.attr("placeholder")||(this._valueGet()==q().join("")||""==this._valueGet()?this._valueSet(""):J(this)))}).bind("click.inputmask",function(){var b=this;setTimeout(function(){var c=w(b),e=f();if(c.begin==c.end){var c=y?L(c.begin):c.begin,g=H(c),e=a.isNumeric?!1===a.skipRadixDance&&""!=a.radixPoint&&-1!=d.inArray(a.radixPoint,e)?a.numericInput?C(d.inArray(a.radixPoint,e)):d.inArray(a.radixPoint,e):C(g):C(g);c<e?r(c)?w(b,c):w(b,C(c)):w(b,e)}},0)}).bind("dblclick.inputmask",function(){var b=this;setTimeout(function(){w(b,
0,C(H()))},0)}).bind(T+".inputmask dragdrop.inputmask drop.inputmask",ca).bind("setvalue.inputmask",function(){N(this,!0);M=f().join("");this._valueGet()==q().join("")&&this._valueSet("")}).bind("complete.inputmask",a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",a.oncleared);s.bind("keydown.inputmask",V).bind("keypress.inputmask",U).bind("keyup.inputmask",ba);if(fa||Y||ga||Z)if(s.attr("autocomplete","off").attr("autocorrect","off").attr("autocapitalize","off").attr("spellcheck",
!1),Y||Z)s.unbind("keydown.inputmask",V).unbind("keypress.inputmask",U).unbind("keyup.inputmask",ba),"input"==T&&s.unbind(T+".inputmask"),s.bind("input.inputmask",ia);da&&s.bind("input.inputmask",ca);c=d.isFunction(a.onBeforeMask)?a.onBeforeMask.call(b,b._valueGet(),a):b._valueGet();N(b,!0,!1,c.split(""),!0);M=f().join("");var g;try{g=document.activeElement}catch(h){}g===b?(s.addClass("focus.inputmask"),w(b,C(H()))):a.clearMaskOnLostFocus?f().join("")==q().join("")?b._valueSet(""):J(b):G(b,f());S(b)}}
var y=!1,M=f().join(""),s,W=!1,X=!1,aa=!1,K;if(void 0!=c)switch(c.action){case "isComplete":return s=d(c.el),O(c.buffer);case "unmaskedvalue":return s=c.$input,y=c.$input.data("_inputmask").isRTL,R(c.$input,c.skipDatepickerCheck);case "mask":ja(c.el);break;case "format":return s=d({}),s.data("_inputmask",{maskset:e,opts:a,isRTL:a.numericInput}),a.numericInput&&(a.isNumeric=a.numericInput,y=!0),c=c.value.split(""),N(s,!1,!1,y?c.reverse():c,!0),y?f().reverse().join(""):f().join("");case "isValid":return s=
d({}),s.data("_inputmask",{maskset:e,opts:a,isRTL:a.numericInput}),a.numericInput&&(a.isNumeric=a.numericInput,y=!0),c=c.value.split(""),N(s,!1,!0,y?c.reverse():c),O(f())}},R=function(e,a,c){function h(a,g,h){a=a.jquery&&0<a.length?a[0]:a;if("number"==typeof g){g=m(g);h=m(h);h="number"==typeof h?h:g;if(a!=e){var n=d(a).data("_inputmask")||{};n.caret={begin:g,end:h};d(a).data("_inputmask",n)}d(a).is(":visible")&&(a.scrollLeft=a.scrollWidth,!1==c.insertMode&&g==h&&h++,a.setSelectionRange?(a.selectionStart=
g,a.selectionEnd=h):a.createTextRange&&(a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",h),a.moveStart("character",g),a.select()))}else return d(a).is(":visible")||void 0==d(a).data("_inputmask").caret?a.setSelectionRange?(g=a.selectionStart,h=a.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),g=0-a.duplicate().moveStart("character",-1E5),h=g+a.text.length):(n=d(a).data("_inputmask"),g=n.caret.begin,h=n.caret.end),g=m(g),h=m(h),{begin:g,
end:h}}function m(a){!D||"number"!=typeof a||c.greedy&&""==c.placeholder||(a=e.value.length-a);return a}function t(a,g){if("multiMaskScope"!=a){var u=-1,n=-1,r=-1;d.each(g,function(a,c){var e=d(c).data("_inputmask").maskset,f=-1,g=0,m=h(c).begin,q;for(q in e.validPositions)e=parseInt(q),e>f&&(f=e),g++;if(g>u||g==u&&n>m&&r>f||g==u&&n==m&&r<f)u=g,n=m,v=a,r=f});d.isFunction(c.determineActiveMasksetIndex)&&(v=c.determineActiveMasksetIndex.call(B,a,g));var m=B.data("_inputmask-multi")||{activeMasksetIndex:0,
elmasks:g};m.activeMasksetIndex=v;B.data("_inputmask-multi",m)}-1==["focus"].indexOf(a)&&e.value!=g[v]._valueGet()&&(m=""==d(g[v]).val()?g[v]._valueGet():d(g[v]).val(),e.value=m);-1==["blur","focus"].indexOf(a)&&d(g[v]).hasClass("focus.inputmask")&&(m=h(g[v]),h(e,m.begin,m.end))}c.multi=!0;var B=d(e),D="rtl"==e.dir||c.numericInput,v=0,q=d.map(a,function(a,e){var h='<input type="text" ';B.attr("value")&&(h+='value="'+B.attr("value")+'" ');B.attr("dir")&&(h+='dir="'+B.attr("dir")+'" ');h=d(h+"/>")[0];
F(d.extend(!0,{},a),c,{action:"mask",el:h});return h});B.data("_inputmask-multi",{activeMasksetIndex:0,elmasks:q});("rtl"==e.dir||c.numericInput&&c.rightAlignNumerics||c.isNumeric&&c.rightAlignNumerics)&&B.css("text-align","right");e.dir="ltr";B.removeAttr("dir");""!=B.attr("value")&&t("init",q);B.bind("mouseenter blur focus mouseleave click dblclick keydown keypress keypress",function(a){var g=h(e),u,n=!0;if("keydown"==a.type){u=a.keyCode;if(u==c.keyCode.DOWN&&v<q.length-1)return v++,t("multiMaskScope",
q),!1;if(u==c.keyCode.UP&&0<v)return v--,t("multiMaskScope",q),!1;if(a.ctrlKey||a.shiftKey||a.altKey)return!0}else if("keypress"==a.type&&(a.ctrlKey||a.shiftKey||a.altKey))return!0;d.each(q,function(e,q){if("keydown"==a.type){u=a.keyCode;if(u==c.keyCode.BACKSPACE&&q._valueGet().length<g.begin)return;if(u==c.keyCode.TAB)n=!1;else{if(u==c.keyCode.RIGHT){h(q,g.begin+1,g.end+1);n=!1;return}if(u==c.keyCode.LEFT){h(q,g.begin-1,g.end-1);n=!1;return}}}if(-1!=["click"].indexOf(a.type)&&(h(q,m(g.begin),m(g.end)),
g.begin!=g.end)){n=!1;return}-1!=["keydown"].indexOf(a.type)&&g.begin!=g.end&&h(q,g.begin,g.end);d(q).triggerHandler(a)});n&&setTimeout(function(){t(a.type,q)},0)});B.bind(T+" dragdrop drop setvalue",function(a){h(e);setTimeout(function(){d.each(q,function(c,h){h._valueSet(e.value);d(h).triggerHandler(a)});setTimeout(function(){t(a.type,q)},0)},0)});(function(a){if(void 0==d.valHooks[a]||!0!=d.valHooks[a].inputmaskmultipatch){var c=d.valHooks[a]&&d.valHooks[a].get?d.valHooks[a].get:function(a){return a.value},
e=d.valHooks[a]&&d.valHooks[a].set?d.valHooks[a].set:function(a,d){a.value=d;return a};d.valHooks[a]={get:function(a){var e=d(a);return e.data("_inputmask-multi")?(a=e.data("_inputmask-multi"),c(a.elmasks[a.activeMasksetIndex])):c(a)},set:function(a,c){var f=d(a),g=e(a,c);f.data("_inputmask-multi")&&f.triggerHandler("setvalue");return g},inputmaskmultipatch:!0}}})(e.type)};d.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",
end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:d.noop,onincomplete:d.noop,oncleared:d.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:d.noop,onKeyDown:d.noop,onBeforeMask:void 0,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:d.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,isNumeric:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,definitions:{9:{validator:"[0-9]",
cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,
PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0,multi:!1,nojumps:!1,nojumpsThreshold:0,determineActiveMasksetIndex:void 0},masksCache:{},escapeRegex:function(d){return d.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")},format:function(e,a){var c=d.extend(!0,{},d.inputmask.defaults,a);I(c.alias,a,c);return F(J(c),c,{action:"format",
value:e})},isValid:function(e,a){var c=d.extend(!0,{},d.inputmask.defaults,a);I(c.alias,a,c);return F(J(c),c,{action:"isValid",value:e})}};d.fn.inputmask=function(e,a){function c(a,c){var e=d(a),h;for(h in c){var f=e.data("inputmask-"+h.toLowerCase());void 0!=f&&(c[h]=f)}return c}var h=d.extend(!0,{},d.inputmask.defaults,a),m;if("string"===typeof e)switch(e){case "mask":return I(h.alias,a,h),m=J(h),0==m.length?this:this.each(function(){d.isArray(m)?R(this,m,c(this,h)):F(d.extend(!0,{},m),c(this,h),
{action:"mask",el:this})});case "unmaskedvalue":var t=d(this);return t.data("_inputmask")?(m=t.data("_inputmask").maskset,h=t.data("_inputmask").opts,F(m,h,{action:"unmaskedvalue",$input:t})):t.val();case "remove":return this.each(function(){var a=d(this);if(a.data("_inputmask")){m=a.data("_inputmask").maskset;h=a.data("_inputmask").opts;this._valueSet(F(m,h,{action:"unmaskedvalue",$input:a,skipDatepickerCheck:!0}));a.removeData("_inputmask");a.unbind(".inputmask");a.removeClass("focus.inputmask");
var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(this,"value"));c&&c.get?this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet}):document.__lookupGetter__&&this.__lookupGetter__("value")&&this._valueGet&&(this.__defineGetter__("value",this._valueGet),this.__defineSetter__("value",this._valueSet));try{delete this._valueGet,delete this._valueSet}catch(e){this._valueSet=this._valueGet=void 0}}});case "getemptymask":return this.data("_inputmask")?
(m=this.data("_inputmask").maskset,m._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return this.data("_inputmask")?(m=this.data("_inputmask").maskset,h=this.data("_inputmask").opts,F(m,h,{action:"isComplete",buffer:this[0]._valueGet().split(""),el:this})):!0;case "getmetadata":if(this.data("_inputmask"))return m=this.data("_inputmask").maskset,m.metadata;break;default:return I(e,a,h)||(h.mask=e),m=J(h),void 0==
m?this:this.each(function(){d.isArray(m)?R(this,m,c(this,h)):F(d.extend(!0,{},m),c(this,h),{action:"mask",el:this})})}else{if("object"==typeof e)return h=d.extend(!0,{},d.inputmask.defaults,e),I(h.alias,e,h),m=J(h),void 0==m?this:this.each(function(){d.isArray(m)?R(this,m,c(this,h)):F(d.extend(!0,{},m),c(this,h),{action:"mask",el:this})});if(void 0==e)return this.each(function(){var c=d(this).attr("data-inputmask");if(c&&""!=c)try{var c=c.replace(RegExp("'","g"),'"'),e=d.parseJSON("{"+c+"}");d.extend(!0,
e,a);h=d.extend(!0,{},d.inputmask.defaults,e);I(h.alias,e,h);h.alias=void 0;d(this).inputmask(h)}catch(m){}})}}}})(jQuery);
