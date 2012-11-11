define(['src/widgets/todos/views/todos', 'src/widgets/todos/collections/todos'], function (TodoView, Todos) {
	describe('TodoView', function () {
		var title = 'Todo title';
		var todo, view; 
			
		describe('initialize', function () {
			beforeEach(function () {
				Todos.create({
							title: title,
							order: 1,
							completed: false});

				todo = Todos.at(0);

				view = new TodoView({ model: todo });
			});

			afterEach(function () {
				Todos.reset();
			});
/*			runs( function () {
				require(], function (TodoView) {
	
				});
			});

			waitsFor(function() {
				return view;
			});

*/	
			describe('default', function () {
				it('it should have a element', function () {
					expect(view.el).toBeDefined();
				});
			});

			describe('before render', function () {
				it('the element should be empty', function () {
					expect(view.$el.html()).toBe('');
				});
			});

			describe('before toogle', function () {
				it('completed should be false', function () {
					view.render();

					expect(todo.get('completed')).toBe(false);
				});
			});

			describe('after render', function () {
				it('the element should no be empty', function () {
					var el = view.render().el;
					expect(view.$el.html()).not.toBe('');
				});
			});

			describe('after test', function () {
				it('dem', function () {

				});
			});

			describe('after toogle', function () {
				spyOn(view, "toggleCompleted");

				view.render();
			

				view.delegateEvents();

				
				it('completed should be true', function () {
					runs(function () {
						var toggle = view.$('.toggle');
				
						toggle.click();
					});

					expect(todo.get('completed')).toBeTruthy();
						// expect(view.toggleCompleted).toHaveBeenCalled();
					//});
				});
			});
		});
	});
});


