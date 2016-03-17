angular.module('angdev').config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/home'
    })
    
    .when('/home', {
        templateUrl: 'templates/pages/home/index.html',
        controller: 'HomeIndexController'
    })
    
    .otherwise({redirectTo: '/'});
}])