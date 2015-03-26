Handlebars.registerPartial("button", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"button button--primary\">Eat Me</button>\n";
},"useData":true}));
Handlebars.registerPartial("buttonClear", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-forbidden\"></span>\n  <span class=\"icon-text__title\">clear</span>\n</button>\n";
},"useData":true}));
Handlebars.registerPartial("buttonFlip", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-flip\"></span>\n  <span class=\"icon-text__title\">Flip</span>\n</button>\n";
},"useData":true}));
Handlebars.registerPartial("buttonLearning", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-circle icon-learning\"></span>\n  <span class=\"icon-text__title\">learning</span>\n</button>\n";
},"useData":true}));
Handlebars.registerPartial("buttonMastered", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-circle icon-mastered\"></span>\n  <span class=\"icon-text__title\">mastered</span>\n</button>\n";
},"useData":true}));
Handlebars.registerPartial("buttonNeedsWork", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-circle icon-needs-work\"></span>\n  <span class=\"icon-text__title\">needs work</span>\n</button>\n";
},"useData":true}));
Handlebars.registerPartial("buttonPhrases", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-phrases\"></span>\n  <span class=\"icon-text__title\">Phrases</span>\n</button>\n";
},"useData":true}));
Handlebars.registerPartial("buttonStop", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"button--warning button--stop\">stop</button>\n";
},"useData":true}));
Handlebars.registerPartial("buttonTiles", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-tiles\"></span>\n  <span class=\"icon-text__title\">Tiles</span>\n</button>\n";
},"useData":true}));
Handlebars.registerPartial("buttonTimer", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-timer\"></span>\n  <span class=\"icon-text__title\">timer</span>\n</button>\n";
},"useData":true}));
Handlebars.registerPartial("menu-horizontal", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <nav class=\"menu--horizontal grid grid--row\">\n    "
    + alias3(((helper = (helper = helpers['icon-text-v'] || (depth0 != null ? depth0['icon-text-v'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"icon-text-v","hash":{},"data":data}) : helper)))
    + "\n    "
    + alias3(((helper = (helper = helpers['icon-text-v'] || (depth0 != null ? depth0['icon-text-v'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"icon-text-v","hash":{},"data":data}) : helper)))
    + "\n    "
    + alias3(((helper = (helper = helpers['icon-text-v'] || (depth0 != null ? depth0['icon-text-v'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"icon-text-v","hash":{},"data":data}) : helper)))
    + "\n    "
    + alias3(((helper = (helper = helpers['icon-text-v'] || (depth0 != null ? depth0['icon-text-v'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"icon-text-v","hash":{},"data":data}) : helper)))
    + "\n  </nav>";
},"useData":true}));
Handlebars.registerPartial("menuTabs", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"menu--tabs grid u-text-center\">\n"
    + ((stack1 = this.invokePartial(partials.tab,depth0,{"name":"tab","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tab,depth0,{"name":"tab","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  <a href=\"\" class=\"menu--tab grid-cell is-active\">\n    <span>something</span>\n  </a>\n"
    + ((stack1 = this.invokePartial(partials.tab,depth0,{"name":"tab","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tab,depth0,{"name":"tab","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true}));
Handlebars.registerPartial("stimuliTiles", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"grid grid--wrap grid--fit u-text-center\">\n"
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tile,depth0,{"name":"tile","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true}));
Handlebars.registerPartial("tab", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<a href=\"\" class=\"menu--tab grid-cell\">\n  <span>tab</span>\n</a>\n";
},"useData":true}));
Handlebars.registerPartial("tile", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"tile grid-cell u-text-center\">\n  <a href=\"\" class=\"tile__title\">tile</a>\n</div>\n";
},"useData":true}));