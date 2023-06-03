namespace MoviesApi.Repositories
{
    public interface IDirectorsAndMovies
    {
        public bool CheckIfRecordExists(int directorId, int movieId);
        public bool AddNewRecord(int directorId, int movieId);
        public bool RemoveRecord(int directorId, int movieId);

    }
}
