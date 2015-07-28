/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
if(typeof(CKEDITOR) !== 'undefined') {
    CKEDITOR.addStylesSet( 'drupal',
    [

            /* Object Styles */

            {
                    name : 'bullet',
                    element : 'li',
                    attributes :
                    {
                            style : 'padding-left: 25px; ',
                            class : 'sprite bullet list'
                                                    
                    }
            },
            {
                    name : 'morinfo',
                    element : 'li',
                    attributes :
                    {
                            style : 'padding-left: 60px; ',
                            class : 'sprite morinfo list'
                            
                           
                    }
            },

          
    ]);
}
