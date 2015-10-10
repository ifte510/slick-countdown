<?php
$basic_options = array(
    'slickBgColor'  => array(
            'type'      	=> 'color',
            'label'     	=> 'Background Color',
            'desc'      	=> 'Background Color of the timer container',
            'default'   	=>''
    ),

    'slickPadding' => array(
            'type'      	=> 'spinner',
            'label'     	=> 'Padding',
            'desc'      	=> 'Padding of the timer container in pixel.',
            'default'   	=> '10'
    ),

    'useServerTime' => array(
            'type'      	=> 'checkbox',
            'label'     	=> 'Use Server time',
            'desc'      	=> 'Please select wheather to use server time or use time of client\'s machine. If checked server time will be used',
            'default'   	=> 1
    ),

    'currentTime' => array(
            'type'      	=>'select',
            'label'     	=>'Current Time',
            'desc'      	=>'Select wheather to use current server time or client\'s local time',
            'options'   	=>array(
                'serverTime'   =>'Server Time',
                'clientTime'   =>'Local Time'
            ),
            'default'   =>'serverTime'
    ),

    'endTime' => array(
        'type'          	=>'dateTime',
        'label'         	=>'End Date &nbsp; Time',
        'desc'          	=>'Timer end date and time',
        'default'           => date('F d, Y h:i a', strtotime('+3 days')),
    ),


    'responsiveTextRatio' => array(
        'type'      		=>'select',
        'label'     		=>'Responsice Text Ratio',
        'desc'              => '',
        'options'   =>array(
            '0.0'   =>'0.0',
            '0.1'   =>'0.1',
            '0.2'   =>'0.2',
            '0.3'   =>'0.3',
            '0.4'   =>'0.4',
            '0.5'   =>'0.5',
            '0.6'   =>'0.6',
            '0.7'   =>'0.7',
            '0.8'   =>'0.8',
            '0.9'   =>'0.9',
            '1.0'   =>'1.0',
        ),
        'default'   =>'0.5'
    ),
);

$label_options = array(

    'displayLabel' => array(
        'type'      =>'select',
        'label'     =>'Show Label',
        'desc'          => '',
        'options'   =>array(
            'true'      =>'Yes',
            'false'     =>'No'
        ),
        'default'   =>'true'
    ),


    'days' => array(
        'type'      	=> 'text',
        'label'     	=> 'Days',
        'desc'          => '',
        'default'   	=> 'Days',
    ),

    'hours' => array(
        'type'      	=> 'text',
        'label'     	=> 'Hours',
        'desc'          => '',
        'default'   	=> 'Hours',
    ),

    'minutes' => array(
        'type'      	=> 'text',
        'label'     	=> 'Minutes',
        'desc'          => '',
        'default'   	=> 'Minutes',
    ),

    'seconds' => array(
        'type'      	=> 'text',
        'label'     	=> 'Seconds',
        'desc'          => '',
        'default'   	=> 'Seconds',
    ),
);

$element_styles = array(

    'daysElementStyles' => array(
        'type'      => 'title',
        'label'     => 'Days Element',
        'desc'          => '',
        'default'   => 1,

    ),

    'daysThickNess' => array(
        'type'      =>'float-spinner',
        'label'     =>'Thickness',
        'desc'          => '',
        'default'   =>'0.01',
    ),


    'daysBgCircleColor'  => array(
        'type'      => 'color',
        'label'     => 'Background Circle Color',
        'desc'      => '',
        'default'   =>''
    ),

    'daysFgCircleColor'  => array(
        'type'      => 'color',
        'label'     => 'Foreground Circle Color',
        'desc'      => '',
        'default'   =>''
    ),

    'daysTextColor'  => array(
        'type'      => 'color',
        'label'     => 'Label Text Color',
        'desc'      => '',
        'default'   =>''
    ),

    'daysLineCap' => array(
        'type'      =>'select',
        'label'     =>'LineCap',
        'desc'          => '',
        'options'   =>array(
            'butt'      =>'Butt',
            'round'     =>'Round',
            'square'    =>'Square'
        ),
        'default'   =>'butt'
    ),


    /**
     * Hours elements styles
     */

    'hoursElementStyles' => array(
        'type'      => 'title',
        'label'     => 'Hours Element',
        'desc'          => '',
        'default'   => 1,

    ),

    'hoursThickNess' => array(
        'type'      =>'float-spinner',
        'label'     =>'Thickness',
        'desc'          => '',
        'default'   =>'0.01',
    ),


    'hoursBgCircleColor'  => array(
        'type'      => 'color',
        'label'     => 'Background Circle Color',
        'desc'      => '',
        'desc'          => '',
        'default'   =>''
    ),

    'hoursFgCircleColor'  => array(
        'type'      => 'color',
        'label'     => 'Foreground Circle Color',
        'desc'      => '',
        'default'   =>''
    ),

    'hoursTextColor'  => array(
        'type'      => 'color',
        'label'     => 'Label Text Color',
        'desc'      => '',
        'default'   =>''
    ),

    'hoursLineCap' => array(
        'type'      =>'select',
        'label'     =>'LineCap',
        'desc'          => '',
        'options'   =>array(
            'butt'      =>'Butt',
            'round'     =>'Round',
            'square'    =>'Square'
        ),
        'default'   =>'butt'
    ),


    /**
     * Minutes elements styles
     */

    'minutesElementStyles' => array(
        'type'      => 'title',
        'label'     => 'Minutes Element',
        'desc'          => '',
        'default'   => 1,

    ),

    'minutesThickNess' => array(
        'type'      =>'float-spinner',
        'label'     =>'Thickness',
        'desc'          => '',
        'default'   =>'0.01',
    ),


    'minutesBgCircleColor'  => array(
        'type'      => 'color',
        'label'     => 'Background Circle Color',
        'desc'      => '',
        'default'   =>''
    ),

    'minutesFgCircleColor'  => array(
        'type'      => 'color',
        'label'     => 'Foreground Circle Color',
        'desc'      => '',
        'default'   =>''
    ),

    'minutesTextColor'  => array(
        'type'      => 'color',
        'label'     => 'Label Text Color',
        'desc'      => '',
        'default'   =>''
    ),

    'minutesLineCap' => array(
        'type'      =>'select',
        'label'     =>'LineCap',
        'desc'          => '',
        'options'   =>array(
            'butt'      =>'Butt',
            'round'     =>'Round',
            'square'    =>'Square'
        ),
        'default'   =>'butt'
    ),


    /**
     * Seconds elements styles
     */

    'secondsElementStyles' => array(
        'type'      => 'title',
        'label'     => 'Minutes Element',
        'desc'          => '',
        'default'   => 1,

    ),

    'secondsThickNess' => array(
        'type'      =>'float-spinner',
        'label'     =>'Thickness',
        'desc'          => '',
        'default'   =>'0.01',
    ),


    'secondsBgCircleColor'  => array(
        'type'      => 'color',
        'label'     => 'Background Circle Color',
        'desc'      => '',
        'default'   =>''
    ),

    'secondsFgCircleColor'  => array(
        'type'      => 'color',
        'label'     => 'Foreground Circle Color',
        'desc'      => '',
        'default'   =>''
    ),

    'secondsTextColor'  => array(
        'type'      => 'color',
        'label'     => 'Label Text Color',
        'desc'      => '',
        'default'   =>''
    ),

    'secondsLineCap' => array(
        'type'      =>'select',
        'label'     =>'LineCap',
        'desc'          => '',
        'options'   =>array(
            'butt'      =>'Butt',
            'round'     =>'Round',
            'square'    =>'Square'
        ),
        'default'   =>'butt'
    ),

    'redirectUrl'=>array(
        'type'  => 'text',
        'label' => 'Redirect URL',
        'desc'          => '',
        'default'=>''
    )
);


function slick_shortcodes($fields){
    foreach ($fields as $field_key => $field) {
        ?>
        <tbody>
            <tr class="form-row">
                <td class="label">
                    <label for="<?php echo $field_key; ?>"><span class="slick-form-label-title<?php if($field['type']=='title'){ echo ' section-title'; }  ?>"><?php echo $field['label']; ?>:</span></label>
                    <?php if($field['desc']): ?><span class="slick-form-desc"><?php echo $field['desc']; ?></span><?php endif; ?>
                </td>
                <td class="field">
                    <?php

                    switch( $field['type'] ){
                        case 'text':
                            echo '<input type="text" name="'. $field_key.'" id="'. $field_key.'" class="slick-input slick-form-text" value="'.$field['default'].'" >';
                            break;

                        case 'color':
                            echo '<input type="text" name="'. $field_key.'" id="'. $field_key.'" class="wp-color-picker-field slick-input slick-form-text" value="'.$field['default'].'" >';
                            break;

                        case 'dateTime':
                            echo '<input type="text" name="'. $field_key.'" id="'. $field_key.'" class="slick-date-picker-field slick-input slick-form-text" readonly value="'.$field['default'].'" >';
                            break;

                        case 'spinner':
                            echo '<input type="text" name="'. $field_key.'" id="'. $field_key.'" class="slick-spinner-field slick-input slick-form-text" readonly value="'.$field['default'].'" >';
                            break;

                        case 'float-spinner':
                            echo '<input type="text" name="'. $field_key.'" id="'. $field_key.'" class="slick-spinner-field slick-input slick-form-text float-spinner" readonly value="'.$field['default'].'" >';
                            break;

                        case 'checkbox' :
                            echo '<input type="checkbox" class="slick-input" name="'. $field_key.'" id="' . $field_key . '" ' . ( $field['default'] ? 'checked' : '' ) . ' />';
                            break;

                        case 'select':
                            echo '<div class="slick-form-select-field">';
                            echo '<div class="slick-shortcodes-arrow">&#x25BC;</div>';
                            echo '<select name="'. $field_key.'" id="'. $field_key.'" class="slick-form-select">';
                                foreach($field['options'] as $key => $value){
                                    echo '<option value="'.$key.'"'.($key == $field['default']?'selected':'').'>'.$value.'</option>';
                                }
                            echo '</select>';
                            echo '</div>';
                            break;
                    }
                    ?>

                </td>
            </tr>
        </tbody>
    <?php
    }
}