'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'myApp.view1',
  'myApp.view2',
  'myApp.drivers',
  'myApp.version',
  'myApp.services'
]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
