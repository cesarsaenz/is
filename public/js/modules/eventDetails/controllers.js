'use strict';

var app = angular.module('EventDetails');

app.controller('EventController', ['$scope','$rootScope','$location','$routeParams','config',function($scope, $rootScope, $location, $routeParams, config) {

	$scope.action = '';
	$scope.isUpdating = false; 
	$scope.entryId = $routeParams.entryId;
  $scope.eventRecord = {};

  $scope.init = function() {        
    console.log('EventDetails: called init()');
      
		if($scope.entryId == 'new') {
      $scope.eventRecord = {};
			$scope.action = 'Create';      
		} else {
      var eventRecord = _.find($rootScope.officeEvents, function(o){ return o.entryId==$routeParams.entryId; });   
      $scope.eventRecord = eventRecord.content;
			$scope.action = 'Update';
			$scope.isUpdating = true;
		}        
  }	

  $scope.$on('need-event-id', function (event, data){
      $rootScope.$broadcast("got-event-id",$routeParams.entryId);
  });  


	$scope.back = function() {
		$location.path('/events');
	}

  $scope.new = function() {
    ///noteDetails/:entryId/:nEntryId
    console.log('/noteDetails/'+$scope.entryId+'/new');
    $location.path('/noteDetails/'+$scope.entryId+'/new');
  }
 
	$scope.save = function() {
		$scope.saveLoading = true;
		//console.log('value: '+ $scope.officeRecord.providerName );
		//$scope.saveLoading = false;

		if($scope.isUpdating) {
			console.log('EventDetails:updating ...');
        	$rootScope.cat.updateClassEntry(config.eventRecordClass,$scope.entryId,
             	{'name':$scope.eventRecord.name,
              	 'startDateTime':$scope.eventRecord.startDateTime,
              	 'endDateTime':$scope.eventRecord.endDateTime
                },
                function(success){
                console.log(success);
                $scope.saveLoading = false;
                $location.path('/events');
                }, function(error){ console.log('error');$scope.saveLoading = false; });				

		} else {
			console.log('EventDetails:creating ...');
		
        	$rootScope.cat.createClassEntry(config.eventRecordClass,
             	{'name':$scope.eventRecord.name,
              	 'startDateTime':$scope.eventRecord.startDateTime,
              	 'endDateTime':$scope.eventRecord.startDateTime,
                },
                function(success){
                console.log(success);
                $scope.saveLoading = false;
                $location.path('/events');
                }, function(error){ console.log('error');$scope.saveLoading = false; });				
					
		}


	}

}]);

app.controller('NotesController', ['$scope','$rootScope','$location','$routeParams','config','NotesService',function($scope, $rootScope, $location, $routeParams, config, NotesService) {

  console.log('called NotesController');

  $scope.$on('got-event-id', function (event, data){
      console.log('got-event-id: ' + data);
       NotesService.get(data);
  });

  $scope.init = function() {        
    console.log('NotesController: called init()');
    $rootScope.$broadcast("need-event-id",'good');
  }  

 

}]);