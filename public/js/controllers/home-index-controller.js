angular.module('angdev').controller('HomeIndexController', function($scope, Scrapper) {
    $scope.url = "";
    $scope.textResults = [];
    $scope.imageResults = [];
    $scope.inProgress = false;
    $scope.hasError = false;
    
    $scope.scrapUrl = function() {
        $scope.inProgress = true;
        $scope.hasError = false;
        $scope.textResults = [];
        $scope.imageResults = [];
        
        var isTextDone = false;
        var isImagesDone = false;
        
        Scrapper.getText($scope.url).success(function(scrapData) {
            $scope.textResults = scrapData;
            isTextDone = true;
            
            if(isTextDone && isImagesDone)
                $scope.inProgress = false;
        }).error(function() {
            $scope.hasError = true;
            $scope.inProgress = false;
            
        });
        
        Scrapper.getImages($scope.url).success(function(scrapData) {
            console.log(scrapData);
            $scope.imageResults = scrapData;
            isImagesDone = true;
            
            if(isTextDone && isImagesDone)
                $scope.inProgress = false;
        }).error(function() {
            $scope.hasError = true;
            $scope.inProgress = false;
        });
    };
});