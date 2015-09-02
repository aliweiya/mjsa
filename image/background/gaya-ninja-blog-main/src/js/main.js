var scrollHeader = require("./scrollOffset.js");
var inlineRhythm = require("./inlineRhythm/");
var contactform = require("./contactform/");
require("./picturefill.js");

//bind on scroll
window.onscroll = scrollHeader;
inlineRhythm().init(".post__body img");
contactform().init("#contact-form");