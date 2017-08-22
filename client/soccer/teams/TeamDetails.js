Template.TeamDetails.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('teams');
	})
});

Template.TeamDetails.helpers({
	team: () => {
		var id = FlowRouter.getParam('team_id');
		return Teams.findOne({_id: id});
	}
})