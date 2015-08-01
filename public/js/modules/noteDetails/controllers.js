'use strict';

var app = angular.module('NoteDetails');

app.controller('NoteController', ['$scope','$rootScope','$location','$routeParams','config', function($scope, $rootScope, $location, $routeParams, config) {

	$scope.action = '';
	$scope.isUpdating = false; 
	$scope.entryId = $routeParams.entryId;
	$scope.nEntryId = $routeParams.nEntryId;
	$scope.eventNote = {};	

  $scope.init = function() {        
    console.log('NoteController: called init()');
      
		if($scope.nEntryId == 'new') {
      		$scope.eventNote = {};
			$scope.action = 'Create';      
		} else {
      var eventNote = _.find($rootScope.eventNotes, function(o){ return o.entryId==$routeParams.nEntryId; });   
      $scope.eventNote = eventNote.content;
			$scope.action = 'Update';
			$scope.isUpdating = true;
		}        
  }

	$scope.save = function() {
		$scope.saveLoading = true;
		//console.log('value: '+ $scope.officeRecord.providerName );
		//$scope.saveLoading = false;

		if($scope.isUpdating) {
			console.log('NoteController:updating ...');
        	$rootScope.cat.updateClassEntry(config.noteRecordClass,$scope.nEntryId,
             	{'notes':$scope.eventNote.notes,
              	 'oid':$scope.entryId,
                },
                function(success){
                	console.log(success);
                	$scope.saveLoading = false;
                	$location.path('/eventDetails/'+$scope.entryId);
                }, function(error){ console.log('error');$scope.saveLoading = false; });				

		} else {
			console.log('NoteController:creating ...');
		
        	$rootScope.cat.createClassEntry(config.noteRecordClass,
             	{'notes':$scope.eventNote.notes,
              	 'oid':$scope.entryId,
                },
                function(success){
                	console.log(success);
                	$scope.saveLoading = false;
                	$location.path('/eventDetails/'+$scope.entryId);
                }, function(error){ console.log('error');$scope.saveLoading = false; });				
					
		}
	}  	


	$scope.back = function() {
		$location.path('/eventDetails/'+$scope.entryId);
	}
}]);