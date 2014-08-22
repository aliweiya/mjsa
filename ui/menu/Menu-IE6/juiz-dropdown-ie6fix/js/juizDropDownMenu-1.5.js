/*
    Juiz DropDown Menu 
    Plugin by Geoffrey Crofte
    http://www.creativejuiz.cc
    Free for personal use (cc)
    
    More info about license : http://jq.creativejuiz.fr/plugins-jquery/dropdown-menu.php
*/

(function(a) {
    a.fn.juizDropDownMenu = function(c) {
        jz = a.extend({}, d, c);
        a(this).addClass("juizdropdown");
        a("li ul", a(this)).addClass("juizSub");
        a(".juizSub ul", a(this)).addClass("juizSubSub").removeClass("juizSub");
        a("li:first-child", a(this)).addClass("first");
        a("li:last-child", a(this)).addClass("last");
        a("li:has('.juizSub')", a(this)).addClass("hasSub");
        a(".juizSub li:has('.juizSubSub')", a(this)).addClass("hasSubSub");
        a(this).after('<div class="juizClear">&nbsp;</div>');
        if (a(window).width() > 640) {
            a(this).children("li").hover(function() {
                a(".juizSub:visible").trigger("mouseleave");
                jz.showEffect == "slide" ? a(this).addClass("juizHovered").find("ul:not('.juiSubSub')").slideDown(jz.slidedownSpeed) : a(this).addClass("juizHovered").find("ul:not('.juizSubSub')").fadeIn(jz.slidedownSpeed);
                return false
            }, function() {
                jz.hideEffect == "slide" ? a(this).removeClass("juizHovered").find("ul:not('.juizSubSub')").stop(true, true).slideUp(jz.fadeoutSpeed) : a(this).removeClass("juizHovered").find("ul:not('.juizSubSub')").stop(true, true).fadeOut(jz.fadeoutSpeed);
                return false
            });
            var b = "px 0px";
            a().jquery == "1.6.4" && (b = "");
            a(this).find(".juizSub").children("li").hover(function() {
                a(".juizSubSub:visible").trigger("mouseleave");
                a(this).addClass("juizHovered").find("ul").fadeIn(jz.slidedownSpeed);
                a(this).children("a").animate({
                    backgroundPosition: jz.hoverFrom + b
                }, jz.showBgSpeed);
                return false
            }, function() {
                a(this).removeClass("juizHovered").find("ul").stop(true, true).fadeOut(jz.fadeoutSpeed);
                a(this).children("a").animate({
                    backgroundPosition: jz.hoverBack + b
                }, jz.hideBgSpeed);
                return false
            });
            a(this).find("a").focus(function() {
                a(this).closest("li").trigger("mouseenter")
            });
            a("ul li a", a(this)).blur(function() {
                a(this).closest("li").trigger("mouseleave")
            });
            a.browser.msie && a.browser.version < "8.0" && (a(this).find("li:not('li li')").css({
                zoom: "1",
                display: "inline"
            }), a.browser.version < "6.0" && a(this).children("li").hover(function() {
                a("select, embed, object").hide(300)
            }, function() {
                a("select, embed, object").show(300)
            }))
        }
    };
    var d = {
        showSpeed: 400,
        hideSpeed: 400,
        showBgSpeed: 200,
        hideBgSpeed: 200,
        showEffect: "slide",
        hideEffect: "fade",
        hoverFrom: "0",
        hoverBack: "-150"
    }
})(jQuery);
