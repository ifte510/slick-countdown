var shortcode;
var presets = {
    'flat-colors': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,

        slickDaysThickNess:0.01,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#1abc9c",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.01,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#2980b9",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.01,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#8e44ad",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.01,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#f39c12",
        slickSecondsTextColor:"#34495e"
    },

    'flat-colors-wide': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,

        slickDaysThickNess:0.03,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#1abc9c",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.03,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#2980b9",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.03,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#8e44ad",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.03,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#f39c12",
        slickSecondsTextColor:"#34495e"
    },

    'flat-colors-very-wide': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,

        slickDaysThickNess:0.12,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#1abc9c",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.12,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#2980b9",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.12,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#8e44ad",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.12,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#f39c12",
        slickSecondsTextColor:"#34495e"
    },

    'flat-colors-black': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,

        slickDaysThickNess:0.25,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#1abc9c",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.25,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#2980b9",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.25,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#8e44ad",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.25,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#f39c12",
        slickSecondsTextColor:"#34495e"
    },

    'black': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,

        slickDaysThickNess:0.01,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#222",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.01,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#222",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.01,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#222",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.01,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#222",
        slickSecondsTextColor:"#34495e"
    },

    'black-wide': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,

        slickDaysThickNess:0.03,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#222",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.03,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#222",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.03,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#222",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.03,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#222",
        slickSecondsTextColor:"#34495e"
    },

    'black-very-wide': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,

        slickDaysThickNess:0.17,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#222",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.03,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#222",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.17,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#222",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.17,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#222",
        slickSecondsTextColor:"#34495e"
    },

    'black-black': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,

        slickDaysThickNess:0.25,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#222",
        slickDaysTextColor:"#34495e",

        slickHoursThickNess:0.25,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#222",
        slickHoursTextColor:"#34495e",

        slickMinutesThickNess:0.25,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#222",
        slickMinutesTextColor:"#34495e",

        slickSecondsThickNess:0.25,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#222",
        slickSecondsTextColor:"#34495e"
    },

    'white': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,

        slickDaysThickNess:0.03,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#ffffff",
        slickDaysTextColor:"#ffffff",

        slickHoursThickNess:0.03,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#ffffff",
        slickHoursTextColor:"#ffffff",

        slickMinutesThickNess:0.03,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#ffffff",
        slickMinutesTextColor:"#ffffff",

        slickSecondsThickNess:0.03,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#ffffff",
        slickSecondsTextColor:"#ffffff"
    },

    'white-wide': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,

        slickDaysThickNess:0.06,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#ffffff",
        slickDaysTextColor:"#ffffff",

        slickHoursThickNess:0.06,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#ffffff",
        slickHoursTextColor:"#ffffff",

        slickMinutesThickNess:0.06,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#ffffff",
        slickMinutesTextColor:"#ffffff",

        slickSecondsThickNess:0.06,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#ffffff",
        slickSecondsTextColor:"#ffffff"
    },
    'white-very-wide': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,

        slickDaysThickNess:0.16,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#ffffff",
        slickDaysTextColor:"#ffffff",

        slickHoursThickNess:0.16,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#ffffff",
        slickHoursTextColor:"#ffffff",

        slickMinutesThickNess:0.16,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#ffffff",
        slickMinutesTextColor:"#ffffff",

        slickSecondsThickNess:0.16,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#ffffff",
        slickSecondsTextColor:"#ffffff"
    },

    'white-black': {
        slickResponsiveTextRatio:.5,
        slickShowLabel:true,

        slickDaysThickNess:0.25,
        slickDaysBgCircleColor:"#f7f7f7",
        slickDaysFgCircleColor:"#ffffff",
        slickDaysTextColor:"#ffffff",

        slickHoursThickNess:0.25,
        slickHoursBgCircleColor:"#f7f7f7",
        slickHoursFgCircleColor:"#ffffff",
        slickHoursTextColor:"#ffffff",

        slickMinutesThickNess:0.25,
        slickMinutesBgCircleColor:"#f7f7f7",
        slickMinutesFgCircleColor:"#ffffff",
        slickMinutesTextColor:"#ffffff",

        slickSecondsThickNess:0.25,
        slickSecondsBgCircleColor:"#f7f7f7",
        slickSecondsFgCircleColor:"#ffffff",
        slickSecondsTextColor:"#ffffff"
    }
};


jQuery(document).ready(function($) {


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

            var	popup = $('#slick-popup'),
                form = $('#slick-sc-form', popup);

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