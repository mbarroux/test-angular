'use strict';

var myApp = angular.module('myApp.view1', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

myApp.controller('View1Ctrl', [function() {

}]);