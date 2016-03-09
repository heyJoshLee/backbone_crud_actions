var PostsView = Backbone.View.extend({
  model: posts,
  el: $("#posts"),

  initialize: function() {
  this.model.on("add", this.render, this);
  this.model.on("remove", this.render, this);
  this.model.on("change", this.render, this);
   this.render();
  },

  render: function() {
    console.log("rendering PostsView")
    var self = this;
    this.$el.html("");

    _.each(this.model.toArray(), function(post) {
      console.log("render me")
      self.$el.append((new PostView({model: post})).render().$el);
    });
    return this;
  }
});