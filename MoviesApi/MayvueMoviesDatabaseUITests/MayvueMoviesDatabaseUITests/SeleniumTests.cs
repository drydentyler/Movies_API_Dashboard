using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.Events;
using OpenQA.Selenium.Support.UI;

namespace MayvueMoviesCollectionUITest
{
    [TestClass]
    public class UITests
    {
        [TestMethod]
        public void AddNewMovieFormButton()
        {
            var driver = new ChromeDriver();
            driver.Navigate().GoToUrl(@"http://127.0.0.1:5173/");
            driver.FindElement(By.Id("new-movie-form-button")).Click();
            driver.FindElement(By.Id("new-movie-name")).SendKeys("Selenium: The Movie!");
            driver.FindElement(By.Id("new-movie-description")).SendKeys("Since Mayvue's employer showcase at Tech Elevator, I have been interested in learning more about what it could look like to work for them. And since my conversation with Billy, I knew I desperately wanted to work for Mayvue.");
            driver.FindElement(By.Id("new-movie-release-year")).SendKeys("2023");
            driver.FindElement(By.Id("yesAward")).Click();
            WebElement firstName = (WebElement)driver.FindElement(By.Id("new-movie-director-first-name"));
            firstName.SendKeys("Tyler");
            driver.FindElement(By.Id("new-movie-director-last-name")).SendKeys("Dryden");
            driver.FindElement(By.Id("new-movie-director-birth-year")).SendKeys("1995");
            driver.FindElement(By.Id("add-new-director-button")).Click();
            System.Threading.Thread.Sleep(1000);
            WebElement newDirector = (WebElement)driver.FindElement(By.Id("checkbox-Tyler-Dryden"));
            newDirector.Click();
            driver.FindElement(By.Id("submit-new-movie-button")).Click();
        }
        [TestMethod]
        public void UpdateMovieInformation()
        {
            var driver = new ChromeDriver();
            driver.Navigate().GoToUrl(@"http://127.0.0.1:5173/");
            System.Threading.Thread.Sleep(1000);
            WebElement editMovieButton = (WebElement)driver.FindElement(By.Id("edit-movie-6"));
            editMovieButton.Click();
            WebElement movieReleaseYear = (WebElement)driver.FindElement(By.Id("edit-movie-release-year"));
            movieReleaseYear.Clear();
            movieReleaseYear.SendKeys("2015");
            driver.FindElement(By.Id("submit-edited-movie")).Click();
            System.Threading.Thread.Sleep(10000);
            driver.FindElement(By.Id("edit-movie-6")).Click();
            driver.FindElement(By.Id("edit-movie-release-year")).Clear();
            driver.FindElement(By.Id("edit-movie-release-year")).SendKeys("1985");
            driver.FindElement(By.Id("submit-edited-movie")).Click();
        }
        [TestMethod]
        public void AddNewDirector()
        {
            var driver = new ChromeDriver();
            driver.Navigate().GoToUrl(@"http://127.0.0.1:5173/");
            System.Threading.Thread.Sleep(1000);
            driver.FindElement(By.Id("toggle-movies-directors")).Click();
            driver.FindElement(By.Id("add-new-director")).Click();
            driver.FindElement(By.Id("new-director-first-name")).SendKeys("Timothy");
            driver.FindElement(By.Id("new-director-last-name")).SendKeys("Burton");
            driver.FindElement(By.Id("new-director-birth-year")).SendKeys("1958");
            driver.FindElement(By.Id("submit-new-director")).Click();

        }
        [TestMethod]
        public void UdpateDirectorInformation()
        {
            var driver = new ChromeDriver();
            driver.Navigate().GoToUrl(@"http://127.0.0.1:5173/");
            System.Threading.Thread.Sleep(1000);
            driver.FindElement(By.Id("toggle-movies-directors")).Click();

            driver.FindElement(By.Id("edit-director-1")).Click();

            WebElement directorFirstName = (WebElement)driver.FindElement(By.Id("edit-director-first-name"));
            directorFirstName.Clear();
            directorFirstName.SendKeys("Jimmy");
            driver.FindElement(By.Id("submit-edited-director")).Click();

            System.Threading.Thread.Sleep(5000);

            driver.FindElement(By.Id("edit-director-1")).Click();

            directorFirstName = (WebElement)driver.FindElement(By.Id("edit-director-first-name"));
            directorFirstName.Clear();
            directorFirstName.SendKeys("James");
            driver.FindElement(By.Id("submit-edited-director")).Click();


        }
    }
}