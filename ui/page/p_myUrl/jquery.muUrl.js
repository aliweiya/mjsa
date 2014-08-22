﻿(function($) {
    $.fn.getUrl = function() {
        return window.location.href
    };
    $.fn.getHost = function(url) {
        var host = $.fn.getUrl();
        if (typeof url == "string") {
            host = url
        }
        var index = host.indexOf("?");
        if (index > 0) {
            host = host.substring(0, index);
            return host
        } else {
            return false
        }
    };
    $.fn.getObj = function(url) {
        var currUrl = $.fn.getUrl();
        if (typeof url == "string") {
            currUrl = url
        }
        var varIndex = currUrl.indexOf("?");
        if (varIndex == -1) {
            return false
        }
        var query = url.substring(varIndex + 1);
        var obj = new Object();
        var pairs = query.split("&");
        for (var i = 0; i < pairs.length; i++) {
            var pos = pairs[i].indexOf('=');
            if (pos == -1) continue;
            var argname = pairs[i].substring(0, pos);
            var value = pairs[i].substring(pos + 1);
            value = decodeURIComponent(value);
            obj[argname] = value
        }
        return obj
    }
})(jQuery);
