tinymce.PluginManager.add('slick_button',function(ed,url){
    ed.addCommand('slickPopup',function(a, params)
    {
        var popup = 'shortcode-generator';

        if(typeof params != 'undefined' && params.identifier){
            popup = params.identifier;
        }

        // load thickbox
        tb_show("Slick CountDown Shortcode Generator",ajaxurl+"?action=slick_shortcodes_popup&popup="+popup);

        jQuery('#TB_window').hide();
    });

    // Add a button that opens a window
    ed.addButton("slick_button",{
        text:"",
        icon:true,
        title: 'Slick CountDown',
        image: url + '/clock.png',
        cmd:'slickPopup'
    });
});