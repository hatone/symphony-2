var Experiment = {
	
	init: function() {
		
		var h1 = jQuery('h1');
		var h2 = jQuery('h2:first');
		var version = jQuery('#version');
		var user = jQuery('#usr');
		
		// move site name to footer
		version.wrapInner('<span/>');
		version.prepend(h1.text());
		
		// make h2 copy h1
		h1.remove();
	},
	
}

jQuery(document).ready(function() {
	Experiment.init();
});