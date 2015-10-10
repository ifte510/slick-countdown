<?php
$basic_options = array(
    'slickBgColor'  => array(
            'type'      	=> 'color',
            'label'     	=> __('Background Color','slick'),
            'desc'      	=> __('Background Color of the timer container','slick'),
            'default'   	=> '#ffffff'
    ),

    'slickPadding' => array(
            'type'      	=> 'spinner',
            'label'     	=> __('Padding','slick'),
            'desc'      	=> __('Padding of the timer container in pixel.','slick'),
            'default'   	=> '10'
    ),

    'currentTime' => array(
            'type'      	=>'select',
            'label'     	=> __('Current Time','slick'),
            'desc'      	=> __('Select wheather to use current server time or client\'s local time','slick'),
            'options'   	=> array(
                'serverTime'   => __('Server Time','slick'),
                'clientTime'   => __('Local Time','slick')
            ),
            'default'   =>'serverTime'
    ),

    'endTime' => array(
        'type'          	=> 'dateTime',
        'label'         	=> __('End Date and Time','slick'),
        'desc'          	=> __('Timer end date and time','slick'),
        'default'           => date('F d, Y h:i a', strtotime('+3 days')),
    ),


    'responsiveTextRatio' => array(
        'type'      		=> 'select',
        'label'     		=> __('Responsice Text Ratio','slick'),
        'desc'              => __('','slick'),
        'options'   =>array(
            '0.0'   => __('0.0','slick'),
            '0.1'   => __('0.1','slick'),
            '0.2'   => __('0.2','slick'),
            '0.3'   => __('0.3','slick'),
            '0.4'   => __('0.4','slick'),
            '0.5'   => __('0.5','slick'),
            '0.6'   => __('0.6','slick'),
            '0.7'   => __('0.7','slick'),
            '0.8'   => __('0.8','slick'),
            '0.9'   => __('0.9','slick'),
            '1.0'   => __('1.0','slick'),
        ),
        'default'   =>'0.5'
    ),
);

$label_options = array(

    'displayLabel'  => array(
        'type'      => 'select',
        'label'     => __('Show Label','slick'),
        'desc'      => __('','slick'),
        'options'   => array(
            'true'  => __('Yes','slick'),
            'false' => __('No','slick')
        ),
        'default'   => 'true'
    ),


    'days' => array(
        'type'      	=> 'text',
        'label'     	=> __('Days','slick'),
        'desc'          => __('','slick'),
        'default'   	=> __('Days','slick'),
    ),

    'hours' => array(
        'type'      	=> 'text',
        'label'     	=> __('Hours','slick'),
        'desc'          => __('','slick'),
        'default'   	=> __('Hours','slick'),
    ),

    'minutes' => array(
        'type'      	=> 'text',
        'label'     	=> __('Minutes','slick'),
        'desc'          => __('','slick'),
        'default'   	=> __('Minutes','slick'),
    ),

    'seconds' => array(
        'type'      	=> 'text',
        'label'     	=> __('Seconds','slick'),
        'desc'          => __('','slick'),
        'default'   	=> __('Seconds','slick'),
    ),
);

$element_styles = array(

    'daysElementStyles' => array(
        'type'      => 'title',
        'label'     => __('Days Element','slick'),
        'desc'      => __('','slick'),
        'default'   => __('','slick'),

    ),

    'daysThickNess' => array(
        'type'      =>'float-spinner',
        'label'     => __('Thickness','slick'),
        'desc'      => __('','slick'),
        'default'   => '0.01',
    ),


    'daysBgCircleColor'  => array(
        'type'      => 'color',
        'label'     => __('Background Circle Color','slick'),
        'desc'      => __('','slick'),
        'default'   => ''
    ),

    'daysFgCircleColor'  => array(
        'type'      => 'color',
        'label'     => __('Foreground Circle Color','slick'),
        'desc'      => __('','slick'),
        'default'   => ''
    ),

    'daysTextColor'  => array(
        'type'      => 'color',
        'label'     => __('Label Text Color','slick'),
        'desc'      => __('','slick'),
        'default'   => ''
    ),

    'daysLineCap' => array(
        'type'      => 'select',
        'label'     => __('Line Cap','slick'),
        'desc'      => __('','slick'),
        'options'   =>array(
            'butt'      => __('Butt','slick'),
            'round'     => __('Round','slick'),
            'square'    => __('Square','slick')
        ),
        'default'   => 'butt'
    ),


    /**
     * Hours elements styles
     */

    'hoursElementStyles' => array(
        'type'      => 'title',
        'label'     => __('Hours Element','slick'),
        'desc'      => __('','slick'),
        'default'   => 1,

    ),

    'hoursThickNess' => array(
        'type'      => 'float-spinner',
        'label'     => __('Thickness','slick'),
        'desc'      => __('','slick'),
        'default'   => '0.01',
    ),


    'hoursBgCircleColor'  => array(
        'type'      => 'color',
        'desc'      => __('','slick'),
        'default'   => __('','slick')
    ),

    'hoursFgCircleColor'  => array(
        'type'      => 'color',
        'label'     => __('Foreground Circle Color','slick'),
        'desc'      => __('','slick'),
        'default'   => __('','slick')
    ),

    'hoursTextColor'  => array(
        'type'      => 'color',
        'label'     => __('Label Text Color','slick'),
        'desc'      => __('','slick'),
        'default'   => __('','slick')
    ),

    'hoursLineCap' => array(
        'type'      => 'select',
        'label'     => __('Line Cap','slick'),
        'desc'      => __('','slick'),
        'options'   =>array(
            'butt'      => __('Butt','slick'),
            'round'     => __('Round','slick'),
            'square'    => __('Square','slick')
        ),
        'default'   => 'butt'
    ),

    /**
     * Minutes elements styles
     */

    'minutesElementStyles' => array(
        'type'      => 'title',
        'label'     => __('Minutes Element','slick'),
        'desc'      => __('','slick'),
        'default'   => 1,

    ),

    'minutesThickNess' => array(
        'type'      => 'float-spinner',
        'label'     => __('Thickness','slick'),
        'desc'      => __('','slick'),
        'default'   => __('0.01','slick'),
    ),


    'minutesBgCircleColor'  => array(
        'type'      => 'color',
        'label'     => __('Background Circle Color','slick'),
        'desc'      => __('','slick'),
        'default'   => __('','slick')
    ),

    'minutesFgCircleColor'  => array(
        'type'      => 'color',
        'label'     => __('Foreground Circle Color','slick'),
        'desc'      => __('','slick'),
        'default'   => __('','slick')
    ),

    'minutesTextColor'  => array(
        'type'      => 'color',
        'label'     => __('Label Text Color','slick'),
        'desc'      => __('','slick'),
        'default'   => __('','slick')
    ),

    'minutesLineCap' => array(
        'type'      => 'select',
        'label'     => __('Line Cap','slick'),
        'desc'      => '',
        'options'   =>array(
            'butt'      => __('Butt','slick'),
            'round'     => __('Round','slick'),
            'square'    => __('Square','slick')
        ),
        'default'   => 'butt'
    ),


    /**
     * Seconds elements styles
     */

    'secondsElementStyles' => array(
        'type'      => 'title',
        'label'     => __('Minutes Element','slick'),
        'desc'      => __('','slick'),
        'default'   => 1,

    ),

    'secondsThickNess' => array(
        'type'      => 'float-spinner',
        'label'     => __('Thickness','slick'),
        'desc'      => __('','slick'),
        'default'   => '0.01',
    ),


    'secondsBgCircleColor'  => array(
        'type'      => 'color',
        'label'     => __('Background Circle Color','slick'),
        'desc'      => __('','slick'),
        'default'   =>''
    ),

    'secondsFgCircleColor'  => array(
        'type'      => 'color',
        'label'     => __('Foreground Circle Color','slick'),
        'desc'      => __('','slick'),
        'default'   => __('','slick')
    ),

    'secondsTextColor'  => array(
        'type'      => 'color',
        'label'     => __('Label Text Color','slick'),
        'desc'      => __('','slick'),
        'default'   => __('','slick')
    ),

    'secondsLineCap' => array(
        'type'      => 'select',
        'label'     => __('Line Cap','slick'),
        'desc'          => '',
        'options'   =>array(
            'butt'      => __('Butt','slick'),
            'round'     => __('Round','slick'),
            'square'    => __('Square','slick')
        ),
        'default'   => 'butt'
    ),

    'redirectUrl'=>array(
        'type'  => 'text',
        'label' => __('Redirect URL','slick'),
        'desc'  => __('','slick'),
        'default'=> ''
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