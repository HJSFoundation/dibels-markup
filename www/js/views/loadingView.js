App.Views.Loading = Backbone.View.extend({
  template: App.templates.loading,

  initialize: function() {
    _.bindAll(this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    // THE PROGRESS BAR
    var progressbar = $('#progress-bar'),
      max = progressbar.attr('max'),
      value = progressbar.val(),
      time = (1000/max)*5;

    var loading = function() {
      value += 1;
      addValue = progressbar.val(value);

      // $('.progress-value').html(value + '%');

      if (value == max) {
        clearInterval(animate);
      }
    }

    var animate = setInterval(function() {
      loading();
    }, time);
  },

  removeView: function() {
    this.$el.empty();
    return false;
  }
});
