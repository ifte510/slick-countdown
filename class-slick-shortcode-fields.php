<?php
if(!class_exists('Slick_Shortcode_Fields'))
{
    class Slick_Shortcode_Fields
    {
        public function get_basic_options()
        {
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

                'slickCurrentTime' => array(
                    'type'      	=>'select',
                    'label'     	=> __('Current Time','slick'),
                    'desc'      	=> __('Select wheather to use current server time or client\'s local time','slick'),
                    'options'   	=> array(
                        'serverTime'   => __('Server Time','slick'),
                        'clientTime'   => __('Local Time','slick')
                    ),
                    'default'   =>'serverTime'
                ),

                'slickEndTime' => array(
                    'type'          	=> 'dateTime',
                    'label'         	=> __('End Date and Time','slick'),
                    'desc'          	=> __('Timer end date and time','slick'),
                    'default'           => date('F d, Y h:i a', strtotime('+3 days')),
                ),


                'slickResponsiveTextRatio' => array(
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
            $this->generate_fields($basic_options);
        }

        public function get_label_options()
        {
            $label_options = array(

                'slickDisplayLabel'  => array(
                    'type'      => 'select',
                    'label'     => __('Show Label','slick'),
                    'desc'      => __('','slick'),
                    'options'   => array(
                        'true'  => __('Yes','slick'),
                        'false' => __('No','slick')
                    ),
                    'default'   => 'true'
                ),


                'slickDays' => array(
                    'type'      	=> 'text',
                    'label'     	=> __('Days','slick'),
                    'desc'          => __('','slick'),
                    'default'   	=> __('Days','slick'),
                ),

                'slickHours' => array(
                    'type'      	=> 'text',
                    'label'     	=> __('Hours','slick'),
                    'desc'          => __('','slick'),
                    'default'   	=> __('Hours','slick'),
                ),

                'slickMinutes' => array(
                    'type'      	=> 'text',
                    'label'     	=> __('Minutes','slick'),
                    'desc'          => __('','slick'),
                    'default'   	=> __('Minutes','slick'),
                ),

                'slickSeconds' => array(
                    'type'      	=> 'text',
                    'label'     	=> __('Seconds','slick'),
                    'desc'          => __('','slick'),
                    'default'   	=> __('Seconds','slick'),
                ),
            );
            $this->generate_fields($label_options);
        }

        public  function get_element_styles_options(){
            $element_styles = array(

                'slickDaysElementStyles' => array(
                    'type'      => 'title',
                    'label'     => __('Days Element','slick'),
                    'desc'      => __('','slick'),
                    'default'   => __('','slick'),

                ),

                'slickDaysThickNess' => array(
                    'type'      =>'float-spinner',
                    'label'     => __('Thickness','slick'),
                    'desc'      => __('','slick'),
                    'default'   => '0.01',
                ),


                'slickDaysBgCircleColor'  => array(
                    'type'      => 'color',
                    'label'     => __('Background Circle Color','slick'),
                    'desc'      => __('','slick'),
                    'default'   => ''
                ),

                'slickDaysFgCircleColor'  => array(
                    'type'      => 'color',
                    'label'     => __('Foreground Circle Color','slick'),
                    'desc'      => __('','slick'),
                    'default'   => ''
                ),

                'slickDaysTextColor'  => array(
                    'type'      => 'color',
                    'label'     => __('Label Text Color','slick'),
                    'desc'      => __('','slick'),
                    'default'   => ''
                ),

                'slickDaysLineCap' => array(
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

                'slickHoursElementStyles' => array(
                    'type'      => 'title',
                    'label'     => __('Hours Element','slick'),
                    'desc'      => __('','slick'),
                    'default'   => 1,

                ),

                'slickHoursThickNess' => array(
                    'type'      => 'float-spinner',
                    'label'     => __('Thickness','slick'),
                    'desc'      => __('','slick'),
                    'default'   => '0.01',
                ),


                'slickHoursBgCircleColor'  => array(
                    'type'      => 'color',
                    'desc'      => __('','slick'),
                    'default'   => __('','slick')
                ),

                'slickHoursFgCircleColor'  => array(
                    'type'      => 'color',
                    'label'     => __('Foreground Circle Color','slick'),
                    'desc'      => __('','slick'),
                    'default'   => __('','slick')
                ),

                'slickHoursTextColor'  => array(
                    'type'      => 'color',
                    'label'     => __('Label Text Color','slick'),
                    'desc'      => __('','slick'),
                    'default'   => __('','slick')
                ),

                'slickHoursLineCap' => array(
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

                'slickMinutesElementStyles' => array(
                    'type'      => 'title',
                    'label'     => __('Minutes Element','slick'),
                    'desc'      => __('','slick'),
                    'default'   => 1,

                ),

                'slickMinutesThickNess' => array(
                    'type'      => 'float-spinner',
                    'label'     => __('Thickness','slick'),
                    'desc'      => __('','slick'),
                    'default'   => __('0.01','slick'),
                ),


                'slickMinutesBgCircleColor'  => array(
                    'type'      => 'color',
                    'label'     => __('Background Circle Color','slick'),
                    'desc'      => __('','slick'),
                    'default'   => __('','slick')
                ),

                'slickMinutesFgCircleColor'  => array(
                    'type'      => 'color',
                    'label'     => __('Foreground Circle Color','slick'),
                    'desc'      => __('','slick'),
                    'default'   => __('','slick')
                ),

                'slickMinutesTextColor'  => array(
                    'type'      => 'color',
                    'label'     => __('Label Text Color','slick'),
                    'desc'      => __('','slick'),
                    'default'   => __('','slick')
                ),

                'slickMinutesLineCap' => array(
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

                'slickSecondsElementStyles' => array(
                    'type'      => 'title',
                    'label'     => __('Minutes Element','slick'),
                    'desc'      => __('','slick'),
                    'default'   => 1,

                ),

                'slickSecondsThickNess' => array(
                    'type'      => 'float-spinner',
                    'label'     => __('Thickness','slick'),
                    'desc'      => __('','slick'),
                    'default'   => '0.01',
                ),


                'slickSecondsBgCircleColor'  => array(
                    'type'      => 'color',
                    'label'     => __('Background Circle Color','slick'),
                    'desc'      => __('','slick'),
                    'default'   =>''
                ),

                'slickSecondsFgCircleColor'  => array(
                    'type'      => 'color',
                    'label'     => __('Foreground Circle Color','slick'),
                    'desc'      => __('','slick'),
                    'default'   => __('','slick')
                ),

                'slickSecondsTextColor'  => array(
                    'type'      => 'color',
                    'label'     => __('Label Text Color','slick'),
                    'desc'      => __('','slick'),
                    'default'   => __('','slick')
                ),

                'slickSecondsLineCap' => array(
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

                'slickRedirectUrl'=>array(
                    'type'  => 'text',
                    'label' => __('Redirect URL','slick'),
                    'desc'  => __('','slick'),
                    'default'=> ''
                )
            );
            $this->generate_fields($element_styles);

        }

        private function generate_fields($fields)
        {
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
        }//generate_fields
    }
}