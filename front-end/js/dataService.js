var ourService = angular.module('ecommerce').service('dataService', function($http){

  this.getProduct = function() {
    return $http({
      method: 'GET',
      url: '/api/products'
    }).then(function(response){
      return response.data;
    }, function(error){
      alert("error");
    })
  }

});
