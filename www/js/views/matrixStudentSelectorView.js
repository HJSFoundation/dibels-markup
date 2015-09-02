App.Views.MatrixStudentSelector = Backbone.View.extend({
  template: App.templates.matrixStudentSelector,

  tabs:{},

  initialize: function() {
    _.bindAll(this);
    this.listen();
    this.render();
  },

  listen: function() {
    this.listenTo(App.Dispatcher, "matrixStudentSelectorTabActiveRequest", this.handleMatrixStudentSelectorTabActiveRequest);
    this.listenTo(App.Dispatcher, "addStudentRequested", this.handleAddStudentRequested);
  },

  render: function() {
    this.$el.html(this.template());
    var that = this;
    App.students.each(function(student) {
      var view = that.tabs[student.get("id")] = new App.Views.MatrixStudentSelectorTab({ model: student });
      $('.js-matrixStudentSelectorTabs').append(view.render().el);
    });

    var nonStudentTabCount = App.Config.maxStudentCount - App.students.length;
    for (; nonStudentTabCount > 0; nonStudentTabCount -= 1) {
      var view = new App.Views.MatrixNonStudentSelectorTab();
      $('.js-matrixStudentSelectorTabs').append(view.render().el);
    }
    App.Dispatcher.trigger("matrixStudentSelectorTabActiveRequest",
      {
        current: this.tabs[App.selectedStudent.get("id")].model,
        previous: null
      }
    );
  },

  handleMatrixStudentSelectorTabActiveRequest: function(students) {
    var that = this;
    _.each(this.tabs, function(tab) {
      if (students.current.id === tab.user_id) {
        tab.makeActive();
      } else {
        that.tabs[tab.user_id].makeInactive();
      }
    });
  },

  handleAddStudentRequested: function() {
    _.each(this.tabs, function(tab) {
      tab.remove();
    });
    this.tabs = {};
    this.render();
  }
});
