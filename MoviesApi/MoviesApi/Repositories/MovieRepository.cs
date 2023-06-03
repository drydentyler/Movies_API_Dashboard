using Microsoft.AspNetCore.Mvc.Infrastructure;
using MoviesApi.Models;
using System.Data.SqlClient;
using System.IO;
using System.Xml.Linq;

namespace MoviesApi.Repositories
{
    public class MovieRepository : IMovieRepository, IDirectorRepository, IDirectorsAndMovies
    {
        private readonly string connectionString = @"Server=.\SQLEXPRESS;Database=MotionPictures;Trusted_Connection=True;";

        public MovieRepository()
        {
        }
        public MovieRepository(string connString)
        {
            connectionString = connString;
        }

        //READ
        public Movie GetMovieById(int id)
        {
            try
            {
                Movie result = new Movie();
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"select * from MotionPictures
                    where ID = @movieId", connection);
                    cmd.Parameters.AddWithValue("@movieId", id);
                    SqlDataReader reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        result = MovieBuilder(reader);
                    }
                    result.Director = GetListOfDirectorsByMovieId(id);
                }
                return result;
            }
            catch (Exception e)
            {
                throw new Exception("Something went wrong while trying to retrieve a movie by id: " + e);
            }
        }
        public List<Movie> GetMovies()
        {
            try
            {
                List<Movie> results = new List<Movie>();
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"select * from MotionPictures", connection);
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        Movie placeholder = new Movie();
                        placeholder = MovieBuilder(reader);
                        results.Add(placeholder);
                    }
                    foreach (Movie movie in results)
                    {
                        movie.Director = GetListOfDirectorsByMovieId(movie.ID);
                    }
                    return results;
                }
            }
            catch (Exception e)
            {
                throw new Exception("something went wrong while getting the list of movies: " + e);
            }
        }
        public List<Director> GetListOfDirectorsAssocaitedWithMovie(int movieId)
        {
            try
            {
                List<Director> results = new List<Director>();
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"select mpd.DirectorId,FirstName,LastName,BirthYear from directors_movies as dm
                    join MotionPictureDirectors as mpd on mpd.DirectorId = dm.directorId
                    where dm.movieId = @movieId", connection);
                    cmd.Parameters.AddWithValue("@movieId", movieId);
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        results.Add(BuildADirector(reader));
                    }
                }
                return results;
            }
            catch (Exception e)
            {
                throw new Exception("Something went wrong getting list of directors for one movie: " + e);
            }
        }
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
        public List<Director> GetListOfDirectorsByMovieId(int id)
        {
            try
            {
                List<Director> results = new List<Director>();
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"select mpd.DirectorId,FirstName,LastName,BirthYear from directors_movies as dm
                    join MotionPictureDirectors as mpd on mpd.DirectorId = dm.directorId
                    where dm.movieId = @movieId", connection);
                    cmd.Parameters.AddWithValue("@movieId", id);
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        Director placeholder = new Director();
                        placeholder = BuildADirector(reader);
                        results.Add(placeholder);
                    }
                }
                return results;
            }
            catch (Exception)
            {
                throw new Exception("something went wrong");
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
        public bool InsertMovie(Movie movie)
        {
            try
            {
                List<int> listOfDirectorIds = new List<int>();
                foreach(Director director in movie.Director)
                {
                    listOfDirectorIds.Add((int)director.DirectorId);
                }

                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"insert into MotionPictures(Name, Description, [Release Year], AcademyAward)
                      output inserted.ID
                      values(@name, @description, @releaseYear, @academyAward)", connection);
                    cmd.Parameters.AddWithValue("@name", movie.Name);
                    cmd.Parameters.AddWithValue("@description", movie.Description);
                    cmd.Parameters.AddWithValue("@releaseYear", movie.ReleaseYear);
                    cmd.Parameters.AddWithValue("@academyAward", movie.AcademyAward);
                    int newId = (int)cmd.ExecuteScalar();
                    if(listOfDirectorIds.Count > 0)
                    {
                        foreach (int directorId in listOfDirectorIds)
                        {
                            AddNewRecord(directorId, newId);
                        }
                    }
                    return MovieExists(newId);
                }
            }
            catch (Exception e)
            {
                throw new Exception("Something went wrong while inserting a new movie:" + e);
            }
        }
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
            catch (Exception e)
            {
                throw new Exception("something went wrong");
            }
        }

        //UPDATE
        public Movie UpdateMovie(Movie movie)
        {
            try
            {
                using(SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"update MotionPictures
                        set name = @name,
                        description = @description,
                        [Release Year] = @releaseYear,
                        AcademyAward = @academyAward
                        where ID = @id;", connection);

                    cmd.Parameters.AddWithValue("@name", movie.Name);
                    cmd.Parameters.AddWithValue("@description", movie.Description);
                    cmd.Parameters.AddWithValue("@releaseYear", movie.ReleaseYear);
                    cmd.Parameters.AddWithValue("@academyAward", movie.AcademyAward);
                    cmd.Parameters.AddWithValue("@id", movie.ID);

                    cmd.ExecuteNonQuery();

                    List<Director> directors = GetListOfDirectorsAssocaitedWithMovie(movie.ID);
                    foreach(Director director in directors)
                    {
                        if (!movie.Director.Contains(director))
                        {
                            RemoveRecord((int)director.DirectorId, movie.ID);
                        }
                    }
                    foreach(Director director in movie.Director)
                    {
                        if (!directors.Contains(director))
                        {
                            AddNewRecord((int)director.DirectorId, movie.ID);
                        }
                    }
                    return GetMovieById(movie.ID);
                }
            }
            catch(Exception e)
            {
                throw new Exception("Unable to retrieve information from database");
            }
        }
        public Director UpdateDirectorInformation(Director director)
        {
            throw new NotImplementedException();
        }

        //DELETE
        public bool DeleteMovie(int id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();
                    SqlCommand command = new SqlCommand(@"delete from directors_movies 
                    where movieId = @movieId", connection);
                    command.Parameters.AddWithValue("@movieId", id);
                    command.ExecuteNonQuery();
                    connection.Close();

                    connection.Open();
                    SqlCommand cmd = new SqlCommand(@"delete from MotionPictures where ID = @id", connection);
                    cmd.Parameters.AddWithValue("@id", id);
                    cmd.ExecuteNonQuery();
                    return GetMovieById(id) == null;
                }
            }
            catch (Exception)
            {
                throw new Exception("Something went wrong deleting a movie");
            }
        }
        public bool DeleteADirector(int id)
        {
            throw new NotImplementedException();
        }
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
        public Director BuildADirector(SqlDataReader reader)
        {
            Director director = new Director();
            director.DirectorId = (int)reader["DirectorId"];
            director.FirstName = (string)reader["FirstName"];
            director.LastName = (string)reader["LastName"];
            director.YearOfBirth = (int)reader["BirthYear"];

            return director;
        }
        public Movie MovieBuilder(SqlDataReader reader)
        {
            Movie result = new Movie();
            result.ID = (int)reader["ID"];
            result.Name = reader["Name"].ToString();
            result.Description = reader["Description"].ToString();
            result.ReleaseYear = (int)reader["Release Year"];
            result.AcademyAward = (bool)reader["AcademyAward"];
            return result;
        }
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
        public int NumberOfAwardsByDirectorId(int id)
        {
            throw new NotImplementedException();
        }
        public bool MovieExists(int id)
        {
            Movie result = GetMovieById(id);
            return result == null ? false : true;
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
    }
}
