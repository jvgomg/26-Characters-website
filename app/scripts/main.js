/*global console*/

require.config({
    paths: {
        jquery: '../components/jquery/jquery'
    },
    shim: {
    }
});


require(['jquery'], function ($) {
    'use strict';
    // use app here

    $(function() {
        // JS is enabled... page is hidden


        // Split award into 2 lines
        var $award = $('#header .award'),
            $newAwardType = $('<h2>').insertAfter($award),
            $awardType = $award.find('abbr').appendTo($newAwardType);


        // Fade page in
        var $body = $('body').removeClass('fadedOut').addClass('fadeIn');
    });




});
