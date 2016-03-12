'use strict';

var app = angular.module('listApp');

app.service('SwapiService', function($http) {
	this.getPeople = (param, callback) => {
		$http.get(`https://swapi.co/api/people/?page=${param}`)
		.then( (res) => {
			this.people = res.data.results;
			var numPages = Math.floor(res.data.count / 10) + 1;
			callback(numPages);
		}, err => console.error('SwapiService error: ', err));
	};

	this.getCharacter = function(url) {
		var corUrl = 'https' + url.slice(4);
		console.log(corUrl);
		$http.get(corUrl)
		.then((res) => {
			this.character = res.data;
		}, err => console.error('SwapiService error: ', err));
	};
});