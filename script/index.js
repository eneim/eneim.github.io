!function(a){a(".article ul, .article ol").each(function(n,c){a(c).find("li").each(function(n,c){var e=a(c);e.children().hasClass("li-inner")||e.wrapInner('<span class="li-inner"></span>')})}),a('.article input[type="checkbox"]').each(function(n,c){var e=a(c),s=c.checked,o='<span class="checkbox-wrap '+(s?"checked":"")+'"></span>';if(!e.parent().hasClass("checkbox-wrap")){var t=e.parent().parent(),l=t.text();t.html(o+'<span class="check-content '+(s?"checked":"")+'">'+l+"</span>")}});var n=a(".about-me-mask");a(".avatar").on("click",function(){n.hasClass("open")||n.addClass("open")}),n.on("click",function(a){a.target.classList.contains("about-me-mask")&&n.removeClass("open")});var c=a("#backToTop");a(document).on("scroll",function(){var n=a(document).scrollTop();n>100&&c.addClass("show"),n<=100&&c.removeClass("show")}),c.on("click",function(){a("html, body").animate({scrollTop:0},300)})}(jQuery);