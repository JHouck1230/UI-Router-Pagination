'use strict';

var app = angular.module('listApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('listView', {
			url: '/people',
			templateUrl: '/html/list.html',
			controller: 'pageCtrl'
		})
		.state('itemView', {
			url: '/people/:url',
			templateUrl: '/html/item.html',
			controller: 'itemCtrl'
		});
		$urlRouterProvider.otherwise('/people');
});

app.run(function(SwapiService) {
	SwapiService.getPeople(1, function(numPages) {
	});
});