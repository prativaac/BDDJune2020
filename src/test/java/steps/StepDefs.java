package steps;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.AddNewAccountPage;
import page.LoginPage;
import util.BrowserFactory;

public class StepDefs {
	WebDriver driver;
	BrowserFactory browserFactory;
	LoginPage loginpage;
	AddNewAccountPage accountPage;

	@Before
	public void Before_run() {
		driver = BrowserFactory.init();
		browserFactory = PageFactory.initElements(driver, BrowserFactory.class);
		loginpage = PageFactory.initElements(driver, LoginPage.class);
		accountPage = PageFactory.initElements(driver, AddNewAccountPage.class);

	}

	@Given("^User is on the techfios Login Page$")
	public void user_is_on_the_techfios_Login_Page() throws Throwable {
		driver.get("https://www.techfios.com/billing/?ng=admin/");
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) throws Throwable {
		loginpage.enterUserName(username);
		Thread.sleep(2000);

	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) throws Throwable {
		loginpage.enterPassword(password);
		Thread.sleep(2000);
	}

	// @And("^User clicks on Signin Button$" )
	// public void user_clicks_on_Signin_Button() {
	// loginpage.clickSigninButton();

	// }

	@When("^User enters the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_the_and(String username, String password) throws Throwable {
		loginpage.enterCredentials(username, password);

	}

	@When("^User clicks on Signin Button$")
	public void user_clicks_on_Signin_Button() throws Throwable {
		loginpage.clickSigninButton();
		Thread.sleep(2000);
	}

	@Then("^User should land on Dashboard Page$")
	public void user_should_land_on_Dashboard_Page() throws Throwable {
		 loginpage.getPageTitle();
		 String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginpage.getPageTitle();
		 Assert.assertEquals(expectedTitle, actualTitle);
		 browserFactory.takeScreenshotAtEndOfTest(driver);
		//DashboaedPage dashboardpage = PageFactory.initElements(driver, DashboaedPage.class); // we can do this way too
		//dashboardpage.validateDashboardPage();
	}

	@Then("^User clicks on bank and cash$")
	public void user_clicks_on_bank_and_cash() throws Throwable {
		accountPage.clickOnBankCash();
	}

	@Then("^User clicks on new account$")
	public void user_clicks_on_new_account() throws Throwable {
		accountPage.clickOnNewAccount();
		Thread.sleep(2000);
	}

	
	@Then("^User fill up the form entering \"([^\"]*)\"and \"([^\"]*)\"and \"([^\"]*)\"and \"([^\"]*)\"and \"([^\"]*)\"and \"([^\"]*)\"and \"([^\"]*)\"$")
	public void user_fill_up_the_form_entering(String accountTitle, String description, String initialBalance,String accountNumber, String contactPerson, String phone, String internetBankingUrl)
			throws InterruptedException {
		
		accountPage.fillUpTheFormWithValidInformation(accountTitle, description, initialBalance, accountNumber,contactPerson, phone, internetBankingUrl);
		Thread.sleep(2000);
	}

	@Then("^User clicks on Submit Button$")
	public void user_clicks_on_Submit_Button() throws Throwable {
		accountPage.clickOnSubmitButton();
	}
	
	@Then("^User will be able to validate AddAccount$")
	public void user_will_be_able_to_validate_AddAccount() throws Throwable {
		accountPage.getPageTitle();
		String expectedtitle= "Accounts- iBilling";
		String actualtitle = accountPage.getPageTitle();
		Assert.assertEquals(expectedtitle,actualtitle);
		browserFactory.takeScreenshotAtEndOfTest(driver);
		
	}

	 @After
	 public void tearDown() {
	 driver.close();
	 driver.quit();
	 }

}
