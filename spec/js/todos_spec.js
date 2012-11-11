define(['src/widgets/todos/views/todos', 'src/widgets/todos/models/todo'], function (TodoView, Todo) {
	describe('TodoView', function () {
		var title = 'Todo title';
		var todo = new Todo({
										title: title,
										order: 1,
										completed: false});

			
		describe('initialize', function () {
/*			runs( function () {
				require(], function (TodoView) {
	
				});
			});

			waitsFor(function() {
				return view;
			});

*/	
			describe('default', function () {
				var view = new TodoView({ model: todo });

				it('it should have a element', function () {
					expect(view.el).toBeDefined();
				});
			});


			describe('before render', function () {
				var view = new TodoView({ model: todo });

				it('the element should be empty', function () {
					expect(view.$el.html()).toBe('');
				});
			});

			describe('after render', function () {
				var view = new TodoView({ model: todo });
				var el = view.render().el;

				it('the element should no be empty', function () {
					expect(view.$el.html()).toNotBe('');
				});
			});

			describe('before toogle', function () {
				var view = new TodoView({ model: todo });
				var el = view.render().el;

				it('completed should be false', function () {
						expect(todo.get('complete')).toBeFalsy();
				});
			});

			describe('after toogle', function () {
				var view = new TodoView({ model: todo });
				var el = view.render().el;

				spyOn(view, "toggleCompleted"); 

				// var toggle = view.$el.find('.toggle');
				
				//if (toggle.length) {
					// toggle.click();
				//}
				
				it("should have called the click handler", function() {
					expect(view.toggleCompleted).toHaveBeenCalled();
				});

				it('completed should be true', function () {
						expect(todo.get('complete')).toBeTruthy();
				});
			});
		});
	});
});


