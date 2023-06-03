using Microsoft.Extensions.DependencyInjection;
using MoviesApi.Models;
using MoviesApi.Repositories;

namespace MovieRepositoryTests
{
    [TestClass]
    public class MovieRepositoryTests
    {
        private MovieRepository dao;

        private static readonly List<Director> TESTDIRECTOR_1 = new List<Director>() { new Director(0, "Wes", "Anderson", 1969) };
        private static readonly List<Director> TESTDIRECTOR_2 = new List<Director>() { new Director(1, "Frank", "Darabont", 1959) };
        private static readonly List<Director> TESTDIRECTOR_3 = new List<Director>() { new Director(2, "Tim", "Burton", 1958) };
        private static readonly List<Director> TESTDIRECTOR_4 = new List<Director>();

       private static readonly Movie TESTMOVIE_1 = new Movie(
            0,
            "Isle of Dogs",
            "Set in Japan, Isle of Dogs follows a boy's odyssey in search of his lost dog. In a dystopian near-future Japan, an influenza virus spreads throughout the canine population, with a risk of crossing to humans.",
            2018,
            true,
            TESTDIRECTOR_1);

        private static readonly Movie TESTMOVIE_2 = new Movie(
            200,
            "The Shawshank Redemption",
            "In 1947, Andy Dufresne (Tim Robbins), a banker in Maine, is convicted of murdering his wife and her lover, a golf pro. Since the state of Maine has no death penalty, he is given two consecutive life sentences and sent to the notoriously harsh Shawshank Prison.",
            1994,
            true,
            TESTDIRECTOR_2);

        private static readonly Movie TESTMOVIE_3 = new Movie(
            3,
            "Sonic the Hedgehog",
            "The film follows Sonic (voiced by Schwartz), a blue anthropomorphic hedgehog who can run at supersonic speeds. He teams up with a town sheriff, Tom Wachowski (Marsden), to stop the mad scientist Dr. Robotnik (Carrey)",
            2020,
            false,
            TESTDIRECTOR_4
            );

        [TestInitialize]
        public  void Setup()
        {
            string myConnectionString = @"Server=.\SQLEXPRESS;Database=MotionPictures;Trusted_Connection=True;";
            dao = new MovieRepository(myConnectionString);
        }
        [TestMethod]
        public void GetAllMoviesTest()
        {
            int expected = 6;
            List<Movie> result = dao.GetMovies();
            int actual = result.Count;

            Assert.AreEqual(expected, actual);

        }
        [TestMethod]
        public void GetDirectorByIdHappyPath()
        {
            Director expected = new Director(
                1,
                "James",
                "Lexington",
                1962);
            Director actual = dao.GetDirectorById(1);

            AssertDirectorsMatch(expected, actual);
        }
        [TestMethod]
        public void GetDirectorByIdNegativeNumber()
        {
            Director expected = null;
            Director actual = dao.GetDirectorById(-1);

            AssertDirectorsMatch(expected, actual);
        }
        [TestMethod]
        public void GetDirectorByIdZero()
        {
            Director expected = null;
            Director actual = dao.GetDirectorById(0);

            AssertDirectorsMatch(expected, actual);
        }
        [TestMethod]
        public void GetListOfDirectors()
        {
            int expected = 3;
            List<Director> listOfDirectors = dao.GetAllDirectors();
            int actual = listOfDirectors.Count;

            Assert.AreEqual(expected, actual);
        }
        [TestMethod]
        public void DirectorExistsTestHappyPath()
        {
            int expected = 3;
            Director director = new Director(
                3,
                "Jackson",
                "Smith",
                1993);
            int? actual = dao.DirectorExists(director);

            Assert.AreEqual(expected, actual);
        }
        [TestMethod]
        public void DirectorExistsTest_ChangedDirectorID()
        {
            int expected = 3;
            Director director = new Director(
                500,
                "Jackson",
                "Smith",
                1993);
            int? actual = dao.DirectorExists(director);

            Assert.AreEqual(expected, actual);
        }
        [TestMethod]
        public void DirectorExistsTest_ChangedDirectorInformation()
        {
            int? expected = null;
            Director director = new Director(
                3,
                "Jaxon",
                "Smith",
                1993);
            int? actual = dao.DirectorExists(director);

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void GetMovieByIdTestHappyPath()
        {
            List<Director> director = new List<Director>() { new Director
                (1,
                "James",
                "Lexington",
                1962) };
            Movie expected = new Movie(
                4,
                "Big Fish",
                "A frustrated son tries to determine the fact from fiction in his dying father's life.",
                2003,
                false,
                director);
            Movie actual = dao.GetMovieById(4);
            AssertDirectorsMatch(expected.Director[0], actual.Director[0]);
            AssertMoviesMatch(expected, actual);
        }
        [TestMethod]
        public void GetMovieByIdTest_NegativeNumber()
        {
            Movie expected = null;
            Movie actual = dao.GetMovieById(-1);
            AssertMoviesMatch(expected, actual);
        }

        private void AssertMoviesMatch(Movie expected, Movie actual)
        {
            if(expected == null && actual == null)
            {
                return;
            }
            else if(expected != null && actual != null)
            {
                Assert.AreEqual(expected.ID, actual.ID);
                Assert.AreEqual(expected.Name, actual.Name);
                Assert.AreEqual(expected.Description, actual.Description);
                Assert.AreEqual(expected.ReleaseYear, actual.ReleaseYear);
                Assert.AreEqual(expected.AcademyAward, actual.AcademyAward);
            }
            else
            {
                Assert.Fail();
            }
        }

        private void AssertDirectorsMatch(Director expected, Director actual)
        {
            if(expected == null && actual == null)
            {
                return;
            }
            else if(expected != null && actual != null)
            {
                Assert.AreEqual(expected.DirectorId, actual.DirectorId);
                Assert.AreEqual(expected.FirstName, actual.FirstName);
                Assert.AreEqual(expected.LastName, actual.LastName);
                Assert.AreEqual(expected.YearOfBirth, actual.YearOfBirth);
            }
            else
            {
                Assert.Fail();
            }
            
        }
    }
}