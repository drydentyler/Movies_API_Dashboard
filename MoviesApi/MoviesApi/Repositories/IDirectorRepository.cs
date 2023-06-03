using MoviesApi.Models;

namespace MoviesApi.Repositories
{
    public interface IDirectorRepository
    {
        public List<Director> GetAllDirectors();
        public int DirectorExists(Director director);
        public Director AddNewDirector(Director director);
        public Director GetDirectorById(int id);
        public bool DeleteADirector(int id);
        public int NumberOfAwardsByDirectorId(int id);
        public Director UpdateDirectorInformation(Director director);
    }
}
