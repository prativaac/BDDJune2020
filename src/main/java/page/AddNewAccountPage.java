package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AddNewAccountPage extends BasePage {

	WebDriver driver;

	public AddNewAccountPage(WebDriver driver) {
		this.driver = driver;

	}

	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Bank & Cash')]")
	WebElement BANK_CASH;
	@FindBy(how = How.XPATH, using = "//a[contains(text(),'New Account')]")
	WebElement NEW_ACCOUNT;
	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement ACCOUNT_TITLE;
	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement DESCRIPTION;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement INTIAL_BALANCE;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement ACCOUNT_NUMBER;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement CONTACT_PERSON;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	WebElement PHONE;
	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")
	WebElement INTERNET_BANKING;
	@FindBy(how = How.XPATH, using = "//button[@class='btn btn-primary']")
	WebElement SUBMIT;

	public void clickOnBankCash() {
		BANK_CASH.click();
	}

	public void clickOnNewAccount() {
		NEW_ACCOUNT.click();
	}

	public void fillUpTheFormWithValidInformation(String accountTitle, String description, String initialBalance,
			String accountNumber, String contactPerson, String phone, String internetBankingUrl) {

		int randomNumber = randomNumberGenerator();

		ACCOUNT_TITLE.sendKeys(accountTitle + randomNumber);

		DESCRIPTION.sendKeys(description + randomNumber);

		INTIAL_BALANCE.sendKeys(initialBalance);

		ACCOUNT_NUMBER.sendKeys(accountNumber);
		
		CONTACT_PERSON.sendKeys(contactPerson + randomNumber);
		
		PHONE.sendKeys(phone);
		
		INTERNET_BANKING.sendKeys(internetBankingUrl);
	}

	public void clickOnSubmitButton() {
		SUBMIT.click();
	}
	public String getPageTitle() {

		return driver.getTitle();

}
}