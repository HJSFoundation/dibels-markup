this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["_button"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"button button--primary\">Eat Me</button>\n";
},"useData":true});
this["App"]["templates"]["_buttonStop"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"button--warning button--stop\">stop</button>\n";
},"useData":true});
this["App"]["templates"]["_menu-horizontal"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
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
},"useData":true});
this["App"]["templates"]["_menuTabs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"menu--tabs grid u-text-center\">\n"
    + ((stack1 = this.invokePartial(partials.tab,depth0,{"name":"tab","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tab,depth0,{"name":"tab","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  <a href=\"\" class=\"menu--tab grid-cell is-active\">\n    <span>something</span>\n  </a>\n"
    + ((stack1 = this.invokePartial(partials.tab,depth0,{"name":"tab","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.tab,depth0,{"name":"tab","data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});
this["App"]["templates"]["assessments"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black\">\n  <p style=\"font-size:180px;color:yellow\">Assessments</p>\n</div>\n";
},"useData":true});
this["App"]["templates"]["assignments"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black\">\n  <p style=\"font-size:180px;color:yellow\">Assignments</p>\n</div>\n";
},"useData":true});
this["App"]["templates"]["buttonClear"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-forbidden\"></span>\n  <span class=\"icon-text__title\">clear</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonDrawerToggle"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"button button--drawer-toggle js-drawer-toggle\">\n  <span class=\"icon icon-menu-toggle\"></span>\n</button>";
},"useData":true});
this["App"]["templates"]["buttonFlip"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<button class=\"icon-text--vertical "
    + alias3(((helper = (helper = helpers.cssClass || (depth0 != null ? depth0.cssClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cssClass","hash":{},"data":data}) : helper)))
    + "\">\n  <span class=\"icon icon-flip\"></span>\n  <span class=\"icon-text__title\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonLearning"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-circle icon-learning\"></span>\n  <span class=\"icon-text__title\">learning</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonMastered"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-circle icon-mastered\"></span>\n  <span class=\"icon-text__title\">mastered</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonMatrixToggle"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<span class=\"icon icon-triangle-down\"></span>\n";
},"useData":true});
this["App"]["templates"]["buttonNeedsWork"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-circle icon-needs-work\"></span>\n  <span class=\"icon-text__title\">needs work</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonPhrases"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-phrases\"></span>\n  <span class=\"icon-text__title\">Phrases</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonTiles"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-tiles\"></span>\n  <span class=\"icon-text__title\">Tiles</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonTimer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-timer\"></span>\n  <span class=\"icon-text__title\">timer</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonWords"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-words\"></span>\n  <span class=\"icon-text__title\">Words</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["drawer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"drawer js-drawer st-closed\">\n  <header class=\"drawer__header grid grid--center\">\n    <h1 class=\"drawer__title\">MENU</h1>\n    <button class=\"button button--drawer-toggle js-drawer-toggle st-open\"><span class=\"icon icon-menu-toggle\"></span></button>\n  </header>\n    <nav class=\"menu--vertical\">\n    <div class=\"icon-text--horizontal js-reading-stage\">\n      <span class=\"icon icon-reading\"></span>\n      <span class=\"icon-text__title\">Reading Stage</span>\n    </div>\n    <div class=\"icon-text--horizontal js-assessments\">\n      <span class=\"icon icon-assessments\"></span>\n      <span class=\"icon-text__title\">Assessments</span>\n    </div>\n    <div class=\"icon-text--horizontal js-assignments\">\n      <span class=\"icon icon-assignments\"></span>\n      <span class=\"icon-text__title\">Assignments</span>\n    </div>\n    <div class=\"icon-text--horizontal js-whiteboard\">\n      <span class=\"icon icon-whiteboard\"></span>\n      <span class=\"icon-text__title\">Whiteboard</span>\n    </div>\n    <div class=\"icon-text--horizontal js-leveled-stories\">\n      <span class=\"icon icon-stories\"></span>\n      <span class=\"icon-text__title\">Leveled Stories</span>\n    </div>\n  </nav>\n</div>\n\n";
},"useData":true});
this["App"]["templates"]["leveledStories"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black\">\n  <p style=\"font-size:180px;color:yellow\">Leveled Stories</p>\n</div>\n";
},"useData":true});
this["App"]["templates"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"loginContainer\">\n  <p>email</p>\n  <input type=\"text\" name=\"email\" id=\"email-field\">\n  <p>password:</p>\n  <input type=\"password\" name=\"password\" id=\"password-field\">\n  <br />\n  <input type=\"button\" value=\"Submit\" id=\"submit\">\n  <input type=\"button\" value=\"Forgot Password\" id=\"reset\">\n</div>\n";
},"useData":true});
this["App"]["templates"]["matrix"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"matrix\">\n  <nav class=\"matrix__menu\">\n    <div class=\"js-matrixMenu\"></div>\n  </nav>\n <div class=\"js-stimuliTiles\"></div>\n <nav class=\"matrix__student-selector\">\n    <div class=\"js-matrixStudentSelector\"></div>\n  </nav>\n</div>\n\n\n";
},"useData":true});
this["App"]["templates"]["matrixMenu"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"menu--tabs grid u-text-center "
    + this.escapeExpression(((helper = (helper = helpers.jsClass || (depth0 != null ? depth0.jsClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"jsClass","hash":{},"data":data}) : helper)))
    + "\"> \n  <!-- <div class='js-lettersTab'></div>\n  <div class='js-sightWordsTab'></div>\n  <div class='js-onsetRimesTab'></div>\n  <div class='js-affixesTab'></div>\n  <div class='js-storiesTab'></div>\n -->  \n <div class='js-buttonMatrixToggle'></div>\n</div> ";
},"useData":true});
this["App"]["templates"]["matrixStudentSelector"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"menu--tabs menu--tabs--student-selector grid u-text-center js-matrixStudentSelectorTabs\">\n</div>\n";
},"useData":true});
this["App"]["templates"]["matrixStudentSelectorTab"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<span class=\"menu--number\">"
    + alias3(((helper = (helper = helpers.readingStage || (depth0 != null ? depth0.readingStage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"readingStage","hash":{},"data":data}) : helper)))
    + "</span>\n<span class=\"menu--title\">"
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</span>\n<span class=\"icon icon-edit\"></span>\n";
},"useData":true});
this["App"]["templates"]["menuActivity"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "  <div class=\"js-buttonWords\"></div>\n  <div class=\"js-buttonPhrases\"></div>\n  <div class=\"js-buttonTiles\"></div>\n\n";
},"useData":true});
this["App"]["templates"]["menuAssessment"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<nav class=\"menu--assessment menu--assessment--stage grid grid--bottom\">\n  <div class=\"js-buttonMastered\"></div>\n  <div class=\"js-buttonLearning\"></div>\n  <div class=\"js-buttonNeedsWork\"></div>\n  <div class=\"js-buttonClear\"></div>\n</nav>\n";
},"useData":true});
this["App"]["templates"]["readingStage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black\">\n  <p style=\"font-size:180px;color:yellow\">Reading Stage</p>\n</div>";
},"useData":true});
this["App"]["templates"]["stage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "  <div class=\"js-buttonDrawerToggle\"></div>\n  <div class=\"js-stageDrawer\"></div>\n  <div class=\"js-stageStimulus\"></div>\n  <div class=\"stage__menu stage__menu--left grid\">\n    <div class=\"js-stageButtonFlip\"></div>\n    <div class=\"js-stageButtonTimer\"></div>\n  </div>\n  <div class=\"js-menuAssessment\"></div>\n  <div class=\"stage__menu stage__menu--right grid js-menuActivity\"></div>\n";
},"useData":true});
this["App"]["templates"]["stageStimulusLetters"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"stage__stimulus stage__stimulus--letters animated slideInRight "
    + alias3(((helper = (helper = helpers.flipState || (depth0 != null ? depth0.flipState : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"flipState","hash":{},"data":data}) : helper)))
    + "\">\n  <span>"
    + alias3(((helper = (helper = helpers.stimulus || (depth0 != null ? depth0.stimulus : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stimulus","hash":{},"data":data}) : helper)))
    + "</span>\n  <img src=\"img/apple.svg\" alt=\"apple\">\n</div>";
},"useData":true});
this["App"]["templates"]["stageStimulusPhrases"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"stage__stimulus stage__stimulus--phrases animated slideInRight\">\n  <span>The ball is red.</span>\n</div>";
},"useData":true});
this["App"]["templates"]["stageStimulusWords"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"stage__stimulus stage__stimulus--words animated slideInRight\">\n  <span>"
    + this.escapeExpression(((helper = (helper = helpers.stimulus || (depth0 != null ? depth0.stimulus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"stimulus","hash":{},"data":data}) : helper)))
    + "</span>\n</div>";
},"useData":true});
this["App"]["templates"]["stimuliTilesLetters"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<section class=\"matrix__stimuli matrix__stimuli--letters grid st-active\">\n  <div class=\"stimuli-tiles stimuli-tiles--letters\">\n    <div class=\"grid grid--wrap u-text-center "
    + this.escapeExpression(((helper = (helper = helpers.jsClass || (depth0 != null ? depth0.jsClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"jsClass","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n  </div>\n</section>";
},"useData":true});
this["App"]["templates"]["stimuliTilesOnsetRime"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<section class=\"matrix__stimuli matrix__stimuli--stories grid\">\n  <div class=\"grid-cell stimuli-tiles stimuli-tiles stimuli-tiles--onsets u-1of3\">\n    <div class=\"grid grid--wrap u-text-center "
    + alias3(((helper = (helper = helpers.jsClassOnset || (depth0 != null ? depth0.jsClassOnset : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jsClassOnset","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n  </div>\n  <div class=\"stimuli-tiles stimuli-tiles--rimes grid-cell u-2of3\">\n    <div class=\"grid grid--wrap u-text-center "
    + alias3(((helper = (helper = helpers.jsClassRime || (depth0 != null ? depth0.jsClassRime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jsClassRime","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n  </div>\n</section>";
},"useData":true});
this["App"]["templates"]["stimuliTilesSightWords"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<section class=\"matrix__stimuli matrix__stimuli--words grid st-active\">\n  <div class=\"stimuli-tiles stimuli-tiles--words\">\n    <div class=\"grid grid--wrap u-text-center "
    + this.escapeExpression(((helper = (helper = helpers.jsClass || (depth0 != null ? depth0.jsClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"jsClass","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n  </div>\n</section>";
},"useData":true});
this["App"]["templates"]["stimuliTilesStories"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<section class=\"matrix__stimuli matrix__stimuli--stories grid\">\n  <div class=\"grid-cell grid-cell--center stimuli-tiles--stories__title u-1of3\">\n    <div class=\"grid u-text-center\">\n      <p class=\"grid-cell\">Words I Know Stories</p>\n    </div>\n  </div>\n  <div class=\"stimuli-tiles stimuli-tiles--stories__tiles grid-cell u-2of3\">\n    <div class=\"grid grid--wrap u-text-center "
    + this.escapeExpression(((helper = (helper = helpers.jsClass || (depth0 != null ? depth0.jsClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"jsClass","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n  </div>\n</section>";
},"useData":true});
this["App"]["templates"]["storyImage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"story__image u-text-center\">\n  <img src=\"img/dentist1.jpg\" alt=\"dentist\">\n</div>";
},"useData":true});
this["App"]["templates"]["storyPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"story\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;background-color: white\">\n  <div class=\"js-storyImage\"></div>\n  <footer class=\"story__footer\">\n    <div class=\"story__text story__text--footer js-storyTextFooter\">\n      Here is a bunch of text for the story.\n    </div>\n    <nav class=\"menu--assessment menu--assessment--story grid\">\n    <div class=\"js-storyMenuAssessment\">\n    </nav>\n    <div class=\"js-storyButtonFlip\"></div>\n  </footer>\n</div>";
},"useData":true});
this["App"]["templates"]["tab"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<span class=\"menu__label "
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"useData":true});
this["App"]["templates"]["teacherWorkspace"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"workspace\">\n  <div class=\"stage stage--workspace js-stage\"></div>\n  <div class=\"js-matrix\"></div>\n  <div class=\"js-drawerOverlay\"></div>\n  <div class=\"js-storyOverlay\"></div>\n</div>\n";
},"useData":true});
this["App"]["templates"]["tile"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<!-- <div class=\"tile grid-cell u-text-center\"> -->\n  <a href=\"#\" class=\"tile__title\">"
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + alias3(((helper = (helper = helpers.stimulus || (depth0 != null ? depth0.stimulus : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stimulus","hash":{},"data":data}) : helper)))
    + "</a>\n<!-- </div> -->\n";
},"useData":true});
this["App"]["templates"]["whiteboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black\">\n  <p style=\"font-size:180px;color:yellow\">Whiteboard</p>\n</div>\n";
},"useData":true});