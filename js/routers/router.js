app = {
	
	models: {},
	views: {},
	collections: {},
	routers: {},
	init: function() {
		
		directory = new app.views.Students();
		
		appRouter = new app.routers.Router();

		Backbone.history.start();	
	}	
}
app.routers.Router = Backbone.Router.extend({
		routes: {
		'filter/:type': 'urlFilter'
	},
});

