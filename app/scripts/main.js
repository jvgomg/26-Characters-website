/* global console */
(function(){
    'use strict';

    var $family = $('#family'),
        $body = $('body'),
        $nav = $('nav a'),
        needToPack = false;

    // Shuffle the family
    $family.children().shuffle();

    $(function() {

        /*
            About page toggle
        */
        var onAbout = false,
            scrollY = 0;

        $nav.click(function(e) {
            e.preventDefault();

            // Flip
            onAbout = !onAbout;

            // Store scroll position
            if( onAbout ) {
                scrollY = $(window).scrollTop();
            }

            // Show about page
            window.scrollTo(0, 0);
            $body.toggleClass('on-about');

            if( !onAbout ) {
                // Scroll to last place
                $(window).scrollTop( scrollY );

                // Repack
                if (needToPack && pack) {
                    pack.layout();
                    needToPack = false;
                }

            }
        });

        // Add layout classes
        Layoutrr().setup( $family );

        // Flick through effect
        Flickrr().setup( $family );

        /*
            Set up packery
         */
        $family.packery({
            itemSelector: 'figure'
        })
        var pack = $family.data('packery');

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
            Repainting & Flag for a repack
         */
        var causeRepaintsOn = $("h1, h2, h3, h4, h5, p, li, address");
        $(window).resize(function() {
            causeRepaintsOn.each(function(){
                var z = $(this).css("z-index");
                $(this).css("z-index", z);
            });

            needToPack = true
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
            text: "26 Characters, Ravensbourne Graphic Design 2013",
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
                facebook: true
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











