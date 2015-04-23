App.Views.MatrixStudentSelector = Backbone.View.extend({
  template: App.templates.matrixStudentSelector,

  tabs:{},

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.listen();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "matrixStudentSelectorTabActiveRequest", this.handleMatrixStudentSelectorTabActiveRequest);
  },

  render: function() {
    this.$el.html(this.template());
    var that = this;
    App.students.each(function(student) {
      var view = that.tabs[student.id] = new App.Views.MatrixStudentSelectorTab({ model: student});
      $('.js-matrixStudentSelectorTabs').append(view.render().el);
    });

    var nonStudentTabCount = App.Config.maxStudentCount - App.students.length;
    for(; nonStudentTabCount > 0 ; nonStudentTabCount--){
      var view = new App.Views.MatrixNonStudentSelectorTab();
      $('.js-matrixStudentSelectorTabs').append(view.render().el);
    }
  },

  handleMatrixStudentSelectorTabActiveRequest: function(selectedTab) {
    var that = this;
    _.each(this.tabs, function(tab) {
      if (selectedTab.id === tab.id) {
        selectedTab.makeActive();
      } else {
        that.tabs[tab.id].makeInactive();
      }
    });
  }
});
