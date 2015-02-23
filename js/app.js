var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/prayingCat.jpeg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/bigtallguy/434164568');

	this.level = function() {
		if (this.clickCount()<10)
			return "Newborn";
		else if (this.clickCount()<20)
			return "Baby";
		else if (this.clickCount()<40)
			return "Child";
		else if (this.clickCount()<80)
			return "Teen";
		else
			return "Adult";
	}

	this.fullName = ko.computed(function() {
		return this.name() + ' - ' + this.level();
	}, this);
	
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}
var ViewModel = function() {
	this.currentCat = ko.observable(new Cat());

	

	this.catsArray = ko.observableArray();
	this.catsArray.push({'clickCount' : ko.observable(0),
                    'name' : ko.observable('Tabby'),
                    'imgSrc' : ko.observable('img/prayingCat.jpeg')});
	this.catsArray.push({'clickCount' : ko.observable(0),
                    'name' : ko.observable('Evrica'),
                    'imgSrc' : ko.observable('img/wonderingCat.jpeg')});
	this.catsArray.push({'clickCount' : ko.observable(0),
                    'name' : ko.observable('Mousy'),
                    'imgSrc' : ko.observable('img/scaredCat.jpeg')});

}

ko.applyBindings(new ViewModel());
