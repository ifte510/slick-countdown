var old_tb_remove = window.tb_remove;
var using_text_editor = false;
var text_editor_toggle;
var html_editor_toggle;
var editor_area;
var cursor_position = 0;

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

        //DatePicker
        jQuery('.slick-date-picker-field').datepicker({
            dateFormat: "MM dd, yy",
            maxDate: new Date(2036, 11,31)
        });
        $( ".slick-spinner-field" ).spinner();

    });

});