@New_Account 
Feature: Techfios bank and cash New Account Functionality 

Background: 
	Given User is on the techfios Login Page 
	
	
@Scenario_01 
Scenario Outline: User should be able to login with valid credentials 
	and open a new account	
	When User enters the "<username>" and "<password>" 
	And User clicks on Signin Button 
	Then User should land on Dashboard Page 
	Then User clicks on bank and cash 
	Then User clicks on new account
	Then User fill up the form entering "<accountTitle>"and "<description>"and "<initialBalance>"and "<accountNumber>"and "<contactPerson>"and "<phone>"and "<internetBankingUrl> "  
	Then User clicks on Submit Button 
	Then User will be able to validate AddAccount
	Examples: 
		|username |password |accountTitle |description |initialBalance |accountNumber |contactPerson |phone |internetBankingUrl|
		|demo@techfios.com |abc123|Saving Account|PORS|2500|A123763C|Mnop|1234567891|https://www.abc.com/billing/?ng=admin/|