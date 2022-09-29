package com.juaracoding.test.pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.juaracoding.test.driver.DriverSingleton;


public class Main {
	
	private WebDriver driver;
	
	public Main() {
		this.driver=DriverSingleton.getDriver();
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath = "//*[@id=\"header-main-wrapper\"]/div[2]/div[2]/div/div/div/div/input")
	private WebElement searchInput;
	
	@FindBy(xpath = "//*[@id=\"header-main-wrapper\"]/div[2]/div[2]/div/div/div/div/button")
	private WebElement searchBtn;
	
	@FindBy(xpath="//*[@id=\"zeus-root\"]/div/div[2]/div/div[2]/div[4]/div[2]/div[7]/div/div/div/div/div/div[2]/a/div[1]")
	private WebElement sampleProduct;
	
	@FindBy(xpath ="//*[@id=\"pdpFloatingActions\"]/div[1]/div/p/b")
	private WebElement stockText;
	
	public void search(String item) {
		searchInput.sendKeys(item);
		searchBtn.click();
	}
	
	public void clickProduct() {
		delay(2);
		((JavascriptExecutor) driver).executeScript("window.scrollBy(0,1000);", "");
		sampleProduct.click();
	}
	
	public String getStock() {
		return stockText.getText();
	}
	
	
	static void delay(int seconds) {
		try {
			Thread.sleep(seconds*1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}


