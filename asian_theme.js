
jQuery(document).ready(function(){

	// newsletter popup
 
	// front -teaser view -- created field
	// split text and wrap 
	jQuery(".views-field-created .wrap >div ").each(function(i, val){
		var val = jQuery(val),
			split = val.text().split(' ');
		val.html('<div class="numbers">'+split[0]+'</div><div class="text">'+split[1]+'</div>');
		
	});
	// title break
	
	jQuery('.block > h2, .block-title').each(function(i, val){
		var text = jQuery(val).text().split('\\n');
		jQuery(val).html(text[0] + "<br/>" + text[1]);
		console.log(text);
	});


	//menu
	var menu_items = [],
		rows = jQuery('.view-frontpage .views-row');
	
	rows.each(function(i, val){ 
		var _class = jQuery(val).attr('class'),
			sprite = _class.split('sprite-')[1].split(' ')[0],
			nid = _class.split('nid-')[1].split(' ')[0];
			
		if ( sprite != '' && sprite != ' '  ){
				menu_items.push({
					"sprite_name" : sprite,
					"nid" : nid
				});
		}
	});
	
	var jump_menu = get_menu(menu_items, ''),
		scroll_to_top =  jQuery('<div class="scroll_to_top sprite up"></div>')
							.on("click", function(){
								_scroll( "#page");
							});
	
	jQuery(rows).each(function(i, val ){
		jQuery(val)
			.wrapAll( '<span/>' )
			.prepend( jump_menu.clone(true) )
			.prepend( scroll_to_top.clone(true) );
	});
	var h = jQuery('<div class="sprite_wrap" id="join"><div data-menu_item="mailinglist" data-text="_top" class="sprite mailinglist_top "></div><div class="label">Join our mailing list</div></div>').on("click", function(){
		_popup();
	});
	
	jQuery("#header .region")
		.prepend( get_menu(menu_items, '_top') )
		.find(".menu_wrap > .menu").append(h);
	
//console.log(menu_markup.html());

	
		jQuery(".sprite_wrap")
			.on("mouseenter" ,function(e){
				var sprite = jQuery(".sprite", e.currentTarget),
					menu_items = sprite.data("menu_item"),
					text = sprite.data("text");
				
				sprite
					.addClass(menu_items + text + "_on")
					.removeClass(menu_items+text);
					
			}).on("mouseleave", function(e){
				var sprite = jQuery(".sprite", e.currentTarget),
					menu_items = sprite.data("menu_item"),
					text = sprite.data("text");
				
				sprite
					.addClass(menu_items+text)
					.removeClass(menu_items + text + "_on");
			})
			.children()
			.on("click", function(e){
				var nid = jQuery(e.currentTarget).data("nid");
					//console.log();
					if(typeof nid != "undefined"){
				_scroll('.view-frontpage .nid-'+nid);
				console.log('.view-frontpage .nid-'+nid);
			}
			});
			
			
			
	//col_2
	//vertical heights equl 
	var r = jQuery("#right"),
		l = jQuery("#left"),
		rh = r.height(),
		lh = l.height();
		
	if(rh < lh){
		r.css("min-height", lh+"px");
	} else {
		l.css("min-height", rh+"px");
		
	}
			
// doc ready END
})
.on("keyup", function(e){
	if(e.keyCode === 16){
		jQuery("body").toggleClass("overlay");
	}
});




function get_menu(menu_items, text){
	
	var menu_markup = jQuery('<div class="menu"/>');
	
	jQuery.each(menu_items, function(i, val){
		
		var link = jQuery('<div class="sprite_wrap" />')
			.append(jQuery('<div class="sprite" />')
						.addClass(val.sprite_name+text)				
						.data("menu_item", 	val.sprite_name)
						.data("nid", 		val.nid)
						.data("text", 		text)	)
			.append(jQuery('<div class="label" />').html(val.sprite_name));
		
		menu_markup.append(link);
		
	});

	return jQuery('<div class="menu_wrap"/>').append(menu_markup);
}


function _scroll(selector){
	console.log(selector);
	jQuery('html,body').animate({
        scrollTop: jQuery(selector).offset().top - 30
    }, 1000);
}


function _popup(){
		
		jQuery('<div/>').html('<label>Email</label><input  type="text"/><input value="Send" type="submit"/>').dialog({
			"open" : function(d){
				console.log(d.target);
				var p = jQuery(d.target).parents('.ui-dialog');
				jQuery('.ui-dialog-titlebar', p).remove();
			}	
		});
		
}
