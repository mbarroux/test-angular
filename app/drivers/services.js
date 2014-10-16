var services = angular.module('myApp.services', []);

services.factory('driversAPIservice', function($http) {

    var driversAPI = {};

    driversAPI.getDrivers = function() {
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
        });
    };

    driversAPI.getDriverDetails = function(id) {
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
        });
    };

    driversAPI.getDriverRaces = function(id) {
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
        });
    };

    return driversAPI;
});