App.Views.MatrixStudentSelectorTab = Backbone.View.extend({
  template: App.templates.tab,

  tagName: "a",
  className: "menu--tab grid-cell",
  
  events: {
    "click": "handleClick"
  },

  initialize: function(options) {
    _.bindAll(this);
    this.label = this.model.get("firstname");
    this.id = this.model.get("id");
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
    return this;
  },

  templateJSON: function() {
    return {
      label: this.label,
      status: this.status
    };
  },

  makeActive: function(){
    this.status = "st-active";
    this.render();
  },

  makeInactive: function(){
    this.status = "";
    this.render();
  },

  handleClick: function(){
    App.Dispatcher.trigger("matrixStudentSelectorTabActiveRequest", this);
  }
});
