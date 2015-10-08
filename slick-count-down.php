<?php

/*
Plugin Name: Slick Count Down
Plugin URI: http://URI_Of_Page_Describing_Plugin_and_Updates
Description: A brief description of the Plugin.
Version: 1.0
Author: NextDot-03
Author URI: http://URI_Of_The_Plugin_Author
License: A "Slug" license name e.g. GPL2
*/


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
            add_action('admin_init',array(&$this,'admin_init'));
            add_action('wp_ajax_slick_shortcodes_popup',array(&$this,'popup'));
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
            require_once(SLICK_PLUGIN_DIR.'/slick-sc.php');
            die();
        }

    }//class Slick_CountDown_Core
}//if(!class_exists('Slick_CountDown_Core'))

add_action( 'plugins_loaded', array( 'Slick_CountDown_Core', 'get_instance' ) );