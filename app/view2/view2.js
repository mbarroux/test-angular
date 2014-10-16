'use strict';

var myApp = angular.module('myApp.view2', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}]);

myApp.controller('View2Ctrl', [function() {

}]);