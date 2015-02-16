# Super fast css selector engine with CSS4 selector API support

## Goal

- Support CSS3 as well as part of CSS4 selector API
- Be lightweight
- Be fastest
- Be customizable
- Optimised for IE < 8

## Shims

- document.querySelector
- document.querySelectorAll
- document.getElementsByClassName for IE < 9
- document.documentElement.querySelector
- document.documentElement.querySelectorAll
- document.documentElement.getElementsByClassName
- document.documentElement.matchesSelector
- document.documentElement.matches
- Element.prototype.querySelector
- Element.prototype.querySelectorAll
- Element.prototype.getElementsByClassName for IE < 9
- Element.prototype.matchesSelector
- Element.prototype.matches

## CSS4 Supporting selectors

### Subject of a selector
```javascript
document.querySelector("div! a[href*=twitter]");// div that has **a** element with _href_ attribute that contains "twitter"
document.querySelectorAll("body footer! div");// NodeList:[footer], if <footer> is in <body> and <footer> contains <div>
```
### :scope pseudo-class
```javascript
<div node>.querySelector("div:scope a");// if <div node>.tagName == "DIV" -> result is <a> element, child of <div node>
<node>.querySelectorAll(":scope>*");// all direct childs or <node>
document.documentElement.querySelector(":scope>*");// regulary would be <head>
document.documentElement.querySelector(":scope>*:nth-child(2n+1)");// regulary would be <head> also
document.documentElement.querySelector(":scope>*:nth-child(2n+2)");// regulary would be <body>
```
Note: _:scope_ pseudo-class not in first compound selector not supported!
This examples will throw "SYNTAX_ERR" exception:
```javascript
document.querySelector("div div:scope a")
```
### Reference combination
Working on it

## Installation
 - Without IE6/7 support:

            <script src="__COMPILED/CSS_selector_engine.js"></script>

 - With IE6/7 support:

            <!--[if lt IE 8]>
			<script src="__COMPILED/CSS_selector_engine.ielt8.js"></script>
			<![endif]-->
			<!--[if gt IE 7]><!-->
			<script src="__COMPILED/CSS_selector_engine.js"></script>
			<!--<![endif]-->

## Using in IE < 8

```javascript
var $$ = function(node, selector) {
    return document.documentElement.querySelectorAll.call(node, selector)
}
var $$0 = function(node, selector) {
    return document.documentElement.querySelector.call(node, selector)
}
var matchNode = function(node, selector) {
    return document.documentElement.matches.call(node, selector)
}

matchNode( $$(document, "div.class")[0], "div.class" ) == true
```

## Customization

The are few [GGC](http://closure-compiler.appspot.com/home) flags in script. You can set it as you need and compile script with [GGC](http://closure-compiler.appspot.com/home) in _ADVANCED_OPTIMIZATIONS_ mode.

- Build for non-IE lt 8

	set the value of '\_\_GCC\_\_NOT\_ONLY\_IELT8\_SUPPORT\_\_' to 'true' and compile _CSS\_selector\_engine.js_ using [Google Closure Compiler](http://closure-compiler.appspot.com/home)

## License

    MIT
