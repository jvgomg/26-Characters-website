/*global console */
var Layoutrr = function(){
    'use strict';

    /*
        Private
     */
    var $family,
        $captions,
        $images,
        $faces,
        $figures;

    var CaptionLayouts = 10,
        ImageLayoutsLandscape = 75,
        ImageLayoutsPortrait = 75,
        FaceLayouts = 75,
        FigureLayouts = 48;


    var getRandom = function (min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    };

    // Image class toggle
    var addImageLumps = function() {
        $images.each(function(i){
            var width = $(this).width(),
                height = $(this).height(),

                flow = getRandom(0,1),

                left = getRandom(0,3),
                right = getRandom(0,3),
                top = getRandom(0,3),
                bottom = getRandom(0,2);

            if ( width > height ) {
                if ( ! flow ){
                    // More Left
                    $(this).css( 'padding-top', top * 2.5 +'vw' );
                    $(this).css( 'padding-right', (right-1) * 2.5 +'vw' );
                    $(this).css( 'padding-bottom', bottom * 2.5 +'vw' );
                    $(this).css( 'padding-left', left * 2.5 +'vw' );
                }
                else {
                    // More right
                    $(this).css( 'padding-top', top * 2.5 +'vw' );
                    $(this).css( 'padding-right', right * 2.5 +'vw' );
                    $(this).css( 'padding-bottom', bottom * 2.5 +'vw' );
                    $(this).css( 'padding-left', (left-1) * 2.5 +'vw' );
                }
            }
            else {
                if ( ! flow ){
                    // More Left
                    $(this).css( 'padding-top', top * 2.5 +'vw' );
                    $(this).css( 'padding-right', (right-1) * 2.5 +'vw' );
                    $(this).css( 'padding-bottom', bottom * 2.5 +'vw' );
                    $(this).css( 'padding-left', left * 2.5 +'vw' );
                }
                else {
                    // More right
                    $(this).css( 'padding-top', top * 2.5 +'vw' );
                    $(this).css( 'padding-right', right * 2.5 +'vw' );
                    $(this).css( 'padding-bottom', bottom * 2.5 +'vw' );
                    $(this).css( 'padding-left', (left-1) * 2.5 +'vw' );
                }

            }
        });
    };


    var addFigureLumps = function() {

        $figures.each(function(){

            var left = getRandom(0,4),
                top = getRandom(0,3);

            $(this).css( 'margin-left', left*2.5 +'vw' );
            $(this).css( 'margin-top', top*2.5 +'vw' );

        });
    };


    /*
        Public
     */
    var refresh = function() {
        console.log('Layoutrr Refresh');
    };

    var destroy = function() {
        console.log('Layoutrr Destroy');
    };

    var setup = function( family ) {

        // Cache elements
        $family = $(family);
        //$captions = $family.find('figcaption');
        $images = $family.find('.portfolio img');
        //$faces = $family.find('.face');
        $figures = $family.find('figure');

        // Apply lumps to figures
        addFigureLumps();
        addImageLumps();

    };

    return {
        setup: setup,
        refresh: refresh,
        destroy: destroy
    };
};
