App.Collections.Stimuli=Backbone.Collection.extend({initialize:function(l){this.localStorageName=l.localStorageName,this.localStorage=new Backbone.LocalStorage(this.localStorageName)},url:"/stimuli",model:App.Models.Stimulus});