namespace Movies
{
    class Controller
    {
        entries: number[];
        value: number

        $onInit()
        {
            this.entries = new Array(this.value);
        }
        $onChanges()
        {
            this.entries = new Array(this.value);
        }
    }

    var module = angular.module('psMovies');
    module.component('movieRating', {
        templateUrl: 'ps-movies/movie-rating.component.html',
        controllerAs: 'model',
        controller: Controller,
        bindings: {
            value: '<'
        },
        transclude: true
    });

}