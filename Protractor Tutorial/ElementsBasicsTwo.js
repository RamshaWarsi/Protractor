/**
 * 
 */
describe('Protractor Ellements Basics',function()

	{
	it('locators', function()
			{
browser.get("http://juliemr.github.io/protractor-demo/");
element(by.model("first")).sendKeys("8");
element(by.model("second")).sendKeys("10");
} )
	}
)