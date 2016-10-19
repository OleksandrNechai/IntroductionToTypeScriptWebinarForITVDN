(function () {
    'use strict';

    var module = angular.module('psMovies');
    module.component('movieList', {
        templateUrl: 'ps-movies/movie-list.component.html',
        controllerAs: 'model',
        controller: Controller
    });

    function Controller($http) {
        var model = this;
        model.movies = [];
        model.$onInit = function () {
            fetchMovies($http).then(function (movies) {
                model.movies = movies;
            });
        };
        model.upRating = function (movie) {
            if (movie.rating < 5) {
                movie.rating++;
            }
        };
        model.downRating = function (movie) {
            if (movie.rating > 1) {
                movie.rating--;
            }
        };
    }

    function fetchMovies($http) {
        return $http.get("./movies.json")
            .then(function (response) {
                return response.data;
            });
    }
} ());