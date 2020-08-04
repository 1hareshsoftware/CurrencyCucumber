package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDef {

    Currency currency = new Currency();

    @Given("^i click on drop down to see currency option$")
    public void i_click_on_drop_down_to_see_currency_option() {
        currency.SelectEuroCurrency();
    }

    @When("^i select currency US Dollar or Euro$")
    public void i_select_currency_US_Dollar_or_Euro() {
        currency.SelectEuroCurrency();
    }

    @Then("^i Succesfully see product price as per selection$")
    public void i_Succesfully_see_product_price_as_per_selection() {

    }


    }
