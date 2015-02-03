Template.postPage.helpers({
  ready: function() {
    return Router.current().postSub.ready();
  },
  comments: function() {
    return Comments.find({postId: this._id});
  }
});