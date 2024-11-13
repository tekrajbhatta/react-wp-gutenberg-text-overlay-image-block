<?php

function vdplug_text_overlay_image_init()
{
    register_block_type(
        VDPLUG_DIR . '/build/blocks/text-overlay-image'
    );
}
add_action('init', 'vdplug_text_overlay_image_init');
