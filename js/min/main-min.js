!function(){for(var t,n=function(){},e=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],o=e.length,i=window.console=window.console||{};o--;)t=e[o],i[t]||(i[t]=n)}(),$(function(){"use strict";function t(t){$("html, body").animate({scrollTop:$(t).offset().top},500)}function n(){$(".nav.dot > li, .strengths > ol > li").removeClass("current"),$(".strengths > ol > li").eq(e).addClass("current"),$(".nav.dot > li").eq(e).addClass("current"),t("#strengths")}$("a.scroll-to").on("click",function(){var n=$(this).attr("href");t(n)});var e=0;$(".strengths > ol > li").on("click","h3",function(){e=$(this).closest("li").index(),n()}),$(".nav.dot").on("click","li",function(){e=$(this).index(),n()}),$(".strengths .content").on("swipeleft",function(){e+=1,e>=6&&(e=0),n()}),$(".strengths .content").on("swiperight",function(){e-=1,-1>=e&&(e=5),n()}),$(".links").on("click","button",function(){$(this).closest("aside").toggleClass("active");var n=$(this).closest("header").attr("id");t("#"+n)}),$(document).on("click",function(t){$(t.target).closest(".links").length||$(".links").removeClass("active")}),$.mobile.loading().hide();var o=["hello","olá","moi"],i=0;setInterval(function(){$("#say-hi").html(o[i]),i++,i>=o.length&&(i=0)},1500)});
//# sourceMappingURL=./main-min.js.map