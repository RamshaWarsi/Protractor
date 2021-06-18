describe('Protractor Elements Basics',function()

	{
	it('ElementBasicsTwo', function()
			{
browser.get("http://juliemr.github.io/protractor-demo/"); 
element(by.model("first")).sendKeys("8");
browser.sleep(5000);
element(by.model("second")).sendKeys("10");
element(by.id('gobutton')).click();
element(by.css("h2[class='ng-binding']")).getText().then(function(text)
		//Real Output will print only when you resollve promise
		//90% of Methods wil be resolved by Protractor at its own.
		//There could be 2 potential issues.
		//Sequence cannot be guaranteed.
		//
		{
	console.log(text);
		})
})
	})