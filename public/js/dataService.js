var ourService = angular.module('ecommerce').service('dataService', function($http){

  this.getProduct = function() {
    return $http({
      method: 'GET',
      // use for local server
      url: '/api/products'
      // use for heroku server
      // url: '/db'
    }).then(function(response){
      return response.data;
    }, function(error){
      alert("error");
    })
  }

});
