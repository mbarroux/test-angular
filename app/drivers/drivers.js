'use strict';

var drivers = angular.module('myApp.drivers', ['ngRoute']);

drivers.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/drivers', {
        templateUrl: 'drivers/drivers.html',
        controller: 'DriversCtrl'
    })
    .when("/drivers/:id", {
            templateUrl: "drivers/driver_details.html",
            controller: "DriverDetailsCtrl"
    })
    .otherwise( {
        redirectTo: '/drivers'
    });
}]);

drivers.controller('DriversCtrl', ['$scope', 'driversAPIservice', function($scope, driversAPIservice) {
    $scope.nameFilter = null;
    $scope.driversList = [];

    $scope.searchFilter = function (driver) {
        var keyword = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
    };

    driversAPIservice.getDrivers().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });

    /*
    $scope.driversList = [
        {
            Driver: {
                givenName: 'Sebastian',
                familyName: 'Vettel'
            },
            points: 322,
            nationality: "German",
            Constructors: [
                {name: "Red Bull"}
            ]
        }
    ];
    */
}]);

drivers.controller('DriverDetailsCtrl', ['$scope', '$routeParams', 'driversAPIservice', function($scope, $routeParams, driversAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    driversAPIservice.getDriverDetails($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    });

    driversAPIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races;
    });
}]);