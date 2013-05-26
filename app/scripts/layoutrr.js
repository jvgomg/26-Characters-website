/*global console */
define('layoutrr', ['jquery'], function ($) {
    'use strict';

    /*
        Private
     */
    var $family,
        $captions,
        $images,
        $faces;

    var CaptionLayouts = 10,
        ImageLayoutsLandscape = 20,
        ImageLayoutsPortrait = 10,
        FaceLayouts = 10;

    var getRandom = function (min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    };

    var addCaptionClasses = function( $captions ) {

        $captions.each(function(i){
            $(this).addClass( 'caption-'+getRandom( 1, CaptionLayouts ) );
        });
    };

    var removeCaptionClasses = function( $captions ) {
        $captions.each(function(i){
            $(this).removeClass();
        });
    };


    //
    var addImageClasses = function( $images ) {
        $images.each(function(i){
            var width = $(this).width(),
                height = $(this).height();

            if ( width > height ) {
                $(this).addClass( 'landscape-'+getRandom( 1, ImageLayoutsLandscape ) );
            }
            else {
                $(this).addClass( 'portrait-'+getRandom( 1, ImageLayoutsPortrait ) );
            }
        });
    };

    var removeImageClasses = function( $images ) {
        $images.each(function(i){
            $(this).removeClass();
        });
    };


    // Face class toggle
    var addFaceClasses = function( $faces ) {
        $faces.each(function(i){
            var width = $(this).width(),
                height = $(this).height();

            $(this).addClass( 'face-'+getRandom( 1, CaptionLayouts ) );
        });
    };

    var removeFaceClasses = function( $faces ) {
        $faces.each(function(i){
            $(this).removeClass().addClass('face');
        });
    };


    // Remove all classes
    var dropClasses = function() {
        console.log('Layoutrr Dropping classes');

        removeCaptionClasses( $captions );
        removeImageClasses( $images );
        removeFaceClasses( $faces );
    };


    // Generate and add the new classes
    var generateClasses = function() {
        console.log('Layoutrr Generating classes');

        addCaptionClasses( $captions );
        addImageClasses( $images );
        addFaceClasses( $faces );
    };


    /*
        Public
     */
    var refresh = function() {
        console.log('Layoutrr Refresh');
        dropClasses();
        generateClasses();
    };

    var setup = function( family ) {
        console.log('Layoutrr Setup started');

        // Cache elements
        $family = $(family);
        $captions = $family.find('figcaption');
        $images = $family.find('.portfolio img');
        $faces = $family.find('.face');

        generateClasses();

        console.log('Layout Setup complete');
    };

    return {
        setup: setup,
        refresh: refresh
    };
});
