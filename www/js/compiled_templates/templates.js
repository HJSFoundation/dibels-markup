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
    return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-letters\"></span>\n  <span class=\"icon-text__title\">Letters</span>\n</button>\n";
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
    return "<span class=\"icon icon-close-matrix\"></span>\n<!-- \n<button class=\"icon-text--vertical js-matrix-toggle st-hidden\">\n  <span class=\"icon icon-close-matrix \"></span>\n</button>\n -->";
},"useData":true});
this["App"]["templates"]["buttonMatrixOpen"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<span class=\"icon icon-matrix-open\"></span>\n\n<!-- <button class=\"icon-text--vertical js-matrix-toggle st-hidden\">\n  <span class=\"icon icon-close-matrix \"></span>\n</button> -->";
},"useData":true});
this["App"]["templates"]["buttonMatrixStageDown"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<span class=\"icon icon-triangle-down\"></span>\n";
},"useData":true});
this["App"]["templates"]["buttonMatrixStageUp"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<span class=\"icon icon-triangle-up\"></span>\n";
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
    return "  <div class=\"container login device-select\">\n    <div class=\"stage stage--device-select\">\n      <h1 class=\"device-select__title\">Log this device in as:</h1>\n      <div class=\"stage__content grid grid--center\">\n        <button class=\"icon-text--vertical device-select__option js-teacherDevice\" >\n          <svg id=\"selectTeacher\" xmlns=\"http://www.w3.org/2000/svg\" class=\"select--teacher\" viewBox=\"0 141.8 612 508.6\"><path fill=\"#D9D9D9\" d=\"M245.3 222.7c21.5 0 39 17.5 39 39s-17.5 39-39 39-39-17.5-39-39c0-21.6 17.5-39 39-39m137.8 76.5c-3 0-6.9 1.5-11.8 5.9-10.9 9.6-32.1 19.5-49.4 19.5-6.4 0-12.3-1.3-17-4.5-14.4-9.7-20.9-10.5-22.6-10.5h-72s-42.4 7.1-42.4 49.7 53.9 42.6 58.7 42.6c1.1 0 3.1.1 5.5.1 8.8 0 23.7-1.4 23.7-14.1 0-14-16.6-14.9-25.2-14.9h-7.2c-9.8 0-30.9-1-30.9-15.7 0-5.9 3.8-10.7 9.9-14.3v20.3c5.9 5 19.5 5.9 23.3 5.9l4.8-25.2 47.2 7.3-13.4 73-47.4-8.4 1.9-9.9c-4.2-.2-9.9-.8-16.4-1.9v169.6c0 12 9.8 22 22 22 12 0 22-9.8 22-22v-129c.2-1.3 1.1-2.3 2.5-2.3 1.3 0 2.5 1 2.5 2.3v128.9c0 12 9.8 22 22 22 12 0 22-9.8 22-22V346.5c2.5.8 5.2 1.3 7.6 1.9 5.7 1.3 11.5 2 17.4 2 19.4 0 39.4-6.9 58.4-18 24.7-14.5 12.6-27.3 12.6-27.3s-2.3-5.9-8.3-5.9m113-36.3c.8 0 1.6-.2 2.6-.6 2.7-1.5 6.9-3.3 11.7-3.3 5.7 0 10.5 2.5 10.5 9.9v1.3h-2.3c-12.6 0-32.9 2.7-32.9 19.1 0 10.1 8.2 16.8 18.5 16.8 12.2 0 17.6-10.5 17.6-10.5h.2s-.2 1-.2 2.5v2.3c0 3.1 1.5 4.6 4.6 4.6h3.8c3.1 0 4.6-1.5 4.6-4.6V270c0-14.1-8.8-22.4-23.3-22.4-8.4 0-14.7 2.7-18.4 4.6-2.7 1.3-3.1 3.6-1.7 6.1l1.1 1.9c.9 1.9 2.1 2.7 3.6 2.7m-77.8 42.4h5.2c2.7 0 4.4-1.1 5.2-3.8l5.4-16.3h27.5l5.5 16.3c.8 2.7 2.5 3.8 5.2 3.8h5.2c3.4 0 4.8-2.1 3.4-5.4l-24.5-69.2c-.8-2.7-2.5-3.8-5.2-3.8h-7.1c-2.7 0-4.2 1.3-5.2 3.8l-24.5 69.2c-.9 3.3.5 5.4 3.9 5.4m193.7-118v171.1H341.7v-2.5c13.8-2.7 27.5-7.6 41.3-15.9 27-16.1 22.9-31.7 20.1-36.1 0 0-6-15.3-18.1-15.3-3.7 0-7.9 1.4-12.7 5.2-8 6.5-18.2 15.1-30.6 18.9V187.3H612m-95 91.8c-7 0-17.6 1.5-17.6 9.4 0 3.8 2.9 7.5 8.4 7.5 7.8 0 12.8-8 12.8-14.7v-2.1h-2.3c-.4-.1-.9-.1-1.3-.1m-69-38.6h-.2s-1.7 7.6-3.1 12l-7.1 21h20.5l-6.9-20.8c-1.3-4.4-3.2-12.2-3.2-12.2m44.9 138.2v.2-.2M254.3 141.8c40.3 0 78.6 9.4 112.4 26.2h-39.6c-22.9-7.3-47.4-11.3-72.8-11.3-132.3 0-239.6 106.9-239.6 239.2 0 132.3 107.3 239.4 239.4 239.4 132.3 0 239.4-107.3 239.4-239.4 0-5.7-.2-11.3-.6-17H508c.4 5.7.6 11.5.6 17.2 0 140.5-113.8 254.3-254.3 254.3S0 536.6 0 396.1s113.8-254.3 254.3-254.3\"/></svg>\n          <span class=\"icon-text__title\">teacher</span>\n        </button>\n        <button class=\"icon-text--vertical device-select__option js-studentDevice\">\n          <svg id=\"selectStudent\" class=\"select--student\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 90 612 612\"><path fill=\"none\" d=\"M314.2 221.3c26.8 0 48.5 21.7 48.5 48.5s-21.7 48.5-48.5 48.5-48.5-21.7-48.5-48.5 21.7-48.5 48.5-48.5zm-70 109.1h139.9v96.2H244.2v-96.2zm22.3 79.3c-11.4 3.4-19.2 14.4-26-12.5L182 196.7c-3-10.3 3.8-21.3 15.2-24.5 11.4-3.4 23.2 2.3 26 12.5l58.5 200.7c3 10-3.8 21.1-15.2 24.3zm179 37.6H179.2c-3.2 0-5.7-2.5-5.7-5.7v-2.3c0-3.2 2.5-5.7 5.7-5.7h266.3c3.2 0 5.7 2.5 5.7 5.7v2.3c0 3.1-2.5 5.7-5.7 5.7zM207 610V439.1c0-3.2 2.5-5.7 5.7-5.7h2.3c3.2 0 5.7 2.5 5.7 5.7V610c0 3.2-2.5 5.7-5.7 5.7h-2.3c-3.1 0-5.7-2.6-5.7-5.7zm199.9 0V439.1c0-3.2 2.5-5.7 5.7-5.7h2.3c3.2 0 5.7 2.5 5.7 5.7V610c0 3.2-2.5 5.7-5.7 5.7h-2.3c-3.2 0-5.7-2.6-5.7-5.7zM284 621.8h-10.3c-13.7 0-24.9-11.2-24.9-24.9V478.7c0-13.7 11.2-24.9 24.9-24.9H284c13.7 0 24.9 11.2 24.9 24.9v118.2c.1 13.7-11.1 24.9-24.9 24.9zm71.6 0h-10.3c-13.7 0-24.9-11.2-24.9-24.9V478.7c0-13.7 11.2-24.9 24.9-24.9h10.3c13.7 0 24.9 11.2 24.9 24.9v118.2c0 13.7-11.2 24.9-24.9 24.9zm66.5-221l-5.9 4.4c-7.8 5.9-19.2 4.4-25.1-3.4l-29.8-39.5c-5.9-7.8-4.4-19.2 3.4-25.1l5.9-4.4c7.8-5.9 19.2-4.4 25.1 3.4l29.8 39.5c6.1 7.9 4.4 19.2-3.4 25.1zm-64.6 27.1l-4.4-5.9c-5.9-7.8-4.4-19.2 3.4-25.1l39.5-29.8c7.8-5.9 19.2-4.4 25.1 3.4l4.4 5.9c5.9 7.8 4.4 19.2-3.4 25.1l-39.5 29.8c-8 5.9-19.2 4.4-25.1-3.4zm17.1-59.8l1.3.8 7.8 4.8 1.3.8.8-1.3 1.5-2.7.8-1.3c.4-.8.2-1.7-.6-2.1l-7.8-4.8c-.8-.4-1.7-.2-2.1.6l-.8 1.3-1.5 2.7-.7 1.2zM352.5 404l20.2-32.9 10.5 6.5-20.2 32.8-10.5-6.4zm-2 3.2l-1.9 13.9c0 .6.2.8.8.4l11.6-8-10.5-6.3zM306 90C137 90 0 227 0 396s137 306 306 306 306-136.8 306-306S475.2 90 306 90zm0 594.1c-159.1 0-288.1-129-288.1-288.1s129-288.1 288.1-288.1 288.1 129 288.1 288.1-129 288.1-288.1 288.1z\"/></svg>\n          <span class=\"icon-text__title\">student</span>\n        </button>\n      </div>\n      <footer class=\"footer--login\">\n      </footer>\n    </div>\n  </div>";
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
    return "<div id=\"loginContainer\" class=\"login container\">\n  <div class=\"login__container grid grid--center grid--column\">\n    <header class=\"login__header\">\n      <div class=\"login__logo\">\n      <img src=\"/img/logo-tn.svg\" alt=\"\">\n    </header>\n    <fieldset>\n      <h2 class=\"login__error js-login-error\">Incorrect username/password</h2>\n      <input class=\"login__field login__field--email\" type=\"email\" name=\"email\" id=\"email-field\" placeholder=\"Email\">\n      <input class=\"login__field login__field--password\" type=\"password\" name=\"password\" id=\"password-field\" placeholder=\"Password\">\n      <input class=\"button button--primary login__button\" type=\"button\" value=\"Log In\" id=\"submit\">\n    </fieldset>\n    <input type=\"button\" class=\"button\" value=\"Forgot Password\" id=\"reset\">\n    \n  </div>\n  <div class=\"teachermate-logo\">\n    <img src=\"/img/logo-teachermate.svg\" alt=\"\">\n  </div>\n  <footer class=\"footer--login\">\n  </footer>\n</div>\n\n\n\n\n<script>  //auto form field for development\n        $(\"#email-field\").val(\"randy-teacher@test.org\");\n        $(\"#password-field\").val(\"12345678\");\n    </script>";
},"useData":true});
this["App"]["templates"]["matrix"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"matrix\">\n  <nav class=\"matrix__menu\">\n    <div class=\"js-matrixMenu\"></div>\n  </nav>\n <div class=\"js-stimuliTiles\"></div>\n <nav class=\"matrix__student-selector\">\n    <div class=\"js-matrixStudentSelector\"></div>\n  </nav>\n</div>\n\n\n";
},"useData":true});
this["App"]["templates"]["matrixMenu"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"menu--tabs grid u-text-center "
    + this.escapeExpression(((helper = (helper = helpers.jsClass || (depth0 != null ? depth0.jsClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"jsClass","hash":{},"data":data}) : helper)))
    + "\"> \n\n</div>";
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
    return "<nav class=\"menu--assessment menu--assessment--stage grid grid--bottom u-text-center\">\n  <div class=\"js-buttonMastered grid-cell\"></div>\n  <div class=\"js-buttonLearning grid-cell\"></div>\n  <div class=\"js-buttonNeedsWork grid-cell\"></div>\n  <div class=\"js-buttonClear grid-cell\"></div>\n</nav>\n";
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
    return "<div class=\"stage__stimulus--phrases stage__stimulus__gallery animated slideInRight\">\n  <span>The ball is red.</span>\n</div>";
},"useData":true});
this["App"]["templates"]["stageStimulusWords"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"stage__stimulus--words stage__stimulus__gallery animated slideInRight\">\n  <span>"
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