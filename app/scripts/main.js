/* global console */
require.config({
    paths: {
        jquery: '../components/jquery/jquery'
    },
    shim: {
        'jquery.shuffle': {
            deps: ['jquery'],
            exports: '$'
        }
    }
});


require(['jquery', 'flickrr', 'layoutrr', 'jquery.shuffle'], function ($, flickrr, layoutrr) {
    'use strict';
    // use app here

    var $family = $('#family'),
        $body = $('body');

    // Shuffle the family
    $family.children().shuffle();

    $(function() {
        // Split award into 2 lines
        var $award = $('#header .award'),
            $newAwardType = $('<h2 class="award-type">').insertAfter($award);

            $award.find('abbr').appendTo($newAwardType);

        // Trim whitespace
        $award.html( $award.html().trim() );

        // Add layout classes
        layoutrr.setup( $family );

        // Flick through effect
        flickrr.setup( $family );

        // Fade page in
        //$body.removeClass('fadedOut').addClass('fadeIn');

        //layoutrr.destroy();
        //flickrr.destroy();

        // Whole page click event
        $body.click(function() {
            console.log('Body click');

            // Refresh all layout classes
            layoutrr.refresh();
        });

    });

});
