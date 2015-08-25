app = app || {};

app.models.Student = Backbone.Model.extend({
	defaults: {
		'Name': '',
		'Marks': ''
	},
});

app.collections.Students = Backbone.Collection.extend({
	
	model: app.models.Student,
	
	comparator: function(student) {
		return student.get('Marks');
	}
	
});