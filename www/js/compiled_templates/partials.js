Handlebars.registerPartial("partial", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"partial\">\n  <p>"
    + this.escapeExpression((helpers.patial || (depth0 && depth0.patial) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.text : depth0),{"name":"patial","hash":{},"data":data}))
    + "</p>\n</div>\n";
},"useData":true}));