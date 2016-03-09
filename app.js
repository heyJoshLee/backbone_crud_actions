// var Post = Backbone.Model.extend({
//   defaults: {
//     title: "Fill me in",
//     author: "John Smith"
//   }
// });


// var Posts = Backbone.Collection.extend({

// });

// var posts = new Posts();

// dummy data

  posts.add([
  fake1 = new Post({title:"my post", author: "josj"}),
  fake2 = new Post({title:"another post", author: "ruth"}),
  fake3 = new Post({title:"i like tacos", author: "sally"}),
  fake4 = new Post({title:"i like dogs", author: "dave"}),
  fake5 = new Post({title:"you likw hat", author: "john"})
  ]);

// var PostView = Backbone.View.extend({
//   tagName: "li",
//   model: new Post(),
//   $form: $("#add_form"),

//   edit_template: _.template($("#edit_template").html() ),

//   events: {
//     "click .delete": "delete",
//     "click .edit": "edit",
//     "click .confirm": "update"
//   },

//   delete: function() {
//     console.log("delete");
//     this.model.destroy();
//   },

//   edit: function(){
//     console.log("edit");
//     console.log(this.model.toJSON());
//     this.$el.html(this.edit_template(this.model.toJSON()));
//   },

//   update: function() {
//     var title = $("#edit-title").val();
//     var author = $("#edit-author").val();

//     this.model.set({
//       "title": title,
//       "author": author
//     });
//   },

//   render: function() {
//     this.$el.html(this.template(this.model.toJSON()));
//     return this;
//   },

//   initialize: function() {
//     this.template = _.template($("#post_template").html()),

//     this.render();
//   }

// });

// var PostsView = Backbone.View.extend({
//   model: posts,
//   el: $("#posts"),

//   initialize: function() {
//   this.model.on("add", this.render, this);
//   this.model.on("remove", this.render, this);
//   this.model.on("change", this.render, this);
//    this.render();
//   },

//   render: function() {
//     console.log("rendering PostsView")
//     var self = this;
//     this.$el.html("");

//     _.each(this.model.toArray(), function(post) {
//       console.log("render me")
//       self.$el.append((new PostView({model: post})).render().$el);
//     });
//     return this;
//   }
// });

// $("#add_form").on("submit", function(e){
//   e.preventDefault();
//   var title = $("#input-title").val();
//   var author = $("#input-author").val();
//   posts.add({title: title, author: author });
//   this.reset();

// });
// post_view = new PostView(); 
// posts_view = new PostsView();
