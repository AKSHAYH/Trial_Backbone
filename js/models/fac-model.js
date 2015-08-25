app = app || {};

app.models.Fac = Backbone.Model.extend({
	defaults: {
			'mes': '',
			'type': ''
	},
	url: 'https://api.myjson.com/bins/44zgu',
	
});

app.collections.Facs = Backbone.Collection.extend({
	

	
	model: app.models.Fac,
	
	comparator: function(fac) {
		return student.get('mes');
	}
	
});

