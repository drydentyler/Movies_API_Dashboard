namespace MoviesApi.Models
{
    public class Director
    {
        public int DirectorId { get; set; }
        public string FirstName { get; set; }
        public string  LastName { get; set; }
        public int YearOfBirth { get; set; }

        public Director()
        {

        }
        public Director(int directorId, string firstName, string lastName, int yearOfBirth)
        {
            DirectorId = directorId;
            FirstName = firstName;
            LastName = lastName;
            YearOfBirth = yearOfBirth;
        }

    }
}
