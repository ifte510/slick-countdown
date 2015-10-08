<?php
$slick_shortcodes = array(
    'slickId' => array(
        'type'=>"date",
        'label'=>'ID',
        'desc'=>'simple description',
        'default'=>''
    ),
);

function slick_shortcodes($fields){
    foreach ($fields as $field_key => $field) {
        ?>
        <tbody>
            <tr class="form-row">
                <td class="label">
                    <label for="<?php echo $field_key; ?>"><span class="slick-form-label-title"><?php echo $field['label']; ?></span></label>
                    <span class="slick-form-desc"><?php echo $field['desc']; ?></span>
                </td>
                <td class="field">
                    <?php

                    switch( $field['type'] ){
                        case 'text':
                            echo '<input type="text" name="'. $field_key.'" id="'. $field_key.'" class="slick-input slick-form-text" >';
                        break;

                        case 'color':
                            echo '<input type="text" name="'. $field_key.'" id="'. $field_key.'" class="wp-color-picker-field slick-input slick-form-text" value="'.$field['default'].'" >';
                            break;

                        case 'date':
                            echo '<input type="text" name="'. $field_key.'" id="'. $field_key.'" class="slick-date-picker-field slick-input slick-form-text" value="'.$field['default'].'" >';

                    }
                    ?>

                </td>
            </tr>
        </tbody>
    <?php
    }
}