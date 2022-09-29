package steps;

import org.openqa.selenium.WebDriver;

import com.juaracoding.test.pages.Main;
import com.juaracoding.test.utils.Constants;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class TestMain {
	private static WebDriver driver;
	private Main main = new Main();
	
	public TestMain() {
		driver = Hook.driver;
	}
	
	@When("navigate to mainpage")
	public void navigate() {
		driver.get(Constants.url);
	}
	
	@And("search {string} and click it")
	public void product(String item) {
		main.search(item);
		main.clickProduct();
	}
	
	@Then("print stock item")
	public void stock() {
		System.out.println("Stok : " + main.getStock());
	}
}
