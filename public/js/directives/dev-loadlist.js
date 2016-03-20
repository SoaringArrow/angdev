angular.module('angdev').directive('devLoadlist', function(){
    return {
        restrict: "E",
        scope: {
            listItems: '=',
            loadScrap: '&'
        },
        templateUrl: 'templates/directives/dev-loadlist.html',
        controller: function($scope) {
            $scope.status = {
                isopen: false
            };
        },
        link: function(scope, element) {
            $(element).find('.dropdown-toggle');
        }
    };
});