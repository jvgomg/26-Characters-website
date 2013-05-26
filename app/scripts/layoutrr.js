/*global console */
define('layoutrr', ['jquery'], function ($) {
    'use strict';

    /*
        Private
     */
    var $family;

    var CaptionLayouts = 10,
        ImageLayouts = 10,
        FaceLayouts = 10;

    var getRandom = function (min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    };

    var addCaptionClasses= function( $captions ) {

        $captions.each(function(i){
            $(this).addClass( 'caption-'+getRandom( 1, CaptionLayouts ) );
            //$(this).addClass( 'caption-' + (i + 1) );
        });

    };

    /*
        Public
     */
     var setup = function( family ) {
        console.log('Setting up Layout');

        // Set Family
        $family = $(family);

        // Random caption layouts
        addCaptionClasses( $family.find('figcaption') );

        // Random image layouts

        // Random face layout

        console.log('Layout complete');
     };

    return {
        setup: setup
    };
});
