angular.module('ecommerce').controller('modalCtrl', ['$scope','$localStorage', function($scope, $localStorage) {
  $scope.modalShown = false;
  $scope.toggleModal = function(product) {
    $scope.modalShown = !$scope.modalShown;
    $scope.product = product;
  };
  $scope.$storage = $localStorage;
  if(!$scope.$storage.cart) {
    $scope.$storage.cart = [];
  }
  $scope.addCart = function(product){
    for (var i = 0; i < $scope.$storage.cart.length; i++) {
      if ($scope.$storage.cart[i].product_id == product.product_id) {
        return
      }
    }
    $scope.$storage.cart.push(product)
    console.log($scope.$storage.cart)
  }

  $scope.removeFromCart = function($index) {
    $scope.$storage.cart.splice($index, 1);
  }


}]);
