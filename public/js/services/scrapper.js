angular.module('angdev')
.factory('Scrapper', ['$http', function ScrapperFactory($http) {
    return {
      getText: function(siteURL) {
          return $http({method: 'GET', url: '/api/scrapText?url=' + siteURL});
      },
      getImages: function(siteURL) {
        return $http({method: 'GET', url: '/api/scrapImages?url=' + siteURL});
      } 
    };
}]);