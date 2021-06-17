describe('Protractor Elements Basics',function()

	{
	it('locators', function()
			{
browser.get("http://juliemr.github.io/protractor-demo/"); //Calculator site is not launched by angular.
//http://juliemr.github.io/protractor-demo/
//browser.sleep(200000); //http://juliemr.github.io/protractor-demo/
//element(by.class("button button-large button-secondary has-shield -btn")).click();
//browser.sleep(5000);

//browser.sleep(3000);
element(by.model("first")).sendKeys("8");
browser.sleep(5000);
element(by.model("second")).sendKeys("10");
element(by.id('gobutton')).click();
browser.sleep(5000);
})
})