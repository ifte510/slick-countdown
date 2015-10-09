var old_tb_remove = window.tb_remove;
var using_text_editor = false;
var text_editor_toggle;
var html_editor_toggle;
var editor_area;
var cursor_position = 0;
var shortcode;
var presets = {
    'flat-colors': {
        presetName: 'Flat colors',
        responsiveTextRatio:.5,
        showLabel:true,

        daysThickNess:0.01,
        daysBgCircleColor:"#f7f7f7",
        daysFgCircleColor:"#1abc9c",
        daysTextColor:"#34495e",

        hoursThickNess:0.01,
        hoursBgCircleColor:"#f7f7f7",
        hoursFgCircleColor:"#2980b9",
        hoursTextColor:"#34495e",

        minutesThickNess:0.01,
        minutesBgCircleColor:"#f7f7f7",
        minutesFgCircleColor:"#8e44ad",
        minutesTextColor:"#34495e",

        secondsThickNess:0.01,
        secondsBgCircleColor:"#f7f7f7",
        secondsFgCircleColor:"#f39c12",
        secondsTextColor:"#34495e"
    },

    'flat-colors-wide': {
        presetName: 'Flat colors wide',
        responsiveTextRatio:.5,
        showLabel:true,

        daysThickNess:0.03,
        daysBgCircleColor:"#f7f7f7",
        daysFgCircleColor:"#1abc9c",
        daysTextColor:"#34495e",

        hoursThickNess:0.03,
        hoursBgCircleColor:"#f7f7f7",
        hoursFgCircleColor:"#2980b9",
        hoursTextColor:"#34495e",

        minutesThickNess:0.03,
        minutesBgCircleColor:"#f7f7f7",
        minutesFgCircleColor:"#8e44ad",
        minutesTextColor:"#34495e",

        secondsThickNess:0.03,
        secondsBgCircleColor:"#f7f7f7",
        secondsFgCircleColor:"#f39c12",
        secondsTextColor:"#34495e"
    },

    'flat-colors-very-wide': {
        presetName: 'Flat colors very wide',
        responsiveTextRatio:.5,
        showLabel:true,

        daysThickNess:0.12,
        daysBgCircleColor:"#f7f7f7",
        daysFgCircleColor:"#1abc9c",
        daysTextColor:"#34495e",

        hoursThickNess:0.12,
        hoursBgCircleColor:"#f7f7f7",
        hoursFgCircleColor:"#2980b9",
        hoursTextColor:"#34495e",

        minutesThickNess:0.12,
        minutesBgCircleColor:"#f7f7f7",
        minutesFgCircleColor:"#8e44ad",
        minutesTextColor:"#34495e",

        secondsThickNess:0.12,
        secondsBgCircleColor:"#f7f7f7",
        secondsFgCircleColor:"#f39c12",
        secondsTextColor:"#34495e"
    },

    'flat-colors-black': {
        presetName: 'Flat colors black',
        responsiveTextRatio:.5,
        showLabel:true,

        daysThickNess:0.25,
        daysBgCircleColor:"#f7f7f7",
        daysFgCircleColor:"#1abc9c",
        daysTextColor:"#34495e",

        hoursThickNess:0.25,
        hoursBgCircleColor:"#f7f7f7",
        hoursFgCircleColor:"#2980b9",
        hoursTextColor:"#34495e",

        minutesThickNess:0.25,
        minutesBgCircleColor:"#f7f7f7",
        minutesFgCircleColor:"#8e44ad",
        minutesTextColor:"#34495e",

        secondsThickNess:0.25,
        secondsBgCircleColor:"#f7f7f7",
        secondsFgCircleColor:"#f39c12",
        secondsTextColor:"#34495e"
    },

    'black': {
        presetName: 'Black',
        responsiveTextRatio:.5,
        showLabel:true,

        daysThickNess:0.01,
        daysBgCircleColor:"#f7f7f7",
        daysFgCircleColor:"#222",
        daysTextColor:"#34495e",

        hoursThickNess:0.01,
        hoursBgCircleColor:"#f7f7f7",
        hoursFgCircleColor:"#222",
        hoursTextColor:"#34495e",

        minutesThickNess:0.01,
        minutesBgCircleColor:"#f7f7f7",
        minutesFgCircleColor:"#222",
        minutesTextColor:"#34495e",

        secondsThickNess:0.01,
        secondsBgCircleColor:"#f7f7f7",
        secondsFgCircleColor:"#222",
        secondsTextColor:"#34495e"
    },

    'black-wide': {
        presetName: 'Black wide',
        responsiveTextRatio:.5,
        showLabel:true,

        daysThickNess:0.03,
        daysBgCircleColor:"#f7f7f7",
        daysFgCircleColor:"#222",
        daysTextColor:"#34495e",

        hoursThickNess:0.03,
        hoursBgCircleColor:"#f7f7f7",
        hoursFgCircleColor:"#222",
        hoursTextColor:"#34495e",

        minutesThickNess:0.03,
        minutesBgCircleColor:"#f7f7f7",
        minutesFgCircleColor:"#222",
        minutesTextColor:"#34495e",

        secondsThickNess:0.03,
        secondsBgCircleColor:"#f7f7f7",
        secondsFgCircleColor:"#222",
        secondsTextColor:"#34495e"
    },

    'black-very-wide': {
        presetName: 'Black very wide',
        responsiveTextRatio:.5,
        showLabel:true,

        daysThickNess:0.17,
        daysBgCircleColor:"#f7f7f7",
        daysFgCircleColor:"#222",
        daysTextColor:"#34495e",

        hoursThickNess:0.03,
        hoursBgCircleColor:"#f7f7f7",
        hoursFgCircleColor:"#222",
        hoursTextColor:"#34495e",

        minutesThickNess:0.17,
        minutesBgCircleColor:"#f7f7f7",
        minutesFgCircleColor:"#222",
        minutesTextColor:"#34495e",

        secondsThickNess:0.17,
        secondsBgCircleColor:"#f7f7f7",
        secondsFgCircleColor:"#222",
        secondsTextColor:"#34495e"
    },

    'black-black': {
        presetName: 'Black black',
        responsiveTextRatio:.5,
        showLabel:true,

        daysThickNess:0.25,
        daysBgCircleColor:"#f7f7f7",
        daysFgCircleColor:"#222",
        daysTextColor:"#34495e",

        hoursThickNess:0.25,
        hoursBgCircleColor:"#f7f7f7",
        hoursFgCircleColor:"#222",
        hoursTextColor:"#34495e",

        minutesThickNess:0.25,
        minutesBgCircleColor:"#f7f7f7",
        minutesFgCircleColor:"#222",
        minutesTextColor:"#34495e",

        secondsThickNess:0.25,
        secondsBgCircleColor:"#f7f7f7",
        secondsFgCircleColor:"#222",
        secondsTextColor:"#34495e"
    },

    'white': {
        presetName: 'White',
        responsiveTextRatio:.5,
        showLabel:true,

        daysThickNess:0.03,
        daysBgCircleColor:"#f7f7f7",
        daysFgCircleColor:"#ffffff",
        daysTextColor:"#ffffff",

        hoursThickNess:0.03,
        hoursBgCircleColor:"#f7f7f7",
        hoursFgCircleColor:"#ffffff",
        hoursTextColor:"#ffffff",

        minutesThickNess:0.03,
        minutesBgCircleColor:"#f7f7f7",
        minutesFgCircleColor:"#ffffff",
        minutesTextColor:"#ffffff",

        secondsThickNess:0.03,
        secondsBgCircleColor:"#f7f7f7",
        secondsFgCircleColor:"#ffffff",
        secondsTextColor:"#ffffff"
    },

    'white-wide': {
        presetName: 'White wide',
        responsiveTextRatio:.5,
        showLabel:true,

        daysThickNess:0.06,
        daysBgCircleColor:"#f7f7f7",
        daysFgCircleColor:"#ffffff",
        daysTextColor:"#ffffff",

        hoursThickNess:0.06,
        hoursBgCircleColor:"#f7f7f7",
        hoursFgCircleColor:"#ffffff",
        hoursTextColor:"#ffffff",

        minutesThickNess:0.06,
        minutesBgCircleColor:"#f7f7f7",
        minutesFgCircleColor:"#ffffff",
        minutesTextColor:"#ffffff",

        secondsThickNess:0.06,
        secondsBgCircleColor:"#f7f7f7",
        secondsFgCircleColor:"#ffffff",
        secondsTextColor:"#ffffff"
    },
    'white-very-wide': {
        presetName: 'White very wide',
        responsiveTextRatio:.5,
        showLabel:true,

        daysThickNess:0.16,
        daysBgCircleColor:"#f7f7f7",
        daysFgCircleColor:"#ffffff",
        daysTextColor:"#ffffff",

        hoursThickNess:0.16,
        hoursBgCircleColor:"#f7f7f7",
        hoursFgCircleColor:"#ffffff",
        hoursTextColor:"#ffffff",

        minutesThickNess:0.16,
        minutesBgCircleColor:"#f7f7f7",
        minutesFgCircleColor:"#ffffff",
        minutesTextColor:"#ffffff",

        secondsThickNess:0.16,
        secondsBgCircleColor:"#f7f7f7",
        secondsFgCircleColor:"#ffffff",
        secondsTextColor:"#ffffff"
    },

    'white-black': {
        presetName: 'White black',
        responsiveTextRatio:.5,
        showLabel:true,

        daysThickNess:0.25,
        daysBgCircleColor:"#f7f7f7",
        daysFgCircleColor:"#ffffff",
        daysTextColor:"#ffffff",

        hoursThickNess:0.25,
        hoursBgCircleColor:"#f7f7f7",
        hoursFgCircleColor:"#ffffff",
        hoursTextColor:"#ffffff",

        minutesThickNess:0.25,
        minutesBgCircleColor:"#f7f7f7",
        minutesFgCircleColor:"#ffffff",
        minutesTextColor:"#ffffff",

        secondsThickNess:0.25,
        secondsBgCircleColor:"#f7f7f7",
        secondsFgCircleColor:"#ffffff",
        secondsTextColor:"#ffffff"
    }
};



jQuery(document).ready(function($) {
    var tb_remove = function(){
      // check if text editor shortcode button was used; if so return to it
        if(using_text_editor){
            using_text_editor = false;
            window.switchEditors.switchto( jQuery('#content-html')[0] );
        }//if(using_text_editor)

        old_tb_remove();
    };

    window.slick_tb_height =(92 / 100)*jQuery(window).height();
    window.slick_shortcodes_height = (71 / 100) * jQuery(window).height();
    if(window.slick_shortcodes_height > 550){
        window.slick_shortcodes_height = (74 / 100) * jQuery(window).height();
    }

    jQuery(window).resize(function() {
        window.slick_tb_height = (92 / 100) * jQuery(window).height();
        window.slick_shortcodes_height = (71 / 100) * jQuery(window).height();

        if(window.slick_shortcodes_height > 550) {
            window.slick_shortcodes_height = (74 / 100) * jQuery(window).height();
        }
    });

    slick_shortcode = {
        resizeTB: function(){
            var ajaxCont = $('#TB_ajaxContent'),
                tbWindow = $('#TB_window'),
                slickPopup = $('#slick-popup');

            tbWindow.css({
                height: window.slick_tb_height,
                width: slickPopup.outerWidth(),
                marginLeft: -(slickPopup.outerWidth()/2)
            });

            ajaxCont.css({
                paddingTop: 0,
                paddingLeft: 0,
                paddingRight: 0,
                height: window.slick_tb_height,
                overflow: 'auto', // IMPORTANT
                width: slickPopup.outerWidth()
            });

            tbWindow.show();
            $('#slick-popup').addClass('no_preview');
        },
        load : function(){

            var	fusion = this,
                popup = $('#slick-popup'),
                form = $('#slick-sc-form', popup),
                shortcode = $('#_slick_shortcode', form).text(),
                popupType = $('#_slick_popup', form).text(),
                uShortcode = '';

            // resize TB
            slick_shortcode.resizeTB();
            $(window).resize(function() { slick_shortcode.resizeTB() });
        }
    };
    //run
    $('#slick-popup').livequery(function(){
        slick_shortcode.load();
        $('#slick-popup').closest('#TB_window').addClass('slick-shortcodes-popup');

        // activate color picker
        $('.wp-color-picker-field').wpColorPicker({});

        //DatePicker time
        $('.slick-date-picker-field').datetimepicker({
            dateFormat: "MM dd, yy",
            timeFormat: "hh:mm tt"
        });

        $( ".slick-spinner-field" ).spinner({
            min: 0
        });

        $( ".float-spinner" ).spinner({
            min: 0.0,
            max:1.0,
            step:0.01
        });


        jQuery.each( presets[jQuery("#slick-select-theme").val()], function( key, val ) {
            jQuery("#" + key).val(val);
        });


        jQuery("#slick-select-theme").change(function() {
            jQuery.each( presets[jQuery(this).val()], function( key, val ) {
                jQuery("#" + key).val(val);
            });
        });

        // insert shortcode when inset button clicked
        $('.slick-insert').live('click',function(){
            shortcode = '[slickcountdown ';
            jQuery("#slick-sc-form input:not(.noinclude,.wp-picker-clear), #slick-sc-form select").each(function() {
                if(jQuery(this).val() && jQuery(this).attr('class') != 'wp-picker-clear'){
                    shortcode += jQuery(this).attr("id") + '="' + jQuery(this).val() + '" ';
                }

            });
            shortcode += ']';
            tinyMCE.activeEditor.execCommand('mceInsertContent', false, shortcode);

            tb_remove();

        });

    });


});