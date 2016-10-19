namespace Movies
{
    interface IMovie
    {
        title: string,
        rating: number
    }

    class Controller
    {
        movies: IMovie[];
        average: number;
        constructor(private $http: ng.IHttpService)
        {
            this.movies = [];
        }
        $onInit()
        {
            fetchMovies(this.$http).then(movies => this.movies = movies);
        }
        upRating(movie: IMovie)
        {
            if (movie.rating < 5) {
                movie.rating++;
            }
        }
        downRating(movie: IMovie)
        {
            if (movie.rating > 1) {
                movie.rating--;
            }
        }
        calcAverage()
        {
            return this.movies.length ?
                this.movies.map(m => m.rating).reduce((x, y) => x + y, 0) / this.movies.length :
                0;
        }
    }

    var module = angular.module('psMovies');
    module.component('movieList', {
        templateUrl: 'ps-movies/movie-list.component.html',
        controllerAs: 'model',
        controller: Controller
    });


    function fetchMovies($http: ng.IHttpService)
    {
        return $http.get("./movies.json")
            .then(function (response)
            {
                return response.data as IMovie[];
            });
    }
}