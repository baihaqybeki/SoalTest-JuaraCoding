package steps;

import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Palindrome {
	
	String text;
	
	
	@Given("input text {string}")
	public void inputText(String input) {
		this.text=input;
	}
	
	@When("check the text")
	public String checkText() {
		String temp = "";
		for (int i=text.length()-1;i>-1;i--) {
			char palindrome = text.charAt(i);
			temp += String.valueOf(palindrome);
		}
		
		System.out.println("text = " +text);
		System.out.println("temp = " + temp);
		
		if (text.equals(temp)) {
			return "Palindrome";
			
		} else {
			return "Not Palindrome";
		}
	}
	
	@Then("the text is {string}")
	public void result(String isPalindrome) {
		String actual = checkText();
		Assert.assertEquals(actual, isPalindrome);
	}
}
