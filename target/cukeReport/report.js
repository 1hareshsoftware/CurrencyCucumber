$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Resource/Features/Currency.feature");
formatter.feature({
  "line": 2,
  "name": "I am on homepage,",
  "description": "so i can select the currency from top left corner to US dollar or Euro",
  "id": "i-am-on-homepage,",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Currency"
    }
  ]
});
formatter.before({
  "duration": 10974657600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I able to select currency",
  "description": "",
  "id": "i-am-on-homepage,;i-able-to-select-currency",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "i click on drop down to see currency option",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i select currency US Dollar or Euro",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i Succesfully see product price as per selection",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.i_click_on_drop_down_to_see_currency_option()"
});
formatter.result({
  "duration": 3486300000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_select_currency_US_Dollar_or_Euro()"
});
formatter.result({
  "duration": 153794201,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_Succesfully_see_product_price_as_per_selection()"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.after({
  "duration": 26800,
  "status": "passed"
});
});