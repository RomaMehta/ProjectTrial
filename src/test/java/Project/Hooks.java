package Project;

import cucumber.api.java.Before;

import java.util.concurrent.TimeUnit;

public class Hooks extends BasePage {
    BrowserSetup browserSetup= new BrowserSetup();
    LoadProp loadProp = new LoadProp();

    @Before
    public void toOpenBrowser(){
        browserSetup.selectBrowser();
        driver.get(loadProp.getProperty("Website"));
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        //driver.get("http://demo.nopcommerce.com/");
    }

}
