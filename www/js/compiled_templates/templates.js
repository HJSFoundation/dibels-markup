this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["buttonClear"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical button--clear\">\n\n<img class=\"icon-clear "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + "\" src=\"img/icons/icon-clear.png\">\n\n  <span class=\"icon-text__title\">clear</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonCloseStory"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<img class=\"icon-close--overlay icon-close\" src=\"img/icons/icon-close-white.png\">\n";
},"useData":true});
this["App"]["templates"]["buttonEndSession"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical button--manage "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + "\">\n  <img class=\"icon-end-session\" src=\"img/icons/icon-end-session.png\">\n  <span class=\"icon-text__title\">End Session</span>\n</button>\n\n";
},"useData":true});
this["App"]["templates"]["buttonFlip"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + " button--flip\">\n  <img src=\"img/icons/icon-flip.png\" alt=\"\" class=\"icon-flip\">\n  <span class=\"icon-text__title\">Flip</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonLearning"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-circle icon-learning "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + "\"></span>\n  <span class=\"icon-text__title\">learning</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonLetters"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical button--letters "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + "\">\n  <img class=\"icon-letters\" src=\"img/icons/icon-letters.png\">\n  <img class=\"icon-letters-filled st-hidden\" src=\"img/icons/icon-letters-filled.png\">\n  <span class=\"icon-text__title\">Letters</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonMastered"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-circle icon-mastered "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + "\"></span>\n  <span class=\"icon-text__title\">mastered</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonMatrixClose"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<img class=\"icon-close-matrix\" src=\"img/icons/icon-close-matrix.png\">\n";
},"useData":true});
this["App"]["templates"]["buttonMatrixOpen"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<img class=\"icon-matrix-open\" src=\"img/icons/icon-matrix-open.png\">\n";
},"useData":true});
this["App"]["templates"]["buttonMatrixReadingStageDown"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<span class=\"js-buttonMatrixReadingStageDown\">\n  <img src=\"img/icons/icon-triangle-down.png\" class=\"icon-triangle-down\">\n</span>\n";
},"useData":true});
this["App"]["templates"]["buttonMatrixReadingStageNumber"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<span class=\""
    + alias3(((helper = (helper = helpers.changedStageStateClass || (depth0 != null ? depth0.changedStageStateClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"changedStageStateClass","hash":{},"data":data}) : helper)))
    + "\" >RS "
    + alias3(((helper = (helper = helpers.readingStage || (depth0 != null ? depth0.readingStage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"readingStage","hash":{},"data":data}) : helper)))
    + " </span>\n";
},"useData":true});
this["App"]["templates"]["buttonMatrixReadingStageUp"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<span class=\"js-buttonMatrixReadingStageUp\">\n  <img src=\"img/icons/icon-triangle-up.png\" class=\"icon-triangle-up\">\n</span>\n";
},"useData":true});
this["App"]["templates"]["buttonNeedsWork"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical\">\n  <span class=\"icon icon-circle icon-needs-work "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + "\"></span>\n  <span class=\"icon-text__title\">needs work</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonPhrases"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + " button--phrases\">\n  <img class=\"icon-phrases\" src=\"img/icons/icon-phrases.png\">\n  <img class=\"icon-phrases-filled st-hidden\" src=\"img/icons/icon-phrases-filled.png\">\n  <span class=\"icon-text__title\">Phrases</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonTiles"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical button--tiles "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + "\">\n  <img class=\"icon-tiles\" src=\"img/icons/icon-tiles.png\">\n  <img class=\"icon-tiles-filled st-hidden\" src=\"img/icons/icon-tiles-filled.png\">\n  <span class=\"icon-text__title\">Tiles</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonTimer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<button class=\"icon-text--vertical button--timer js-buttonTimer\">\n  <img class=\"icon-timer "
    + alias3(((helper = (helper = helpers.unfilledClass || (depth0 != null ? depth0.unfilledClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"unfilledClass","hash":{},"data":data}) : helper)))
    + "\" src=\"img/icons/icon-timer.png\">\n  <img class=\"icon-timer-filled "
    + alias3(((helper = (helper = helpers.filledClass || (depth0 != null ? depth0.filledClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"filledClass","hash":{},"data":data}) : helper)))
    + "\" src=\"img/icons/icon-timer-filled.png\">\n  <span class=\"icon-text__title\">timer</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonWhiteboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical button--whiteboard "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + "\">\n  <img src=\"img/icons/icon-whiteboard.png\" alt=\"\" class=\"icon-whiteboard\">\n  <img class=\"icon-whiteboard-filled st-hidden\" src=\"img/icons/icon-whiteboard-filled.png\">\n  <span class=\"icon-text__title\">Whiteboard</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["buttonWords"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical button--words "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + "\">\n  <img class=\"icon-words\" src=\"img/icons/icon-words.png\">\n  <img class=\"icon-words-filled st-hidden\" src=\"img/icons/icon-words-filled.png\">\n  <span class=\"icon-text__title\">Words</span>\n</button>\n";
},"useData":true});
this["App"]["templates"]["conferenceGroup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <td class=\"js-studentGroup session-cell--group\">\n  <img src=\"img/icons/icon-student-group.png\" alt=\"\" class=\"icon-student-group\">\n  </td>\n  <td class=\"session-cell--name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n  <td class=\"session-cell--na\">n/a</td>\n  <td class=\"session-cell--na\">n/a</td>\n  <td class=\"session-cell--na\">n/a</td>\n  <td width=\"10\" class=\"session-cell--spacer\"></td>\n  <td class=\"session-cell--na\">n/a</td>\n  <td>"
    + alias3(((helper = (helper = helpers.daysSinceLastSession || (depth0 != null ? depth0.daysSinceLastSession : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"daysSinceLastSession","hash":{},"data":data}) : helper)))
    + "</td>\n  <td class=\"session-cell--na\">n/a</td>\n\n  <td class=\"session-cell--desired js-editNumberPerWeek\">\n    <select type=\"number\" id=\"numberPerWeekSelect\">\n      <option value=\"0\">0</option>\n      <option value=\"1\">1</option>\n      <option value=\"2\">2</option>\n      <option value=\"3\">3</option>\n      <option value=\"4\">4</option>\n      <option value=\"5\">5</option>\n    </select>\n  </td>\n\n  <td class=\"session-cell--start js-startSession\" colspan=\"2\">start session</td>\n\n\n\n\n";
},"useData":true});
this["App"]["templates"]["conferenceGroupDropdown"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <td colspan=\"4\">"
    + alias2(alias1((depth0 != null ? depth0.shortName : depth0), depth0))
    + " • RS"
    + alias2(alias1((depth0 != null ? depth0.readingStage : depth0), depth0))
    + "</td>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <td colspan=\"12\">\n    <table class=\"student-choice\" cellspacing=\"0\">\n    <tr>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.students : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tr>\n  </table>\n  </td>\n";
},"useData":true});
this["App"]["templates"]["conferenceManagement"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container\">\n  <header class=\"header--main-nav grid grid--center\">\n    <button class=\"button--drawer-toggle js-menuToggle\">\n      <img src=\"img/icons/icon-menu-toggle.png\" alt=\"\" class=\"icon-menu-toggle\">\n    </button>\n    <nav class=\"nav--main grid grid--center grid-cell u-text-center js-mainNav st-show\">\n      <div class=\"nav--main__manage grid-cell\">\n        <a href=\"#\" class=\"js-manageButton\">manage students</a>\n      </div>\n      <div class=\"nav--main__logout grid-cell\">\n        <a href=\"#\" class=\"js-logout\">log out</a>\n      </div>\n    </nav>\n    <span class=\"nav--main__logo grid-cell\">teacher<span>notepad</span></span>\n  </header>\n  <div class=\"table__wrapper__header\">\n    <table class=\"management__table management__table__header\">\n      <colspan>\n        <col class=\"table-column table-column-1\">\n        <col class=\"table-column table-column-4\">\n        <col class=\"table-column\">\n        <col class=\"table-column\">\n        <col class=\"table-column\">\n        <col width=\"10\">\n        <col class=\"table-column\">\n        <col class=\"table-column\">\n        <col class=\"table-column\">\n        <col class=\"table-column\">\n        <col class=\"table-column table-column-4\">\n      </colspan>\n\n      <thead>\n        <th colspan=\"2\" class=\"session-cell--name\">sessions</th>\n        <th>reading stage</th>\n        <th>growth</th>\n        <th>practice station score</th>\n        <th width=\"10\" class=\"session-cell--spacer\"></th>\n        <th>days on current reading stage</th>\n        <th>days since last session</th>\n        <th>days since last fluency assessment</th>\n        <th>desired sessions per week</th>\n        <th class=\"js-manageButton session-cell--manage\" colspan=\"2\">manage students</th>\n      </thead>\n    </table>\n  </div>\n\n  <div class=\"table__wrapper\">\n    <table class=\"management__table js-management-table\" cellspacing=\"0\">\n      <colspan>\n        <col class=\"table-column table-column-1\">\n        <col class=\"table-column table-column-4\">\n        <col class=\"table-column\">\n        <col class=\"table-column\">\n        <col class=\"table-column\">\n        <col width=\"10\">\n        <col class=\"table-column\">\n        <col class=\"table-column\">\n        <col class=\"table-column\">\n        <col class=\"table-column\">\n        <col class=\"table-column table-column-4\">\n      </colspan>\n      <tbody>\n\n      </tbody>\n    </table>\n  </div>\n</div>\n\n  <script>\n    $(\"td:contains('n/a')\").addClass(\"session-cell--na\");\n  </script>\n\n\n\n";
},"useData":true});
this["App"]["templates"]["conferenceManagementSingle"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container container--overlay \">\n<div class=\"container--management\">\n    <div class=\"overlay__menu\">\n\n      <a href=\"#\" class=\"menu--tab menu--tab--edit-student grid grid--center js-cancelAddStudent\" style=\"left: "
    + this.escapeExpression((helpers.math || (depth0 && depth0.math) || helpers.helperMissing).call(depth0,170.5,"*",(depth0 != null ? depth0.tab_position : depth0),{"name":"math","hash":{},"data":data}))
    + "px\">\n        <span class=\"menu__title\">cancel</span>\n        <span class=\"menu__icon\">\n          <img src=\"img/icons/icon-close-white.png\" alt=\"\" class=\"icon-close\">\n        </span>\n      </a>\n\n    </div>\n\n      <div class=\"table__wrapper__header table__wrapper__header--student\">\n        <table class=\"management__table management__table__header\">\n          <colspan>\n           <col class=\"table-column table-column-1\">\n           <col class=\"table-column table-column-4\">\n           <col class=\"table-column\">\n           <col class=\"table-column\">\n           <col class=\"table-column\">\n           <col width=\"10\">\n           <col class=\"table-column\">\n           <col class=\"table-column\">\n           <col class=\"table-column\">\n           <col class=\"table-column\">\n           <col class=\"table-column table-column-4\">\n          </colspan>\n\n          <thead>\n           <td colspan=\"2\" class=\"session-cell--name\">students</td>\n           <td >reading stage</td>\n           <td>growth</td>\n           <td>practice station score</td>\n           <td width=\"10\" class=\"session-cell--spacer\"></td>\n           <td>days on current reading stage</td>\n           <td>days since last session</td>\n           <td>days since last fluency assignment</td>\n           <td>desired sessions per week</td>\n           <td colspan=\"2\" class=\"session-cell--manage js-cancelAddStudent\">cancel</td>\n          </thead>\n        </table>\n      </div>\n\n      <div class=\"table__wrapper table__wrapper--student\">\n      <table class=\"management__table\" cellspacing=\"0\">\n        <colspan>\n         <col class=\"table-column table-column-1\">\n         <col class=\"table-column table-column-4\">\n         <col class=\"table-column\">\n         <col class=\"table-column\">\n         <col class=\"table-column\">\n         <col width=\"10\">\n         <col class=\"table-column\">\n         <col class=\"table-column\">\n         <col class=\"table-column\">\n         <col class=\"table-column\">\n         <col class=\"table-column table-column-4\">\n        </colspan>\n\n        <tbody>\n        </tbody>\n      </table>\n      </div>\n  </div>\n</div>\n\n";
},"useData":true});
this["App"]["templates"]["conferenceStudent"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <td>\n  <img src=\"img/icons/icon-student.png\" alt=\"\" class=\"icon-student\">\n  </td>\n  <td class=\"session-cell--name\">"
    + alias3(((helper = (helper = helpers.shortName || (depth0 != null ? depth0.shortName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"shortName","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + alias3(((helper = (helper = helpers.readingStage || (depth0 != null ? depth0.readingStage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"readingStage","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + alias3(((helper = (helper = helpers.readingStageGrowth || (depth0 != null ? depth0.readingStageGrowth : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"readingStageGrowth","hash":{},"data":data}) : helper)))
    + "</td>\n  <td class=\"session-cell--na\">n/a</td>\n  <td class=\"session-cell--spacer\"></td>\n  <td>"
    + alias3(((helper = (helper = helpers.daysOnCurrentReadingStage || (depth0 != null ? depth0.daysOnCurrentReadingStage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"daysOnCurrentReadingStage","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>"
    + alias3(((helper = (helper = helpers.daysSinceLastSession || (depth0 != null ? depth0.daysSinceLastSession : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"daysSinceLastSession","hash":{},"data":data}) : helper)))
    + "</td>\n  <td>n/a</td>\n  <td class=\"session-cell--desired js-editNumberPerWeek\">\n    <select type=\"number\" id=\"numberPerWeekSelect\">\n      <option value=\"0\">0</option>\n      <option value=\"1\">1</option>\n      <option value=\"2\">2</option>\n      <option value=\"3\">3</option>\n      <option value=\"4\">4</option>\n      <option value=\"5\">5</option>\n    </select>\n  </td>\n\n  <td class=\"session-cell--start session-cell--start--student js-startSession\" colspan=\"2\">start session</td>\n";
},"useData":true});
this["App"]["templates"]["conferenceStudentSingle"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td>\n<img src=\"img/icons/icon-student.png\" alt=\"\" class=\"icon-student\">\n</td>\n<td class=\"session-cell--name\">"
    + alias3(((helper = (helper = helpers.shortName || (depth0 != null ? depth0.shortName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"shortName","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.readingStage || (depth0 != null ? depth0.readingStage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"readingStage","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.readingStageGrowth || (depth0 != null ? depth0.readingStageGrowth : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"readingStageGrowth","hash":{},"data":data}) : helper)))
    + "</td>\n<td class=\"session-cell--na\">n/a</td>\n<td width=\"10\" class=\"session-cell--spacer\"></td>\n<td>"
    + alias3(((helper = (helper = helpers.daysOnCurrentReadingStage || (depth0 != null ? depth0.daysOnCurrentReadingStage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"daysOnCurrentReadingStage","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.daysSinceLastSession || (depth0 != null ? depth0.daysSinceLastSession : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"daysSinceLastSession","hash":{},"data":data}) : helper)))
    + "</td>\n<td>n/a</td>\n<td class=\"session-cell--desired\">"
    + alias3(((helper = (helper = helpers.numberPerWeek || (depth0 != null ? depth0.numberPerWeek : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"numberPerWeek","hash":{},"data":data}) : helper)))
    + "</td>\n<td class=\"session-cell--start session-cell--start--student js-addStudent\" colspan=\"4\">\n  add student</td>\n";
},"useData":true});
this["App"]["templates"]["deviceSelect"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "  <div class=\"container login device-select\">\n    <div class=\"stage stage--device-select\">\n      <h1 class=\"device-select__title\">Log this device in as:</h1>\n      <div class=\"stage__content grid grid--center\">\n        <button class=\"icon-text--vertical device-select__option js-teacherDevice\" >\n          <svg id=\"selectTeacher\" xmlns=\"http://www.w3.org/2000/svg\" class=\"select--teacher\" viewBox=\"0 141.8 612 508.6\"><path fill=\"#D9D9D9\" d=\"M245.3 222.7c21.5 0 39 17.5 39 39s-17.5 39-39 39-39-17.5-39-39c0-21.6 17.5-39 39-39m137.8 76.5c-3 0-6.9 1.5-11.8 5.9-10.9 9.6-32.1 19.5-49.4 19.5-6.4 0-12.3-1.3-17-4.5-14.4-9.7-20.9-10.5-22.6-10.5h-72s-42.4 7.1-42.4 49.7 53.9 42.6 58.7 42.6c1.1 0 3.1.1 5.5.1 8.8 0 23.7-1.4 23.7-14.1 0-14-16.6-14.9-25.2-14.9h-7.2c-9.8 0-30.9-1-30.9-15.7 0-5.9 3.8-10.7 9.9-14.3v20.3c5.9 5 19.5 5.9 23.3 5.9l4.8-25.2 47.2 7.3-13.4 73-47.4-8.4 1.9-9.9c-4.2-.2-9.9-.8-16.4-1.9v169.6c0 12 9.8 22 22 22 12 0 22-9.8 22-22v-129c.2-1.3 1.1-2.3 2.5-2.3 1.3 0 2.5 1 2.5 2.3v128.9c0 12 9.8 22 22 22 12 0 22-9.8 22-22V346.5c2.5.8 5.2 1.3 7.6 1.9 5.7 1.3 11.5 2 17.4 2 19.4 0 39.4-6.9 58.4-18 24.7-14.5 12.6-27.3 12.6-27.3s-2.3-5.9-8.3-5.9m113-36.3c.8 0 1.6-.2 2.6-.6 2.7-1.5 6.9-3.3 11.7-3.3 5.7 0 10.5 2.5 10.5 9.9v1.3h-2.3c-12.6 0-32.9 2.7-32.9 19.1 0 10.1 8.2 16.8 18.5 16.8 12.2 0 17.6-10.5 17.6-10.5h.2s-.2 1-.2 2.5v2.3c0 3.1 1.5 4.6 4.6 4.6h3.8c3.1 0 4.6-1.5 4.6-4.6V270c0-14.1-8.8-22.4-23.3-22.4-8.4 0-14.7 2.7-18.4 4.6-2.7 1.3-3.1 3.6-1.7 6.1l1.1 1.9c.9 1.9 2.1 2.7 3.6 2.7m-77.8 42.4h5.2c2.7 0 4.4-1.1 5.2-3.8l5.4-16.3h27.5l5.5 16.3c.8 2.7 2.5 3.8 5.2 3.8h5.2c3.4 0 4.8-2.1 3.4-5.4l-24.5-69.2c-.8-2.7-2.5-3.8-5.2-3.8h-7.1c-2.7 0-4.2 1.3-5.2 3.8l-24.5 69.2c-.9 3.3.5 5.4 3.9 5.4m193.7-118v171.1H341.7v-2.5c13.8-2.7 27.5-7.6 41.3-15.9 27-16.1 22.9-31.7 20.1-36.1 0 0-6-15.3-18.1-15.3-3.7 0-7.9 1.4-12.7 5.2-8 6.5-18.2 15.1-30.6 18.9V187.3H612m-95 91.8c-7 0-17.6 1.5-17.6 9.4 0 3.8 2.9 7.5 8.4 7.5 7.8 0 12.8-8 12.8-14.7v-2.1h-2.3c-.4-.1-.9-.1-1.3-.1m-69-38.6h-.2s-1.7 7.6-3.1 12l-7.1 21h20.5l-6.9-20.8c-1.3-4.4-3.2-12.2-3.2-12.2m44.9 138.2v.2-.2M254.3 141.8c40.3 0 78.6 9.4 112.4 26.2h-39.6c-22.9-7.3-47.4-11.3-72.8-11.3-132.3 0-239.6 106.9-239.6 239.2 0 132.3 107.3 239.4 239.4 239.4 132.3 0 239.4-107.3 239.4-239.4 0-5.7-.2-11.3-.6-17H508c.4 5.7.6 11.5.6 17.2 0 140.5-113.8 254.3-254.3 254.3S0 536.6 0 396.1s113.8-254.3 254.3-254.3\"/></svg>\n          <span class=\"icon-text__title\">teacher</span>\n        </button>\n        <button class=\"icon-text--vertical device-select__option js-studentDevice\">\n          <svg id=\"selectStudent\" class=\"select--student\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 90 612 612\"><path fill=\"none\" d=\"M314.2 221.3c26.8 0 48.5 21.7 48.5 48.5s-21.7 48.5-48.5 48.5-48.5-21.7-48.5-48.5 21.7-48.5 48.5-48.5zm-70 109.1h139.9v96.2H244.2v-96.2zm22.3 79.3c-11.4 3.4-19.2 14.4-26-12.5L182 196.7c-3-10.3 3.8-21.3 15.2-24.5 11.4-3.4 23.2 2.3 26 12.5l58.5 200.7c3 10-3.8 21.1-15.2 24.3zm179 37.6H179.2c-3.2 0-5.7-2.5-5.7-5.7v-2.3c0-3.2 2.5-5.7 5.7-5.7h266.3c3.2 0 5.7 2.5 5.7 5.7v2.3c0 3.1-2.5 5.7-5.7 5.7zM207 610V439.1c0-3.2 2.5-5.7 5.7-5.7h2.3c3.2 0 5.7 2.5 5.7 5.7V610c0 3.2-2.5 5.7-5.7 5.7h-2.3c-3.1 0-5.7-2.6-5.7-5.7zm199.9 0V439.1c0-3.2 2.5-5.7 5.7-5.7h2.3c3.2 0 5.7 2.5 5.7 5.7V610c0 3.2-2.5 5.7-5.7 5.7h-2.3c-3.2 0-5.7-2.6-5.7-5.7zM284 621.8h-10.3c-13.7 0-24.9-11.2-24.9-24.9V478.7c0-13.7 11.2-24.9 24.9-24.9H284c13.7 0 24.9 11.2 24.9 24.9v118.2c.1 13.7-11.1 24.9-24.9 24.9zm71.6 0h-10.3c-13.7 0-24.9-11.2-24.9-24.9V478.7c0-13.7 11.2-24.9 24.9-24.9h10.3c13.7 0 24.9 11.2 24.9 24.9v118.2c0 13.7-11.2 24.9-24.9 24.9zm66.5-221l-5.9 4.4c-7.8 5.9-19.2 4.4-25.1-3.4l-29.8-39.5c-5.9-7.8-4.4-19.2 3.4-25.1l5.9-4.4c7.8-5.9 19.2-4.4 25.1 3.4l29.8 39.5c6.1 7.9 4.4 19.2-3.4 25.1zm-64.6 27.1l-4.4-5.9c-5.9-7.8-4.4-19.2 3.4-25.1l39.5-29.8c7.8-5.9 19.2-4.4 25.1 3.4l4.4 5.9c5.9 7.8 4.4 19.2-3.4 25.1l-39.5 29.8c-8 5.9-19.2 4.4-25.1-3.4zm17.1-59.8l1.3.8 7.8 4.8 1.3.8.8-1.3 1.5-2.7.8-1.3c.4-.8.2-1.7-.6-2.1l-7.8-4.8c-.8-.4-1.7-.2-2.1.6l-.8 1.3-1.5 2.7-.7 1.2zM352.5 404l20.2-32.9 10.5 6.5-20.2 32.8-10.5-6.4zm-2 3.2l-1.9 13.9c0 .6.2.8.8.4l11.6-8-10.5-6.3zM306 90C137 90 0 227 0 396s137 306 306 306 306-136.8 306-306S475.2 90 306 90zm0 594.1c-159.1 0-288.1-129-288.1-288.1s129-288.1 288.1-288.1 288.1 129 288.1 288.1-129 288.1-288.1 288.1z\"/></svg>\n          <span class=\"icon-text__title\">student</span>\n        </button>\n      </div>\n      <footer class=\"footer--login\">\n      </footer>\n    </div>\n  </div>";
},"useData":true});
this["App"]["templates"]["editStudent"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"edit-student container container--overlay animated slideInUp\">\n  <div class=\"overlay__menu\">\n\n\n    <a href=\"#\" class=\"menu--tab menu--tab--edit-student grid grid--center js-exitEditStudent\" style=\"left: "
    + alias2((helpers.math || (depth0 && depth0.math) || alias1).call(depth0,170.5,"*",(depth0 != null ? depth0.tab_position : depth0),{"name":"math","hash":{},"data":data}))
    + "px\">\n      <span class=\"menu__title\">"
    + alias2(((helper = (helper = helpers.student_shortname || (depth0 != null ? depth0.student_shortname : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"student_shortname","hash":{},"data":data}) : helper)))
    + "</span>\n      <span class=\"menu__icon\">\n        <img src=\"img/icons/icon-close-white.png\" alt=\"\" class=\"icon-close\">\n      </span>\n    </a>\n  </div>\n\n  <div class=\"stage stage--edit\">\n    <menu class=\"stage--edit__menu\">\n      <div class=\"menu--tabs menu--tabs--edit u-text-center grid u-text-center\">\n        <a href=\"#\" class=\"menu--tab grid-cell\" id=\"js-editReadingStage\">Reading Stage</a>\n        <a href=\"#\" class=\"menu--tab grid-cell\" id=\"js-editNotes\">Notes</a>\n        <button class=\"button grid-cell button--close-student-edit js-exitEditStudent\">Done</button>\n      </div>\n\n    </menu>\n    <div class=\"js-editContainer\"></div>\n  </div>\n</div>\n";
},"useData":true});
this["App"]["templates"]["editStudentNote"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<h4>\n  <span id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"edit-notes__time\">"
    + alias2(alias1((depth0 != null ? depth0.updatedDate : depth0), depth0))
    + "</span>\n</h4>\n<p>"
    + alias2(alias1((depth0 != null ? depth0.shortContent : depth0), depth0))
    + "</p>\n";
},"useData":true});
this["App"]["templates"]["editStudentNotes"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"stage--edit__content grid js-editStudentNotes\">\n  <article class=\"stage--edit__notes grid-cell u-3of4 js-editStudentNotesArticle\">\n  </article>\n  <aside class=\"stage--edit__archive grid-cell u-1of4 js-editStudentNotesList\">\n  </aside>\n </div>\n";
},"useData":true});
this["App"]["templates"]["editStudentNotesArticle"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<header class=\"edit-notes__header\">\n  <span class=\"edit-notes__time\">"
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span>\n</header>\n<section class=\"edit-notes__body grid\">\n <textarea>"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</textarea>\n</section>\n<section class=\"edit-notes__buttons grid\">\n  <button class=\"button--save-note grid-cell js-saveNote\">save</button>\n  <button class=\"button--cancel-note grid-cell js-cancelEdit\">cancel</button>\n  <button class=\"button--new-note grid-cell js-newNote\">new note</button>\n</section>\n \n\n";
},"useData":true});
this["App"]["templates"]["editStudentNotesList"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"edit-archive__list\">\n  <ul class=\"js-editStudentNote\">\n    \n  </ul>\n</div>\n\n\n";
},"useData":true});
this["App"]["templates"]["editStudentReadingStage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"stage--edit__content grid grid--center\">\n    <div class=\"reading-stage-setup\">\n      <div class=\"reading-stage-setup__current\">\n\n        <a href=\"#\" class=\"reading-stage__choice reading-stage__choice--large grid-cell "
    + alias3(((helper = (helper = helpers.currentReadingStageSelected || (depth0 != null ? depth0.currentReadingStageSelected : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"currentReadingStageSelected","hash":{},"data":data}) : helper)))
    + " js-currentReadingStage\"> "
    + alias3(((helper = (helper = helpers.currentReadingStage || (depth0 != null ? depth0.currentReadingStage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"currentReadingStage","hash":{},"data":data}) : helper)))
    + "</a>\n        <h3 class=\"reading-stage-setup__title\">current reading stage </h3>\n      </div>\n      <div class=\"reading-stage-setup__initial\">\n\n        <a href=\"#\" class=\"reading-stage__choice reading-stage__choice--large grid-cell "
    + alias3(((helper = (helper = helpers.initialReadingStageSelected || (depth0 != null ? depth0.initialReadingStageSelected : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"initialReadingStageSelected","hash":{},"data":data}) : helper)))
    + " js-initialReadingStage\"> "
    + alias3(((helper = (helper = helpers.initialReadingStage || (depth0 != null ? depth0.initialReadingStage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"initialReadingStage","hash":{},"data":data}) : helper)))
    + "</a>\n        <h3 class=\"reading-stage-setup__title\">initial reading stage </h3>\n      </div>\n    </div>\n\n  <div class=\"reading-stage-chooser grid grid--wrap grid--center "
    + alias3(((helper = (helper = helpers.initialClass || (depth0 != null ? depth0.initialClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"initialClass","hash":{},"data":data}) : helper)))
    + "\" >\n    <a href=\"#\" class=\"reading-stage__choice grid-cell js-readingStageChooser\">1</a>\n    <a href=\"#\" class=\"reading-stage__choice grid-cell js-readingStageChooser\">2</a>\n    <a href=\"#\" class=\"reading-stage__choice grid-cell js-readingStageChooser\">3</a>\n    <a href=\"#\" class=\"reading-stage__choice grid-cell js-readingStageChooser\">4</a>\n    <a href=\"#\" class=\"reading-stage__choice grid-cell js-readingStageChooser\">5</a>\n    <a href=\"#\" class=\"reading-stage__choice grid-cell js-readingStageChooser\">6</a>\n    <a href=\"#\" class=\"reading-stage__choice grid-cell js-readingStageChooser\">7</a>\n    <a href=\"#\" class=\"reading-stage__choice grid-cell js-readingStageChooser\">8</a>\n    <a href=\"#\" class=\"reading-stage__choice grid-cell js-readingStageChooser\">9</a>\n  </div>\n</div>\n\n\n";
},"useData":true});
this["App"]["templates"]["leveledStories"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black\">\n  <p style=\"font-size:180px;color:yellow\">Leveled Stories</p>\n</div>\n";
},"useData":true});
this["App"]["templates"]["leveledTextPage"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <div class=\"story__page\">\n          <figure class=\"story__image js-storyFlip\">\n            <img src=\"img/stories/"
    + alias2(alias1((depths[1] != null ? depths[1].storyId : depths[1]), depth0))
    + "/"
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\" alt="
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + ">\n            <figcaption class=\"story__text\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.linesArray : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </figcaption>\n          </figure>\n          <div class=\"story__text story__text--teacher js-storyTextTeacher\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.linesArray : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "\n                <span class=\"story__text__number\">"
    + alias1((helpers.math || (depth0 && depth0.math) || helpers.helperMissing).call(depth0,(data && data.index),"+",1,{"name":"math","hash":{},"data":data}))
    + ".</span>"
    + alias1(this.lambda(depth0, depth0))
    + "</br>\n";
},"4":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "                <span class=\"story__text--teacher__number\">"
    + alias1((helpers.math || (depth0 && depth0.math) || helpers.helperMissing).call(depth0,(data && data.index),"+",1,{"name":"math","hash":{},"data":data}))
    + ".</span>"
    + alias1(this.lambda(depth0, depth0))
    + "</br>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"story container\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;background-color: white\">\n  <div class=\"stage--story stage\">\n    <div class=\"stage--story__gallery\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n      <button class=\"story__flip js-storyButtonFlip\"></button>\n      <button class=\"button button--close js-storyButtonCloseStory\"></button>\n    <div class=\"js-readingStrategies\"></div>\n  </div>\n</div>";
},"useData":true,"useDepths":true});
this["App"]["templates"]["loading"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"loading-login__container container\">\n  <div class=\"loading-login__logo\">\n    <img src=\"img/login-logo.png\" alt=\"\" width=\"468\">\n  </div>\n  <div class=\"loading-login__header\">\n    <progress id=\"progress-bar\" value=\"0\" max=\""
    + this.escapeExpression(((helper = (helper = helpers.maxValue || (depth0 != null ? depth0.maxValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"maxValue","hash":{},"data":data}) : helper)))
    + "\"></progress>\n\n  </div>\n  <div class=\"loading-login__footer\">\n      <div class=\"loading-login__title\">LOADING</div>\n    </div>\n</div>\n";
},"useData":true});
this["App"]["templates"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"loginContainer\" class=\"loading-login__container container\">\n  <div class=\"loading-login__logo\">\n    <img src=\"img/login-logo.png\" alt=\"\" width=\"468\">\n  </div>\n  <div class=\"loading-login__header\">\n  <h2 class=\"login__error js-login-error\">Incorrect username/password</h2>\n  <div class=\"grid\">\n    <input class=\"login__field login__field--email grid-cell u-1of2\" type=\"email\" name=\"email\" id=\"email-field\" placeholder=\"Email\">\n    <input class=\"login__field login__field--password grid-cell u-1of2\" type=\"password\" name=\"password\" id=\"password-field\" placeholder=\"Password\">\n  </div>\n  </div>\n  <div class=\"loading-login__footer\">\n    <input class=\"loading-login__title button--login\" type=\"button\" value=\"Log In\" id=\"submit\">\n    <input type=\"button\" class=\"button loading-login__forgot\" value=\"Forgot Password\" id=\"reset\">\n  </div>\n</div>\n\n";
},"useData":true});
this["App"]["templates"]["magnet"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"js-magnet whiteboard__magnet\" style=\"position:absolute; left: "
    + alias3(((helper = (helper = helpers.left || (depth0 != null ? depth0.left : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"left","hash":{},"data":data}) : helper)))
    + "px; top: "
    + alias3(((helper = (helper = helpers.top || (depth0 != null ? depth0.top : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"top","hash":{},"data":data}) : helper)))
    + "px;\">\n  <span class=\"magnet__text js-magnetText "
    + alias3(((helper = (helper = helpers.flipped || (depth0 != null ? depth0.flipped : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"flipped","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</span>\n  <a class=\"js-magnetClose magnet__remove\">\n    <img class=\"icon-remove\" src=\"img/icons/icon-remove.png\">\n  </a>\n</div>\n";
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

  return "<span class=\"menu__title\">"
    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"useData":true});
this["App"]["templates"]["matrixStudentSelector"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"menu--tabs menu--tabs--student-selector grid u-text-center js-matrixStudentSelectorTabs\">\n</div>\n";
},"useData":true});
this["App"]["templates"]["matrixStudentSelectorTab"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<span class=\"menu__number\">"
    + alias3(((helper = (helper = helpers.reading_stage || (depth0 != null ? depth0.reading_stage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"reading_stage","hash":{},"data":data}) : helper)))
    + "</span>\n<span class=\"menu__title\">"
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</span>\n<span class=\"menu__icon\">\n  <img class=\"icon-edit js-editStudentButton\" src=\"img/icons/icon-edit.png\">\n</span>\n\n";
},"useData":true});
this["App"]["templates"]["menuActivity"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "  <div class=\"js-buttonLetters\"></div>\n  <div class=\"js-buttonWords\"></div>\n  <div class=\"js-buttonPhrases\"></div>\n  <div class=\"js-buttonTiles\"></div>\n  <div class=\"js-buttonWhiteboard\"></div>\n  <div class=\"button--matrix-toggle button--matrix-toggle--open js-buttonMatrixOpen\"></div>\n\n";
},"useData":true});
this["App"]["templates"]["menuAssessment"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "  <div class=\"grid-cell js-buttonMastered\"></div>\n  <div class=\"grid-cell js-buttonLearning\"></div>\n  <div class=\"grid-cell js-buttonNeedsWork\"></div>\n  <div class=\"grid-cell js-buttonClear\"></div>\n";
},"useData":true});
this["App"]["templates"]["navMain"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<button class=\"button--drawer-toggle js-menuToggle\">\n  <img src=\"img/icons/icon-menu-toggle.png\" alt=\"\" class=\"icon-menu-toggle\">\n  </button>\n<nav class=\"nav--main grid grid--center u-text-center js-mainNav\">\n  <div class=\"nav--main__manage grid-cell\">\n    <a href=\"#\" class=\"js-manageButton\">manage students</a>\n  </div>\n  <div class=\"nav--main__logout grid-cell\">\n    <a href=\"#\" class=\"js-logout\">log out</a>\n  </div>\n\n\n</nav>\n";
},"useData":true});
this["App"]["templates"]["readingStrategies"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"matrix matrix--reading-strategies js-matrixReadingStrategies "
    + alias3(((helper = (helper = helpers.stateClass || (depth0 != null ? depth0.stateClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stateClass","hash":{},"data":data}) : helper)))
    + "\">\n  <section>\n    <button class=\"button button--reading-strategies-toggle js-readingStrategiesToggle\">"
    + alias3(((helper = (helper = helpers.stateText || (depth0 != null ? depth0.stateText : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stateText","hash":{},"data":data}) : helper)))
    + " reading strategies</button>\n    <div class=\"stimuli-tiles stimuli-tiles--reading-strategies\">\n      <div class=\"grid grid--wrap u-text-center js-stimuliTilesReadingStrategies\">\n      </div>\n    </div>\n  </section>\n  <nav class=\"menu--assessment menu--assessment--story grid js-menuAssessment\"></nav>\n</div>";
},"useData":true});
this["App"]["templates"]["roster"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container container--overlay\">\n      <thead>\n        <td colspan=\"2\" class=\"session-cell--name\">students</td>\n        <td >reading stage</td>\n        <td>growth</td>\n        <td>practice station score</td>\n        <td width=\"10\" class=\"session-cell--spacer\"></td>\n        <td>days on current reading stage</td>\n        <td>days since last session</td>\n        <td>days since last fluency assignment</td>\n        <td>desired sessions per week</td>\n        <td colspan=\"3\"></td>\n      </thead>\n\n      <tbody>\n        <tr class=\"student-row\">\n          <td class=\"js-studentGroup\"><svg class=\"icon-student\"><use xlink:href=\"#icon-student\"></use></svg></td>\n          <td class=\"session-cell--name\">Billy B.</td>\n          <td>n/a</td>\n          <td>n/a</td>\n          <td>n/a</td>\n          <td width=\"10\" class=\"session-cell--spacer\"></td>\n          <td>3</td>\n          <td>n/a</td>\n          <td>4</td>\n          <td class=\"session-cell--desired\">5</td>\n          <td class=\"session-cell--start session-cell--start--student\" colspan=\"3\">\n            <svg class=\"icon-add\"><use xlink:href=\"#icon-add\"></use></svg>\n            add student</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";
},"useData":true});
this["App"]["templates"]["stage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "  <div class=\"stage__stimulus grid-cell js-stageStimulus\"></div>\n  <div class=\"stage__menu stage__menu--left grid\">\n    <div class=\"js-stageButtonFlip\"></div>\n    <div class=\"js-stageButtonTimer\"></div>\n    <div class=\"js-timer0\"></div>\n    <div class=\"js-timer1\"></div>\n  </div>\n  <nav class=\"menu--assessment menu--assessment--stage grid grid--bottom u-text-center js-menuAssessment\">\n  </nav>\n  <div class=\"stage__menu stage__menu--right grid js-menuActivity\"></div>\n  <div class=\"js-stageButtonManage\"></div>\n  <div class=\"js-stageButtonEndSession\"></div>\n";
},"useData":true});
this["App"]["templates"]["stageStimulusLetters"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"stimulus stimulus--letters animated slideInRight\">\n  <div class=\"stimulus-cell grid grid--center\">\n    <span>"
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\n    <img src=\"img/letterWords/"
    + alias3(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"img","hash":{},"data":data}) : helper)))
    + ".png\" alt=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">\n  </div>\n</div>\n\n\n";
},"useData":true});
this["App"]["templates"]["stageStimulusOnsetRimesWords"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "    <div class=\"stimulus-cell grid grid--center\">\n      <span>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</span>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"stimulus stimulus--words stimulus__gallery js-flickity-gallery animated slideInRight\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.words : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
this["App"]["templates"]["stageStimulusPhrases"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "    <div class=\"stimulus-cell grid grid--center\">\n      <span class=\"js-fittext\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</span>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"stimulus stimulus--phrases stimulus__gallery js-flickity-gallery animated slideInRight\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.phrases : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n";
},"useData":true});
this["App"]["templates"]["stageStimulusSightWordsWords"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"stimulus stimulus--words stimulus__gallery animated slideInRight\">\n  <div class=\"stimulus-cell\">\n    <span>"
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\n  </div>\n</div>";
},"useData":true});
this["App"]["templates"]["stageStimulusTiles"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "        <li class=\"tile-choice\">"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"stimulus stimulus--tiles "
    + alias3(((helper = (helper = helpers.subSkillClass || (depth0 != null ? depth0.subSkillClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"subSkillClass","hash":{},"data":data}) : helper)))
    + " grid grid--center\">\n\n <div class=\"stimulus--onsets-rimes grid-cell grid grid--space-between grid--center\">\n    <div class=\"stimulus__tile-column stimulus__tile-column--onset grid-cell u-no-scrollbar\">\n      <ul class=\"grid grid--column\">\n        <li class=\"grid-cell\">"
    + alias3(((helper = (helper = helpers.onset || (depth0 != null ? depth0.onset : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"onset","hash":{},"data":data}) : helper)))
    + "</li>\n      </ul>\n    </div>\n\n    <div class=\"stimulus__tile-column stimulus__tile-column--rime grid-cell u-no-scrollbar\">\n      <ul class=\"grid grid--column\">\n        <li class=\"grid-cell\">"
    + alias3(((helper = (helper = helpers.rime || (depth0 != null ? depth0.rime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rime","hash":{},"data":data}) : helper)))
    + "</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"stimulus--tile-choices grid-cell grid grid--column grid--center\">\n    <ul class=\"stimulus--tile-choices__wrapper js-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.choices : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n</div>\n\n";
},"useData":true});
this["App"]["templates"]["stageStimulusWords"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"stimulus stimulus--words stimulus__gallery animated slideInRight\">\n  <div class=\"stimulus-cell\">\n    <span>"
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\n  </div>\n  \n</div>";
},"useData":true});
this["App"]["templates"]["stageStoryPage"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <div class=\"story__page\">\n          <figure class=\"story__image js-storyFlip\">\n            <img src=\"img/stories/"
    + alias2(alias1((depths[1] != null ? depths[1].storyId : depths[1]), depth0))
    + "/"
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\" alt="
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + ">\n            <figcaption class=\"story__text\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.linesArray : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </figcaption>\n          </figure>\n          <div class=\"story__text story__text--teacher js-storyTextTeacher\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.linesArray : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n        </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "\n                <span class=\"story__text__number\">"
    + alias1((helpers.math || (depth0 && depth0.math) || helpers.helperMissing).call(depth0,(data && data.index),"+",1,{"name":"math","hash":{},"data":data}))
    + ".</span>"
    + alias1(this.lambda(depth0, depth0))
    + "</br>\n";
},"4":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "                <span class=\"story__text--teacher__number\">"
    + alias1((helpers.math || (depth0 && depth0.math) || helpers.helperMissing).call(depth0,(data && data.index),"+",1,{"name":"math","hash":{},"data":data}))
    + ".</span>"
    + alias1(this.lambda(depth0, depth0))
    + "</br>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"story container\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;background-color: white\">\n  <div class=\"stage--story stage\">\n    <div class=\"stage--story__gallery\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <button class=\"story__flip js-storyButtonFlip\"></button>\n    <button class=\"button button--close js-storyButtonCloseStory\"></button>\n    <div class=\"js-readingStrategies\"></div>\n  </div>\n</div>";
},"useData":true,"useDepths":true});
this["App"]["templates"]["stimuliTilesLetters"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<section class=\"matrix__stimuli matrix__stimuli--letters grid\">\n  <div class=\"stimuli-tiles stimuli-tiles--letters\">\n    <div class=\"grid grid--wrap u-text-center "
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
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<figure class=\"story__image js-storyFlip\">\n  <img src=\"img/\"+"
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "+\".jpg\" alt="
    + alias3(((helper = (helper = helpers.dentist || (depth0 != null ? depth0.dentist : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dentist","hash":{},"data":data}) : helper)))
    + ">\n  <figcaption class=\"story__text\">"
    + alias3(((helper = (helper = helpers.lines || (depth0 != null ? depth0.lines : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lines","hash":{},"data":data}) : helper)))
    + "</figcaption>\n</figure>\n<div class=\"story__text story__text--teacher js-storyTextTeacher\">\n  "
    + alias3(((helper = (helper = helpers.lines || (depth0 != null ? depth0.lines : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lines","hash":{},"data":data}) : helper)))
    + "\n</div>";
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
    return "<div class=\"workspace\">\n  <header class=\"header--main-nav grid js-navMain\"></header>\n  <div class=\"stage grid grid--center stage--workspace js-stage\"></div>\n  <div class=\"js-matrix\"></div>\n  <div class=\"js-overlay\"></div>\n</div>\n";
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
this["App"]["templates"]["timer"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "              <option value=\""
    + alias2(alias1((depth0 != null ? depth0.value : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.display : depth0), depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"timer animated fadeIn\" style="
    + alias3(((helper = (helper = helpers.visible || (depth0 != null ? depth0.visible : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"visible","hash":{},"data":data}) : helper)))
    + ">\n  <div class=\"timer__controls grid grid--center\" style=\""
    + alias3(((helper = (helper = helpers.bottomValue || (depth0 != null ? depth0.bottomValue : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"bottomValue","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"timer__progress grid-cell u-1of2\">\n        <span>\n          <select type=\"number\" id=\""
    + alias3(((helper = (helper = helpers.minutesId || (depth0 != null ? depth0.minutesId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"minutesId","hash":{},"data":data}) : helper)))
    + "\" class=\"timer__time timer__time--seconds\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.minutes : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </select>\n          <span class=\"timer__colon\">:</span>\n          <select type=\"number\" id=\""
    + alias3(((helper = (helper = helpers.secondsId || (depth0 != null ? depth0.secondsId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"secondsId","hash":{},"data":data}) : helper)))
    + "\" class=\"timer__time timer__time--seconds\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.seconds : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </select>\n        </span>\n      </div>\n      <button class=\"button button--warning grid-cell u-1of2\" id=\""
    + alias3(((helper = (helper = helpers.buttonId || (depth0 != null ? depth0.buttonId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"buttonId","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.action || (depth0 != null ? depth0.action : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"action","hash":{},"data":data}) : helper)))
    + "</button>\n  </div>\n</div>\n";
},"useData":true});
this["App"]["templates"]["whiteboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<input type=\"text\" name=\"magnetInput\" class=\"whiteboard__input\" placeholder=\"Type a word or word part and press enter\" width=\"500px\">\n<div class=\"stage--whiteboard js-whiteboard\" style=\"position: relative;\"></div>\n\n";
},"useData":true});