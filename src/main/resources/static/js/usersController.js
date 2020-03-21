app.controller('usersController', function ($scope, usersService) {
  $scope.headingTitle = "User List";
  usersService.getUsers().then(response => $scope.users = response)
});
