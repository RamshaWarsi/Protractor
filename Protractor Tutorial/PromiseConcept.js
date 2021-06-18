describe('Protractor Tutorial',function()	
	{
	it('Promise Concept', function()
			{
		browser.sleep(5000);
		browser.get('https://angularjs.org/').then(function()
		{
			browser.sleep(5000)
			console.log("This is the last line to execute");
			});
			});
			});