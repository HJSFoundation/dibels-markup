App.Views.Loading = Backbone.View.extend({
  template: App.templates.loading,

  initialize: function() {
    _.bindAll(this);
    this.setMaxValue(0);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
  },

  templateJSON: function() {
    return {
      maxValue: this.maxValue
    };
  },

  setMaxValue: function(value) {
    this.maxValue = value;
  },

  updateValue: function(value) {
    var progressbar = $('#progress-bar');
    progressbar.val(value);
  },

  removeView: function() {
    this.$el.empty();
    return false;
  }
});
