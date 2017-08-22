if (Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('seasons-dashboard');	
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');	
	});
}


FlowRouter.triggers.enter([function(context, redirect){
	if (! Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name : 'home',
	action(){
		if (Meteor.userId()){
			FlowRouter.go('seasons-dashboard');
		}
		//GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/seasons-dashboard', {
	name : 'seasons-dashboard',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"SeasonsDashboard"});
	}
});

FlowRouter.route('/teams-dashboard', {
	name : 'teams-dashboard',
	action(){
		//GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:"TeamsDashboard"});
	}
});

FlowRouter.route('/locations-dashboard', {
	name : 'locations-dashboard',
	action(){
		BlazeLayout.render('MainLayout', {main:"LocationsDashboard"});
	}
});

FlowRouter.route('/games-dashboard', {
	name : 'games-dashboard',
	action(){
		BlazeLayout.render('MainLayout', {main:"GamesDashboard"});
	}
});

FlowRouter.route('/season/:id', {
	name : 'season',
	action(){
		BlazeLayout.render('MainLayout', {main:"SeasonDetails"});
	}
});

FlowRouter.route('/team/:id', {
	name : 'team',
	action(){
		BlazeLayout.render('MainLayout', {main:"TeamDetails"});
	}
});

FlowRouter.route('/game/:id', {
	name : 'game',
	action(){
		BlazeLayout.render('MainLayout', {main:"GameDetails"});
	}
});

FlowRouter.route('/location/:id', {
	name : 'location',
	action(){
		BlazeLayout.render('MainLayout', {main:"LocationDetails"});
	}
});

FlowRouter.route('/coach/:id', {
	name : 'coach',
	action(){
		BlazeLayout.render('MainLayout', {main:"CoachDetails"});
	}
});