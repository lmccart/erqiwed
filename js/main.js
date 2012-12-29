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
	
	// CEREMONY
	var images = [];
	images.push(new image('brasserie', 'wedding', 'rehearsal dinner', '(picture: Erqi & Scott at rehearsal dinner tasting at Brasserie)<br>Essex Inn, 2nd Floor, 800 S. Michigan Avenue, Chicago, IL 60605<br>catered by Brasserie by LM, june 14, 2013, time tba'));
  images.push(new image('church', 'wedding', 'ceremony', 'St. Therese Chinese Catholic Church<br>218 W Alexander St, Chicago, IL 60616<br>june 15, 2013, time tba<br>*the only Chinese Catholic church in the Midwest!'));
	images.push(new image('reception', 'wedding', 'reception', '(picture: wedding cake tasting at Cafe Selmarie!)<br>MingHin Cuisine, 2nd Floor, 2168 S. Archer Avenue, Chicago, IL 60616<br>june 15, 2013, time tba<br>*our favorite and most frequented restaurant in Chicago'));
	images.push(new image('song', 'wedding', 'song requests', 'email <a href="mailto:erqiandscott@gmail.com">erqiandscott@gmail.com</a> to request songs for the reception!'));
	
	
	// TRAVEL AND ACCOMODATIONS
	images.push(new image('accomodations', 'travel_and_accomodations', 'transportation', '<a href="http://www.essexinn.com/">Chicago’s Essex Inn</a><br>800 S. Michigan Avenue, Chicago, IL 60605<br>Phone 312-542-5115<br><br>Toll-free Reservations Number: 800-621-6909<br>Rooms under Liu/Pollom Wedding starting at $164/night plus tax ($149/night for minimum 3 night stay, +$70/night for suite upgrade).<br><br>Please reserve by May 14, 2013.'));
	
	images.push(new image('transportation', 'travel_and_accomodations', 'accomodations', 'For those driving, valet parking is available at the Essex Inn - more details TBA.<br><br>There will be shuttle transportation from the Essex Inn to the ceremony/reception, and from ceremony/reception to Essex Inn on Saturday. More details TBA.<br><br>Metered parking also available in Chinatown near ceremony and reception site.<br><br>O’Hare Airport is ~19 mi from the Essex Inn. If you are taking public transit, take the Blue Line to LaSalle (0.7 mi from the hotel).<br><br>Midway Airport is ~12 mi from the Essex Inn.  If you are taking public transit, take the Orange Line to Roosevelt (0.4 mi away from the  hotel).<br><br>There are also many parking options close to the hotel:<br>Loop Auto Parks<br>312.922.1499<br>524 S Wabash Ave<br>Self Park - Uncovered<br>Open 24 Hours<br>2 Hrs $6; 6 Hrs $10; 10 Hrs $14<br>All day (until midnight): $17<br>24 hours (past midnight): $24<br>3 Days: $60<br><br>Park One<br>312.922.4128<br>525 Wabash Ave<br>Self Park - Covered<br><br>Harrison Garage<br>605 S Wabash Ave<br>312.663.0979<br>Attendant - Covered<br><br>Park One<br>312.922.8051<br>50 E Harrison St<br>Self Park - Uncovered'));

	images.push(new image('southloop', 'travel_and_accomodations', 'things to do', 'Lake Shore Drive Trail along Lake Michigan for running/biking/walking/etc<br>Navy Pier (http://www.navypier.com/)<br>Adler Planetarium (http://www.adlerplanetarium.org/)<br>Shedd Aquarium (http://www.sheddaquarium.org/)<br>The Art Institute of Chicago (http://www.artic.edu/)<br>Field Museum (http://fieldmuseum.org/)<br>Grant Park (http://www.chicagoparkdistrict.com/parks/grant-park/)<br>Bongo Room for brunch - get the red velvet pancakes!<br>Heaven on Seven for Cajun food (http://www.heavenonseven.com/wabash.html)'));
	
	images.push(new image('map', 'travel_and_accomodations', 'map', '<a target=_blank href="http://erqiandscott.com/map.png">click here for a printable map</a>'));
	
	
	// BRIDE AND GROOM
	images.push(new image('proposal', 'bride_and_groom', 'proposal', 'erqi was born in china, and grew up in louisiana. scott grew up in indianapolis.  they met in college at MIT and dated through erqi moving to ann arbor for medical school and scott moving to chicago to work at a trading firm. long-distance was hard and they were finally reunited when erqi chose to do her intern year in chicago. one day, scott tied a ring to his shoe and waited for erqi to ask him to go running.  erqi finally did on nov 2, 2012.  During that run, scott bent down to "tie his shoe" and proposed. erqi said yes! they will be getting married in chicago on june 15, 2013, and are excited to share this special moment with their friends and family.'));
	
	images.push(new image('erqisparents', 'bride_and_groom', 'erqi\s parents', 'Jason Liu and Lucy Tang are from China and moved to Louisiana in 1989 for Jason’s graduate studies. They have been married for 28 years and currently both work for the Louisiana DEQ. They have one daughter Erqi.'));
	
	images.push(new image('scottsparents', 'bride_and_groom', 'scott’s parents', 'Scott, Sr. and Jane Pollom are life-long residents of Indianapolis and have been married 34 yers.  Scott is a commercial investment real estate broker and both he and Jane have raised 5 tall, red heads: Katie, Elizabeth, Scott, Anna and Emily.'));
	
	
	// WEDDING PARTY
	images.push(new image('diana', 'wedding_party', 'diana', '(maid of honor) how she knows erqi: through high school in louisiana. what she’s doing now: law student at Columbia. fun fact: she found erqi’s wedding dress at a thakoon sample sale in nyc and got to see the designer himself!'));
	images.push(new image('martha', 'wedding_party', 'martha', 'how she knows erqi: through french camp in nova scotia. what she’s doing now: law student at LSU. fun fact: she spent a year in sete, france'));
	images.push(new image('cordelie', 'wedding_party', 'cordelie', 'how she knows erqi: through medical school at UMich. what she’s doing now: general surgery resident at UWashington. fun fact: she runs marathons'));
	images.push(new image('lauren', 'wedding_party', 'lauren', 'how she knows erqi: through undergrad at MIT.  what she’s doing now: artist and software programmer in boston. fun fact: she runs marathons (she also made this site)'));
	images.push(new image('anna', 'wedding_party', 'anna', 'how she knows erqi: through her brother scott. what she’s doing now: senior at IU. fun fact: recently campaigned for joe donnelly'));
	images.push(new image('katie', 'wedding_party', 'katie', 'how she knows erqi: through her brother scott. what she’s doing now: works at Kranti, a women\'s rights NGO in india. fun fact: former captain of the IU women\'s vball team'));
	images.push(new image('liz', 'wedding_party', 'liz', 'how she knows erqi: through her brother scott.  what she’s doing now: post-doc at stanford. fun fact: was a drummer in the band semi-formal.'));
	images.push(new image('emily', 'wedding_party', 'emily', 'how she knows erqi: through her brother scott. what she’s doing now: sophomore at purdue. fun fact: she is a very good whistler'));
	
	images.push(new image('stephane', 'wedding_party', 'stephane', '(best man) how he knows scott: through sigma chi at MIT. lived and worked with scott in chicago for 3 yrs. what he’s doing now: working at DRW Trading in Chicago. fun fact: enjoys staying up all night to watch the sun rise from scenic viewpoints'));
	images.push(new image('caine', 'wedding_party', 'caine', 'how he knows scott: through sigma chi and volleyball team at MIT.  what he’s doing now: working for microsoft in seattle, wa. fun fact: he’s a connoisseur of fine asian foods'));
	images.push(new image('dan', 'wedding_party', 'dan', 'how he knows scott: went to cathedral high school with scott. what he’s doing now: studying permaculture near eugene, oregon. fun fact: interests include photography and lawn games.'));
	images.push(new image('doug', 'wedding_party', 'doug', 'how he knows scott: through sigma chi at MIT. what he’s doing now: preparing for medical school in davis, CA with his fiancee Emily. fun fact: has the strength of two men'));
	images.push(new image('joe', 'wedding_party', 'joe', 'how he knows scott: through sigma chi at MIT. what he’s doing now: rocket scientist in washington d.c. fun fact: he once went an entire month eating only salad and bananas'));
	
	
	// FAQ
	images.push(new image('chicago', 'faq', 'why chicago?', 'we want to get married before erqi starts her rad onc residency at stanford in july 2013, and it was just easiest to plan our wedding where we are currently living. plus, we love chicago and hope you will too.  we know that it will be a long drive or flight for many of you, and we just want to say a big thank you in advance for taking time to come out and help make our big day special.  we are so excited to see all of our friends and family, and hope that you can make it to chicago!'));
	images.push(new image('weather', 'faq', 'june weather in chicago?', 'typically varies from 64-78F'));
	images.push(new image('dress', 'faq', 'what to wear?', 'semiformal for rehearsal dinner, ceremony and reception; bring swim attire if you’re interested in impromptu parties at the essex inn rooftop pool'));
	images.push(new image('dietary', 'faq', 'food restrictions?', 'there will be gluten-free and vegetarian options at rehearsal dinner & reception; there will also be an opportunity on the RSVP cards to let us know any additional other dietary restrictions you may have '));
	images.push(new image('registry', 'faq', 'registry?', 'We are registered at Macy’s, Sur La Table, and Sear’s. http://www1.macys.com/registry/wedding/guest/?registryId=176277 and http://www.surlatable.com/registry/giftRegistryList.jsp?id=200579461468 and http://www.sears.com/shc/s/GRManageView?storeId=10153&catalogId=12605&langId=&externalId=900054424556010101&grUserType=BUYER&fwdURL=GRGuestRegistryView&sortType=category&pageNo=1'));
	
	
	// RANDOM
	images.push(image('accomodations2', '', '', ''));
	images.push(new image('cake', '', '', ''));
	images.push(new image('rando', '', '', ''));
	images.push(new image('rando2', '', '', ''));
	images.push(new image('rando3', '', '', ''));
	images.push(new image('rando6', '', '', ''));
	images.push(new image('rand99', '', '', ''));
	images.push(new image('registry2', '', '', ''));
	
	
}
