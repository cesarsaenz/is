'use strict';

var app = angular.module('Home');

app.controller('HomeController', ['$scope','$rootScope','$location','OtherService', function($scope, $rootScope, $location ,OtherService) {
    OtherService.getRecords();
    console.log('r='+$rootScope.records);

    $scope.init = function() {
        
        console.log('called init()');

        
    }

    $scope.update = function() {
        var entryId = $rootScope.officeRecords[0].entryId
        $location.path('/office/'+entryId);
    }
}]);