package Project;

import org.openqa.selenium.By;

public class HomePage extends Utils {

    private By _LogoVerify = By.id("header_logo");
    private By _womenCategoryLink = By.linkText("Women");

public void toVerifyUserIsOnHomePage(){
    System.out.println(getText(_LogoVerify));
    //getText(_LogoVerify);
}
public void toClickOnWomenLink(){
    clickOnElement(_womenCategoryLink,"Size");
}
}
