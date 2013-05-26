/*global console */
define('flick', ['jquery'], function ($) {
    'use strict';

    /*
        Private
     */
    var $family = $('#family'),
        $profiles = $family.children('li').children('figure');

    var speed = 500;


    /*
        Private vars
     */
    var profileInit = function( profile ) {
        console.log('New profile');

        var $images = $(profile).find('img'),
            current = 0,
            lastZ = 200,
            flickDie = false,
            flickStarted = false,
            flickInterval;

            console.log($images);

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

        // Mouse enter
        $(profile).on('mouseenter', 'img', function(e){

            flickDie = false;

            if ( !flickStarted ) {
                startFlick();
            }

        });

        // Mouse leave
        $(profile).on('mouseleave', 'img', function(e){

            flickDie = true;

        });

    };


    /*
        Public Functions
     */
    var setup = function() {
        console.log('Setting up Flickrr');

        // DOM Ready
        $(function() {

            // Scope to each of the profiles
            $profiles.each(function(i, that){

                // Setup profiles
                profileInit(this);

            });

        });

    };


    return {
        setup: setup
    };
});
