@Currency
Feature: I am on homepage,
  so i can select the currency from top left corner to US dollar or Euro

  Scenario: I able to select currency
    Given i click on drop down to see currency option
    When i select currency US Dollar or Euro
    Then i Succesfully see product price as per selection