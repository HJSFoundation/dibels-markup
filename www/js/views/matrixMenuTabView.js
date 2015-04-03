App.Views.MatrixMenuTab = Backbone.View.extend({
  template: App.templates.tab,

  initialize: function(options) {
    this.options = options;
    _.bindAll(this);
    this.templateContext = {jsClass:this.$el.attr("class"), label:this.options.label};
    this.render();
  },

  render:  function() {
    this.$el.replaceWith(this.template(this.templateContext));
    this.setElement("a."+this.templateContext.jsClass);
  },

  makeActive: function(){
    this.templateContext.status="st-active";
    this.render();
  }

});

// App.Views.MatrixMenuTab = Backbone.View.extend({
//   template: App.templates.tab,

//   initialize: function(options) {
//     _.bindAll(this);
//     this.status = "st-inactive";
//     this.label = options.label;
//     this.render();
//   },

//   render:  function() {
//     this.$el.html(this.template(this.templateJSON()));
//   },

//   templateJSON: function() {
//     return {
//       label: this.label,
//       status: this.status
//     };
//   },

//   makeActive: function(){
//     this.status = "st-active";
//     this.render();
//   }
// });


// //display block to the a tag( possible default height &W)
