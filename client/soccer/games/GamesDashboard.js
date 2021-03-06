Template.GamesDashboard.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('games');
		self.subscribe('teams');
		self.subscribe('locations');
	})
});

Template.GamesDashboard.helpers({

	games: () => {

		const game_documents = Games.find({});
		

		/*----------------------------------------------- 
			Retrieve the location documents 
		-----------------------------------------------*/
		const location_documents = Locations.find({});

		let location_lookup = {};

		/*------------------------------------------------ 
			Build the location_id to location name lookup 
		------------------------------------------------*/
		location_documents.forEach(function(location){
			
			const id  = location.location_id;
			
			const name = location.name;
			
			location_lookup[id] = name;
		});


		/*----------------------------------------------- 
			Retrieve the location documents 
		-----------------------------------------------*/
		const team_documents = Teams.find({});

		let team_lookup = {};

		/*------------------------------------------------ 
			Build the team_id to team name lookup 
		------------------------------------------------*/
		team_documents.forEach(function(team){
			
			const team_id  = team.team_id;
			
			const team_name = team.name;
			
			// console.log("team id '" + team_id + "' team name '" + team_name + "'");

			team_lookup[team_id] = team_name;
		});


		let game_list = [];
		
		game_documents.forEach(function(game){

			if (team_lookup[game.home_team_id] === undefined){
				throw new Error("home team id '" + game.home_team_id + "' does not exist in the team lookup");
			}

			const home_team_name = team_lookup[game.home_team_id];
		

			if (team_lookup[game.away_team_id] === undefined){
				throw new Error("away team id '" + game.away_team_id + "' does not exist in the team lookup");
			}

			const away_team_name = team_lookup[game.away_team_id];

			if (location_lookup[game.location_id] === undefined){
				throw new Error("location id '" + game.location_id + "' does not exist in the location lookup");
			}

			const location_name = location_lookup[game.location_id];


			let new_game = {
				"home_team_name" : home_team_name,
				"away_team_name" : away_team_name,
				"home_team_id" : game.home_team_id,
				"away_team_id" : game.away_team_id,
				"date" : game.date,
				"location_id" : game.location_id,
				"location_name" : location_name
			};

			game_list.push(new_game);

		});

		return game_list;
	}
});

Template.GamesDashboard.events({
});