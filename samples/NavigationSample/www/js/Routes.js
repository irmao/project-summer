var navigationSample = angular.module('NavigationSample', ['ngRoute']);

navigationSample.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl : 'pages/HomePage.html',
            controller  : 'HomePageController'
        })
        .when('/about', {
            templateUrl : 'pages/AboutPage.html',
            controller  : 'AboutPageController'
        })
        .when('/contact', {
            templateUrl : 'pages/ContactPage.html',
            controller  : 'ContactPageController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
