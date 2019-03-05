$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Project/AutomationTest.feature");
formatter.feature({
  "line": 1,
  "name": "Selection of Size, Price Range and Number of items",
  "description": "",
  "id": "selection-of-size,-price-range-and-number-of-items",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "As a User, I should be able to select Size, Price Range and number of items",
  "description": "",
  "id": "selection-of-size,-price-range-and-number-of-items;as-a-user,-i-should-be-able-to-select-size,-price-range-and-number-of-items",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on WOMEN tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I select Size \"\u003cSize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I set the price range between \"\u003cPriceFrom\u003e - \"\u003cPriceTo\u003e\" using the slider",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the given items are within the price range of \"\u003cPriceFrom\u003e - \"\u003cPriceTo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I add any \"\u003cNo\u003e\" items to shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Cart on the top right side",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Check out button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the \"\u003cNo\u003e\" added items should match the total price",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "selection-of-size,-price-range-and-number-of-items;as-a-user,-i-should-be-able-to-select-size,-price-range-and-number-of-items;",
  "rows": [
    {
      "cells": [
        "Size",
        "PriceFrom",
        "PriceTo",
        "No"
      ],
      "line": 15,
      "id": "selection-of-size,-price-range-and-number-of-items;as-a-user,-i-should-be-able-to-select-size,-price-range-and-number-of-items;;1"
    },
    {
      "cells": [
        "L",
        "$16",
        "$30.06",
        "2"
      ],
      "line": 16,
      "id": "selection-of-size,-price-range-and-number-of-items;as-a-user,-i-should-be-able-to-select-size,-price-range-and-number-of-items;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9894638798,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "As a User, I should be able to select Size, Price Range and number of items",
  "description": "",
  "id": "selection-of-size,-price-range-and-number-of-items;as-a-user,-i-should-be-able-to-select-size,-price-range-and-number-of-items;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on WOMEN tab",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I select Size \"L\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I set the price range between \"$16 - \"$30.06\" using the slider",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the given items are within the price range of \"$16 - \"$30.06\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I add any \"2\" items to shopping cart",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Cart on the top right side",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Check out button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the \"2\" added items should match the total price",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 282728469,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_click_on_WOMEN_tab()"
});
formatter.result({
  "duration": 2581053331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 15
    }
  ],
  "location": "StepDefs.i_select_Size(String)"
});
formatter.result({
  "duration": 334952962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$16 - ",
      "offset": 31
    },
    {
      "val": "30",
      "offset": 39
    },
    {
      "val": "06",
      "offset": 42
    }
  ],
  "location": "StepDefs.i_set_the_price_range_between_$_using_the_slider(int,int)"
});
formatter.result({
  "duration": 546134,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027Project.StepDefs.i_set_the_price_range_between_$_using_the_slider(int,int) in file:/C:/Users/Roma/IdeaProjects/ProjectTrial/target/test-classes/\u0027 with pattern [^I set the price range between \"([^\"]*)\"\\$(\\d+)\\.(\\d+)\" using the slider$] is declared with 2 parameters. However, the gherkin step has 3 arguments [$16 - , 30, 06]. \nStep: And I set the price range between \"$16 - \"$30.06\" using the slider\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "$16 - ",
      "offset": 47
    },
    {
      "val": "30",
      "offset": 55
    },
    {
      "val": "06",
      "offset": 58
    }
  ],
  "location": "StepDefs.the_given_items_are_within_the_price_range_of_$(String,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    }
  ],
  "location": "StepDefs.i_add_any_items_to_shopping_cart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefs.i_click_on_Cart_on_the_top_right_side()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefs.i_click_on_Check_out_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    }
  ],
  "location": "StepDefs.the_added_items_should_match_the_total_price(String)"
});
formatter.result({
  "status": "skipped"
});
});