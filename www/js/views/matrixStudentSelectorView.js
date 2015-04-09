App.Views.MatrixStudentSelector = Backbone.View.extend({
  template: App.templates.matrixStudentSelector,

  gridClass: "js-matrixStudentSelectorTabs",
  tabClassName: "menu--tab grid-cell",
  tabTag: "a",

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template(this.templateJSON()));
    this.$gridClass = $("."+this.gridClass);
    var that = this;
    App.students.each(function(student){
      var view = new App.Views.MatrixStudentSelectorTab({tagName: that.tabTag, className: that.tabClassName, model: student}); 
      that.$gridClass.append(view.render().el);
    });
  },
  templateJSON: function() {
    return {
      jsClass: this.gridClass
    };
  }
});