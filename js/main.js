var border = 50;

var start = function() {
	
	console.log('start');
	
	
	$('#menu>div').click(function(ev) {
	
		ev.stopPropagation();
	
		var section = ev.target.id;
		
		$('.'+section).each(function(i) {
			var t = 4*border+Math.floor(i/4)*160+'px';
			var l = 2*border+i%4*160+'px';
		
			$(this).find('.color').stop().animate({opacity:1, top:t, left:l, height:'150px', width:'150px'});
			$(this).find('.info').css({top:t, left:l});
			$(this).find('.info').stop().delay(500).animate({opacity:0.6});
			$(this).find('.bw').stop().animate({opacity:0, top:t, left:l, height:'150px', width:'150px'});
		});
		
		
		$('div', '#images').not('.'+section).each(function(i) {
			var l = Math.random()*(window.innerWidth-250)+50+'px';
			var t = window.innerHeight-50-border+'px';
			$(this).find('img.color').stop().animate({opacity:0, top:t, left:l, height:'50px', width:'50px'});
			$(this).find('img.bw').animate({opacity:1, top:t, left:l, height:'50px', width:'50px'});	
			$(this).find('.info').stop().animate({opacity:0}, 100);
		});
		
		
	});
	
	$('body').click(function(ev) {
		
		// randomize
		$('#images').find('div').each(function() {
		
			var t = Math.random()*(window.innerHeight-150-border)+border+'px';
			var l = Math.random()*(window.innerWidth-150-border)+border+'px';
			
			$(this).find('img').stop().animate({top:t, left:l, height:'50px', width:'50px'});
			$(this).find('.bw').animate({opacity:1});
			$(this).find('.color').animate({opacity:0});
			$(this).find('.info').stop().animate({opacity:0}, 100);
			
		});
		
	});
	
	
	var img0 = new image('church', 'wedding', 'ceremony', 'Things to do');
	var img20 = new image('reception', 'wedding', 'reception', 'Things to do');
	var img1 = new image('song', 'wedding', 'song requests', 'Things to do');
	
	
	var img2 = new image('transportation', 'travel_and_accomodations', 'transporation', 'This is transport.');
	var img18 = new image('accomodations', 'travel_and_accomodations', 'accomodations', 'This is transport.');
	var img19 = new image('accomodations2', 'travel_and_accomodations', 'accomodations2', 'This is transport.');
	var img23 = new image('essex2', 'travel_and_accomodations', 'essex inn', 'This is transport.');
	var img3 = new image('southloop', 'travel_and_accomodations', 'things to do', 'Things to do');
	
	
	var img4 = new image('proposal', 'bride_and_groom', 'proposal', 'erqi was born in china, and grew up in louisiana. scott grew up in indianapolis.  they met in college at MIT and dated through erqi moving to ann arbor for medical school and scott moving to chicago to work at a trading firm. long-distance was hard and they were finally reunited when erqi chose to do her intern year in chicago. one day, scott tied a ring to his shoe and waited for erqi to ask him to go running.  erqi finally did on nov 2, 2012.  During that run, scott bent down to "tie his shoe" and proposed. erqi said yes! they will be getting married in chicago on june 15, 2013, and are excited to share this special moment with their friends and family.');
	
	var img40 = new image('erqisparents', 'bride_and_groom', 'erqi\s parents', 'Jason Liu and Lucy Tang are from China and moved to Louisiana in 1989 for Jason\'s graduate studies.  They have been married for 28 years and currently both work for the Louisiana DEQ.  They have one daughter Erqi.');
	
	var img41 = new image('scottsparents', 'bride_and_groom', 'scott\'s parents', 'Scott, Sr. and Jane Pollom are life-long residents of Indianapolis and have been married 34 yers.  Scott is a commercial investment real estate broker and both he and Jane have raised 5 tall, red heads: Katie, Elizabeth, Scott, Anna & Emily.');
	
	var img5 = new image('diana', 'wedding_party', 'diana', 'how she knows erqi: through high school in louisiana. what she\'s doing now: law student at Columbia.  fun fact: she found erqi\'s wedding dress at a thakoon sample sale in nyc and got to see the designer himself!');
	var img6 = new image('martha', 'wedding_party', 'martha', 'how she knows erqi: through french camp in nova scotia. what she\'s doing now: law student at LSU. fun fact: she spent a year in sete, france');
	var img7 = new image('cordelie', 'wedding_party', 'cordelie', 'how she knows erqi: through medical school at UMich. what she\'s doing now: general surgery resident at UWashington. fun fact: she runs marathons');
	var img17 = new image('anna', 'wedding_party', 'anna', 'how she knows erqi: through her brother scott. what she\'s doing now: senior at IU. fun fact: recently campaigned for joe donnelly');
	var img9 = new image('katie', 'wedding_party', 'katie', 'how she knows erqi: through her brother scott. what she\'s doing now: works at Kranti, a women\'s rights NGO in india. fun fact: former captain of the IU women\'s vball team');
	var img8 = new image('liz', 'wedding_party', 'liz', 'how she knows erqi: through her brother scott.  what she\s doing now: post-doc at stanford. fun fact: was a drummer in the band semi-formal.');
	var img10 = new image('emily', 'wedding_party', 'emily', 'how she knows erqi: through her brother scott. what she\s doing now: sophomore at purdue. fun fact: she is a very good whistler');
	
	
	var img31 = new image('stephane', 'wedding_party', 'stephane', 'how he knows scott: through sigma chi at MIT. lived and worked with scott in chicago for 3 yrs. what he\'s doing now: working at DRW Trading in Chicago. fun fact: enjoys staying up all night to watch the sun rise from scenic viewpoints');
	var img11 = new image('caine', 'wedding_party', 'caine', 'how he knows scott: through sigma chi and volleyball team at MIT.  what he\'s doing now: working for microsoft in seattle, wa. fun fact: he\'s a connoisseur of fine asian foods');
	var img12 = new image('dan', 'wedding_party', 'dan', 'how he knows scott: went to cathedral high school with scott. what he\'s doing now: studying permaculture near eugene, oregon. fun fact: interests include photography and lawn games.');
	var img13 = new image('doug', 'wedding_party', 'doug', 'how he knows scott: through sigma chi at MIT. what he\'s doing now: preparing for medical school in davis, CA with his fiancee Emily. fun fact: has the strength of two men');
	var img14 = new image('joe', 'wedding_party', 'joe', 'how he knows scott: through sigma chi at MIT. what he\'s doing now: rocket scientist in washington d.c. fun fact: he once went an entire month eating only salad and bananas');
	
	
	
	var img15 = new image('rand99', '', '', 'Things to do');
	var img16 = new image('cake', '', '', 'Things to do');
	var img21 = new image('rando', '', '', 'Things to do');
	
	
}
