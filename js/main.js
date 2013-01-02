

var start = function() {
	
	console.log('start');
	var border = 50;
	
	
	$('#menu>div').click(function(ev) {
	
		ev.stopPropagation();
		
		var width = window.innerWidth || $(window).innerWidth();
		var height = window.innerHeight || $(window).innerHeight();
		
		console.log("w "+width+" h "+height);
	
		var section = ev.target.id;
		
		$('.'+section).each(function(i) {
		
			var n = i;
		
			if (section == 'wedding_party' && i > 1) n+= 2;
			if (section == 'wedding_party' && i > 8) n+= 1;
			
		
			var t = 4*border+Math.floor(n/4)*160+'px';
			var l = 2*border+n%4*160+'px';
		
			$(this).find('.color').stop().animate({opacity:1, top:t, left:l, height:'150px', width:'150px'});
			$(this).find('.info').css({top:t, left:l});
			$(this).find('.info').stop().delay(500).animate({opacity:0.6});
			$(this).find('.bw').stop().animate({opacity:0, top:t, left:l, height:'150px', width:'150px'});
		});
		
		
		$('div', '#images').not('.'+section).each(function(i) {
		
			var l = width-50-border+'px';
			var t = Math.random()*(height-250)+50+'px';
			
			$(this).find('img.color').stop().animate({opacity:0, top:t, left:l, height:'50px', width:'50px'});
			$(this).find('img.bw').animate({opacity:1, top:t, left:l, height:'50px', width:'50px'});	
			$(this).find('.info').stop().animate({opacity:0}, 100);
		});
		
		
	});
	
	$('body').click(function(ev) {
		
		var width = window.innerWidth || $(window).innerWidth();
		var height = window.innerHeight || $(window).innerHeight();
		console.log("w "+width+" h "+height);
		
		// randomize
		$('#images').find('div').each(function() {
		
			var t = Math.random()*(height-150-border)+border+'px';
			var l = Math.random()*(width-150-border)+border+'px';
			
			
			$(this).find('img').stop().animate({top:t, left:l, height:'50px', width:'50px'});
			$(this).find('.bw').animate({opacity:1});
			$(this).find('.color').animate({opacity:0});
			$(this).find('.info').stop().animate({opacity:0}, 100);
			
		});
		
	});
	
	// CEREMONY
	var images = [];
	images.push(new image('brasserie', 'wedding', 'rehearsal dinner', '<span class=italic>(picture: Erqi and Scott at rehearsal dinner tasting at Brasserie)</span><br>Essex Inn<br>2nd Floor<br>800 S. Michigan Avenue<br>Chicago, IL 60605<br>*Catered by Brasserie by LM<br>June 14, 2013, time TBA'));
  images.push(new image('church', 'wedding', 'ceremony', 'St. Therese Chinese Catholic Church<br>218 W Alexander St<br>Chicago, IL 60616<br>June 15, 2013, time TBA<br>*The only Chinese Catholic church in the Midwest!'));
	images.push(new image('cake', 'wedding', 'reception', '<span class=italic>(picture: wedding cake tasting at Cafe Selmarie!)</span><br>MingHin Cuisine<br>2nd Floor<br>2168 S. Archer Avenue<br>Chicago, IL 60616<br>June 15, 2013, time TBA<br>*Our favorite and most frequented restaurant in Chicago!'));
	images.push(new image('song', 'wedding', 'song requests', 'Email <a href="mailto:erqiandscott@gmail.com">erqiandscott@gmail.com</a> to request songs for the reception!'));
	
	
	// TRAVEL AND ACCOMODATIONS
	images.push(new image('accomodations', 'travel_and_accomodations', 'accomodations', '<a target=_blank href=http://www.essexinn.com/>Chicago’s Essex Inn</a><br>800 S. Michigan Avenue<br>Chicago, IL 60605<br>Phone 312-542-5115<br><br>Toll-free Reservations Number: 800-621-6909<br>Rooms under Liu/Pollom Wedding starting at $164/night plus tax ($149/night for minimum 3 night stay, +$70/night for suite upgrade).<br><br>Please reserve by May 14, 2013.'));
	
	images.push(new image('transportation', 'travel_and_accomodations', 'transportation', 'For those driving, valet parking is available at the Essex Inn - more details TBA.<br><br>There will be shuttle transportation from the Essex Inn to the ceremony/reception, and from ceremony/reception to Essex Inn on Saturday. More details TBA.<br><br>Metered parking also available in Chinatown near ceremony and reception site.<br><br>O’Hare Airport is ~19 mi from the Essex Inn. If you are taking public transit, take the Blue Line to LaSalle (0.7 mi from the hotel).<br><br>Midway Airport is ~12 mi from the Essex Inn.  If you are taking public transit, take the Orange Line to Roosevelt (0.4 mi away from the  hotel).<br><br>There are also many parking options close to the hotel:<br>Loop Auto Parks<br>312.922.1499<br>524 S Wabash Ave<br>Self Park - Uncovered<br>Open 24 Hours<br>2 Hrs $6; 6 Hrs $10; 10 Hrs $14<br>All day (until midnight): $17<br>24 hours (past midnight): $24<br>3 Days: $60<br><br>Park One<br>312.922.4128<br>525 Wabash Ave<br>Self Park - Covered<br><br>Harrison Garage<br>605 S Wabash Ave<br>312.663.0979<br>Attendant - Covered<br><br>Park One<br>312.922.8051<br>50 E Harrison St<br>Self Park - Uncovered'));

	images.push(new image('southloop', 'travel_and_accomodations', 'things to do', 'Lake Shore Drive Trail along Lake Michigan for running/biking/walking/etc<br><a target=_blank href=http://www.navypier.com>Navy Pier</a><br><a target=_blank href=http://www.adlerplanetarium.org>Adler Planetarium</a><br><a target=_blank href=http://www.sheddaquarium.org>Shedd Aquarium</a><br><a target=_blank href=http://www.artic.edu>The Art Institute of Chicago</a><br><a target=_blank href=http://fieldmuseum.org>Field Museum</a><br><a target=_blank href=http://www.chicagoparkdistrict.com/parks/grant-park>Grant Park</a><br><a target=_blank href=http://www.thebongoroom.com>Bongo Room</a> for brunch - get the red velvet pancakes!<br><a target=_blank href=http://www.heavenonseven.com/wabash.html>Heaven on Seven</a> for Cajun food!'));
	
	images.push(new image('map', 'travel_and_accomodations', 'map', '<a target=_blank href=http://erqiandscott.com/map.png>click here for a printable map</a>'));
	
	
	// BRIDE AND GROOM
	images.push(new image('proposal', 'bride_and_groom', 'proposal', 'Erqi was born in China, and grew up in Louisiana. Scott grew up in Indianapolis. They met in college at MIT and dated through Erqi moving to Ann Arbor for medical school and Scott moving to Chicago to work at a trading firm. Long-distance was hard and they were finally reunited when Erqi chose to do her intern year in chicago. One day, Scott tied a ring to his shoe and waited for Erqi to ask him to go running. Erqi finally did on Nov 2, 2012.  During that run, Scott bent down to "tie his shoe" and proposed. Erqi said yes! They will be getting married in Chicago on June 15, 2013, and are excited to share this special moment with their friends and family.'));
	
	images.push(new image('erqisparents', 'bride_and_groom', 'erqi’s parents', 'Jason Liu and Lucy Tang are from China and moved to Louisiana in 1989 for Jason’s graduate studies. They have been married for 28 years and currently both work for the Louisiana DEQ. They have one daughter Erqi.'));
	
	images.push(new image('scottsparents', 'bride_and_groom', 'scott’s parents', 'Scott, Sr. and Jane Pollom are life-long residents of Indianapolis and have been married 34 years.  Scott is a commercial investment real estate broker and both he and Jane have raised 5 tall and talented red heads: Katie, Elizabeth, Scott, Anna and Emily.'));
	
	
	// WEDDING PARTY
	images.push(new image('diana', 'wedding_party', 'diana', '(maid of honor)<br>Knows Erqi: through high school in Louisiana.<br>What she’s doing now: law student at Columbia.<br>Fun fact: she found Erqi’s wedding dress at a Thakoon sample sale in NYC and got to see the designer himself!'));
	
	images.push(new image('stephane', 'wedding_party', 'stephane', '(best man)<br>Knows Scott: through Sigma Chi at MIT. Lived and worked with Scott in Chicago for 3 yrs.<br>What he’s doing now: working at DRW Trading in Chicago.<br>Fun fact: enjoys staying up all night to watch the sun rise from scenic viewpoints.'));
	
	images.push(new image('martha', 'wedding_party', 'martha', 'Knows Erqi: through French camp in Nova Scotia.<br>What she’s doing now: law student at LSU.<br>Fun fact: she spent a year in Sete, France.'));
	images.push(new image('cordelie', 'wedding_party', 'cordelie', 'Knows Erqi: through medical school at UMich.<br>What she’s doing now: general surgery resident at UWashington.<br>Fun fact: she runs marathons.'));
	images.push(new image('lauren', 'wedding_party', 'lauren', 'Knows Erqi: through undergrad at MIT.<br>What she’s doing now: artist and software programmer in Boston.<br>Fun fact: she runs marathons (she also made this site).'));
	images.push(new image('anna', 'wedding_party', 'anna', 'Knows Erqi: through her brother Scott.<br>What she’s doing now: senior at IU. <br>Fun fact: recently campaigned for Joe Donnelly.'));
	images.push(new image('katie', 'wedding_party', 'katie', 'Knows Erqi: through her brother Scott.<br>What she’s doing now: works at Kranti, a women’s rights NGO in India.<br>Fun fact: former captain of the IU women’s vball team.'));
	images.push(new image('liz', 'wedding_party', 'liz', 'Knows Erqi: through her brother Scott.<br>What she’s doing now: post-doc at Stanford.<br>Fun fact: was a drummer in the band semi-formal.'));
	images.push(new image('emily', 'wedding_party', 'emily', 'Knows Erqi: through her brother Scott.<br>What she’s doing now: sophomore at Purdue.<br>Fun fact: she is a very good whistler.'));
	
	images.push(new image('caine', 'wedding_party', 'caine', 'Knows Scott: through Sigma Chi and volleyball team at MIT.<br>What he’s doing now: working for Microsoft in Seattle, WA.<br>Fun fact: he’s a connoisseur of fine Asian foods.'));
	images.push(new image('dan', 'wedding_party', 'dan', 'Knows Scott: went to Cathedral High School with Scott.<br>What he’s doing now: studying permaculture near Eugene, OR.<br>Fun fact: interests include photography and lawn games.'));
	images.push(new image('doug', 'wedding_party', 'doug', 'Knows Scott: through Sigma Chi at MIT.<br>What he’s doing now: preparing for medical school in Davis, CA with his fiancee Emily.<br>Fun fact: has the strength of two men.'));
	images.push(new image('joe', 'wedding_party', 'joe', 'Knows Scott: through Sigma Chi at MIT.<br>What he’s doing now: rocket scientist in Washington DC.<br>Fun fact: he once went an entire month eating only salad and bananas.'));
	
	
	// FAQ
	images.push(new image('chicago', 'faq', 'why chicago?', 'We want to get married before Erqi starts rad onc residency at Stanford in July 2013, and it was easiest to plan our wedding where we are currently living. Plus, we love Chicago and hope you will too. We know that it will be a long drive or flight for many of you, and we want to say a big thank you in advance for taking time to come out and help make our big day special. We are so excited to see all of our friends and family, and hope that you can make it to Chicago!'));
	images.push(new image('weather', 'faq', 'june weather in chicago', 'It typically varies from 64-78F.'));
	images.push(new image('dress', 'faq', 'what to wear', 'Semiformal for rehearsal dinner, ceremony and reception.<br>Bring swim attire if you’re interested in impromptu parties at the Essex Inn rooftop pool!'));
	images.push(new image('dietary', 'faq', 'food restrictions', 'There will be gluten-free and vegetarian options at rehearsal dinner and reception; there will also be an opportunity on the RSVP cards to let us know any additional dietary restrictions you may have.'));
	images.push(new image('registry', 'faq', 'registry', 'We are registered at <a target=_blank href=http://www1.macys.com/registry/wedding/guest/?registryId=176277>Macy’s<a>, <a target=_blank href=http://www.surlatable.com/registry/giftRegistryList.jsp?id=200579461468>Sur La Table</a>, and <a target=_blank href=http://www.sears.com/shc/s/GRManageView?storeId=10153&catalogId=12605&langId=&externalId=900054424556010101&grUserType=BUYER&fwdURL=GRGuestRegistryView&sortType=category&pageNo=1>Sear’s</a>'));
	
	
	// RANDOM
	images.push(image('accomodations2', '', '', ''));
	images.push(new image('reception', '', '', ''));
	images.push(new image('rando', '', '', ''));
	images.push(new image('rando2', '', '', ''));
	images.push(new image('rando3', '', '', ''));
	images.push(new image('rando6', '', '', ''));
	images.push(new image('rand99', '', '', ''));
	images.push(new image('registry2', '', '', ''));
	
	
}
