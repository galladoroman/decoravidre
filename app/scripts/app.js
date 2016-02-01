'use strict';

/**
 * @ngdoc overview
 * @name decoravidreApp
 * @description
 * # decoravidreApp
 *
 * Main module of the application.
 */
angular
  .module('decoravidreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/inicio.html',
        controller: 'InicioCtrl',
        controllerAs: 'inicio'
      })
      .when('/productos', {
        templateUrl: 'views/productos.html',
        controller: 'ProductosCtrl',
        controllerAs: 'productos'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contacto'
      })
      .when('/baños', {
        templateUrl: 'views/baños.html',
        controller: 'BaOsCtrl',
        controllerAs: 'baños'
      })
      
      .when('/cocinas', {
        templateUrl: 'views/cocinas.html',
        controller: 'CocinasCtrl',
        controllerAs: 'cocinas'
      })
      .when('/mamparas', {
        templateUrl: 'views/mamparas.html',
        controller: 'MamparasCtrl',
        controllerAs: 'mamparas'
      })
      .when('/mapa', {
        templateUrl: 'views/mapa.html',
        controller: 'MapaCtrl',
        controllerAs: 'mapa'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
