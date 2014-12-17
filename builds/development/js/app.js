var myApp = angular.module("myApp", ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider){
	 $routeProvider
	 	.when('/',{
	 		templateUrl: 'views/index.html'
	 	}).when('/login',{
	 		templateUrl: 'views/login.html'
	 	}).when('/register',{
	 		templateUrl: 'views/register.html'
	 	}).when('/meeting',{
	 		templateUrl: 'views/meeting.html'
	 	})
	 	;
}]);
