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

    var flickDecks = {};


    var setupNewFlickDeck = function( id, profile) {

        var deck = {},
            images = $(profile).find('img');

        deck.currentImage = 0;
        deck.lastZ = 0;
        deck.images = images;

        flickDecks[id] = deck;
    };

    /*
        Private key
     */
    var flickThrough = function( profile ) {

        console.log('Tick');

        var id = $(profile).attr('id');

        // set up new gallery if needed
        if ( ! flickDecks[id] ) {
            console.log('New ID');
            setupNewFlickDeck( id, profile );
        }

        console.log( flickDecks );
        console.log( flickDecks[id].images.length );

        // bring next image to the top

        flickDecks[id].currentImage ++;
        flickDecks[id].lastZ += 100;

        if ( flickDecks[id].currentImage == flickDecks[id].images.length ) {
            flickDecks[id].currentImage = 0;
        }

        var nextImageIndex = flickDecks[id].currentImage;
        var nextZIndex = flickDecks[id].lastZ;
        var nextImage = flickDecks[id].images[flickDecks[id].currentImage];

        console.log( nextImageIndex );
        console.log( nextZIndex );
        console.log( nextImage );

        $(nextImage).css('z-index', nextZIndex);

        //$(flickDecks[id].images[flickDecks[id].currentImage]).style('z-index', newZIndex);

    };


    /*
        Private fire
     */
    var tick = function() {
        if( !inQuestion ){
            window.clearInterval(intervalTick);
        } else {
            //console.log( inQuestion );
            flickThrough( inQuestion );
        }
    };

    var startFlick = function(element) {
        inQuestion = element;
        tick();
        intervalTick = setInterval(tick, speed);
    };

    var stopFlick = function(){
        //console.log('Stop');
        inQuestion = null;
        window.clearInterval(intervalTick);
    };

    var checkTheStop = function() {
        //console.log('check stop');
        if ( !$(checkProfile).data('flicking') || !inQuestion ) {
            stopFlick();
        }
    };

    var startTheStop = function(profile) {
        //console.log('start the stop');
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
                //console.log('in');

                var profile = $(this).closest('figure').data('flicking', true);

                if ( !isInQuestion( profile ) ) {
                    //console.log('new');
                    startFlick(profile);
                }
            });

            // Mouse leave
            $profiles.on('mouseleave', 'img', function(e){
                //console.log('out');

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
