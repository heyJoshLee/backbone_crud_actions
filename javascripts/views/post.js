var PostView = Backbone.View.extend({
  tagName: "li",
  model: new Post(),
  $form: $("#add_form"),

  edit_template: _.template($("#edit_template").html() ),

  events: {
    "click .delete": "delete",
    "click .edit": "edit",
    "click .confirm": "update"
  },

  delete: function() {
    console.log("delete");
    this.model.destroy();
  },

  edit: function(){
    console.log("edit");
    console.log(this.model.toJSON());
    this.$el.html(this.edit_template(this.model.toJSON()));
  },

  update: function() {
    var title = $("#edit-title").val();
    var author = $("#edit-author").val();

    this.model.set({
      "title": title,
      "author": author
    });
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  initialize: function() {
    this.template = _.template($("#post_template").html()),

    this.render();
  }

});