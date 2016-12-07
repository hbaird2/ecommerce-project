angular.module('ecommerce').controller('mainCtrl', function($scope, dataService){

  function getData() {
    dataService.getProduct().then(function(response){
      console.log(111111, response);
      $scope.productData = response;
    });
  }

  getData();




});
