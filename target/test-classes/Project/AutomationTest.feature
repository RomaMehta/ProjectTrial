Feature: Selection of Size, Price Range and Number of items

  Scenario Outline: As a User, I should be able to select Size, Price Range and number of items
    Given I am on the home page
    And I click on WOMEN tab
    And I select Size "<Size>"
    And I set the price range between "<PriceFrom> - "<PriceTo>" using the slider
    And the given items are within the price range of "<PriceFrom> - "<PriceTo>"
    And I add any "<No>" items to shopping cart
    And I click on Cart on the top right side
    When I click on Check out button
    Then the "<No>" added items should match the total price

    Examples:
      | Size | PriceFrom | PriceTo | No |
      | L    |   $16     | $30.06  | 2  |