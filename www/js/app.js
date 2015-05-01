var App = {
  Models: {},
  Views: {},
  Collections: {},
  Dispatcher: _.clone(Backbone.Events),
  Config: {
    el: "#applicationContainer",
    productionApiUrl: "",
    stagingApiUrl: "http://staging.tutormate.org/api/v1",
    developmentApiUrl: "http://localhost:3000",
    maxStudentCount: 6,
    maxStageCount: 9,
    skill: {
      letterNames: "letter_names",
      letterSounds: "letter_sounds",
      sightWords: "sight_words",
      onsetRimes: "onset_rimes",
      cvts: "cvts",
      onsets: "onsets",
      rimes: "rimes",
      affixes: "affixes",
      stageStories: "stage_stories",
      leveledTexts: "leveled_texts"
    },
  },
  url: "http://staging.tutormate.org/api/v1",
  currentUser: null,
};
