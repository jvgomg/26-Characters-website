/* global console */
(function(){
    'use strict';

    var $family = $('#family'),
        $body = $('body'),
        $nav = $('nav a'),
        $award = $('#family-header .award');

    // Shuffle the family
    $family.children().shuffle();

    $(function() {

        // Split award into 2 lines
        var $newAwardType = $('<h2 class="award-type">').insertAfter($award);
        $award.find('abbr').appendTo($newAwardType);

        // Trim whitespace
        $award.html( $award.html().trim() );

        // Add layout classes
        Layoutrr().setup( $family );

        // Flick through effect
        Flickrr().setup( $family );

        // Fade page in
        //$body.removeClass('fadedOut').addClass('fadeIn');

        // Change page
        $nav.click(function(e) {
            e.preventDefault();
            $body.toggleClass('on-about');
        });

        /*
            Set up packery
         */
        $family.packery({
            itemSelector: 'figure',
            //isInitLayout: true,
            gutter: 10
        });

    });


    /*
        Repainting
     */
    var causeRepaintsOn = $("h1, h2, h3, p, li");
    $(window).resize(function() {

        console.log('Resize');

        causeRepaintsOn.each(function(){
            var z = $(this).css("z-index");
            //$(this).css("z-index", z);
        });
    });



})();











