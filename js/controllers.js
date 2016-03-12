'use strict';

var app = angular.module('listApp');


app.controller('pageCtrl', function($scope, $state, SwapiService) {

	$scope.$watch(function() {
		return SwapiService.people;
	}, function(newVal, oldVal) {
		$scope.people = newVal;
	});

	SwapiService.getPeople(1, function(numPages) {
		var pages = [];
		for (var i = 1; i <= numPages; i++) {
			pages.push(i);
		}
		$scope.pages = pages;
	});

	$scope.goToPage = function(param) {
		SwapiService.getPeople(param, function(numPages) {
			var pages = [];
			for (var i = 1; i <= numPages; i++) {
				pages.push(i);
			}
			$scope.pages = pages;
		});
	};
});

app.controller('itemCtrl', function($scope, $state, SwapiService) {
	var url = $state.params.url;
	getCharacter(url);
	function getCharacter(url) {
		SwapiService.getCharacter(url);
	};

	$scope.$watch(function() {
		return SwapiService.character;
	}, function(newVal, oldVal) {
		$scope.character = newVal;
	});
});