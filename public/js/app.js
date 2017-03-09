angular.module('ecommerce', ['ui.router', 'ngStorage'])

// 'ngRoute' and .when instead of state and $routeProvider instead of url and stateProvider
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home',{
        url:'/',
        templateUrl: '../views/home.html',
        controller: 'mainCtrl'
      })
      .state('shop',{
        url:'/shop',
        templateUrl: '../views/shop.html',
        controller: 'mainCtrl'
      })
      .state('contact',{
        url:'/contact',
        templateUrl: '../views/contact.html',
        controller: 'mainCtrl'
      })
      .state('cart',{
        url:'/cart',
        templateUrl: '../views/cart.html',
        controller: 'modalCtrl'
      })
      .state('checkout',{
        url:'/checkout',
        templateUrl: '../views/checkout.html',
        controller: 'modalCtrl'
      })

      $urlRouterProvider
      .otherwise('/');
});
