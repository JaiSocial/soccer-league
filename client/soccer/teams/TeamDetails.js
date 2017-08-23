Template.TeamDetails.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('teams');
	})
});

Template.TeamDetails.helpers({
	team: () => {
		const id = FlowRouter.getParam('id');
		const team_id_int = parseInt(id);
		return Teams.findOne({"team_id": team_id_int});
	}
})