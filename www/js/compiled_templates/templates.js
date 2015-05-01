this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["_button"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"button button--primary\">Eat Me</button>\n";
},"useData":true});
this["App"]["templates"]["_buttonStop"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"button--warning button--stop\">stop</button>\n";
},"useData":true});
this["App"]["templates"]["assessments"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black\">\n  <p style=\"font-size:180px;color:yellow\">Assessments</p>\n</div>\n";
},"useData":true});
this["App"]["templates"]["assignments"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black\">\n  <p style=\"font-size:180px;color:yellow\">Assignments</p>\n</div>\n";
},"useData":true});
this["App"]["templates"]["buttonClear"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-clear icon-circle "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + "\"></span>\n  <span class=\"icon-text__title\">clear</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonDrawerToggle"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"button button--drawer-toggle js-drawer-toggle\">\n  <span class=\"icon icon-menu-toggle\"></span>\n</button>";
},"useData":true});
this["App"]["templates"]["buttonFlip"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-flip\"></span>\n  <span class=\"icon-text__title\">Flip</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonLearning"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-circle icon-learning "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + "\"></span>\n  <span class=\"icon-text__title\">learning</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonLetters"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-words\"></span>\n  <span class=\"icon-text__title\">Letters</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonManage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-assignments\"></span>\n  <span class=\"icon-text__title\">Manage</span>\n</button>";
},"useData":true});
this["App"]["templates"]["buttonMastered"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-circle icon-mastered "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + "\"></span>\n  <span class=\"icon-text__title\">mastered</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonMatrixClose"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<span class=\"icon icon-triangle-down\"></span>\n<!-- \n<button class=\"icon-text--vertical js-matrix-toggle st-hidden\">\n  <span class=\"icon icon-close-matrix \"></span>\n</button>\n -->";
},"useData":true});
this["App"]["templates"]["buttonMatrixOpen"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<span class=\"icon icon-triangle-up\"></span>\n\n<!-- <button class=\"icon-text--vertical js-matrix-toggle st-hidden\">\n  <span class=\"icon icon-close-matrix \"></span>\n</button> -->";
},"useData":true});
this["App"]["templates"]["buttonNeedsWork"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-circle icon-needs-work "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + "\"></span>\n  <span class=\"icon-text__title\">needs work</span>\n</button>\n";
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
this["App"]["templates"]["buttonWhiteboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-whiteboard\"></span>\n  <span class=\"icon-text__title\">Whiteboard</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonWords"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-words\"></span>\n  <span class=\"icon-text__title\">Words</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["deviceSelect"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "  <div class=\"container device-select\">\n    <div class=\"stage stage--device-select\">\n      <h1 class=\"device-select__title\">Log this device in as:</h1>\n      <div class=\"stage__content grid grid--center\">\n        <button class=\"icon-text--vertical device-select__option js-teacherDevice\" >\n          <img class=\"select--teacher\" src=\"/img/login-teacher.svg\" alt=\"\">\n          <span class=\"icon-text__title\">teacher</span>\n        </button>\n        <button class=\"icon-text--vertical device-select__option js-studentDevice\">\n          <img class=\"select--student\" src=\"/img/login-student.svg\" alt=\"\">\n          <span class=\"icon-text__title\">student</span>\n        </button>\n      </div>\n      <footer class=\"footer--login\">\n      </footer>\n    </div>\n  </div>";
},"useData":true});
this["App"]["templates"]["drawer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"drawer js-drawer st-closed\">\n  <header class=\"drawer__header grid grid--center\">\n    <h1 class=\"drawer__title\">MENU</h1>\n    <button class=\"button button--drawer-toggle js-drawer-toggle st-open\"><span class=\"icon icon-menu-toggle\"></span></button>\n  </header>\n    <nav class=\"menu--vertical\">\n    <div class=\"icon-text--horizontal js-reading-stage\">\n      <span class=\"icon icon-reading\"></span>\n      <span class=\"icon-text__title\">Reading Stage</span>\n    </div>\n    <div class=\"icon-text--horizontal js-assessments\">\n      <span class=\"icon icon-assessments\"></span>\n      <span class=\"icon-text__title\">Assessments</span>\n    </div>\n    <div class=\"icon-text--horizontal js-assignments\">\n      <span class=\"icon icon-assignments\"></span>\n      <span class=\"icon-text__title\">Assignments</span>\n    </div>\n    <div class=\"icon-text--horizontal js-whiteboard\">\n      <span class=\"icon icon-whiteboard\"></span>\n      <span class=\"icon-text__title\">Whiteboard</span>\n    </div>\n    <div class=\"icon-text--horizontal js-leveled-stories\">\n      <span class=\"icon icon-stories\"></span>\n      <span class=\"icon-text__title\">Leveled Stories</span>\n    </div>\n  </nav>\n</div>\n\n";
},"useData":true});
this["App"]["templates"]["editStudent"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"edit-student\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:1.0;background:white\">\n  <a href=\"#\" class=\"menu--tab menu--tab--edit-student\">\n    <span class=\"menu--number\">3</span>\n    <span class=\"menu--title\">Bobby B.</span>\n    <span class=\"menu__icon icon icon-edit\"></span>\n  </a>\n  <div class=\"stage stage--edit\">\n    <menu class=\"stage--edit__menu grid grid--center\">\n      <h2 class=\"stage--edit__title grid-cell\">notes</h2>\n      <div class=\"reading-stage-chooser grid-cell\">\n        <div class=\"grid grid--center\">\n          <h3 class=\"reading-stage__title grid-cell\">reading stage</h3>\n          <a href=\"#\" class=\"reading-stage__choice grid-cell\">1</a>\n          <a href=\"#\" class=\"reading-stage__choice grid-cell\">2</a>\n          <a href=\"#\" class=\"reading-stage__choice grid-cell\">3</a>\n          <a href=\"#\" class=\"reading-stage__choice grid-cell\">4</a>\n          <a href=\"#\" class=\"reading-stage__choice grid-cell\">5</a>\n          <a href=\"#\" class=\"reading-stage__choice grid-cell\">6</a>\n          <a href=\"#\" class=\"reading-stage__choice grid-cell\">7</a>\n          <a href=\"#\" class=\"reading-stage__choice grid-cell\">8</a>\n          <a href=\"#\" class=\"reading-stage__choice grid-cell\">9</a>\n          <a href=\"#\" class=\"reading-stage-chooser__button button button--primary grid-cell\">save</a>\n        </div>\n    </menu>\n    <div class=\"stage--edit__content grid\">\n      <article class=\"stage--edit__notes grid-cell u-3of4\">\n        <header class=\"edit-notes__header\">\n          <span class=\"edit-notes__time\">march 12, 2015:</span>\n          <span class=\"edit-notes__stimuli\">B |</span>\n          <span class=\"edit-notes__activity\">Onsets & Rimes</span>\n        </header>\n        <section class=\"edit-notes__body\">\n\n        </section>\n      </article>\n      <aside class=\"stage--edit__archive grid-cell u-1of4\">\n        <header class=\"edit-archive__header\">\n          PREVIOUS NOTES <span>&lt;</span>\n        </header>\n        <div class=\"edit-archive__list\">\n          <ul>\n            <li>\n              <h4>\n                <span class=\"edit-notes__time\">march 1, 2015</span>\n                <span class=\"edit-notes__stimuli\">B</span>\n                <span>|</span>\n                <span class=\"edit-notes__activity\">onsets & rimes</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class=\"edit-notes__time\">march 22, 2015</span>\n                <span class=\"edit-notes__stimuli\">ball</span>\n                <span>|</span>\n                <span class=\"edit-notes__activity\">sight words</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class=\"edit-notes__time\">march 31, 2015</span>\n                <span class=\"edit-notes__stimuli\">why</span>\n                <span>|</span>\n                <span class=\"edit-notes__activity\">onsets & rimes</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class=\"edit-notes__time\">april 1, 2015</span>\n                <span class=\"edit-notes__stimuli\">cor</span>\n                <span>|</span>\n                <span class=\"edit-notes__activity\">letters</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class=\"edit-notes__time\">april 15, 2015</span>\n                <span class=\"edit-notes__stimuli\">bo</span>\n                <span>|</span>\n                <span class=\"edit-notes__activity\">onsets & rimes</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class=\"edit-notes__time\">april 31, 2015</span>\n                <span class=\"edit-notes__stimuli\">dentist</span>\n                <span>|</span>\n                <span class=\"edit-notes__activity\">stories</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class=\"edit-notes__time\">may 1, 2015</span>\n                <span class=\"edit-notes__stimuli\">a</span>\n                <span>|</span>\n                <span class=\"edit-notes__activity\">letters</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class=\"edit-notes__time\">may 12, 2015</span>\n                <span class=\"edit-notes__stimuli\">bones</span>\n                <span>|</span>\n                <span class=\"edit-notes__activity\">stories</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class=\"edit-notes__time\">may 22, 2015</span>\n                <span class=\"edit-notes__stimuli\">gut</span>\n                <span>|</span>\n                <span class=\"edit-notes__activity\">onsets and rimes</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class=\"edit-notes__time\">june 2, 2015</span>\n                <span class=\"edit-notes__stimuli\">c</span>\n                <span>|</span>\n                <span class=\"edit-notes__activity\">letters</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class=\"edit-notes__time\">june 12, 2015</span>\n                <span class=\"edit-notes__stimuli\">whack</span>\n                <span>|</span>\n                <span class=\"edit-notes__activity\">sight words</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class=\"edit-notes__time\">june 22, 2015</span>\n                <span class=\"edit-notes__stimuli\">h</span>\n                <span>|</span>\n                <span class=\"edit-notes__activity\">letters</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class=\"edit-notes__time\">june 30, 2015</span>\n                <span class=\"edit-notes__stimuli\">e</span>\n                <span>|</span>\n                <span class=\"edit-notes__activity\">letters</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class=\"edit-notes__time\">july 3, 2015</span>\n                <span class=\"edit-notes__stimuli\">bet</span>\n                <span>|</span>\n                <span class=\"edit-notes__activity\">onsets & rimes</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n          </ul>\n        </div>\n      </aside>\n    </div>\n  </div>\n</div>";
},"useData":true});
this["App"]["templates"]["groupManagement"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black\">\n  <p style=\"font-size:180px;color:yellow\">Group Management</p>\n</div>";
},"useData":true});
this["App"]["templates"]["leveledStories"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black\">\n  <p style=\"font-size:180px;color:yellow\">Leveled Stories</p>\n</div>\n";
},"useData":true});
this["App"]["templates"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"loginContainer\" class=\"login grid grid--center grid--column\">\n  <div class=\"login__container grid grid--center grid--column\">\n    <div class=\"grid grid--center grid--column\">\n      <div class=\"login__logo\">\n      <img src=\"/img/logo-tn.svg\" alt=\"\">\n    </div>\n    <div>\n      <h2 class=\"login__error js-login-error\">Incorrect username/password</h2>\n      <input class=\"login__field login__field--email\" type=\"email\" name=\"email\" id=\"email-field\" placeholder=\"Email\">\n      <input class=\"login__field login__field--password\" type=\"password\" name=\"password\" id=\"password-field\" placeholder=\"Password\">\n      <input class=\"button button--primary login__button\" type=\"button\" value=\"Log In\" id=\"submit\">\n      <input type=\"button\" value=\"Forgot Password\" id=\"reset\">\n    </div>\n  </div>\n  <div class=\"teachermate-logo\">\n    <img src=\"/img/logo-teachermate.svg\" alt=\"\">\n  </div>\n  <footer class=\"footer--login\">\n  </footer>\n</div>\n<script>  //auto form field for development\n        $(\"#email-field\").val(\"randy-teacher@test.org\");\n        $(\"#password-field\").val(\"12345678\");\n    </script>";
},"useData":true});
this["App"]["templates"]["matrix"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"matrix\">\n  <nav class=\"matrix__menu\">\n    <div class=\"js-matrixMenu\"></div>\n  </nav>\n <div class=\"js-stimuliTiles\"></div>\n <nav class=\"matrix__student-selector\">\n    <div class=\"js-matrixStudentSelector\"></div>\n  </nav>\n</div>\n\n\n";
},"useData":true});
this["App"]["templates"]["matrixMenu"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"menu--tabs grid u-text-center "
    + this.escapeExpression(((helper = (helper = helpers.jsClass || (depth0 != null ? depth0.jsClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"jsClass","hash":{},"data":data}) : helper)))
    + "\"> \n\n</div> ";
},"useData":true});
this["App"]["templates"]["matrixNonStudentSelectorTab"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"menu--number\"></span>\n<span class=\"menu--title\">"
    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"useData":true});
this["App"]["templates"]["matrixStudentSelector"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"menu--tabs menu--tabs--student-selector grid u-text-center js-matrixStudentSelectorTabs\">\n</div>\n";
},"useData":true});
this["App"]["templates"]["matrixStudentSelectorTab"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<span class=\"menu--number\">"
    + alias3(((helper = (helper = helpers.reading_stage || (depth0 != null ? depth0.reading_stage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"reading_stage","hash":{},"data":data}) : helper)))
    + "</span>\n<span class=\"menu--title\">"
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</span>\n<span class=\"icon icon-edit\"></span>\n";
},"useData":true});
this["App"]["templates"]["menuActivity"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "  <div class=\"js-buttonLetters\"></div>\n  <div class=\"js-buttonWords\"></div>\n  <div class=\"js-buttonPhrases\"></div>\n  <div class=\"js-buttonTiles\"></div>\n  <div class=\"js-buttonWhiteboard\"></div>\n\n";
},"useData":true});
this["App"]["templates"]["menuAssessment"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<nav class=\"menu--assessment menu--assessment--stage grid grid--bottom\">\n  <div class=\"js-buttonMastered\"></div>\n  <div class=\"js-buttonLearning\"></div>\n  <div class=\"js-buttonNeedsWork\"></div>\n  <div class=\"js-buttonClear\"></div>\n</nav>\n";
},"useData":true});
this["App"]["templates"]["readingStage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black\">\n  <p style=\"font-size:180px;color:yellow\">Reading Stage</p>\n</div>";
},"useData":true});
this["App"]["templates"]["roster"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black\">\n  <p style=\"font-size:180px;color:yellow\">Roster</p>\n</div>";
},"useData":true});
this["App"]["templates"]["stage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "  <div class=\"js-buttonDrawerToggle\"></div>\n  <div class=\"js-stageDrawer\"></div>\n  <div class=\"stage__stimulus js-stageStimulus\"></div>\n  <div class=\"stage__menu stage__menu--left grid\">\n    <div class=\"js-stageButtonFlip\"></div>\n    <div class=\"js-stageButtonTimer\"></div>\n    <div class=\"js-stageButtonManage\"></div>\n  </div>\n  <div class=\"js-menuAssessment\"></div>\n  <div class=\"stage__menu stage__menu--right grid js-menuActivity\"></div>\n  <div class=\"button--matrix-toggle button--matrix-toggle--open js-buttonMatrixOpen\"></div> \n";
},"useData":true});
this["App"]["templates"]["stageStimulusLetters"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"stage__stimulus--letters stage__stimulus__gallery animated slideInRight\">\n  <div class=\"stimulus-cell\">\n    <span>a</span>\n    <img src=\"img/apple.svg\" alt=\"apple\">\n  </div>\n  <div class=\"stimulus-cell\">\n    <span>b</span>\n    <img src=\"img/apple.svg\" alt=\"apple\">\n  </div>\n  <div class=\"stimulus-cell\">\n    <span>c</span>\n    <img src=\"img/apple.svg\" alt=\"apple\">\n  </div>\n  <div class=\"stimulus-cell\">\n    <span>d</span>\n    <img src=\"img/apple.svg\" alt=\"apple\">\n  </div>\n  <div class=\"stimulus-cell\">\n    <span>e</span>\n    <img src=\"img/apple.svg\" alt=\"apple\">\n  </div>\n</div>";
},"useData":true});
this["App"]["templates"]["stageStimulusPhrases"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"stage__stimulus stage__stimulus--phrases animated slideInRight\">\n  <span>The ball is red.</span>\n</div>";
},"useData":true});
this["App"]["templates"]["stageStimulusWords"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"stage__stimulus stage__stimulus--words animated slideInRight\">\n  <span>"
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\n</div>";
},"useData":true});
this["App"]["templates"]["stimuliTilesLetters"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<section class=\"matrix__stimuli matrix__stimuli--letters grid st-active\">\n  <div class=\"stimuli-tiles stimuli-tiles--letters\">\n    <div class=\"grid grid--wrap u-text-center "
    + this.escapeExpression(((helper = (helper = helpers.jsClass || (depth0 != null ? depth0.jsClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"jsClass","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n  </div>\n</section>";
},"useData":true});
this["App"]["templates"]["stimuliTilesOnsetRimes"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<section class=\"matrix__stimuli matrix__stimuli--stories grid\">\n  <div class=\"grid-cell stimuli-tiles stimuli-tiles stimuli-tiles--onsets u-1of3\">\n    <div class=\"grid grid--wrap u-text-center "
    + alias3(((helper = (helper = helpers.jsClassOnset || (depth0 != null ? depth0.jsClassOnset : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jsClassOnset","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n  </div>\n  <div class=\"stimuli-tiles stimuli-tiles--rimes grid-cell u-2of3\">\n    <div class=\"grid grid--wrap u-text-center "
    + alias3(((helper = (helper = helpers.jsClassRime || (depth0 != null ? depth0.jsClassRime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jsClassRime","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n  </div>\n</section>";
},"useData":true});
this["App"]["templates"]["stimuliTilesSightWords"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<section class=\"matrix__stimuli matrix__stimuli--words grid\">\n  <div class=\"stimuli-tiles stimuli-tiles--words\">\n    <div class=\"grid grid--wrap u-text-center "
    + this.escapeExpression(((helper = (helper = helpers.jsClass || (depth0 != null ? depth0.jsClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"jsClass","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n  </div>\n</section>";
},"useData":true});
this["App"]["templates"]["stimuliTilesStories"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<section class=\"matrix__stimuli matrix__stimuli--stories grid\">\n <div class=\"stimuli-tiles stimuli-tiles--stories__tiles \">\n    <div class=\"grid grid--wrap u-text-center "
    + this.escapeExpression(((helper = (helper = helpers.jsClass || (depth0 != null ? depth0.jsClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"jsClass","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n  </div>\n</section>";
},"useData":true});
this["App"]["templates"]["storyImage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- \n<div class=\"story__image u-text-center\">\n  <img src=\"img/dentist1.jpg\" alt=\"dentist\">\n</div>\n\n\n -->\n<figure class=\"story__image js-storyFlip\">\n  <img src=\"img/dentist1.jpg\" alt=\"dentist\">\n  <figcaption class=\"story__text\">Here is a bunch of text for the story.</figcaption>\n</figure>\n<div class=\"story__text story__text--teacher js-storyTextTeacher\">\n  Here is a bunch of text for the story.\n</div>";
},"useData":true});
this["App"]["templates"]["storyPage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- <div class=\"story\"  style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;background-color: white\"> -->\n\n\n<div class=\"story container\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;background-color: white\">\n  <div class=\"stage--story stage\">\n    <div class=\"js-storyImage\"></div>\n    <footer class=\"story__footer\">\n      <nav class=\"menu--assessment menu--assessment--story grid\">\n        <div class=\"js-storyMenuAssessment\"></div>\n      </nav>\n      <button class=\"story__flip js-storyButtonFlip\"></button>\n    </footer>\n  </div>\n</div>\n";
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
    return "<div class=\"workspace\">\n  <div class=\"stage stage--workspace js-stage\"></div>\n  <div class=\"js-matrix\"></div>\n  <div class=\"js-overlay\"></div>\n</div>\n";
},"useData":true});
this["App"]["templates"]["tile"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a href=\"#\" class=\"tile__title  "
    + alias3(((helper = (helper = helpers.assessmentClass || (depth0 != null ? depth0.assessmentClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"assessmentClass","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + alias3(((helper = (helper = helpers.stimulusValue || (depth0 != null ? depth0.stimulusValue : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stimulusValue","hash":{},"data":data}) : helper)))
    + "</a>\n\n";
},"useData":true});
this["App"]["templates"]["whiteboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black\">\n  <p style=\"font-size:180px;color:yellow\">Whiteboard</p>\n</div>\n";
},"useData":true});