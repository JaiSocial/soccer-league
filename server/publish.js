Meteor.publish('teams', function (){
	return Teams.find({});
});

Meteor.publish('seasons', function (){
	return Seasons.find({});
});

Meteor.publish('coaches', function (){
	return Coaches.find({});
});

Meteor.publish('players', function (){
	return Players.find({});
});

Meteor.publish('locations', function (){
	return Locations.find({});
});

Meteor.publish('games', function (){
	return Games.find({});
});