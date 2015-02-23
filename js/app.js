var initialCats = [{'clickCount' : 0,
                    'name' : 'Tabby',
                    'imgSrc' : 'img/prayingCat.jpeg'},
				   {'clickCount' : 0,
                    'name' : 'Evrica',
                    'imgSrc' : 'img/wonderingCat.jpeg'},
	               {'clickCount' : 0,
                    'name' : 'Mousy',
                    'imgSrc' : 'img/scaredCat.jpeg'}];

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	//this.imgAttribution = ko.observable('https://www.flickr.com/photos/bigtallguy/434164568');

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
	this.catsArray = ko.observableArray(initialCats);
	this.currentCat = ko.observable(new Cat(this.catsArray()[0]));
}

ko.applyBindings(new ViewModel());
