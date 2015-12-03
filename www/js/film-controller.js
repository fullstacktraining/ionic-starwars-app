angular.module('starter').controller('FilmController', FilmController);

FilmController.$inject = ['$http', '$stateParams'];

function FilmController($http, $stateParams) {
  var vm = this;
  var filmId = $stateParams.filmId;
  $http
  .get('http://swapi.co/api/films/' + filmId)
  .then(function(response) {
    vm.film = response.data;
  })
  .catch(function(error) {
    console.log(error);
  });
}
