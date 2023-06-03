using System.Data.SqlClient;

namespace MoviesApi.Repositories
{
    public class DirectorsAndMoviesRepository : IDirectorsAndMovies
    {
        private readonly string connectionString = @"Server=.\SQLEXPRESS;Database=MotionPictures;Trusted_Connection=True;";

        //CREATE
        public bool AddNewRecord(int directorId, int movieId)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"insert into directors_movies(directorId, movieId)
                    values(@directorId, @movieId)", connection);
                    cmd.Parameters.AddWithValue("@directorId", directorId);
                    cmd.Parameters.AddWithValue("@movieId", movieId);
                    cmd.ExecuteNonQuery();

                    return CheckIfRecordExists(directorId, movieId);
                }
            }
            catch(Exception e)
            {
                throw new Exception("something went wrong");
            }
        }
        
        //DELETE
        public bool RemoveRecord(int directorId, int movieId)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"delete from directors_movies
                    where directorId = @directorId and movieId = @movieId", connection);
                    cmd.Parameters.AddWithValue("@directorId", directorId);
                    cmd.Parameters.AddWithValue("@movieId", movieId);
                    cmd.ExecuteNonQuery();

                    return !CheckIfRecordExists(directorId, movieId);
                }
            }
            catch (Exception e)
            {
                throw new Exception("something went wrong");
            }
        }
        
        //HELPERS
        public bool CheckIfRecordExists(int directorId, int movieId)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"select * from directors_movies
                    where directorId = @directorId and movieId = @movieId", connection);
                    cmd.Parameters.AddWithValue("@directorId", directorId);
                    cmd.Parameters.AddWithValue("@movieId", movieId);
                    SqlDataReader reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
            catch (Exception e)
            {
                throw new Exception("something went wrong");
            }
        }
    }
}
