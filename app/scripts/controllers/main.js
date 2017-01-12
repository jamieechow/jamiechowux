'use strict';

/**
 * @ngdoc function
 * @name jamiechowuxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jamiechowuxApp
 */
 console.log(angular);
angular.module('jamiechowuxApp')
  .controller('BehanceCtrl', function($scope, $http) {
	
	console.log("BehanceCtrl CTRL");

	//projects
	$http.get("https://api.behance.net/v2/users/chowjamiee5c46/projects?client_id=6Y9aKIc3pYkcuR0sH4F2u786uqI68Txw").then(function(response){
	
	//user
	//$http.get("http://www.behance.net/v2/users/chowjamiee5c46?api_key=zuJEFYF3r5PzACfdMDAn536nO1igTgKT").then(function(data){
		//console.log("success: "+data);
		$scope.behanceResult= response.data.projects;
		console.log(response.data.projects);
   },
    function(response){
    	console.log("FAIL");
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