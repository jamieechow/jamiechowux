'use strict';

/**
 * @ngdoc function
 * @name jamiechowuxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jamiechowuxApp
 */
angular.module('jamiechowuxApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });




$( document ).ready(function() {
	/*require(['scripts/vendor/contentful.min.js'], function(){
    	console.log( "contentful!" );
	     
	});*/
	var client = contentful.createClient({
	  space: '3wcal2hecltm',
	  accessToken: 'c73ff9511521bc8cabd9ec35e9d672df5e1907b4bfa926fbe1d5d6afc1eff2b2'
	})


	client.getEntries()
	.then(function (entries) {
		//$("#logo").attr("src", entries.items[1].fields.media[0].fields.file.url);
		console.log(entries.items[1].fields.media[0].fields.file.url);
	});
	function spriteAnimateForward(){
		$({numberValue: 1}).animate({numberValue: 39}, {
	    duration: 1000,
	    easing: 'linear',
	    step: function() { 
	        console.log(Math.ceil(this.numberValue)); 
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
		}
);


	spriteAnimateForward();

});