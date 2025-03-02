/*global console */
var Flickrr = function(){
    'use strict';

    /*
        Private
     */
    var $family,
        $profiles;

    var speed = 500;


    var mouseEnter,
        mouseLeave;

    var profileInit = function( profile ) {

        var $images = $(profile).find('img'),
            current = 0,
            lastZ = 200,
            flickDie = false,
            flickStarted = false,
            flickInterval,
            $profile = $(profile);


        function flick() {
            if ( !flickDie ) {
                // Increment
                current ++;
                lastZ = lastZ + 1;

                // Back to the begining
                if ( current === $images.length ) {
                    current = 0;
                }
                // bring next image to the top
                $($images.get(current)).css('z-index', lastZ);

            } else {
                window.clearInterval(flickInterval);
                flickStarted = false;
            }
        }

        function startFlick() {
            flickStarted = true;
            flick();
            flickInterval = setInterval(flick, speed);
        }

        mouseEnter = function(){
            flickDie = false;

            if ( !flickStarted ) {
                startFlick();
            }
        };

        mouseLeave = function(e){
            flickDie = true;
        };


        if ( ! Modernizr.touch) {
            // Mouse driven

            // Mouse enter
            $(profile).on('mouseenter', 'img', mouseEnter);

            // Mouse leave
            $(profile).on('mouseleave', 'img', mouseLeave);

        } else {
            // Tap Driven

            var myTap = new Tap( profile );

            $profile.on('tap', 'img', function(e, touch){
                flick();
            });

            // Disable double tapp to zoom
            $('body').nodoubletapzoom();
        }
    };


    /*
        Public
     */
    var destroy = function() {
        console.log('Flickrr Destroy');

        console.warn('Flickrr Destroy not working');
    };

    var setup = function( family ) {

        $family = $(family);
        $profiles = $family.find('figure');

        // DOM Ready
        $(function() {

            // Scope to each of the profiles
            $profiles.each(function(i){
                // Setup profiles
                profileInit(this);
            });

        });

    };


    return {
        setup: setup,
        destroy: destroy
    };
};
