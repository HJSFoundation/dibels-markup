App.Views.MatrixMenu = Backbone.View.extend({

  template: App.templates.matrixMenu,

  gridClass: "js-matrixMenuTabs",
  tabClassName: "menu--tab grid-cell",
  tabTag: "a",
  labels: [
    "LETTER NAMES & SOUNDS",
    "SIGHT WORDS",
    "ONSETS & RIMES",
    "AFFIXES",
    "STORIES"
  ],

 
  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function(){

    this.$el.html(this.template(this.templateJSON()));
    this.$gridClass = $("."+this.gridClass);
    var that = this;
    _.each(this.labels, function(label){
      var view = new App.Views.MatrixMenuTab({tagName: that.tabTag, className: that.tabClassName, label: label}); 
      that.$gridClass.append(view.render().el);
    });

    var view = new App.Views.ButtonMatrixToggle({el: ".js-buttonMatrixToggle"});
    that.$gridClass.append(view.render().el);

  },

  templateJSON: function() {
    return {
      jsClass: this.gridClass
    };
  }

});