describe('Protractor Elements Basics',function()

	{
	it('locators', function()
			{
browser.get("https://angularjs.org/"); //Calculator site is not launched by angular.
browser.sleep(200000);
element(by.className("nav-link-inner")).sendKeys("8");
//element(by.model("second")).sendKeys("10").then (function()
//{
//browser.sleep(10000);
} )
	}
)