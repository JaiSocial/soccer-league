Template.PlayersDashboard.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('players');
	})
});

Template.PlayersDashboard.helpers({
	players: () => {
		return Players.find({});
	}
})

Template.PlayersDashboard.events({
});
