(function () {
'use strict';

var lunchCheck = angular.module('LunchCheck',[]);
var LunchCheckController = function ($scope) {
$scope.lunchMenu = "";
$scope.message = "";
$scope.checkIfTooMuch = function(){
  if(!$scope.lunchMenu){
  $scope.message = "Please enter data first";
  }else{
    var lunchItems = $scope.lunchMenu.split(',');
    console.log(lunchItems.length);
    if(lunchItems.length <= 3){
      $scope.message = "Enjoy!";
    }else if(lunchItems.length > 3){
      $scope.message = "Too Much!";
    }
  }
}
}
LunchCheckController.$inject = ['$scope'];
lunchCheck.controller('LunchCheckController',LunchCheckController);
})()
