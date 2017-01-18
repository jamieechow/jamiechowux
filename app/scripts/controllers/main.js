'use strict';

/**
 * @ngdoc function
 * @name jamiechowuxApp.controller:HomeCtrl
 * @description
 * # MainCtrl
 * Controller of the jamiechowuxApp
 */
angular.module('jamiechowuxApp')
  .controller('HomeCtrl', function($scope, $http, $rootScope) {
	
	console.log("HomeCtrl CTRL");


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

	//projects
	$http.get("https://api.behance.net/v2/users/chowjamiee5c46/projects?client_id=6Y9aKIc3pYkcuR0sH4F2u786uqI68Txw").then(function(response){
			$scope.behanceResult= response.data.projects;
			$scope.projects= [];
			var totalCardsLoaded=0;
		  var getProductInfo = function(i){
		  	//console.log('http://www.behance.net/v2/projects/'+$scope.behanceResult[i].id+'?api_key=6Y9aKIc3pYkcuR0sH4F2u786uqI68Txw');
		    $http.get('http://www.behance.net/v2/projects/'+$scope.behanceResult[i].id+'?api_key=6Y9aKIc3pYkcuR0sH4F2u786uqI68Txw').then(function(response) {
		    	$scope.projects.push(response.data.project);
		        console.log(response.data.project);
		        
		        totalCardsLoaded++;

		        if(totalCardsLoaded === $scope.behanceResult.length){
		        	console.log('loaded');
									
					TweenMax.set($(".back"), {rotationY:-180});

					$.each($(".card"), function(i,element) {
					  
						var frontCard = $(this).children(".front"),
					      backCard = $(this).children(".back"),
					      tl = new TimelineMax({paused:true});
						
						tl.to(frontCard, 0.3, {rotationY:180}).to(backCard, 0.3, {rotationY:0},0);
						
						element.animation = tl;
					  
					});

					if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
						$(".card").bind('mousedown', function(){
				    		if(this.animation.totalProgress() === 1){
				    			this.animation.reverse();
				    		}else{
				    			this.animation.play();
				    		}
						});
					}else{
						$(".card").hover(elOver, elOut);
					}

					function elOver() {
					    this.animation.play();
					}

					function elOut() {
					    this.animation.reverse();
					}
		        }
		    });
		  };
		  
		  for (var i = 0; i < $scope.behanceResult.length; i++) {
		    console.log($scope.behanceResult[i].id);
		    getProductInfo(i);
		  }

	/* Sprite Mapped Logo Animation 
	function spriteAnimateForward(){
		$({numberValue: 1}).animate({numberValue: 39}, {
	    duration: 1000,
	    easing: 'linear',
	    step: function() { 
			$(".sprite").removeClass (function (index, css) {
			    return (css.match (/(^|\s)sprite-logo_animate-\S+/g) || []).join(' ');
			});	    
			$(".sprite").addClass("sprite-logo_animate-2_"+Math.ceil(this.numberValue));    
	    }
		});
	}

	$( ".logo-splash" ).hover(
			function() {
		spriteAnimateForward();
			}, function() {
		//spriteAnimateBackwards();
		}*/
	//spriteAnimateForward();
	//project info
	//http://www.behance.net/v2/projects/47376695?api_key=6Y9aKIc3pYkcuR0sH4F2u786uqI68Txw

	//user
	//$http.get("http://www.behance.net/v2/users/chowjamiee5c46?api_key=zuJEFYF3r5PzACfdMDAn536nO1igTgKT").then(function(data){
		//console.log("success: "+data);
		$scope.behanceResult= response.data.projects;
   },
    function(response){
    	console.log("Behance API Fail");
    	$scope.data= response;
        console.log(response);
   }); 
  });


//$( document ).ready(function() {
	/*require(['scripts/vendor/contentful.min.js'], function(){
    	console.log( "contentful!" );
	     
	});
	var client = contentful.createClient({
	  space: '3wcal2hecltm',
	  accessToken: 'c73ff9511521bc8cabd9ec35e9d672df5e1907b4bfa926fbe1d5d6afc1eff2b2'
	})


	client.getEntries()
	.then(function (entries) {
		//$("#logo").attr("src", entries.items[1].fields.media[0].fields.file.url);
		console.log(entries.items[1].fields.media[0].fields.file.url);
	});*/

	/* Sprite Mapped Logo Animation 
	function spriteAnimateForward(){
		$({numberValue: 1}).animate({numberValue: 39}, {
	    duration: 1000,
	    easing: 'linear',
	    step: function() { 
			$(".sprite").removeClass (function (index, css) {
			    return (css.match (/(^|\s)sprite-logo_animate-\S+/g) || []).join(' ');
			});	    
			$(".sprite").addClass("sprite-logo_animate-2_"+Math.ceil(this.numberValue));    
	    }
		});
	}

	$( ".logo-splash" ).hover(
			function() {
		spriteAnimateForward();
			}, function() {
		//spriteAnimateBackwards();
		}*/
	//spriteAnimateForward();

//});