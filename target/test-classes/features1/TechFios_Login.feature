@End2End 
Feature: validate login functionality 

Background: 
	Given User is on the techfios Login Page     
	
@Scenario1
Scenario: User should be able to login with valid credentials 
	When User enters username as "demo@techfios.com"    
	And User enters password as "abc123"
	And User clicks on Signin Button 
	Then User should land on Dashboard Page


@Scenario2	
Scenario: User should be able to login with valid credentials 
	When User enters username as "demo@techfios.com"    
	And User enters password as "abc124"
	And User clicks on Signin Button 
	Then User should land on Dashboard Page
	
	
@Scenario3	
Scenario Outline:User should be able to login with valid credentials
	When User enters the "<username>" and "<password>" 
	And User clicks on Signin Button 
	Then User should land on Dashboard Page


Examples:
|username|password|
|demo@techfios.com |abc123|
|demo@techfios.com |abc124a|
|demo1@techfios.com |abc123|


