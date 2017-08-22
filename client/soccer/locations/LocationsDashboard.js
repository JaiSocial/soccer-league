Template.LocationsDashboard.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('locations');
	})
});

Template.LocationsDashboard.helpers({
	locations: () => {
		return Locations.find({});
	}
})

Template.LocationsDashboard.events({
});
