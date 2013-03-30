/*
*	@name							ShowHidePass
*	@descripton						Add label 'Show' before password field. Click on label show or hide password field.
*	@use							$().ShowHidePass('#password');
*	@version						0.1
*	@requires						>Jquery 1.7
*
*	@author							Denis Sivzov
*	@author-website					http://fromgomel.com
*
*	@license						GNU License - http://opensource.org/licenses/GPL-3.0
*/
(function($){
     $.fn.extend({
        ShowHidePass: function(selector,text='Show',reverse=false) {	
		if (reverse) {
		$(selector).get(0).type='text';
		var start_type='text';
		var end_type='password';
		} else {
		var start_type='password';
		var end_type='text';
		}
		$(selector).after(" <label><input type=\"checkbox\" onchange=\"if ($('"+selector+"').get(0).type=='"+start_type+"') $('"+selector+"').get(0).type='"+end_type+"';else $('"+selector+"').get(0).type='"+start_type+"';\" />"+text+"</label>");
        }
    });
})(jQuery);
