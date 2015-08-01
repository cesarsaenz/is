angular.module('Events',[])

 .factory('EventsService',
    ['$rootScope','$location','config',    
    function ($rootScope,$location,config) {

        var clazz = config.eventRecordClass;

        return {
            get: function() {
                console.log('called get events');
            $rootScope.cat.queryClassEntries2(clazz, 'pageSize=100', {},
                function(success){
                console.log(success);
                	/*
                    if(_.isEmpty(success)) {
                        $rootScope.officeRecord = {};
                        console.log('No events found!');
                        $location.path('/office/na');
                    } else {
                        console.log('Something found!');
                        $rootScope.officeRecord = success[0].content;
                    }  
					*/
                $rootScope.officeEvents = success;
                }, function(error){ console.log('error'); });
        }
        
  }}])

  .factory('_', function() {
        return window._; // assumes underscore has already been loaded on the page
  });