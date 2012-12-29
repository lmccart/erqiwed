var image = function(filename, section, subsection, text) {
	
	var that = {}; 
	that.text = text;
	that.subsection = subsection;
	
	var insert;
	
	var classes = 'clickable ';
		
	$('#images').append("<div class='icon "+section+"' id="+filename+"><a title='"+text+"' rel='lightbox["+section+"]' href=images/"+filename+"L.jpg ><span class='"+classes+" info'>"+subsection+"</span><img rel=lightbox class='"+classes+" color' src=images/"+filename+"S.jpg /><img rel=lightbox class='"+classes+" bw' src=images/"+filename+"S_.jpg /></a></div>");

	that.el = $('#'+filename);
	
  that.el.find('img').css({left: Math.random()*(window.innerWidth-250)+50+'px', top: Math.random()*(window.innerHeight-250)+50+'px', height: '50px', width: '50px'});
	
	
	
	return that;	
}
