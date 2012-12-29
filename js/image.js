var image = function(filename, section, subsection, text) {
	
	var that = {}; 
	that.text = text;
	that.subsection = subsection;
	
	var insert;
	
	var classes = 'clickable ';
		
	$('#images').append("<div class='icon "+section+"' id="+filename+"><a title='"+subsection+"<br>"+text+"' rel='lightbox["+section+"]' href=images/"+filename+"L.jpg ><span class='"+classes+" info'>"+subsection+"</span><img rel=lightbox class='"+classes+" color' src=images/"+filename+"S.jpg /><img rel=lightbox class='"+classes+" bw' src=images/"+filename+"S_.jpg /></a></div>");

	var width = window.innerWidth || $(window).innerWidth();
	var height = window.innerHeight || $(window).innerHeight();
	
	that.el = $('#'+filename);
	
	that.el.find('img').css({left: Math.random()*(width-250)+50+'px', top: Math.random()*(height-250)+50+'px', height: '50px', width: '50px'});
	that.el.find('.info').css({opacity: 0});
	
	
	return that;	
}
