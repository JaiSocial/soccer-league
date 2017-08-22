Template.SeasonDetails.onCreated(function (){

	var self = this;
	self.autorun(function(){
		// self.subscribe('seasons');
	})
});

Template.SeasonDetails.helpers({
	season: () => {
		var id = FlowRouter.getParam('id');
		console.log(id);
		return Seasons.findOne({season_id: id});
		// var season_doc = Seasons.findOne({'season_id' : {$eq : id}});
		// console.log(season_doc);
		// console.log(Seasons.findOne({'season_id': id}));
		// return season_doc;
	}
});