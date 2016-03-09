$("#add_form").on("submit", function(e){
  e.preventDefault();
  var title = $("#input-title").val();
  var author = $("#input-author").val();
  posts.add({title: title, author: author });
  this.reset();

});
post_view = new PostView(); 
posts_view = new PostsView();