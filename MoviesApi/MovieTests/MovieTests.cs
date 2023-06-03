using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace MovieTests
{

    [TestClass]
    public class MovieTests
    {
         
        [TestMethod]
        public void TestUserInterfaceAddMovieForm()
        {
            var driver = new ChromeDriver();
            //driver.Navigate().GoToUrl()
        }
    }
}
