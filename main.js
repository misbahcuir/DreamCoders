/*global $*/
$(document).ready(function () {
    "use strict";
    var heading = $('#our-services .desc .heading h1'),
        txt = $('#our-services .desc .text'),
        serviceItem = $('#our-services .services .column .service'),
        tl = new TimelineLite();

    tl
        .from(heading, 0.3, {opacity : 0, y : -20}, '+=0.3')
        .from(txt, 0.3, {opacity : 0, y : -20})
        .staggerFrom(serviceItem, 0.2, {x : -10, autoAlpha : 0}, 0.1);
    
});

