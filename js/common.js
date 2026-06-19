jQuery(function($){

    $("#topBtn").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $("#topBtn").fadeIn();
        } else {
            $("#topBtn").fadeOut();
        }
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        var footHeight = $("#footer").innerHeight();
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $("#topBtn").css({
                "position":"absolute",
                "bottom": footHeight + 20
            });
        } else {
            $("#topBtn").css({
                "position":"fixed",
                "bottom": "20px"
            });
        }
    });	
	

	 if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
		 $('body').on("mousewheel", function () {
		 event.preventDefault();
		 var wd = event.wheelDelta;
		 var csp = window.pageYOffset;
		 window.scrollTo(0, csp - wd);
		 });
	 }	
	
    //スムーススクロール
    var H_nav = $(".site-header").height() + 10;
 
    function pagelink(heightnum) {
        var headerH = heightnum;
        $('a[href*="#"]:not(a.noscroll)').click(function() {
            var href = $(this).attr("href");
            var target = $(href == "#" || href == "" ? "body" : href);
            var position = target.offset().top - headerH;
            $("html, body").animate({ scrollTop: position }, 500, "swing");
            //return false;
        });
        /* outpagelink */
        var url = $(location).attr("href");
        if (url.indexOf("#") != -1) {
            var url_sp = url.split("#");
            var hash = "#" + url_sp[url_sp.length - 1];
            var target = $(hash);
            var position = target.offset().top - headerH;
            $("html, body").animate({ scrollTop: position }, 500, "swing");
 
        }
    }
    pagelink(H_nav);

	var w = $(window).width();
	var headerhight;
	$(window).on('load scroll resize', function(){
		w = $(window).width();
		if( w > 1024 ) {
			headerhight = 90;
		} else {
			headerhight = 65;
		}
	});
	
	//メガメニュー
	$(".main-navigation ul li.mabout a").hover(function() {
		$(".submenubox").removeClass("active");
		$(".main-navigation ul li").removeClass("active");
		$("#overlay").removeClass("overlaystart");
		if($("#h01").hasClass("active")){
			$("#h01").removeClass("active");
			$(".main-navigation ul li.mabout").removeClass("active");
		} else {
			$("#h01").addClass("active");
			$(".main-navigation ul li.mabout").addClass("active");
		}	
	});
	$(".main-navigation ul li.mservice a").hover(function() {
		$(".submenubox").removeClass("active");
		$(".main-navigation ul li").removeClass("active");
		if($("#h02").hasClass("active")){
			$("#h02").removeClass("active");
			$(".main-navigation ul li.mservice").removeClass("active");
		} else {
			$("#h02").addClass("active");
			$(".main-navigation ul li.mservice").addClass("active");
		}	
	});
	$(".main-navigation ul li.mcompany a").hover(function() {
		$(".submenubox").removeClass("active");
		$(".main-navigation ul li").removeClass("active");
		if($("#h03").hasClass("active")){
			$("#h03").removeClass("active");
			$(".main-navigation ul li.mcompany").removeClass("active");
		} else {
			$("#h03").addClass("active");
			$(".main-navigation ul li.mcompany").addClass("active");
		}	
	});
	$(".main-navigation ul li.mupdate a").hover(function() {
		$(".submenubox").removeClass("active");
		$(".main-navigation ul li").removeClass("active");
		if($("#h04").hasClass("active")){
			$("#h04").removeClass("active");
			$(".main-navigation ul li.mupdate").removeClass("active");
		} else {
			$("#h04").addClass("active");
			$(".main-navigation ul li.mupdate").addClass("active");
		}	
	});
	$(".main-navigation ul li.mrecruit a").hover(function() {
		$(".submenubox").removeClass("active");
		$(".main-navigation ul li").removeClass("active");
		$(".site-header").removeClass("hover-header");
	});
	$("#header_contact").hover(function() {
		$(".submenubox").removeClass("active");
		$(".site-header").removeClass("hover-header");
		$(".main-navigation ul li").removeClass("active");
	});
	
	$(".site-header").click(function() {
		$(".submenubox").removeClass("active");
		$(".site-header").removeClass("hover-header");
		$(".main-navigation ul li").removeClass("active");
	});	
	$(".submenubox").hover(
		function() {
		},
		function() {
			$("#h01").removeClass("active");
			$("#h02").removeClass("active");
			$("#h03").removeClass("active");
			$("#h04").removeClass("active");
			$(".site-header").removeClass("hover-header");
		}
	);
	//スクロールでメガメニューを非表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
			$(".submenubox").removeClass("active");
			$(".site-header").removeClass("hover-header");
			$(".main-navigation ul li").removeClass("active");
        }
    });
	
	
	
	//スマホメニュー
	var state = false;
	var scrollpos;

	$("#toggle").click(function(){
		w = $(window).width();
		$("nav#spmainmenu ul:nth-child(1)").slideToggle("fast");
		$("nav#spmainmenu ul#menu-spsubmenu").css("display", "flex");
		$(".menu-trigger").toggleClass('active');
		if(state == false) {
			scrollpos = $(window).scrollTop();
			$(".home .site-header").addClass('open-header');
			$(".site-header").css("height", "100%");
			$("nav#spmainmenu").addClass('open');
			$("nav#spmainmenu").css("top", "65px");
			$("nav#spmainmenu").css("height", "calc(100vh - 65px)");
			$("nav#spmainmenu").css("overflow-y", "scroll");
			$("nav#spmainmenu ul#menu-spsubmenu").css("display", "flex");
			$(".menu-trigger p").text("CLOSE");
			state = true;
		} else {
			$(".home .site-header").removeClass('open-header');
			window.scrollTo( 0 , scrollpos );
			if( w > 1024 ) {
				$(".site-header").css("height", "90px");
			} else {
				$(".site-header").css("height", "65px");
			}
			$("nav#spmainmenu").removeClass('open');
			$("nav#spmainmenu").css("height", "0");
			$("nav#spmainmenu").css("overflow-y", "visible");
			$("nav#spmainmenu").css("top", "65px");
			$("nav#spmainmenu ul#menu-spsubmenu").css("display", "none");
			$(".menu-trigger p").text("MENU");
			state = false;
		}
		$("nav#spmainmenu ul li ul li.plink a").click(function(){
			$(".home .site-header").removeClass('open-header');
			if( w > 1024 ) {
				$(".site-header").css("height", "90px");
			} else {
				$(".site-header").css("height", "65px");
			}
			$("nav#spmainmenu").removeClass('open');
			$("nav#spmainmenu").css("height", "0");
			$("nav#spmainmenu ul").css("display", "none");
			$("nav#spmainmenu").css("overflow-y", "visible");
			$("nav#spmainmenu").css("top", "65px");
			$(".menu-trigger p").text("MENU");
			state = false;
		});
	});
	$("nav#spmainmenu ul li.smabout a").click(function(){
		$("nav#spmainmenu ul li.smabout").toggleClass('active2');
		$("nav#spmainmenu ul li.smabout ul").slideToggle("fast");
	});		
	$("nav#spmainmenu ul li.smservice a").click(function(){
		$("nav#spmainmenu ul li.smservice").toggleClass('active2');
		$("nav#spmainmenu ul li.smservice ul").slideToggle("fast");
	});		
	$("nav#spmainmenu ul li.smcompany a").click(function(){
		$("nav#spmainmenu ul li.smcompany").toggleClass('active2');
		$("nav#spmainmenu ul li.smcompany ul").slideToggle("fast");
	});		
	$("nav#spmainmenu ul li.smrecruit a").click(function(){
		$("nav#spmainmenu ul li.smrecruit").toggleClass('active2');
		$("nav#spmainmenu ul li.smrecruit ul").slideToggle("fast");
	});		
	$("nav#spmainmenu ul li.smupdate a").click(function(){
		$("nav#spmainmenu ul li.smupdate").toggleClass('active2');
		$("nav#spmainmenu ul li.smupdate ul").slideToggle("fast");
	});		
	
	
	$(window).resize(function(){
		w = $(window).width();
		if( w >= 1024 ) {
			$(".site-header").css("height", "90px");
		} else {
			$(".site-header").css("height", "65px");
			$(".submenubox").removeClass("active");
			$("#overlay").removeClass("overlaystart");
			$(".main-navigation ul li").removeClass("active");
		}
	});
	
	$(".notwide2").wrap('<div class="notbox"></div>');
	
	$(".btn a").wrapInner('<span />');	
	
});