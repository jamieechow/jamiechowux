'use strict';

/**
 * @ngdoc overview
 * @name jamiechowuxApp
 * @description
 * # jamiechowuxApp
 *
 * Main module of the application.
 */

var app = angular.module('jamiechowuxApp', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
        animation: 'slide'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        animation: 'slide'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl',
        controllerAs: 'work',
        animation: 'slide'
      })
      .otherwise({
        redirectTo: '/',
        animation: 'slide'
      });
}]); 


