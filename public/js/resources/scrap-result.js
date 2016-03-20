angular.module('angdev').factory('ScrapResult', function ScrapResultFactory($resource) {
    return $resource('/api/scrap-results/:id');
});