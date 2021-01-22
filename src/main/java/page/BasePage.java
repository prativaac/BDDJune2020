package page;

import java.util.Random;

public class BasePage {
	
	public int randomNumberGenerator() {
	Random rnd = new Random();	
		int randomNumber=rnd.nextInt(999);
		return randomNumber;
	}

}
