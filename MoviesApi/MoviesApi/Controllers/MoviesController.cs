using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MoviesApi.Models;
using MoviesApi.Repositories;
using System.Data.SqlClient;

namespace MoviesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IMovieRepository _movieRepository;
        private readonly IDirectorRepository _directorRepository;
        public MoviesController(IMovieRepository moviesRepository, IDirectorRepository directorRepository)
        {
            _movieRepository = moviesRepository;
            _directorRepository = directorRepository;
        }

        //Implement controller methods here
        // GET: api/Movies
        [HttpGet]
        public List<Movie> GetMovies()
        {
            return _movieRepository.GetMovies();
        }

        [HttpGet("{id}")]
        public Movie GetMovieById(int id)
        {
            return _movieRepository.GetMovieById(id);
        }

        [HttpPost]
        public bool AddNewMovie(Movie movie)
        {
            return _movieRepository.InsertMovie(movie);
        }

        [HttpPut("{id}")]
        public Movie UpdateMovieInformation(int id, Movie movie)
        {
            return _movieRepository.UpdateMovie(movie);
        }

        [HttpDelete("{id}")]
        public bool DeleteMovie(int id)
        {
            return _movieRepository.DeleteMovie(id);
        }
        //[HttpGet("directors")]
        //public List<Director> GetListOfAllDirectors()
        //{
        //    return _directorRepository.GetAllDirectors();
        //}
    }
}
