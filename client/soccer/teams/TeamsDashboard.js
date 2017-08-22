Template.TeamsDashboard.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('teams');
	})
});

Template.TeamsDashboard.helpers({
	teams: () => {
		return Teams.find({});
	}
})

Template.TeamsDashboard.events({
});
