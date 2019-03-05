package Project;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefs {
    HomePage homePage =new HomePage();
    WomenCategoryPage womenCategoryPage = new WomenCategoryPage();

    @Given("^I am on the home page$")
    public void i_am_on_the_home_page(){
        homePage.toVerifyUserIsOnHomePage();
        // Write code here that turns the phrase above into concrete actions
    }

    @Given("^I click on WOMEN tab$")
    public void i_click_on_WOMEN_tab(){
        homePage.toClickOnWomenLink();
        // Write code here that turns the phrase above into concrete actions
    }

    @Given("^I select Size \"([^\"]*)\"$")
    public void i_select_Size(String Size) {
        womenCategoryPage.toVerifyUserIsOnWomenCategoryPage();
        womenCategoryPage.toSelectSize(Size);
        // Write code here that turns the phrase above into concrete actions

    }

    @Given("^I set the price range between \"([^\"]*)\"\\$(\\d+)\\.(\\d+)\" using the slider$")
    public void i_set_the_price_range_between_$_using_the_slider( int PriceFrom, int PriceTo) {
        womenCategoryPage.setThePriceUsingTheSlider(PriceFrom, PriceTo);
       // womenCategoryPage.toSelectPriceRange(PriceFrom,PriceTo);
        // Write code here that turns the phrase above into concrete actions

    }

    @Given("^the given items are within the price range of \"([^\"]*)\"\\$(\\d+)\\.(\\d+)\"$")
    public void the_given_items_are_within_the_price_range_of_$(String arg1, int arg2, int arg3) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Given("^I add any \"([^\"]*)\" items to shopping cart$")
    public void i_add_any_items_to_shopping_cart(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Given("^I click on Cart on the top right side$")
    public void i_click_on_Cart_on_the_top_right_side() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^I click on Check out button$")
    public void i_click_on_Check_out_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^the \"([^\"]*)\" added items should match the total price$")
    public void the_added_items_should_match_the_total_price(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

}
