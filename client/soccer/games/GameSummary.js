Template.GameSummary.onCreated(function(){
});

Template.GameSummary.helpers({
	formatDate : function() {
		return formatDate(this.date);
	}
});

Template.GameSummary.events({
});


Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MM-DD-YYYY');
});