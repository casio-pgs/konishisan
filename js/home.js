jQuery(function($){
	$('body').fadeIn(500);
	var homeabout_top;
	$(window).on('load scroll resize', function(){
		homeabout_top = $(".first_about").offset().top;
		if( $(window).scrollTop() >= homeabout_top){
			$(".site-header").addClass('active-header');
		} else {
			$(".site-header").removeClass('active-header');
		}
	});
	
    $('.bg_topimage').css('display','none');
    $('.bg_glow').css('display','none');
    $('#wave').css('display','none');
    $('#los01').css('display','none');
    $('#clipmask').css('display','none');
    $('#topslide').css('display','none');
    $('#topslide_sp').css('display','none');
	$(".site-header").addClass('fade-header');		
	$('#read_topimage').css('display','none');

	//ロード画面リード文
    var setElm = $('.split'),
    delaySpeed = 60,
    fadeSpeed = 100;
 
    setText = setElm.html();
 
    setElm.css({visibility:'visible'}).children().addBack().contents().each(function(){
        var elmThis = $(this);
        if (this.nodeType == 3) {
            var $this = $(this);
			$this.replaceWith($this.text().replace(/(\S)/g, '<span class="textSplitLoad">$&</span>'));
        }
    });
    $(window).load(function(){
        splitLength = $('.textSplitLoad').length;
        setElm.find('.textSplitLoad').each(function(i){
            splitThis = $(this);
            splitTxt = splitThis.text();
            splitThis.delay(i*(delaySpeed)).css({opacity:'0'}).animate({opacity:'1'},fadeSpeed);
        });
        setTimeout(function(){
		setElm.html(setText);
        },splitLength*delaySpeed+fadeSpeed);
    });	
	
		$('#topimage').css('display','block');
		$("#topslide .slick-slide img").addClass('start');
		$("#topslide_sp .slick-slide img").addClass('start');
			//$('#topimage_dummy').css('display','none');
			$('#topslide').addClass('start');
			$('#topslide.start').slick({
				dots: true,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 4000,
				pauseOnHover: false,
				speed: 500,
				fade: true,
				cssEase: 'linear'
			});
			$("#topslide .slick-dots").addClass('dotpc');
			$("#topslide .slick-dots").appendTo(".slick-list");
			
			$('#topslide_sp').addClass('start');
			$('#topslide_sp.start').slick({
				dots: true,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 4000,
				pauseOnHover: false,
				speed: 500,
				fade: true,
				cssEase: 'linear'
			});
			$("#topslide_sp .slick-dots").addClass('dotsp');
			$("#topslide_sp .slick-dots").appendTo(".slick-list");

		setTimeout(function(){
			$(".site-header").removeClass('fade-header');		
			$('#read_topimage').fadeIn(500);
			$('#wave').fadeIn(500);
			$('#top_news').addClass('fadein');
			$('#top_regular').addClass('fadein');

			//トップイメージリード文
			var setElm = $('.type02'),
			setText = setElm.html();
			setElm.css({visibility:'visible'}).children().addBack().contents().each(function(){
				var elmThis = $(this);
				if (this.nodeType == 3) {
					var $this = $(this);
					$this.replaceWith($this.text().replace(/(\S)/g, '<span class="textSplitLoad">$&</span>'));
					$(".type02 img").addClass('textSplitLoad');
				}
			});
			splitLength = $('.textSplitLoad').length;
			setElm.find('.textSplitLoad').each(function(i){
				splitThis = $(this);
				splitTxt = splitThis.text();
				splitThis.delay(i*(delaySpeed)).css({opacity:'0'}).animate({opacity:'1'},fadeSpeed);
			});
			setTimeout(function(){
			setElm.html(setText);
			},splitLength*delaySpeed+fadeSpeed);
		
		},1100);
		setTimeout(function(){
			$('#los01').fadeIn(0);
			$('#clipmask').fadeIn(0);
			new Vivus('los01', {type: 'scenario-sync',duration: 9, start: 'autostart', forceRender: false ,animTimingFunction:Vivus.EASE})
			$('#top_news ul').slick({
				dots: false,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 5000,
				arrows: false,
				pauseOnHover: false,
				speed: 300,
				fade: true,
				cssEase: 'linear',
			});
			
		},1200);
		
		$(window).on("scroll", function() {
			if ($(this).scrollTop() > 10) {
				$("#top_news").addClass('start');
				$("#top_regular").addClass('start');
			} else {
				$("#top_news").removeClass('start');
				$("#top_regular").removeClass('start');
			}
		});	
		
		
		//サービス
		var task = 0;
		var l_homeservice = 0;
		$('#taskslide').on('inview', function(event, isInView){
			if (isInView && task == 0) {
				$(".slick-counter-svg").addClass('start');
				$('#taskslide').on('init', function(event, slick) {
					$(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
					$('.current').text(slick.currentSlide + 1);
					$('.total').text(slick.slideCount);
				})
				.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
					$('.current').text(nextSlide + 1);
					$('.slick-counter-svg').removeClass('start');
					$('.slick-counter-svg')[0].offsetWidth = $('.slick-counter-svg')[0].offsetWidth;
					$('.slick-counter-svg').addClass('start');
				});
				$('#taskslide').slick({
					dots: false,
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 5000,
					arrows: true,
					pauseOnHover: false,
					speed: 200,
					fade: true,
					cssEase: 'linear',
					responsive: [{
						breakpoint: 768,
						settings: {
							dots: true,
							arrows: false
						}
					}]
				});
				$("#taskslide .slick-prev").appendTo("#servicetotal");
				$("#taskslide .slick-next").appendTo("#servicetotal");
				$(".slick-counter").appendTo("#servicetotal");
				task = 1;
			}
		});
	
		$('#l_homeservice').on('inview', function(event, isInView){
			if (isInView && l_homeservice == 0) {
				//
				$("#l_homeservice h2").css("opacity", "1");
				var setElm = $('.type03'),
				setText = setElm.html();
				setElm.css({visibility:'visible'}).children().addBack().contents().each(function(){
					var elmThis = $(this);
					if (this.nodeType == 3) {
						var $this = $(this);
						$this.replaceWith($this.text().replace(/(\S)/g, '<span class="textSplitLoad">$&</span>'));
					}
				});
				splitLength = $('.textSplitLoad').length;
				setElm.find('.textSplitLoad').each(function(i){
					splitThis = $(this);
					splitTxt = splitThis.text();
					splitThis.delay(i*(delaySpeed)).css({opacity:'0'}).animate({opacity:'1'},fadeSpeed);
				});
				setTimeout(function(){
				setElm.html(setText);
				},splitLength*delaySpeed+fadeSpeed);
				l_homeservice = 1;
			}
		});
		
		
		//サービスの流れ
		var homeworkflow = 0;
		$('.flowbox').on('inview', function(event, isInView){
			if (isInView && homeworkflow == 0) {
				$(".homeflowbox").addClass('start');
				$(".btn_swipe").addClass('start');
				homeworkflow = 1;
			}
		});

		//スワイプ判定
		$('.flowbox').on('touchstart', onTouchStart);
		$('.flowbox').on('touchmove', onTouchMove);
		$('.flowbox').on('touchend', onTouchEnd);
		var direction, position;

		function onTouchStart(event) {
			position = getPosition(event);
			direction = '';
		}

		function onTouchMove(event) {
			if (position - getPosition(event) > 2) { // 2px以上移動でスワイプ判定
				direction = 'left'; //左と検知
			}
		}

		function onTouchEnd(event) {
			if (direction == 'left'){
			   $(".btn_swipe.start").addClass('swipe');
			}
		}

		//横方向の座標を取得
		function getPosition(event) {
		return event.originalEvent.touches[0].pageX;
		}	
		
	$(window).on('resize', function(){
		w = $(window).width();
		if( w > 768 ) {
			$("#taskslide .slick-prev").appendTo("#servicetotal");
			$("#taskslide .slick-next").appendTo("#servicetotal");
			$(".slick-counter").appendTo("#servicetotal");
		}
	});

	//パララックス
	var ua = navigator.userAgent;
	$(window).on('resize', function(){
		if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
			$('#homeimg01').parallax("50%", 0);
		} else {
			$('#homeimg01').parallax("50%", 0.1);
		}
	});

	var w = $(window).width();
	var homeabout= $("#homeabout").offset();
	$(window).on('scroll resize', function(){
		w = $(window).width();
		if( w > 768 ) {
			$('#read_topimage').css('position','fixed');
			$('#read_topimage').css('top','17vw');
			$('#read_topimage').css('left','8.1vw');
		} else {
			homeabout = $("#homeabout").offset();
			if (jQuery(window).scrollTop() > homeabout.top-30) {
				$('#read_topimage').css('position','absolute');
				$('#read_topimage').css('top','70px');
				$('#read_topimage').css('left','20px');
			} else {
				$('#read_topimage').css('position','fixed');
				$('#read_topimage').css('top','95px');
				$('#read_topimage').css('left','20px');
			}
		}
	});	
	
	//メガメニュー
	$(".main-navigation ul li.mabout a").hover(function() {
		if($("#h01").hasClass("active")){
			$(".site-header").addClass("hover-header");
		} else {
			$(".site-header").removeClass("hover-header");
		}	
	});
	$(".main-navigation ul li.mservice a").hover(function() {
		if($("#h02").hasClass("active")){
			$(".site-header").addClass("hover-header");
		} else {
			$(".site-header").removeClass("hover-header");
		}	
	});
	$(".main-navigation ul li.mcompany a").hover(function() {
		if($("#h03").hasClass("active")){
			$(".site-header").addClass("hover-header");
		} else {
			$(".site-header").removeClass("hover-header");
		}	
	});
	$(".main-navigation ul li.mupdate a").hover(function() {
		if($("#h04").hasClass("active")){
			$(".site-header").addClass("hover-header");
		} else {
			$(".site-header").removeClass("hover-header");
		}	
	});
	
	
});