package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

public class WomenCategoryPage extends Utils {

    private By _verifyWomenPage = By.className("title_block");
    private By _sizeCheckBox = By.id("layered_id_attribute_group_3");
    // private By _verifySize = By.xpath("//*[@id=\"enabled_filters\"]/ul/li/text()");
    private By _MinPrice = By.className("ui-slider-handle ui-state-default ui-corner-all");
    private By _MaxPrice = By.className("ui-slider-handle ui-state-default ui-corner-all");
    private By _Slider = By.cssSelector("#layered_price_slider");
    private By _PriceRange = By.id("layered_price_range");

    public void toVerifyUserIsOnWomenCategoryPage() {
        System.out.println(getText(_verifyWomenPage));
    }

    public void toSelectSize(String Size) {
        clickOnElement(_sizeCheckBox, Size);
    }

    public void setThePriceUsingTheSlider(int PriceFrom, int PriceTo){
        // Trial code - not working
        WebElement From = driver.findElement(_MinPrice);
        WebElement To = driver.findElement(_MaxPrice);

        Actions builder = new Actions(driver);
        Action dragAndDrop = builder.clickAndHold(From).moveToElement(To).release(To).build();

        dragAndDrop.perform();
        driver.close();
        findSlider(_Slider);
            }



}
