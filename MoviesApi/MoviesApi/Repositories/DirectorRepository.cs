using MoviesApi.Models;
using System.Data.SqlClient;

namespace MoviesApi.Repositories
{
    public class DirectorRepository : IDirectorRepository
    {
        private readonly string connectionString = @"Server=.\SQLEXPRESS;Database=MotionPictures;Trusted_Connection=True;";
        
        
        //READ
        public Director GetDirectorById(int id)
        {
            try
            {
                Director placeholder = new Director();
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"select * from MotionPictureDirectors
                    where DirectorId = @id", connection);
                    cmd.Parameters.AddWithValue("@id", id);
                    SqlDataReader reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        placeholder.DirectorId = id;
                        placeholder.FirstName = (string)reader["FirstName"];
                        placeholder.LastName = (string)reader["LastName"];
                        placeholder.YearOfBirth = (int)reader["BirthYear"];
                        return placeholder;
                    }
                    return null;

                }
            }
            catch (Exception e)
            {
                throw new Exception("Somethign went wrong");
            }
        }
        public List<Director> GetAllDirectors()
        {
            try
            {
                List<Director> listOfDirectors = new List<Director>();
                Director placeholder = new Director();
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"select * from MotionPictureDirectors", connection);
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        listOfDirectors.Add(BuildADirector(reader));
                    }
                }
                return listOfDirectors;
            }
            catch (Exception e)
            {
                throw new Exception("Something went wrong");
            }
        }
        
        //CREATE
        public Director AddNewDirector(Director director)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"insert into MotionPictureDirectors(DirectorId,FirstName,LastName,BirthYear)
                    output inserted.DirectorId
                    values((select max(DirectorId) from MotionPictureDirectors)+1,@firstName, @lastName, @birthYear)", connection);
                    cmd.Parameters.AddWithValue("@firstName", director.FirstName);
                    cmd.Parameters.AddWithValue("@lastName", director.LastName);
                    cmd.Parameters.AddWithValue("@birthYear", director.YearOfBirth);
                    int newId = (int)cmd.ExecuteScalar();

                    return GetDirectorById(newId);
                }
                return null;
            }
            catch (Exception)
            {
                throw new Exception("Something went wrong");
            }
        }
        
        //UPDATE
        public Director UpdateDirectorInformation(Director director)
        {
            try
            {
                using(SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"update MotionPictureDirectors
                    set FirstName = @firstName, LastName = @lastname, BirthYear = @birthYear
                    where DirectorId = @directorId", connection);
                    cmd.Parameters.AddWithValue("@firstName",director.FirstName);
                    cmd.Parameters.AddWithValue("@lastname", director.LastName);
                    cmd.Parameters.AddWithValue("@birthYear", director.YearOfBirth);
                    cmd.Parameters.AddWithValue("@directorId", director.DirectorId);
                    cmd.ExecuteNonQuery();

                    return GetDirectorById(director.DirectorId);
                }
            }
            catch(Exception e)
            {
                throw new Exception("Something went wrong updating a director: " + e);
            }
        }
        
        //DELETE
        public bool DeleteADirector(int id)
        {
            try
            {
                using(SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd1 = new SqlCommand(@"delete from directors_movies
                    where directorId = @directorId", connection);
                    cmd1.Parameters.AddWithValue("@directorId", id);
                    cmd1.ExecuteNonQuery();
                    connection.Close();

                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"delete from MotionPictureDirectors
                    where DirectorId = @id", connection);
                    cmd.Parameters.AddWithValue("@id",id);
                    cmd.ExecuteNonQuery();

                    return GetDirectorById(id) == null;
                }
            }
            catch(Exception e)
            {
                throw new Exception("something went wrong");
            }
        }
       
        //HELPERS
        public int NumberOfAwardsByDirectorId(int id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"select count(*) as numberOfAwards from MotionPictures as mp
                    join directors_movies as dm on dm.movieId = mp.id
                    where AcademyAward = 1 and directorId = @directorId", connection);
                    cmd.Parameters.AddWithValue("@directorId", id);
                    SqlDataReader reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        int numberOfAwards = (int)reader["numberOfAwards"];
                        return numberOfAwards;
                    }
                }
                return 0;
            }
            catch (Exception e)
            {
                throw new Exception("Something went wrong while getting the number of awards by director id: " + e);
            }
        }
        public int DirectorExists(Director director)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"select * from MotionPictureDirectors
                    where FirstName like @firstName and LastName like @lastName and BirthYear like @year", connection);
                    SqlDataReader reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        int directorId = (int)reader["DirectorId"];
                        return directorId;
                    }
                }
                return -1;
            }
            catch (Exception e)
            {
                throw new Exception("something went wrong");
            }
        }
        public Director BuildADirector(SqlDataReader reader)
        {
            Director director = new Director();
            director.DirectorId = (int)reader["DirectorId"];
            director.FirstName = (string)reader["FirstName"];
            director.LastName = (string)reader["LastName"];
            director.YearOfBirth = (int)reader["BirthYear"];

            return director;
        }
    }
}
