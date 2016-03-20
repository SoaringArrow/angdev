angular.module('angdev').controller('HomeIndexController', function($scope, Scrapper, ScrapResult) {
    $scope.url = "";
    $scope.textResults = [];
    $scope.imageResults = [];
    $scope.savedResults = [];
    $scope.scrapInProgress = false;
    $scope.saveInProgress = false;
    $scope.hasError = false;
    $scope.saveName = "";
    $scope.saveConfirm = false;
    
    var updateSavedResults = function() {
      var results = ScrapResult.query(function() {
          $scope.savedResults = results;
      })  
    };
    
    
    updateSavedResults();
    
    $scope.scrapUrl = function() {
        $scope.scrapInProgress = true;
        $scope.hasError = false;
        $scope.textResults = [];
        $scope.imageResults = [];
        
        var isTextDone = false;
        var isImagesDone = false;
        
        Scrapper.getText($scope.url).success(function(scrapData) {
            $scope.textResults = scrapData;
            isTextDone = true;
            
            if(isTextDone && isImagesDone)
                $scope.scrapInProgress = false;
        }).error(function() {
            $scope.hasError = true;
            $scope.scrapInProgress = false;
            
        });
        
        Scrapper.getImages($scope.url).success(function(scrapData) {
            console.log(scrapData);
            $scope.imageResults = scrapData;
            isImagesDone = true;
            
            if(isTextDone && isImagesDone)
                $scope.scrapInProgress = false;
        }).error(function() {
            $scope.hasError = true;
            $scope.scrapInProgress = false;
        });
    };
    
    $scope.saveScrap = function() {
        $scope.saveInProgress = true;
        $scope.saveConfirm = false;
        var scrapResult = new ScrapResult();
        
        scrapResult.name = $scope.saveName
        scrapResult.siteUrl = $scope.url;
        scrapResult.scrapText = $scope.textResults;
        scrapResult.scrapImages = $scope.imageResults;
        
        scrapResult.$save();
        updateSavedResults();
        
        $scope.saveInProgress = false;
        $scope.saveConfirm = true;
    };
    
    $scope.loadScrap = function(savedName) {
        ScrapResult.get({name: savedName}, function(result) {
            $scope.url = result.stieUrl;
            $scope.textResults = result.scrapText;
            $scope.imageResults = result.scrapImages;
        });
    };
});