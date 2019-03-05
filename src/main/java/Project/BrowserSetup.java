package Project;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class BrowserSetup extends BasePage {
    // here we created an object of LoadProp class
    LoadProp loadProp = new LoadProp();
    // Here we asked the object loadProp to get the info stored in TestData file infront of the word Browser
    String browser = loadProp.getProperty("Browser");

    // Here we created a method named selectBrowser
    public void selectBrowser() {
        // Using the If- else loop we will create a way to chose which browser to work with
        // we used the equalIgnoreCase to Ignore the written case from the TestData file
        // for each browser we will enter the relative path taken from the BrowserDriver folder
        // the path needs to be placed in the ()brackets of System.setProperty which is an inbuilt method
        if (browser.equalsIgnoreCase("Chrome")){
            System.setProperty("webdriver.chrome.driver","src\\test\\Resources\\BrowserDrivers\\chromedriver.exe");
            driver = new ChromeDriver();
        }
        else if (browser.equalsIgnoreCase("IE")){
            System.setProperty("webdriver.ie.driver","src\\test\\Resources\\BrowserDrivers\\IEDriverServer32.exe");
            driver = new InternetExplorerDriver();
        }
        else if (browser.equalsIgnoreCase("FireFox")){
            System.setProperty("webdriver.gecko.driver","src\\test\\Resources\\BrowserDrivers\\geckodriver.exe");
            driver = new FirefoxDriver();
        } // The below else is for the purpose - if all the above fail - it would print whatever is present in the TestData file in front of Browser
        else {
            System.out.println("wrong browser name or empty : " + browser);

        }

    }
}
