$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features1/NewAccount.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@New_Account"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Scenario_01"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User enters the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should land on Dashboard Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on bank and cash",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks on new account",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User fill up the form entering \"\u003caccountTitle\u003e\"and \"\u003cdescription\u003e\"and \"\u003cinitialBalance\u003e\"and \"\u003caccountNumber\u003e\"and \"\u003ccontactPerson\u003e\"and \"\u003cphone\u003e\"and \"\u003cinternetBankingUrl\u003e \"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Submit Button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User will be able to validate AddAccount",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "internetBankingUrl"
      ],
      "line": 20,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Saving Account",
        "PORS",
        "2500",
        "A123763C",
        "Mnop",
        "1234567891",
        "https://www.abc.com/billing/?ng\u003dadmin/"
      ],
      "line": 21,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7221821601,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.user_is_on_the_techfios_Login_Page()"
});
formatter.result({
  "duration": 540852300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@New_Account"
    },
    {
      "line": 8,
      "name": "@Scenario_01"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User enters the \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should land on Dashboard Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on bank and cash",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks on new account",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User fill up the form entering \"Saving Account\"and \"PORS\"and \"2500\"and \"A123763C\"and \"Mnop\"and \"1234567891\"and \"https://www.abc.com/billing/?ng\u003dadmin/ \"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Submit Button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User will be able to validate AddAccount",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "abc123",
      "offset": 41
    }
  ],
  "location": "StepDefs.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 167468999,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_Signin_Button()"
});
formatter.result({
  "duration": 3278406500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_should_land_on_Dashboard_Page()"
});
formatter.result({
  "duration": 360008100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_bank_and_cash()"
});
formatter.result({
  "duration": 52864301,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_new_account()"
});
formatter.result({
  "duration": 2585976000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Saving Account",
      "offset": 32
    },
    {
      "val": "PORS",
      "offset": 52
    },
    {
      "val": "2500",
      "offset": 62
    },
    {
      "val": "A123763C",
      "offset": 72
    },
    {
      "val": "Mnop",
      "offset": 86
    },
    {
      "val": "1234567891",
      "offset": 96
    },
    {
      "val": "https://www.abc.com/billing/?ng\u003dadmin/ ",
      "offset": 112
    }
  ],
  "location": "StepDefs.user_fill_up_the_form_entering(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2472389400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_Submit_Button()"
});
formatter.result({
  "duration": 1009769900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_will_be_able_to_validate_AddAccount()"
});
formatter.result({
  "duration": 796218700,
  "status": "passed"
});
formatter.after({
  "duration": 643189699,
  "status": "passed"
});
});