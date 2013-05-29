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


        // Change page
        $nav.click(function(e) {
            e.preventDefault();
            window.scrollTo(0, 0);
            $body.toggleClass('on-about');
        });

        /*
            Set up packery
         */
        $family.packery({
            itemSelector: 'figure'
        })
        $family.addClass('on');


        /*
            Open links in new tab
         */
        $('a').each(function() {
            var a = new RegExp('/' + window.location.host + '/');
            if(!a.test(this.href)) {
                $(this).click(function(event) {
                event.preventDefault();
                event.stopPropagation();
                window.open(this.href, '_blank');
            });
            }
        });

        /*
            Repainting
         */
        var causeRepaintsOn = $("h1, h2, h3, h4, h5, p, li, address");
        $(window).resize(function() {
            causeRepaintsOn.each(function(){
                var z = $(this).css("z-index");
                $(this).css("z-index", z);
            });
        });

        /*
            Sharrre
         */
        $('#share .tw').sharrre({
            share: {
                twitter: true
            },
            template: '<a class="box" href="#">Tweet</a>',
            enableHover: false,
            enableTracking: true,
            buttons: {
                twitter: {
                    via: '26chars',
                    related: 'thedegreeshow'
                }
            },
            click: function(api, options){
                api.simulateClick();
                api.openPopup('twitter');
            }
        });
        $('#share .fb').sharrre({
            share: {
                facebook: {
                    send: 'true'
                }
            },
            template: '<a class="box" href="#">Like</a>',
            enableHover: false,
            enableTracking: true,
            click: function(api, options){
                api.simulateClick();
                api.openPopup('facebook');
            }
        });



    });

})();











