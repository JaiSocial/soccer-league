Template.LocationDetails.onCreated(function (){

	var self = this;
	self.autorun(function(){
		self.subscribe('locations');
	})
});

Template.LocationDetails.helpers({
	location: () => {
		
		const id = FlowRouter.getParam('id');
		
		const location_id_int = parseInt(id);

		let location_document = Locations.findOne({'location_id': location_id_int});
		
		if (location_document === undefined){
			throw new Error("location document was not defined for location_id '" + id + "'");
		}
		else {
			console.log(location_document);
			return location_document;
		}
	}
})