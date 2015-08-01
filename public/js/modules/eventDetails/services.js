angular.module('EventDetails',[])

 .factory('NotesService',
    ['$rootScope','$location','config',    
    function ($rootScope,$location,config) {

        var clazz = config.noteRecordClass;

        return {
            get: function(oid) {
                console.log('called get notes: '+oid);
                $rootScope.eventNotes = {};
            $rootScope.cat.queryClassEntries2(clazz, 'oid='+oid+'&pageSize=100', {},
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
                $rootScope.eventNotes = success;
                }, function(error){ console.log('error'); });
        }
        
  }}])

  .factory('_', function() {
        return window._; // assumes underscore has already been loaded on the page
  });