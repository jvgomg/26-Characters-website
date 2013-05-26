/*global console*/

require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        flick: 'flick'
    },
    shim: {
    }
});


require(['jquery', 'flick'], function ($, flick) {
    'use strict';
    // use app here

    $(function() {
        // JS is enabled... page is hidden


        // Split award into 2 lines
        var $award = $('#header .award'),
            $newAwardType = $('<h2 class="award-type">').insertAfter($award),
            $awardType = $award.find('abbr').appendTo($newAwardType);


        // Set up mouse hover flick through effect
        flick.setup();


        // Fade page in
        var $body = $('body').removeClass('fadedOut').addClass('fadeIn');
    });




});
