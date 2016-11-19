angular.module('ecommerce').controller('modalCtrl', ['$scope','$localStorage', '$state', function($scope, $localStorage, $state) {
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
    var itemIsInCart = false;
    for (var i = 0; i < $scope.$storage.cart.length; i++) {
      if ($scope.$storage.cart[i].product_id == product.product_id) {

        itemIsInCart = true;

      }
    }

    if (!itemIsInCart) {
      $scope.$storage.cart.push(product)
    }
    $state.go('cart')
    // console.log($scope.$storage.cart)
  }

  $scope.removeFromCart = function($index) {
    $scope.$storage.cart.splice($index, 1);
  }

  // adding base qty of 1 to cart object
  function defaultQty1() {
    for (var i = 0; i < $scope.$storage.cart.length; i++) {
      $scope.$storage.cart[i].quantity = 1;
    }
  }

  defaultQty1();

  // $scope.price = 0;
  $scope.quantity = 1;
  // $scope.orderTotal = 0;

  $scope.updateQty = function(quantity, $index) {
    // this.quantity = quantity;
    this.orderTotal = this.price * this.quantity;
    $scope.$storage.cart[$index].total = this.orderTotal;
    $scope.$storage.cart[$index].quantity = this.quantity;
    console.log("total", $scope.$storage.cart);
  }


  $scope.updatePrice11 = function($index){
    this.price = 12.99;
    this.orderTotal = this.price * this.quantity;
    $scope.$storage.cart[$index].price = this.price;
    this.orderTotal = this.price * this.quantity;
    $scope.$storage.cart[$index].total = this.orderTotal;
    console.log("first", $scope.$storage.cart);
  }

  $scope.updatePrice18 = function($index){
    this.price = 24.99;
    this.orderTotal = this.price * this.quantity;
    $scope.$storage.cart[$index].price = this.price;
    this.orderTotal = this.price * this.quantity;
    $scope.$storage.cart[$index].total = this.orderTotal;
    console.log("second", $scope.$storage.cart);
  }

  $scope.updatePrice36 = function($index){
    this.price = 36.99;
    this.orderTotal = this.price * this.quantity;
    $scope.$storage.cart[$index].price = this.price;
    this.orderTotal = this.price * this.quantity;
    $scope.$storage.cart[$index].total = this.orderTotal;
    console.log("third", $scope.$storage.cart);
  }



}]);
