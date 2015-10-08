<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<body>
<div id="slick-popup">
    <div id="slick-shortcode-wrap">
        <div id="slick-sc-form-wrap">
            <?php
            $select_themes = array(
                'flat-colors' 			=> 'Flat Colors',
                'flat-colors-wide'		=> 'Flat Colors Wide',
                'flat-colors-very-wide'	=> 'Flat Colors Very Wide',
                'flat-colors-black'		=> 'Flat Colors Black',
                'black'					=> 'Black',
                'black-wide'			=> 'Black Wide',
                'black-very-wide'		=> 'Black Very Wide',
                'black-black'			=> 'Black Black',
                'white'					=> 'White',
                'white-wide'			=> 'White Wide',
                'white-very-wide'		=> 'White Very Wide',
                'white-black'			=> 'White Black'
            );
            ?>

            <table id="slick-sc-form-table" class="slick-shortcode-selector">
                <tbody>
                <tr class="form-row">
                    <td class="label">Choose Shortcode</td>
                    <td class="field">
                        <div class="slick-form-select-field">
                            <div class="slick-shortcodes-arrow">&#x25BC;</div>
                            <select name="slick-select-theme" class="slick-form-select">
                                <?php
                                foreach($select_themes as $theme_key => $theme_value){
                                    ?>
                                    <option value="<?php echo $theme_key; ?>"><?php echo $theme_value; ?></option>
                                <?php
                                }
                                ?>
                            </select>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

            <form method="post" id="slick-sc-form" class="slick">
                <table id="slick-sc-form-table">
                    <tbody>
                    <tr class="form-row">
                        <td class="label"><span class="slick-form-label-title">CSS Class</span>
                            <span class="slick-form-desc">Add a class to the wrapping HTML element.</span>
                        </td>
                        <td class="field">
                            <input type="text" name="slick_class" class="slick-date-picker-field slick-input slick-form-text" >
                        </td>
                    </tr>
                    </tbody>

                    <tbody>
                    <tr class="form-row">
                        <td class="label"><span class="slick-form-label-title">CSS Class</span>
                            <span class="slick-form-desc">Add a class to the wrapping HTML element.</span>
                        </td>
                        <td class="field">
                            <input type="text" name="slick_class2" class="slick-spinner-field slick-input slick-form-text" >

                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
</div>
</body>
</html>