<?php
$basic_options = array(
    'slickBgColor'  => array(
            'type'      	=> 'color',
            'label'     	=> _e('Background Color','slick'),
            'desc'      	=> _e('Background Color of the timer container','slick'),
            'default'   	=> '#ffffff'
    ),

    'slickPadding' => array(
            'type'      	=> 'spinner',
            'label'     	=> _e('Padding','slick'),
            'desc'      	=> _e('Padding of the timer container in pixel.','slick'),
            'default'   	=> '10'
    ),

    'currentTime' => array(
            'type'      	=>'select',
            'label'     	=> _e('Current Time','slick'),
            'desc'      	=> _e('Select wheather to use current server time or client\'s local time','slick'),
            'options'   	=> array(
                'serverTime'   => _e('Server Time','slick'),
                'clientTime'   => _e('Local Time','slick')
            ),
            'default'   =>'serverTime'
    ),

    'endTime' => array(
        'type'          	=> 'dateTime',
        'label'         	=> _e('End Date and Time','slick'),
        'desc'          	=> _e('Timer end date and time','slick'),
        'default'           => date('F d, Y h:i a', strtotime('+3 days')),
    ),


    'responsiveTextRatio' => array(
        'type'      		=> 'select',
        'label'     		=> _e('Responsice Text Ratio','slick'),
        'desc'              => _e('','slick'),
        'options'   =>array(
            '0.0'   => _e('0.0','slick'),
            '0.1'   => _e('0.1','slick'),
            '0.2'   => _e('0.2','slick'),
            '0.3'   => _e('0.3','slick'),
            '0.4'   => _e('0.4','slick'),
            '0.5'   => _e('0.5','slick'),
            '0.6'   => _e('0.6','slick'),
            '0.7'   => _e('0.7','slick'),
            '0.8'   => _e('0.8','slick'),
            '0.9'   => _e('0.9','slick'),
            '1.0'   => _e('1.0','slick'),
        ),
        'default'   =>'0.5'
    ),
);

$label_options = array(

    'displayLabel'  => array(
        'type'      => 'select',
        'label'     => _e('Show Label','slick'),
        'desc'      => _e('','slick'),
        'options'   => array(
            'true'  => _e('Yes','slick'),
            'false' => _e('No','slick')
        ),
        'default'   => 'true'
    ),


    'days' => array(
        'type'      	=> 'text',
        'label'     	=> _e('Days','slick'),
        'desc'          => _e('','slick'),
        'default'   	=> _e('Days','slick'),
    ),

    'hours' => array(
        'type'      	=> 'text',
        'label'     	=> _e('Hours','slick'),
        'desc'          => _e('','slick'),
        'default'   	=> _e('Hours','slick'),
    ),

    'minutes' => array(
        'type'      	=> 'text',
        'label'     	=> _e('Minutes','slick'),
        'desc'          => _e('','slick'),
        'default'   	=> _e('Minutes','slick'),
    ),

    'seconds' => array(
        'type'      	=> 'text',
        'label'     	=> _e('Seconds','slick'),
        'desc'          => _e('','slick'),
        'default'   	=> _e('Seconds','slick'),
    ),
);

$element_styles = array(

    'daysElementStyles' => array(
        'type'      => 'title',
        'label'     => _e('Days Element','slick'),
        'desc'      => _e('','slick'),
        'default'   => _e('','slick'),

    ),

    'daysThickNess' => array(
        'type'      =>'float-spinner',
        'label'     => _e('Thickness','slick'),
        'desc'      => _e('','slick'),
        'default'   => '0.01',
    ),


    'daysBgCircleColor'  => array(
        'type'      => 'color',
        'label'     => _e('Background Circle Color','slick'),
        'desc'      => _e('','slick'),
        'default'   => ''
    ),

    'daysFgCircleColor'  => array(
        'type'      => 'color',
        'label'     => _e('Foreground Circle Color','slick'),
        'desc'      => _e('','slick'),
        'default'   => ''
    ),

    'daysTextColor'  => array(
        'type'      => 'color',
        'label'     => _e('Label Text Color','slick'),
        'desc'      => _e('','slick'),
        'default'   => ''
    ),

    'daysLineCap' => array(
        'type'      => 'select',
        'label'     => _e('Line Cap','slick'),
        'desc'      => _e('','slick'),
        'options'   =>array(
            'butt'      => _e('Butt','slick'),
            'round'     => _e('Round','slick'),
            'square'    => _e('Square','slick')
        ),
        'default'   => 'butt'
    ),


    /**
     * Hours elements styles
     */

    'hoursElementStyles' => array(
        'type'      => 'title',
        'label'     => _e('Hours Element','slick'),
        'desc'      => _e('','slick'),
        'default'   => 1,

    ),

    'hoursThickNess' => array(
        'type'      => 'float-spinner',
        'label'     => _e('Thickness','slick'),
        'desc'      => _e('','slick'),
        'default'   => '0.01',
    ),


    'hoursBgCircleColor'  => array(
        'type'      => 'color',
        'desc'      => _e('','slick'),
        'default'   => _e('','slick')
    ),

    'hoursFgCircleColor'  => array(
        'type'      => 'color',
        'label'     => _e('Foreground Circle Color','slick'),
        'desc'      => _e('','slick'),
        'default'   => _e('','slick')
    ),

    'hoursTextColor'  => array(
        'type'      => 'color',
        'label'     => _e('Label Text Color','slick'),
        'desc'      => _e('','slick'),
        'default'   => _e('','slick')
    ),

    'hoursLineCap' => array(
        'type'      => 'select',
        'label'     => _e('Line Cap','slick'),
        'desc'      => _e('','slick'),
        'options'   =>array(
            'butt'      => _e('Butt','slick'),
            'round'     => _e('Round','slick'),
            'square'    => _e('Square','slick')
        ),
        'default'   => 'butt'
    ),

    /**
     * Minutes elements styles
     */

    'minutesElementStyles' => array(
        'type'      => 'title',
        'label'     => _e('Minutes Element','slick'),
        'desc'      => _e('','slick'),
        'default'   => 1,

    ),

    'minutesThickNess' => array(
        'type'      => 'float-spinner',
        'label'     => _e('Thickness','slick'),
        'desc'      => _e('','slick'),
        'default'   => _e('0.01','slick'),
    ),


    'minutesBgCircleColor'  => array(
        'type'      => 'color',
        'label'     => _e('Background Circle Color','slick'),
        'desc'      => _e('','slick'),
        'default'   => _e('','slick')
    ),

    'minutesFgCircleColor'  => array(
        'type'      => 'color',
        'label'     => _e('Foreground Circle Color','slick'),
        'desc'      => _e('','slick'),
        'default'   => _e('','slick')
    ),

    'minutesTextColor'  => array(
        'type'      => 'color',
        'label'     => _e('Label Text Color','slick'),
        'desc'      => _e('','slick'),
        'default'   => _e('','slick')
    ),

    'minutesLineCap' => array(
        'type'      => 'select',
        'label'     => _e('Line Cap','slick'),
        'desc'      => '',
        'options'   =>array(
            'butt'      => _e('Butt','slick'),
            'round'     => _e('Round','slick'),
            'square'    => _e('Square','slick')
        ),
        'default'   => 'butt'
    ),


    /**
     * Seconds elements styles
     */

    'secondsElementStyles' => array(
        'type'      => 'title',
        'label'     => _e('Minutes Element','slick'),
        'desc'      => _e('','slick'),
        'default'   => 1,

    ),

    'secondsThickNess' => array(
        'type'      => 'float-spinner',
        'label'     => _e('Thickness','slick'),
        'desc'      => _e('','slick'),
        'default'   => '0.01',
    ),


    'secondsBgCircleColor'  => array(
        'type'      => 'color',
        'label'     => _e('Background Circle Color','slick'),
        'desc'      => _e('','slick'),
        'default'   =>''
    ),

    'secondsFgCircleColor'  => array(
        'type'      => 'color',
        'label'     => _e('Foreground Circle Color','slick'),
        'desc'      => _e('','slick'),
        'default'   => _e('','slick')
    ),

    'secondsTextColor'  => array(
        'type'      => 'color',
        'label'     => _e('Label Text Color','slick'),
        'desc'      => _e('','slick'),
        'default'   => _e('','slick')
    ),

    'secondsLineCap' => array(
        'type'      => 'select',
        'label'     => _e('Line Cap','slick'),
        'desc'          => '',
        'options'   =>array(
            'butt'      => _e('Butt','slick'),
            'round'     => _e('Round','slick'),
            'square'    => _e('Square','slick')
        ),
        'default'   => 'butt'
    ),

    'redirectUrl'=>array(
        'type'  => 'text',
        'label' => _e('Redirect URL','slick'),
        'desc'  => _e('','slick'),
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