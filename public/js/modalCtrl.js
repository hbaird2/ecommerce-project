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
      $scope.$storage.cart.count = $scope.$storage.cart.length;
    }
    $state.go('cart')
    // console.log($scope.$storage.cart)
  }

  $scope.removeFromCart = function($index) {
    $scope.$storage.cart.splice($index, 1);
    if($scope.$storage.cart.length === 0) {
      $scope.$storage.cart.count = null;
    }
    else {
      $scope.$storage.cart.count --;
    }
  }



  //make cart counter re-render on refresh
  function renderCartCount() {
    if($scope.$storage.cart.length === 0) {
      $scope.$storage.cart.count = null;
    }
    else {
      $scope.$storage.cart.count = $scope.$storage.cart.length;
    }
  }

  renderCartCount();

  // // set initial quantity to 1 on $storage.cart object
  // function setDefaultQty() {
  // $scope.$storage.cart.quantity = 1;
  // }
  //
  // setDefaultQty();


  // $scope.price = 0;
  $scope.quantity = 1;
  // $scope.orderTotal = 0;

  $scope.updateQty = function(quantity, $index) {
    this.orderTotal = this.price * this.quantity || 'Please select a size.';
    $scope.$storage.cart[$index].total = this.orderTotal;
    $scope.$storage.cart[$index].quantity = this.quantity;
    $scope.$storage.cart.count = $scope.$storage.cart.length + (this.quantity - 1);
    console.log("total", $scope.$storage.cart);
  }


  $scope.updatePrice11 = function($index){
    this.price = 12.99;
    this.posterSize = '11in x 17in';
    $scope.$storage.cart[$index].dimensions = this.posterSize;
    this.orderTotal = this.price * this.quantity;
    $scope.$storage.cart[$index].price = this.price;
    this.orderTotal = this.price * this.quantity;
    $scope.$storage.cart[$index].total = this.orderTotal;
    console.log("first", $scope.$storage.cart);
  }

  $scope.updatePrice18 = function($index){
    this.price = 24.99;
    this.posterSize = '18in x 24in';
    $scope.$storage.cart[$index].dimensions = this.posterSize;
    this.orderTotal = this.price * this.quantity;
    $scope.$storage.cart[$index].price = this.price;
    this.orderTotal = this.price * this.quantity;
    $scope.$storage.cart[$index].total = this.orderTotal;
    console.log("second", $scope.$storage.cart);
  }

  $scope.updatePrice36 = function($index){
    this.price = 36.99;
    this.posterSize = '26in x 36in';
    $scope.$storage.cart[$index].dimensions = this.posterSize;
    this.orderTotal = this.price * this.quantity;
    $scope.$storage.cart[$index].price = this.price;
    this.orderTotal = this.price * this.quantity;
    $scope.$storage.cart[$index].total = this.orderTotal;
    console.log("third", $scope.$storage.cart);
  }



}]);
