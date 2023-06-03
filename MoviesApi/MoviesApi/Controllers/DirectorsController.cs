using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MoviesApi.Models;
using MoviesApi.Repositories;
using System.Diagnostics.CodeAnalysis;

public class DirectorAwardsDTO
{
    public Director director { get; set; }
    public int numberOfAwards { get; set; }
}

namespace MoviesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DirectorsController : ControllerBase
    {
        private readonly IDirectorRepository _directorRepository;
        public DirectorsController(IDirectorRepository repository)
        {
            _directorRepository = repository;
        }
        [HttpGet]
        public List<DirectorAwardsDTO> GetListOfAllDirectors()
        {
            List<DirectorAwardsDTO> results = new List<DirectorAwardsDTO>();
            List<Director> listOfDirectos = _directorRepository.GetAllDirectors();
            foreach(Director director in listOfDirectos)
            {
                DirectorAwardsDTO dto = new DirectorAwardsDTO();
                int numberOfAwards = _directorRepository.NumberOfAwardsByDirectorId(director.DirectorId);
                dto.director = director;
                dto.numberOfAwards = numberOfAwards;
                results.Add(dto);
            }
            return results;
        }
        [HttpGet("{id}")]
        public Director GetDirectorByID(int id)
        {
            return _directorRepository.GetDirectorById(id);
        }
        [HttpHead]
        public ActionResult<int> CheckDirectorExists(Director director)
        {
            return _directorRepository.DirectorExists(director);
        }
        [HttpPost]
        public Director AddNewDirector(Director director)
        {
            return _directorRepository.AddNewDirector(director);
        }
        [HttpDelete("{id}")]
        public bool DeleteADirector(int id)
        {
            return _directorRepository.DeleteADirector(id);
        }

        [HttpPut("{id}")]
        public Director UpdateDirectorInformation(int id, Director director)
        {
            return _directorRepository.UpdateDirectorInformation(director);
        }
    }

}
