package org.example;

import org.openqa.selenium.By;

import static org.example.Utils.utils.ClickOnElement;

public class Currency extends Utils{

    private By _clickCurrency=By.id("customerCurrency");
    private By _selectEuroCurrency=By.xpath("//div[@class=\"currency-selector\"]//option[2]");

    public void SelectEuroCurrency(){
        ClickOnElement(_clickCurrency);
        ClickOnElement(_selectEuroCurrency);}

}
