(function() {

var config =  {
    //apiKey: 'd222f9210e2b4b1b9fe860f160745dd5c954bcd6', //dev
    apiKey: '68e18ad276f1711c88deb0c9b8699a3400ebdb9e', //prod

    officeRecordClass: 'XOfficeClass',
    eventRecordClass: 'XEventClass',
    noteRecordClass: 'XNotesClass',
    providerPath: 'xoffice',

    appVersion: .8,
};     

// declare modules
angular.module('Authentication', []);	
angular.module('Home', []).constant('config',config);
angular.module('Office', []).constant('config',config);
angular.module('Events', []).constant('config',config);
angular.module('EventDetails', []).constant('config',config);
angular.module('NoteDetails', []).constant('config',config);



var app = angular.module('app', ['Authentication','Home','Office','Events','EventDetails','NoteDetails','ngRoute','ngCookies'])

.constant('config', config)

/*
.factory('$exceptionHandler', function ($location) {
            return function (exception, cause) {
                alert(exception.message);
                //$location.path('/login');
            };
        })
*/

/*
.factory('$exceptionHandler', ['$injector', function($injector) {

    var $location;

    return function(exception, cause) {
        alert(exception.message);
        $location = $location || $injector.get('$location');
        $location.path("/login");
    };
}])
*/
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/login',{
		controller: 'LoginController',
		templateUrl: '/js/'+config.providerPath+'/crm/modules/authentication/views/index.html'
	})
    
	.when('/', {
		controller: 'HomeController',
		templateUrl: '/js/modules/home/views/index.html'
	})

    .when('/office/:entryId', {
        controller: 'OfficeController',
        templateUrl: '/js/modules/office/views/index.html'
    })

    .when('/events/', {
        controller: 'EventsController',
        templateUrl: '/js/modules/events/views/index.html'
    })  

    .when('/eventDetails/:entryId', {
        controller: 'EventController',
        templateUrl: '/js/modules/eventDetails/views/index.html'
    })  
     
    .when('/noteDetails/:entryId/:nEntryId', {
        controller: 'NoteController',
        templateUrl: '/js/modules/noteDetails/views/index.html'
    }) 

	.otherwise({ redirectTo: '/login'});
}])

.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);

})();	