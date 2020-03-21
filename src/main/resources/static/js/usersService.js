app.service('usersService', function ($http) {
  return {
    getUsers: () => $http.get('/api/users').then(response => response.data)
  };
});