describe('Protractor Elements Bas`ics',function(){		
	function Add(a,b)
{ 
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id('gobutton')).click();
	}

		
		it('Cal', function()
				{
	browser.get("http://juliemr.github.io/protractor-demo/"); 
Add(1,2);
Add(3,4);
Add(5,6);
Add(7,8);
Add(9,10);
Add(11,12);
Add(13,14);
Add(15,16);
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