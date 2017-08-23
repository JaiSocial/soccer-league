Seasons     = new Mongo.Collection('seasons');
Coaches     = new Mongo.Collection('coaches');
Persons     = new Mongo.Collection('persons');
Parents     = new Mongo.Collection('parents');
Teams       = new Mongo.Collection('teams');
Players     = new Mongo.Collection('players');
Locations   = new Mongo.Collection('locations');
Games       = new Mongo.Collection('games');

Seasons.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function (userId, doc){
		return !!userId;
	}
});

Persons.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function (userId, doc){
		return !!userId;
	}
});


Coaches.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function (userId, doc){
		return !!userId;
	}
});

Parents.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function (userId, doc){
		return !!userId;
	}
});

Players.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function (userId, doc){
		return !!userId;
	}
});

Teams.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function (userId, doc){
		return !!userId;
	}
});

Games.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function (userId, doc){
		return !!userId;
	}
});

Locations.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function (userId, doc){
		return !!userId;
	}
});

SeasonSchema = new SimpleSchema({
	season_id: {
		type : Number,
		label : 'Season ID'
	},
	name: {
		type : String,
		label : 'Name'
	},
	desc: {
		type : String,
		label : 'Description'
	},
	start_year: {
		type : Number,
		label : 'Start Year'
	},
	end_year: {
		type : Number,
		label : 'End Year'
	},
	start_month: {
		type : Number,
		label : 'Start Month'
	},
	end_month: {
		type : Number,
		label : 'End Month'
	},
	game_ids : {
		type : [Number]
	}
});

Seasons.attachSchema( SeasonSchema );


PersonSchema = new SimpleSchema({
	person_id : {
		type : Number,
		label : 'Person ID'
	},
	first_name : {
		type : String,
		label : 'First Name'
	},
	last_name : {
		type : String,
		label : 'Last Name'
	},
	phone_number_1 : {
		type : String,
		label : 'Phone Number 1'
	},
	phone_number_2 : {
		type : String,
		label : 'Phone Number 2'
	},
	email_address : {
		type : String,
		label : 'Email Address'
	},
	is_obsolete: {
		type: Boolean,
		label: 'Obsolete',
		defaultValue: false
	}
});


Persons.attachSchema ( PersonSchema );

CoachesSchema = new SimpleSchema({
	coaches_id: {
		type : Number,
		label : 'Coaches ID'
	},
	person_id: {
		type: Number,
		label : 'Person ID'		
	}
});

Coaches.attachSchema( CoachesSchema );


ParentSchema = new SimpleSchema({
	parent_id: {
		type : Number,
		label : 'Parent ID'
	},
	person: {
		type: PersonSchema
	}
});

Parents.attachSchema(ParentSchema);


PlayersSchema = new SimpleSchema({
	player_id: {
		type : Number,
		label : 'Player ID'
	},
	first_name: {
		type: String,
		label : 'First Name'
	},
	last_name: {
		type: String,
		label : 'Last Name'
	},
	nickname: {
		type: String,
		label : 'Nickname'
	},
	jersey_number: {
		type: Number,
		label : 'Jersey Number'
	},
	team_id : {
		type: Number,
		label: 'Team ID'
	},
	parent_ids : {
		type: [Number],
		label: 'Parent IDs'
	}
});

Players.attachSchema(PlayersSchema);


TeamsSchema = new SimpleSchema({
	team_id: {
		type : Number,
		label : 'Team ID'
	},
	name: {
		type: String,
		label : 'Name'
	},
	season_id : {
		type : Number,
		label : 'Season ID'
	},
	coach_ids: {
		type : [Number]
	}
});

Teams.attachSchema( TeamsSchema );

LocationsSchema = new SimpleSchema({
	location_id: {
		type : Number,
		label : 'Location ID'
	},
	street_number: {
		type: String,
		label : 'Street Number'
	},
	street_name : {
		type : String,
		label : 'Street Name'
	},
	zipcode : {
		type : Number,
		label: 'Zipcode'
	},
	city : {
		type : String,
		label : 'City'
	},
	state : {
		type : String,
		label : 'State'
	}
});

Locations.attachSchema(LocationsSchema);




GamesSchema = new SimpleSchema({
	game_id: {
		type : Number,
		label : 'Game ID'
	},
	date: {
		type: Date,
		label : 'Date'
	},
	location_id : {
		type : Number
	},
	home_team_id : {
		type : Number,
		label : 'Home Team'
	},
	away_team_id : {
		type : Number,
		label : 'Away Team'
	},
	home_team_score : {
		type : Number,
		label : 'Home Team Score'
	},
	away_team_score : {
		type : Number,
		label : 'Away Team Score'
	}
});

Games.attachSchema(GamesSchema);


// Meteor.methods({
// 	toggleMenuItem: function(id, currentState){
// 		Coaches.update(id, {
// 			$set: {
// 				inMenu: !currentState
// 			}
// 		});
// 	},
// 	deleteCoaches: function (id){
// 		Coaches.remove(id);
// 	}
// });

