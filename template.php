<?php

function asian_theme__preprocess_html(&$variables){



}


function asian_theme_init(&$variables){

 if (drupal_is_front_page()) {
    drupal_add_css(drupal_get_path('module', 'foo') . '/foo.css');
  }
  dsm("hey ziv");

}
