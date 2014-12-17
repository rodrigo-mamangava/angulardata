var myApp = angular.module("myApp", ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider){
	 $routeProvider
	 	.when('/',{
	 		templateUrl: 'views/index.html'
	 	}).when('/login',{
	 		templateUrl: 'views/login.html',
	 		controller: 'RegistrationController'
	 	}).when('/register',{
	 		templateUrl: 'views/register.html',
	 		controller: 'RegistrationController'
	 	}).when('/meeting',{
	 		templateUrl: 'views/meeting.html'
	 	}).otherwise({
			templateUrl: 'views/404.html'
	 	})
	 	;
}]);
