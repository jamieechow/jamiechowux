'use strict';

/**
 * @ngdoc function
 * @name jamiechowuxApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the jamiechowuxApp
 */
 console.log(angular);
angular.module('jamiechowuxApp')
  .controller('WorkCtrl', function($scope, $http) {
  	console.log("Init WorkCtrl");



    var scrollDown = function(button) {

        var bannerDiv = $(button).parents('section');
            
        var bannerDivHeight,
            bannerDivFromTop,
            compressedHeaderHeight = 60;

        bannerDivHeight = $(bannerDiv).height();
        bannerDivFromTop = $(bannerDiv).offset();

        $('body,html').animate({ scrollTop: bannerDivFromTop.top + bannerDivHeight - compressedHeaderHeight }, 600, 'swing');

    };


    // Scroll to next section
    $('.scroll-next').on("click", function(){
        scrollDown(this);
    });



    // Resive video
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');
        
    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

	/** Reusable Functions **/
	/********************************************************************/

	function scaleVideoContainer() {

	    var height = $(window).height();
	    var unitHeight = parseInt(height) + 'px';
	    $('.component-hero-video').css('height',unitHeight);

	}

	function initBannerVideoSize(element){
	    
	    $(element).each(function(){
	        $(this).data('height', $(this).height());
	        $(this).data('width', $(this).width());
	    });

	    scaleBannerVideoSize(element);

	}

	function scaleBannerVideoSize(element){

	    var windowWidth = $(window).width(),
	        windowHeight = $(window).height(),
	        videoWidth,
	        videoHeight;
	    
	    $(element).each(function(){
	        var videoAspectRatio = $(this).data('height')/$(this).data('width'),
	            windowAspectRatio = windowHeight/windowWidth;

	        if (videoAspectRatio > windowAspectRatio) {
	            videoWidth = windowWidth;
	            videoHeight = videoWidth * videoAspectRatio;
	            $(this).css({'top' : -(videoHeight - windowHeight) / 2 + 'px', 'margin-left' : 0});
	        } else {
	            videoHeight = windowHeight;
	            videoWidth = videoHeight / videoAspectRatio;
	            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
	        }

	        $(this).width(videoWidth).height(videoHeight);

	        $('.component-hero-video .video-container video').addClass('fadeIn animated');
	        

	    });
	}






  	
  });
