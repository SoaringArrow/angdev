angular.module('angdev').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/home'
    })
    
    .when('/home', {
        templateUrl: 'templates/pages/home/index.html',
        controller: 'HomeIndexController'
    })
    
    .otherwise({
        redirectTo: '/'}
    );
    
    $locationProvider.html5Mode(true);
}])