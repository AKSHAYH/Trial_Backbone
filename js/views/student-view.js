app = app || {};
	var mod = new app.models.Student();
app.views.Student = Backbone.View.extend({
	tagName: 'li',
	
	attributes: function() {
		return {
			class: 'Student'
		};
	},
	
	template: _.template($('#Student-template').html()),

		addStudentElement:function(){
		var view=this;
		alert("ss");
		var html = (view.template(view.model.toJSON()));	
		view.$el.html(html);
	},
	
	
	render: function() {
		var view = this;
		
		view.listenTo(view.model, 'change', view.addStudentElement);
		view.$el.html(view.template(view.model.toJSON()));
		return this;
	}
	
});

app.views.Ermsg = Backbone.View.extend({
	tagName: 'li',
	
	attributes: function() {
		return {
			class: 'Fac'
		};
	},
	
	initialize:function(){
		
		this.model =new app.models.Fac();
		this.collection = new app.collections.Facs();

	},
	
	template: _.template($('#Student-template2').html()),
	
	
	render: function() {
		var view = this;
		window.aj = this;
		this.model = new app.models.Fac();
		this.model.fetch({
			success:function(pModel){
				alert('got');
				view.$el.html(view.template(pModel.toJSON()));
			},
			error:function(){
				alert('oops');
			}
		});		
		$('#errmsg').append(this.template(this.model.toJSON()));
		//this.$el.html(this.template(this.model.toJSON()));
		//view.$el.html(view.template(view.model.toJSON()));
		return this;
	}
	
});



app.views.Students = Backbone.View.extend({

	el: '#form',
	
	initialize: function(data) {
		this.collection = new app.collections.Students();
		this.collection.push({"Name":"Akshay","Marks":"99"});
		this.collection.push({"Name":"Akshay","Marks":"99"});
		this.collection.push({"Name":"Akshay","Marks":"99"});
		this.mainArray=[],	
		this.model = new app.models.Student();
		var newmod = new app.models.Student({"Name":"Akshay","Marks":"99"});
		 this.modelBinder = new Backbone.ModelBinder();

		this.render();
		
		
		//this.collection.on('reset', this.render, this);
	},
	
	
	events: {
		'keyup #inp1': 'searchFilter',
		//'keyup #inp2': 'searchFilter',
		'click #add' : 'submitAdd',
	},
	
	render: function() {
		var self = this;
		window.akshay=this;
		 this.modelBindings = Backbone.ModelBinder.createDefaultBindings(this.$el, 'feedback-data');
		var bindings = {Name: '#inp1',Marks:'#inp2'};
		this.modelBinder.bind(this.model, this.el,this.modelBindings);
		//alert(this.model.get('Name'));
		$('#listing').empty();
		_.each(this.collection.models, function(student) {
			self.renderPerson(student);
		}, this);
		self.renderPerson(this.model);
		var msg = new app.views.Ermsg();
		$('#errmsg').append(msg.render().el);
	},
	

	
	renderPerson: function(student) {
		var studentsView=this;
		
		var newperson = new app.views.Student({
			model: student
		});
		studentsView.mainArray.push(newperson);
		$('#listing').append(newperson.render().el);
	},
	

	    submitAdd: function(e) {
    
        e.preventDefault();
		
        var pet_data =  this.getFormData( this.$el.find('#form') );
		
		alert(pet_data["Name"]);
        this.collection.add(pet_data);
		this.render();
    },
	getFormData: function(form) { 
        var unindexed_array = form.serializeArray();
        var indexed_array = {};

        $.map(unindexed_array, function(n, i){
            indexed_array[n['name']] = n['value'];
        });

        return indexed_array;
    },
	searchFilter: function(e) {
		/*this.searchFilter = e.target.value;
		var ids = e.target.id;
		var name="";
		var mark="";
		
		
		if(ids == "inp1"){
			name=e.target.value;
			mod.set('Name',name);
		}
		else{
			mark=e.target.value;
			mod.set('Marks',mark);
		}
		this.collection.pop();
		this.collection.push(mod);*/
		//
		//this.render();
	}
	
});