/*!
* Qoopido.js library
*
* version: 3.2.3
* date:    2014-0-13
* author:  Dirk Lueth <info@qoopido.com>
* website: https://github.com/dlueth/qoopido.js
*
* Copyright (c) 2014 Dirk Lueth
*
* Dual licensed under the MIT and GPL licenses.
* - http://www.opensource.org/licenses/mit-license.php
* - http://www.gnu.org/copyleft/gpl.html
*/
(function(definition) {
    window.qoopido.register("transport", definition, [ "./function/merge" ]);
})(function(modules, shared, namespace, navigator, window, document, undefined) {
    "use strict";
    var prototype;
    prototype = modules["base"].extend({
        setup: function(options) {
            var self = this;
            self._settings = modules["function/merge"]({}, self._settings, options);
            return self;
        },
        serialize: function(obj, prefix) {
            var parameter = [], id, key, value;
            for (id in obj) {
                key = prefix ? "".concat(prefix, "[", id, "]") : id;
                value = obj[id];
                parameter.push(typeof value === "object" ? this.serialize(value, key) : "".concat(encodeURIComponent(key), "=", encodeURIComponent(value)));
            }
            return parameter.join("&");
        }
    });
    return prototype;
}, window, document);