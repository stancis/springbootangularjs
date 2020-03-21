const app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(($routeProvider, $locationProvider) => {
  $routeProvider
    .when('/users', {
      templateUrl: '/views/users.html',
      controller: 'usersController'
    })
    .otherwise({redirectTo: '/'});
  $locationProvider.hashPrefix('');
});