this.App=this.App||{},this.App.templates=this.App.templates||{},this.App.templates._button=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<button class="button button--primary">Eat Me</button>\n'},useData:!0}),this.App.templates._buttonStop=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<button class="button--warning button--stop">stop</button>\n'},useData:!0}),this.App.templates["_menu-horizontal"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){var a,i=t.helperMissing,l="function",p=this.escapeExpression;return'  <nav class="menu--horizontal grid grid--row">\n    '+p((a=null!=(a=t["icon-text-v"]||(null!=s?s["icon-text-v"]:s))?a:i,typeof a===l?a.call(s,{name:"icon-text-v",hash:{},data:e}):a))+"\n    "+p((a=null!=(a=t["icon-text-v"]||(null!=s?s["icon-text-v"]:s))?a:i,typeof a===l?a.call(s,{name:"icon-text-v",hash:{},data:e}):a))+"\n    "+p((a=null!=(a=t["icon-text-v"]||(null!=s?s["icon-text-v"]:s))?a:i,typeof a===l?a.call(s,{name:"icon-text-v",hash:{},data:e}):a))+"\n    "+p((a=null!=(a=t["icon-text-v"]||(null!=s?s["icon-text-v"]:s))?a:i,typeof a===l?a.call(s,{name:"icon-text-v",hash:{},data:e}):a))+"\n  </nav>"},useData:!0}),this.App.templates._menuTabs=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){var a;return'<div class="menu--tabs grid u-text-center">\n'+(null!=(a=this.invokePartial(n.tab,s,{name:"tab",data:e,indent:"  ",helpers:t,partials:n}))?a:"")+(null!=(a=this.invokePartial(n.tab,s,{name:"tab",data:e,indent:"  ",helpers:t,partials:n}))?a:"")+'  <a href="" class="menu--tab grid-cell is-active">\n    <span>something</span>\n  </a>\n'+(null!=(a=this.invokePartial(n.tab,s,{name:"tab",data:e,indent:"  ",helpers:t,partials:n}))?a:"")+(null!=(a=this.invokePartial(n.tab,s,{name:"tab",data:e,indent:"  ",helpers:t,partials:n}))?a:"")+"</div>\n"},usePartial:!0,useData:!0}),this.App.templates.assessments=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black">\n  <p style="font-size:180px;color:yellow">Assessments</p>\n</div>\n'},useData:!0}),this.App.templates.assignments=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black">\n  <p style="font-size:180px;color:yellow">Assignments</p>\n</div>\n'},useData:!0}),this.App.templates.buttonClear=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<button class="icon-text--vertical">\n  <span class="icon icon-forbidden"></span>\n  <span class="icon-text__title">clear</span>\n</button>\n'},useData:!0}),this.App.templates.buttonDrawerToggle=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<button class="button button--drawer-toggle js-drawer-toggle">\n  <span class="icon icon-menu-toggle"></span>\n</button>'},useData:!0}),this.App.templates.buttonFlip=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<button class="icon-text--vertical">\n  <span class="icon icon-flip"></span>\n  <span class="icon-text__title">Flip</span>\n</button>\n'},useData:!0}),this.App.templates.buttonLearning=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<button class="icon-text--vertical">\n  <span class="icon icon-circle icon-learning"></span>\n  <span class="icon-text__title">learning</span>\n</button>\n'},useData:!0}),this.App.templates.buttonLetters=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<button class="icon-text--vertical">\n  <span class="icon icon-words"></span>\n  <span class="icon-text__title">Letters</span>\n</button>\n'},useData:!0}),this.App.templates.buttonMastered=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<button class="icon-text--vertical">\n  <span class="icon icon-circle icon-mastered"></span>\n  <span class="icon-text__title">mastered</span>\n</button>\n'},useData:!0}),this.App.templates.buttonMatrixClose=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<span class="icon icon-triangle-down"></span>\n'},useData:!0}),this.App.templates.buttonMatrixOpen=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<span class="icon icon-triangle-up"></span>\n'},useData:!0}),this.App.templates.buttonNeedsWork=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<button class="icon-text--vertical">\n  <span class="icon icon-circle icon-needs-work"></span>\n  <span class="icon-text__title">needs work</span>\n</button>\n'},useData:!0}),this.App.templates.buttonPhrases=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<button class="icon-text--vertical">\n  <span class="icon icon-phrases"></span>\n  <span class="icon-text__title">Phrases</span>\n</button>\n'},useData:!0}),this.App.templates.buttonTiles=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<button class="icon-text--vertical">\n  <span class="icon icon-tiles"></span>\n  <span class="icon-text__title">Tiles</span>\n</button>\n'},useData:!0}),this.App.templates.buttonTimer=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<button class="icon-text--vertical">\n  <span class="icon icon-timer"></span>\n  <span class="icon-text__title">timer</span>\n</button>\n'},useData:!0}),this.App.templates.buttonWhiteboard=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<button class="icon-text--vertical">\n  <span class="icon icon-phrases"></span>\n  <span class="icon-text__title">Whiteboard</span>\n</button>\n'},useData:!0}),this.App.templates.buttonWords=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<button class="icon-text--vertical">\n  <span class="icon icon-words"></span>\n  <span class="icon-text__title">Words</span>\n</button>\n'},useData:!0}),this.App.templates.drawer=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<div class="drawer js-drawer st-closed">\n  <header class="drawer__header grid grid--center">\n    <h1 class="drawer__title">MENU</h1>\n    <button class="button button--drawer-toggle js-drawer-toggle st-open"><span class="icon icon-menu-toggle"></span></button>\n  </header>\n    <nav class="menu--vertical">\n    <div class="icon-text--horizontal js-reading-stage">\n      <span class="icon icon-reading"></span>\n      <span class="icon-text__title">Reading Stage</span>\n    </div>\n    <div class="icon-text--horizontal js-assessments">\n      <span class="icon icon-assessments"></span>\n      <span class="icon-text__title">Assessments</span>\n    </div>\n    <div class="icon-text--horizontal js-assignments">\n      <span class="icon icon-assignments"></span>\n      <span class="icon-text__title">Assignments</span>\n    </div>\n    <div class="icon-text--horizontal js-whiteboard">\n      <span class="icon icon-whiteboard"></span>\n      <span class="icon-text__title">Whiteboard</span>\n    </div>\n    <div class="icon-text--horizontal js-leveled-stories">\n      <span class="icon icon-stories"></span>\n      <span class="icon-text__title">Leveled Stories</span>\n    </div>\n  </nav>\n</div>\n\n'},useData:!0}),this.App.templates.editStudent=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<div class="edit-student" style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:1.0;background:white">\n  <a href="#" class="menu--tab menu--tab--edit-student">\n    <span class="menu--number">3</span>\n    <span class="menu--title">Bobby B.</span>\n    <span class="menu__icon icon icon-edit"></span>\n  </a>\n  <div class="stage stage--edit">\n    <menu class="stage--edit__menu grid grid--center">\n      <h2 class="stage--edit__title grid-cell">notes</h2>\n      <div class="reading-stage-chooser grid-cell">\n        <div class="grid grid--center">\n          <h3 class="reading-stage__title grid-cell">reading stage</h3>\n          <a href="#" class="reading-stage__choice grid-cell">1</a>\n          <a href="#" class="reading-stage__choice grid-cell">2</a>\n          <a href="#" class="reading-stage__choice grid-cell">3</a>\n          <a href="#" class="reading-stage__choice grid-cell">4</a>\n          <a href="#" class="reading-stage__choice grid-cell">5</a>\n          <a href="#" class="reading-stage__choice grid-cell">6</a>\n          <a href="#" class="reading-stage__choice grid-cell">7</a>\n          <a href="#" class="reading-stage__choice grid-cell">8</a>\n          <a href="#" class="reading-stage__choice grid-cell">9</a>\n          <a href="#" class="reading-stage-chooser__button button button--primary grid-cell">save</a>\n        </div>\n    </menu>\n    <div class="stage--edit__content grid">\n      <article class="stage--edit__notes grid-cell u-3of4">\n        <header class="edit-notes__header">\n          <span class="edit-notes__time">march 12, 2015:</span>\n          <span class="edit-notes__stimuli">B |</span>\n          <span class="edit-notes__activity">Onsets & Rimes</span>\n        </header>\n        <section class="edit-notes__body">\n\n        </section>\n      </article>\n      <aside class="stage--edit__archive grid-cell u-1of4">\n        <header class="edit-archive__header">\n          PREVIOUS NOTES <span>&lt;</span>\n        </header>\n        <div class="edit-archive__list">\n          <ul>\n            <li>\n              <h4>\n                <span class="edit-notes__time">march 1, 2015</span>\n                <span class="edit-notes__stimuli">B</span>\n                <span>|</span>\n                <span class="edit-notes__activity">onsets & rimes</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class="edit-notes__time">march 22, 2015</span>\n                <span class="edit-notes__stimuli">ball</span>\n                <span>|</span>\n                <span class="edit-notes__activity">sight words</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class="edit-notes__time">march 31, 2015</span>\n                <span class="edit-notes__stimuli">why</span>\n                <span>|</span>\n                <span class="edit-notes__activity">onsets & rimes</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class="edit-notes__time">april 1, 2015</span>\n                <span class="edit-notes__stimuli">cor</span>\n                <span>|</span>\n                <span class="edit-notes__activity">letters</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class="edit-notes__time">april 15, 2015</span>\n                <span class="edit-notes__stimuli">bo</span>\n                <span>|</span>\n                <span class="edit-notes__activity">onsets & rimes</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class="edit-notes__time">april 31, 2015</span>\n                <span class="edit-notes__stimuli">dentist</span>\n                <span>|</span>\n                <span class="edit-notes__activity">stories</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class="edit-notes__time">may 1, 2015</span>\n                <span class="edit-notes__stimuli">a</span>\n                <span>|</span>\n                <span class="edit-notes__activity">letters</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class="edit-notes__time">may 12, 2015</span>\n                <span class="edit-notes__stimuli">bones</span>\n                <span>|</span>\n                <span class="edit-notes__activity">stories</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class="edit-notes__time">may 22, 2015</span>\n                <span class="edit-notes__stimuli">gut</span>\n                <span>|</span>\n                <span class="edit-notes__activity">onsets and rimes</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class="edit-notes__time">june 2, 2015</span>\n                <span class="edit-notes__stimuli">c</span>\n                <span>|</span>\n                <span class="edit-notes__activity">letters</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class="edit-notes__time">june 12, 2015</span>\n                <span class="edit-notes__stimuli">whack</span>\n                <span>|</span>\n                <span class="edit-notes__activity">sight words</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class="edit-notes__time">june 22, 2015</span>\n                <span class="edit-notes__stimuli">h</span>\n                <span>|</span>\n                <span class="edit-notes__activity">letters</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class="edit-notes__time">june 30, 2015</span>\n                <span class="edit-notes__stimuli">e</span>\n                <span>|</span>\n                <span class="edit-notes__activity">letters</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n            <li>\n              <h4>\n                <span class="edit-notes__time">july 3, 2015</span>\n                <span class="edit-notes__stimuli">bet</span>\n                <span>|</span>\n                <span class="edit-notes__activity">onsets & rimes</span>\n              </h4>\n              <p>lorem ipsum builds a car and he...</p>\n            </li>\n          </ul>\n        </div>\n      </aside>\n    </div>\n  </div>\n</div>'},useData:!0}),this.App.templates.leveledStories=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black">\n  <p style="font-size:180px;color:yellow">Leveled Stories</p>\n</div>\n'},useData:!0}),this.App.templates.login=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<div id="loginContainer">\n  <p>email</p>\n  <input type="text" name="email" id="email-field">\n  <p>password:</p>\n  <input type="password" name="password" id="password-field">\n  <br />\n  <input type="button" value="Submit" id="submit">\n  <input type="button" value="Forgot Password" id="reset">\n</div>\n'},useData:!0}),this.App.templates.matrix=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<div class="matrix">\n  <nav class="matrix__menu">\n    <div class="js-matrixMenu"></div>\n  </nav>\n <div class="js-stimuliTiles"></div>\n <nav class="matrix__student-selector">\n    <div class="js-matrixStudentSelector"></div>\n  </nav>\n</div>\n\n\n'},useData:!0}),this.App.templates.matrixMenu=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){var a;return'<div class="menu--tabs grid u-text-center '+this.escapeExpression((a=null!=(a=t.jsClass||(null!=s?s.jsClass:s))?a:t.helperMissing,"function"==typeof a?a.call(s,{name:"jsClass",hash:{},data:e}):a))+'"> \n\n</div> '},useData:!0}),this.App.templates.matrixStudentSelector=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<div class="menu--tabs menu--tabs--student-selector grid u-text-center js-matrixStudentSelectorTabs">\n</div>\n'},useData:!0}),this.App.templates.matrixStudentSelectorTab=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){var a,i=t.helperMissing,l="function",p=this.escapeExpression;return'<span class="menu--number">'+p((a=null!=(a=t.readingStage||(null!=s?s.readingStage:s))?a:i,typeof a===l?a.call(s,{name:"readingStage",hash:{},data:e}):a))+'</span>\n<span class="menu--title">'+p((a=null!=(a=t.label||(null!=s?s.label:s))?a:i,typeof a===l?a.call(s,{name:"label",hash:{},data:e}):a))+'</span>\n<span class="icon icon-edit"></span>\n'},useData:!0}),this.App.templates.menuActivity=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'  <div class="js-buttonLetters"></div>\n  <div class="js-buttonWords"></div>\n  <div class="js-buttonPhrases"></div>\n  <div class="js-buttonTiles"></div>\n  <div class="js-buttonWhiteboard"></div>\n\n'},useData:!0}),this.App.templates.menuAssessment=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<nav class="menu--assessment menu--assessment--stage grid grid--bottom">\n  <div class="js-buttonMastered"></div>\n  <div class="js-buttonLearning"></div>\n  <div class="js-buttonNeedsWork"></div>\n  <div class="js-buttonClear"></div>\n</nav>\n'},useData:!0}),this.App.templates.readingStage=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black">\n  <p style="font-size:180px;color:yellow">Reading Stage</p>\n</div>'},useData:!0}),this.App.templates.stage=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'  <div class="js-buttonDrawerToggle"></div>\n  <div class="js-stageDrawer"></div>\n  <div class="stage__stimulus js-stageStimulus"></div>\n  <div class="stage__menu stage__menu--left grid">\n    <div class="js-stageButtonFlip"></div>\n    <div class="js-stageButtonTimer"></div>\n  </div>\n  <div class="js-menuAssessment"></div>\n  <div class="stage__menu stage__menu--right grid js-menuActivity"></div>\n  <div class="button--matrix-toggle button--matrix-toggle--open js-buttonMatrixOpen"></div> \n'},useData:!0}),this.App.templates.stageStimulusLetters=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){var a;return'<div class="stage__stimulus stage__stimulus--letters animated slideInRight">\n  <span>'+this.escapeExpression((a=null!=(a=t.stimulus||(null!=s?s.stimulus:s))?a:t.helperMissing,"function"==typeof a?a.call(s,{name:"stimulus",hash:{},data:e}):a))+'</span>\n  <img src="img/apple.svg" alt="apple">\n</div>'},useData:!0}),this.App.templates.stageStimulusPhrases=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<div class="stage__stimulus stage__stimulus--phrases animated slideInRight">\n  <span>The ball is red.</span>\n</div>'},useData:!0}),this.App.templates.stageStimulusWords=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){var a;return'<div class="stage__stimulus stage__stimulus--words animated slideInRight">\n  <span>'+this.escapeExpression((a=null!=(a=t.stimulus||(null!=s?s.stimulus:s))?a:t.helperMissing,"function"==typeof a?a.call(s,{name:"stimulus",hash:{},data:e}):a))+"</span>\n</div>"},useData:!0}),this.App.templates.stimuliTilesLetters=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){var a;return'<section class="matrix__stimuli matrix__stimuli--letters grid st-active">\n  <div class="stimuli-tiles stimuli-tiles--letters">\n    <div class="grid grid--wrap u-text-center '+this.escapeExpression((a=null!=(a=t.jsClass||(null!=s?s.jsClass:s))?a:t.helperMissing,"function"==typeof a?a.call(s,{name:"jsClass",hash:{},data:e}):a))+'">\n    </div>\n  </div>\n</section>'},useData:!0}),this.App.templates.stimuliTilesOnsetRimes=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){var a,i=t.helperMissing,l="function",p=this.escapeExpression;return'<section class="matrix__stimuli matrix__stimuli--stories grid">\n  <div class="grid-cell stimuli-tiles stimuli-tiles stimuli-tiles--onsets u-1of3">\n    <div class="grid grid--wrap u-text-center '+p((a=null!=(a=t.jsClassOnset||(null!=s?s.jsClassOnset:s))?a:i,typeof a===l?a.call(s,{name:"jsClassOnset",hash:{},data:e}):a))+'">\n    </div>\n  </div>\n  <div class="stimuli-tiles stimuli-tiles--rimes grid-cell u-2of3">\n    <div class="grid grid--wrap u-text-center '+p((a=null!=(a=t.jsClassRime||(null!=s?s.jsClassRime:s))?a:i,typeof a===l?a.call(s,{name:"jsClassRime",hash:{},data:e}):a))+'">\n    </div>\n  </div>\n</section>'},useData:!0}),this.App.templates.stimuliTilesSightWords=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){var a;return'<section class="matrix__stimuli matrix__stimuli--words grid">\n  <div class="stimuli-tiles stimuli-tiles--words">\n    <div class="grid grid--wrap u-text-center '+this.escapeExpression((a=null!=(a=t.jsClass||(null!=s?s.jsClass:s))?a:t.helperMissing,"function"==typeof a?a.call(s,{name:"jsClass",hash:{},data:e}):a))+'">\n    </div>\n  </div>\n</section>'},useData:!0}),this.App.templates.stimuliTilesStories=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){var a;return'<section class="matrix__stimuli matrix__stimuli--stories grid">\n <div class="stimuli-tiles stimuli-tiles--stories__tiles ">\n    <div class="grid grid--wrap u-text-center '+this.escapeExpression((a=null!=(a=t.jsClass||(null!=s?s.jsClass:s))?a:t.helperMissing,"function"==typeof a?a.call(s,{name:"jsClass",hash:{},data:e}):a))+'">\n    </div>\n  </div>\n</section>'},useData:!0}),this.App.templates.storyImage=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<!-- \n<div class="story__image u-text-center">\n  <img src="img/dentist1.jpg" alt="dentist">\n</div>\n\n\n -->\n<figure class="story__image js-storyFlip">\n  <img src="img/dentist1.jpg" alt="dentist">\n  <figcaption class="story__text">Here is a bunch of text for the story.</figcaption>\n</figure>\n<div class="story__text story__text--teacher js-storyTextTeacher">\n  Here is a bunch of text for the story.\n</div>'},useData:!0}),this.App.templates.storyPage=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<!-- <div class="story"  style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;background-color: white"> -->\n\n\n<div class="story container" style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;background-color: white">\n  <div class="stage--story stage">\n    <div class="js-storyImage"></div>\n    <footer class="story__footer">\n      <nav class="menu--assessment menu--assessment--story grid">\n        <div class="js-storyMenuAssessment"></div>\n      </nav>\n      <button class="story__flip js-storyButtonFlip"></button>\n    </footer>\n  </div>\n</div>\n'},useData:!0}),this.App.templates.tab=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){var a,i=t.helperMissing,l="function",p=this.escapeExpression;return'<span class="menu__label '+p((a=null!=(a=t.status||(null!=s?s.status:s))?a:i,typeof a===l?a.call(s,{name:"status",hash:{},data:e}):a))+'">'+p((a=null!=(a=t.label||(null!=s?s.label:s))?a:i,typeof a===l?a.call(s,{name:"label",hash:{},data:e}):a))+"</span>\n"},useData:!0}),this.App.templates.teacherWorkspace=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<div class="workspace">\n  <div class="stage stage--workspace js-stage"></div>\n  <div class="js-matrix"></div>\n  <div class="js-overlay"></div>\n</div>\n'},useData:!0}),this.App.templates.tile=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){var a,i=t.helperMissing,l="function",p=this.escapeExpression;return'<a href="#" class="tile__title  '+p((a=null!=(a=t.assessmentClass||(null!=s?s.assessmentClass:s))?a:i,typeof a===l?a.call(s,{name:"assessmentClass",hash:{},data:e}):a))+" "+p((a=null!=(a=t.selectedClass||(null!=s?s.selectedClass:s))?a:i,typeof a===l?a.call(s,{name:"selectedClass",hash:{},data:e}):a))+'">'+p((a=null!=(a=t.index||(null!=s?s.index:s))?a:i,typeof a===l?a.call(s,{name:"index",hash:{},data:e}):a))+p((a=null!=(a=t.stimulus||(null!=s?s.stimulus:s))?a:i,typeof a===l?a.call(s,{name:"stimulus",hash:{},data:e}):a))+"</a>\n\n"},useData:!0}),this.App.templates.whiteboard=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(s,t,n,e){return'<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100;opacity:0.80;background:black">\n  <p style="font-size:180px;color:yellow">Whiteboard</p>\n</div>\n'},useData:!0});