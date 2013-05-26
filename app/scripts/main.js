/*global console*/

require.config({
    paths: {
        jquery: '../components/jquery/jquery'
    },
    shim: {
    }
});


require(['jquery', 'flickrr', 'layoutrr'], function ($, flickrr, layoutrr) {
    'use strict';
    // use app here

    var $family = $('#family'),
        $body = $('body');

    $(function() {
        // JS is enabled... page is hidden

        // Split award into 2 lines
        var $award = $('#header .award'),
            $newAwardType = $('<h2 class="award-type">').insertAfter($award),
            $awardType = $award.find('abbr').appendTo($newAwardType);

        // Add layout classes
        layoutrr.setup( $family );

        // Flick through effect
        flickrr.setup();

        // Fade page in
        var $body = $('body').removeClass('fadedOut').addClass('fadeIn');


        // Whole page click event
        $body.click(function(e) {
            console.log('Body click');

            // Refresh all layout classes
            layoutrr.refresh();
        });

    });

});
