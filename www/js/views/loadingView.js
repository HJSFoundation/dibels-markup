App.Views.Loading = Backbone.View.extend({
  template: App.templates.loading,

  initialize: function() {
    _.bindAll(this);
    this.setMaxValue(0);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));

    // var progressbar = $('#progress-bar'),
    //   max = progressbar.attr('max'),
    //   value = progressbar.val(),
    //   time = (1000/max)*5;

    // var loading = function() {
    //   value += 1;
    //   progressbar.val(value);

    //   if (value == max) {
    //     clearInterval(animate);
    //   }
    // }

    // var animate = setInterval(function() {
    //   loading();
    // }, time);
  },

  templateJSON: function(){
    return {
      maxValue: this.maxValue
    }
  },

  setMaxValue: function(value){
    this.maxValue = value;
  },

  updateValue: function(value){
    var progressbar = $('#progress-bar');
    progressbar.val(value);
  },

  removeView: function() {
    this.$el.empty();
    return false;
  }
});
