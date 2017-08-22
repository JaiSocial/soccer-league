Template.GamesDashboard.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('games');
	})
});

Template.GamesDashboard.helpers({
	games: () => {
		return Games.find({});
	}
})

Template.GamesDashboard.events({
});
