(function() {

var config =  {
    //apiKey: 'd222f9210e2b4b1b9fe860f160745dd5c954bcd6', //dev
    apiKey: '68e18ad276f1711c88deb0c9b8699a3400ebdb9e', //prod

    provider:'Hall', 
    patientRecordClass: 'Insurance',
    visitClass: 'HallVisit',
    providerPath: 'xoffice',

    appVersion: .7,
};     

// declare modules
angular.module('Authentication', []);	
//angular.module('Home', []).constant('config',config);
//angular.module('Detail', []).constant('config',config);


var app = angular.module('app', ['Authentication','ngRoute','ngCookies'])

.constant('config', config)

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/login',{
		controller: 'LoginController',
		templateUrl: '/js/'+config.providerPath+'/crm/modules/authentication/views/index.html'
	})
    /*
	.when('/', {
		controller: 'HomeController',
		templateUrl: '/js/modules/home-crm/views/home.html'
	})
    .when('/detail/:entryId', {
        controller: 'DetailController',
        templateUrl: '/js/modules/details-crm/views/detail.html'
    })  
    */  

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