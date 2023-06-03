using Microsoft.AspNetCore.Mvc.Abstractions;

namespace MoviesApi.Models
{
    public class Movie
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int ReleaseYear { get; set; }
        public bool AcademyAward { get; set; }        
        public List<Director> Director { get; set; }

        public Movie()
        {

        }
        public Movie(int id, string name, string description, int releaseYear, bool academyAward, List<Director> director)
        {
            ID = id;
            Name = name;
            Description = description;
            ReleaseYear = releaseYear;
            AcademyAward = academyAward;
            Director = director;
        }

    }
}
