'use strict';

var app = angular.module('Office');

app.controller('OfficeController', ['$scope','$rootScope','$location','$routeParams','config',function($scope, $rootScope, $location, $routeParams, config) {
	$scope.action = '';
	$scope.isUpdating = false; 
	$scope.entryId = $routeParams.entryId;
    $scope.init = function() {
        
        console.log('called init()');
        
		if(_.isEmpty($scope.officeRecord)) {
			$scope.action = 'Create';
		} else {
			$scope.action = 'Update';
			$scope.isUpdating = true;
		}

        
    }	

	//$scope.office = {};

	$scope.back = function() {
		$location.path('/');
	}

	$scope.save = function() {
		$scope.saveLoading = true;
		//console.log('value: '+ $scope.officeRecord.providerName );
		//$scope.saveLoading = false;

		if($scope.isUpdating) {
			console.log('updating ...');
        	$rootScope.cat.updateClassEntry(config.officeRecordClass,$scope.entryId,
             	{'providerName':$scope.officeRecord.providerName,
              	 'address':$scope.officeRecord.address,
              	 'transferPhoneNumber':$scope.officeRecord.transferPhoneNumber,
                 'fax':$scope.officeRecord.fax,
                 'emergencyPhoneNumber':$scope.officeRecord.emergencyPhoneNumber,
              	 
                 'weekDayOpenTime':$scope.officeRecord.weekDayOpenTime,
                 'weekDayLunchTime':$scope.officeRecord.weekDayLunchTime,
                 'weekDayCloseTime':$scope.officeRecord.weekDayCloseTime,
                 'weekEndOpenTime':$scope.officeRecord.weekEndOpenTime,
                 'weekEndLunchTime':$scope.officeRecord.weekEndLunchTime,
                 'weekEndCloseTime':$scope.officeRecord.weekEndCloseTime,

                 'openTime':'NA',
              	 'lunchTime':'NA',
              	 'closeTime':'NA',
                },
                function(success){
                console.log(success);
                $scope.saveLoading = false;
                $location.path('/');
                }, function(error){ console.log('error');$scope.saveLoading = false; });				

		} else {
			console.log('creating ...');
		
        	$rootScope.cat.createClassEntry(config.officeRecordClass,
             	{'providerName':$scope.officeRecord.providerName,
              	 'address':$scope.officeRecord.address,
              	 'transferPhoneNumber':$scope.officeRecord.transferPhoneNumber,
                 'fax':$scope.officeRecord.fax,
                 'emergencyPhoneNumber':$scope.officeRecord.emergencyPhoneNumber,
                 'weekDayOpenTime':$scope.officeRecord.weekDayOpenTime,
                 'weekDayLunchTime':$scope.officeRecord.weekDayLunchTime,
                 'weekDayCloseTime':$scope.officeRecord.weekDayCloseTime,
                 'weekEndOpenTime':$scope.officeRecord.weekEndOpenTime,
                 'weekEndLunchTime':$scope.officeRecord.weekEndLunchTime,
                 'weekEndCloseTime':$scope.officeRecord.weekEndCloseTime,                 
              	 'openTime':'NA',
              	 'lunchTime':'NA',
              	 'closeTime':'NA',
                },
                function(success){
                console.log(success);
                $scope.saveLoading = false;
                $location.path('/');
                }, function(error){ console.log('error');$scope.saveLoading = false; });				
					
		}


	}

    console.log('r='+$rootScope.records);
}]);