/*global console */
define('flick', ['jquery'], function ($) {
    'use strict';

    var $family,
        $profiles,
        inQuestion,
        checkProfile;

    var speed = 1000,
        stopSpeed = 100;

    var intervalTick,
        stopTime;



    /*
        Private key
     */
    var flickThrough = function( profile ) {

        // bring next image to the top

    };


    /*
        Private fire
     */
    var tick = function() {
        if( !inQuestion ){
            window.clearInterval(intervalTick);
        } else {
            console.log( inQuestion );
            flickThrough( inQuestion );
        }
    };

    var startFlick = function(element) {
        inQuestion = element;
        tick();
        intervalTick = setInterval(tick, speed);
    };

    var stopFlick = function(){
        console.log('Stop');
        inQuestion = null;
        window.clearInterval(intervalTick);
    };

    var checkTheStop = function() {
        console.log('check stop');
        if ( !$(checkProfile).data('flicking') || !inQuestion ) {
            stopFlick();
        }
    };

    var startTheStop = function(profile) {
        console.log('start the stop');
        checkProfile = profile;
        stopTime = setTimeout(checkTheStop, stopSpeed);
    };

    var isInQuestion = function(element) {
        return $(element).get(0) === $(inQuestion).get(0);
    };


    /*
        Public Functions
     */
    var setup = function() {
        console.log('Setting up Flickrr');

        $family = $('#family');
        $profiles = $family.children('li').children('figure');

        // DOM Ready
        $(function() {

            // Mouse enter
            $profiles.on('mouseenter', 'img', function(e){
                console.log('in');

                var profile = $(this).closest('figure').data('flicking', true);

                if ( !isInQuestion( profile ) ) {
                    console.log('new');
                    startFlick(profile);
                }
            });

            // Mouse leave
            $profiles.on('mouseleave', 'img', function(e){
                console.log('out');

                var profile = $(this).closest('figure').data('flicking', false);

                // Set up stop function
                startTheStop( profile );
            });

        });
    };


    return {
        setup: setup
    };
});
