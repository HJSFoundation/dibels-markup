

App.Views.MatrixStudentSelector = Backbone.View.extend({
  template: App.templates.matrixStudentSelector,

  gridClass: "js-matrixStudentSelectorTabs",

  initialize: function() {
    _.bindAll(this);
    this.$gridClass = $("."+this.gridClass);
    this.render();
  },

  render:  function() {
    this.$el.html(this.template(this.templateJSON()));
    var that = this;
    App.students.each(function(student){
      var view = new App.Views.MatrixStudentSelectorTab({model: student}); 
      that.$gridClass.append(view.render().el);
    });
  },
  templateJSON: function() {
    return {
      jsClass: this.gridClass
    };
  },

});