angular.module('starter').controller('FilmsController', FilmsController);

FilmsController.$inject = ['$http'];

function FilmsController($http) {
  var vm = this;

  $http
  .get('http://swapi.co/api/films')
  .then(function(response) {
    vm.films = response.data.results;
  })
  .catch(function(error) {
    console.log(error);
  });
}
