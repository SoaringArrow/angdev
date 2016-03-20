angular.module('angdev')
.factory('Scrapper', ['$http', function ScrapperFactory($http) {
    return {
      getText: function(siteURL) {
          return $http({method: 'GET', url: '/api/scrap-text?url=' + siteURL});
      },
      getImages: function(siteURL) {
        return $http({method: 'GET', url: '/api/scrap-images?url=' + siteURL});
      } 
    };
}]);