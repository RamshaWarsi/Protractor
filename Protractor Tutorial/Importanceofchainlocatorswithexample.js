describe('ChainLocators',function()
	{
	it('Calculator Website', function()
			{
		browser.get('http://juliemr.github.io/protractor-demo/');
			}) 
	it('ChainLocators', function ()
			{
		element(by.model("first")).sendKeys("8");
		browser.sleep(5000);
		element(by.model("second")).sendKeys("10");
		element(by.id('gobutton')).click(); 
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)//parent.child
				{
			console.log("This is the Result");
			console.log(text);
		})
		})
	})