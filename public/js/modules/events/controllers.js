'use strict';

var app = angular.module('Events');

app.controller('EventsController', ['$scope','$rootScope','$location','EventsService', function($scope, $rootScope, $location, EventsService) {

	EventsService.get();


	$scope.back = function() {
		$location.path('/');		
	}

	$scope.new = function() {
		$location.path('/eventDetails/new');		
	}

}]);