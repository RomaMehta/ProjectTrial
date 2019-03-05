package Project;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Utils extends BasePage {
    public static void findSlider(By by){driver.findElement(by);}

    // To click
    public static void clickOnElement(By by,String text) {
        driver.findElement(by).click();
    }

    //to type text
    public static void enterText (By by , String text){
        driver.findElement(by).sendKeys(text);
    }

    //clear text and enter text
    public static void clearAndEnterText(By by , String text){
        driver.findElement(by).clear();
        driver.findElement(by).sendKeys(text);
    }

    // to get Actual text from the element
    // using String cz the returning text is String
    public static String getText (By by){
        return driver.findElement(by).getText();
    }

    // to select from Drop down Menu
    public static void selectByVisibleText (By element , String text){
        new Select(driver.findElement(element)).selectByVisibleText(text);
    }

    public static String timeStamp (){
        DateFormat format = new SimpleDateFormat("ddMMyyHHmmSS");
        return  format.format(new Date());
    }
    public static void waitForElementToBeVisible(By by , int time){
        WebDriverWait wait = new WebDriverWait(driver,time);
        wait.until(ExpectedConditions.presenceOfElementLocated(by));
    }
    public static void waitForElementToBeInvisible(By by , int time)
    {WebDriverWait wait = new WebDriverWait(driver, time);
        wait.until(ExpectedConditions.invisibilityOfElementLocated(by));
    }
    public static void waitForElementToLoad(By by , int time ){
        WebDriverWait wait = new WebDriverWait(driver, time);
        wait.until(ExpectedConditions.elementToBeClickable(by));
    }
    public static void waitForElementToBeClickable(By by , int time){
        WebDriverWait wait = new WebDriverWait(driver,time);
        wait.until(ExpectedConditions.elementToBeClickable(by));
    }
    public static void selectByIndex(By element, int num)
    {
        new Select(driver.findElement(element)).selectByIndex(num);
    }


   /* public static void waitForElementToBeDisplay(By by,int time)
    { WebDriverWait wait = new WebDriverWait(driver,time);
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(by)));}*/



}
