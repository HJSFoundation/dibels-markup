App.Views.MatrixStudentSelector = Backbone.View.extend({
  template: App.templates.matrixStudentSelector,

  gridClass: "js-matrixStudentSelectorTabs",
  tabClassName: "menu--tab grid-cell",
  tabTag: "a",
  tabs:{},

  initialize: function() {
    _.bindAll(this);
    this.render();
    this.listen();
  },

  listen: function (){
    this.listenTo(App.Dispatcher, "matrixStudentSelectorTabActiveRequest", this.handleMatrixStudentSelectorTabActiveRequest);
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    this.$gridClass = $("." + this.gridClass);
    var that = this;
    App.students.each(function(student){
      var view = that.tabs[student.id] = (new App.Views.MatrixStudentSelectorTab({tagName: that.tabTag, className: that.tabClassName, model: student}));
      that.$gridClass.append(view.render().el);
    });
  },

  templateJSON: function() {
    return {
      jsClass: this.gridClass
    };
  },

  handleMatrixStudentSelectorTabActiveRequest: function(selectedTab){
    var that = this;
    _.each(this.tabs, function(tab){
      if(selectedTab.id === tab.id) {
        selectedTab.makeActive();
        // App.Dispatcher.trigger("StudentChangeRequested");
      } else {
        that.tabs[tab.id].makeInactive();
      }
    });
  }

});
