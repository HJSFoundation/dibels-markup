this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["_partial"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"partial\">\n  <p>"
    + this.escapeExpression((helpers.patial || (depth0 && depth0.patial) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.text : depth0),{"name":"patial","hash":{},"data":data}))
    + "</p>\n</div>\n";
},"useData":true});
this["App"]["templates"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"example\" class=\"\">\n  <p>"
    + this.escapeExpression(((helper = (helper = helpers['paragraph-text'] || (depth0 != null ? depth0['paragraph-text'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"paragraph-text","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n";
},"useData":true});
this["App"]["templates"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"loginContainer\">\n  <p>email</p>\n  <input type=\"text\" name=\"email\" id=\"email-field\">\n  <p>password:</p>\n  <input type=\"password\" name=\"password\" id=\"password-field\">\n  <br />\n  <input type=\"button\" value=\"Submit\" id=\"submit\">\n</div>\n";
},"useData":true});