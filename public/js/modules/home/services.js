angular.module('Home',[])

 .factory('OtherService',
    ['$rootScope','$location','config',    
    function ($rootScope,$location,config) {

        var p = config.patientRecordClass;

        return {
            getRecords: function() {
                console.log('called get records');
            $rootScope.cat.queryClassEntries2(p, 'pageSize=100', {},
                function(success){
                console.log(success);

                    if(_.isEmpty(success)) {
                        $rootScope.officeRecord = {};
                        console.log('No records found!');
                        $location.path('/office/na');
                    } else {
                        console.log('Something found!');
                        $rootScope.officeRecord = success[0].content;
                    }                
                $rootScope.officeRecords = success;
                }, function(error){ console.log('error'); });
        }
        
  }}])

  .factory('_', function() {
        return window._; // assumes underscore has already been loaded on the page
  }); 