'use strict';

var app = angular.module('listApp');

app.service('SwapiService', function($http) {
	this.getPeople = (param, callback) => {
		$http.get(`http://swapi.co/api/people/?page=${param}`)
		.then( (res) => {
			this.people = res.data.results;
			var numPages = Math.floor(res.data.count / 10) + 1;
			callback(numPages);
		}, err => console.error('SwapiService error: ', err));
	};

	this.getCharacter = function(url) {
		$http.get(url)
		.then((res) => {
			this.character = res.data;
		}, err => console.error('SwapiService error: ', err));
	};
});