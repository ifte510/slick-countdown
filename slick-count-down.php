<?php
/*
Plugin Name: Slick CountDown
Plugin URI: http://plugins.ifte-hsn.com/slick-countdown/
Description: A countdown timer plugin for wordpress. 
Version: 1.0
Author: Ifte
Author URI: http://ifte-hsn.com
*/

if ( !function_exists( 'add_action' ) ) {
    echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
    exit;
}

if(!class_exists('Slick_CountDown_Core')){
    class Slick_CountDown_Core{
        /**
         * Plugin version, used for cache-busting
         * of style and script file references.
         *
         * @since 1.0.0
         *
         * @var string
         */

        const VERSION = '1.0.0';

        /**
         * Instance of this class
         *
         * @since 1.0.0
         *
         * @var object
         */

        protected static $instance = null;

        /**
         * Initialize the plugin by setting localization
         * and loading public scripts and styles.
         *
         * @since 1.0.0
         */
        private function __construct()
        {
            define('SLICK_PLUGIN_URI', plugin_dir_url(__FILE__).'assets');
            define("SLICK_PLUGIN_DIR", plugin_dir_path( __FILE__ ));

            add_action('init',array(&$this,'init'));
            add_action('wp_enqueue_scripts',array(&$this,'enqueue_scripts'));
            add_action('admin_init',array(&$this,'admin_init'));
            add_action('wp_ajax_slick_shortcodes_popup',array(&$this,'popup'));
            add_shortcode('slickcountdown',array(&$this,'shortcode'));
        }

        /**
         * Enqueue Scripts
         *
         * @return void
         */

        function enqueue_scripts()
        {
            wp_enqueue_style( 'classycountdown', SLICK_PLUGIN_URI . '/css/jquery.classycountdown.css', false, '1.1.0', 'all' );

            wp_enqueue_script('jquery');
            wp_enqueue_script( 'jquery-knob', SLICK_PLUGIN_URI . '/js/jquery.knob.js', false, '1.2.11', true );
            wp_enqueue_script( 'jquery-throttle', SLICK_PLUGIN_URI . '/js/jquery.throttle.js', false, '1.1', true );
            wp_enqueue_script( 'jquery-classycountdown', SLICK_PLUGIN_URI . '/js/jquery.classycountdown.js', false, '1.1.0', true );
        }

        /**
         * Register TinyMCE editor
         *
         * @return void
         */

        function init()
        {
            if(get_user_option('rich_editing') == 'true')
            {
                add_filter('mce_external_plugins',array(&$this,'add_rich_plugins'));
                add_filter('mce_buttons',array(&$this,'register_rich_buttons'));
            }
        }//init

        function admin_init()
        {
            wp_enqueue_style( 'wp-color-picker' );
            wp_enqueue_style( 'jquery-ui', SLICK_PLUGIN_URI . '/css/jquery-ui.css', false, Slick_CountDown_Core::VERSION, 'all' );
            wp_enqueue_style( 'slick-popup', SLICK_PLUGIN_URI . '/css/popup.css', false, Slick_CountDown_Core::VERSION, 'all' );
            wp_enqueue_style( 'jquery-ui-timepicker-addon', SLICK_PLUGIN_URI . '/css/jquery-ui-timepicker-addon.css', false, Slick_CountDown_Core::VERSION, 'all' );

            wp_enqueue_script( 'wp-color-picker' );
            wp_enqueue_script( 'jquery-ui-core' );
            wp_enqueue_script( 'jquery-ui-datepicker' );
            wp_enqueue_script( 'jquery-ui-slider' );
            wp_enqueue_script( 'jquery-ui-spinner' );
            wp_enqueue_script( 'slick-jquery-livequery', SLICK_PLUGIN_URI . '/js/jquery.livequery.js', false, '1.1.1', false );
            wp_enqueue_script( 'jquery-ui-timepicker-addon', SLICK_PLUGIN_URI . '/js/jquery-ui-timepicker-addon.js', false, '1.1.1', false );

            wp_enqueue_script( 'slick-popup', SLICK_PLUGIN_URI . '/js/popup.js', false, Slick_CountDown_Core::VERSION, true );

        }// admin_init

        /**
         * Return an instance of this class
         *
         * @scince 1.0.0
         *
         * @return object A single instance of this class
         */

        public static function get_instance(){
            // If the single instance hasn't been set, set it now

            if(null == self::$instance){
                self::$instance = new self;
            }
            return self::$instance;
        }//get_instance

        /**
         * Defines TinyMCE rich editor js plugin
         *
         * @return void
         */

        function add_rich_plugins( $plugin_array )
        {
            if(is_admin()){
                $plugin_array['slick_button'] = SLICK_PLUGIN_URI.'/js/plugin.js';
            }
            return $plugin_array;
        }//add_rich_plugins

        /**
         * Adds TinyMCE rich editor buttons
         *
         * @return void
         */
        function register_rich_buttons( $buttons )
        {
            array_push($buttons, 'slick_button');
            return $buttons;
        }

        function popup(){
            require_once(SLICK_PLUGIN_DIR.'/slick-sc-form.php');
            die();
        }

        function shortcode($atts)
        {
            $retVal = '<div id="'.$atts['slickid'].'" class="slickCountdown" style="background-color:'.$atts['slickbgcolor'].'; padding:'.$atts['slickpadding'].'px;"></div>';

            $retVal .= '<script>';
            $retVal .= 'jQuery(document).ready(function($) {';
            $retVal .='$("#'.$atts['slickid'].'").ClassyCountdown({';
            $retVal .='end: '.strtotime($atts["slickendtime"]).',';

            if ($atts["slickcurrenttime"] == 'serverTime')
            {
                $retVal .= 'now: '.time() .',';
            }
            else
            {
                $retVal .= 'now: Math.floor(jQuery.now() / 1000), ';
            }

            $retVal .= 'style: {';
            $retVal .= 'element: "",';
            $retVal .= 'textResponsive: '.$atts['slickresponsivetextratio'].',';
            $retVal .= 'days: {';
            $retVal .= 'gauge: {';
            $retVal .= 'thickness: '.$atts['slickdaysthickness'].',';
            $retVal .= 'bgColor: "'.$atts['slickdaysbgcirclecolor'].'",';
            $retVal .= 'fgColor: "'.$atts['slickdaysfgcirclecolor'].'",';
            $retVal .= 'lineCap: "'.$atts['slickdayslinecap'].'"';
            $retVal .= '},';
            $retVal .='textCSS: "color:'.$atts['slickdaystextcolor'].';"';
            $retVal .='},';
            $retVal .= 'hours: {';
            $retVal .= 'gauge: {';
            $retVal .='thickness: '.$atts['slickhoursthickness'].',';
            $retVal .='bgColor: "'.$atts['slickhoursbgcirclecolor'].'",';
            $retVal .='fgColor: "'.$atts['slickhoursfgcirclecolor'].'",';
            $retVal .='lineCap: "'.$atts['slickhourslinecap'].'"},';
            $retVal .='textCSS: "color:'.$atts['slickhourstextcolor'].';"},';
            $retVal .='minutes: {';
            $retVal .='gauge: {';
            $retVal .='thickness: '.$atts['slickminutesthickness'].',';
            $retVal .='bgColor: "'.$atts['slickminutesbgcirclecolor'].'",';
            $retVal .='fgColor: "'.$atts['slickminutesfgcirclecolor'].'",';
            $retVal .='lineCap: "'.$atts['slickminuteslinecap'].'"';
            $retVal .='},';
            $retVal .='textCSS: "color:'.$atts['slickminutestextcolor'].';"';
            $retVal .='},';
            $retVal .='seconds: {';$retVal .='';
            $retVal .='gauge: {';
            $retVal .='thickness: '.$atts['slicksecondsthickness'].',';
            $retVal .='bgColor: "'.$atts['slicksecondsbgcirclecolor'].'",';
            $retVal .='fgColor: "'.$atts['slicksecondsfgcirclecolor'].'",';
            $retVal .='lineCap: "'.$atts['slicksecondslinecap'].'"';
            $retVal .='},';
            $retVal .='textCSS: "color:'.$atts['slicksecondstextcolor'].';"';
            $retVal .='}';
            $retVal .='},';
            $retVal .='labels: '.$atts['slickdisplaylabel'].',';
            $retVal .='labelsOptions: {';
            $retVal .='lang: {';
            $retVal .='days: "'.$atts['slickdays'].'",';
            $retVal .='hours: "'.$atts['slickhours'].'",';
            $retVal .='minutes: "'.$atts['slickminutes'].'",';
            $retVal .='seconds: "'.$atts['slickseconds'].'"';
            $retVal .='},';
            $retVal .='style: "font-size:0.5em; text-transform:uppercase;"';
            $retVal .='}';
            $retVal .='});';
            $retVal .='});';
            $retVal .='</script>';


            return $retVal;
        }
    }//class Slick_CountDown_Core
}//if(!class_exists('Slick_CountDown_Core'))

add_action( 'plugins_loaded', array( 'Slick_CountDown_Core', 'get_instance' ) );


