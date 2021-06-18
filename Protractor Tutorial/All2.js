describe('Protractor Elements Basics',function()

		{
		it('All2', function()
				{
	browser.get("http://juliemr.github.io/protractor-demo/"); 
	element(by.model("first")).sendKeys("8");
	element(by.model("second")).sendKeys("10");
	element(by.id('gobutton')).click();
	
	element(by.model("first")).sendKeys("2");
	element(by.model("second")).sendKeys("5");
	element(by.id('gobutton')).click();
	
	element(by.model("first")).sendKeys("6");
	element(by.model("second")).sendKeys("7");
	element(by.id('gobutton')).click();
	
	element(by.model("first")).sendKeys("5");
	element(by.model("second")).sendKeys("5");
	element(by.id('gobutton')).click();
	browser.sleep(5000);
	
	element.all(by.repeater("result in memory")).each(function(item)
			{

			item.element(by.css("td:nth-child(2)")).getText().then(function(text)
					{
//latest result should print first.
				console.log(text);
				})
			})
	})
		})