
App.database = {

  init: function(){
    if(is_browser){
      this.db = openDatabase('tnp2', '', 'Teacher Notepad 2 database', 15 * 1024 * 1024);
    }else{
      this.db = sqlitePlugin.openDatabase({name: 'tnp2', version:'', estimatedSize: (15 * 1024 * 1024), location: 2});
    }
  },

  dropTables: function(){
    _.each(["roster","stimuli"], function(tableName){
      App.database.db.transaction(function (tx) {
        tx.executeSql('DROP TABLE ' + tableName);
      });
    });
  },

  createTable: function(tableName) {
    this.db.transaction(function (tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS ' + tableName + ' (id unique, JSONString)');
    });
  },

  create: function(tableName, object) {
    if(object.id){
      this.db.transaction(function (tx) {
        var query = "INSERT INTO " + tableName + " (id , JSONString) VALUES (" + object.id + ",'" + JSON.stringify(object) + "')";
        tx.executeSql(query);
      });
    }
  },

  readAll: function(tableName, success) {
    this.db.transaction(function (tx) {
      var query = "SELECT  JSONString FROM " + tableName;
      tx.executeSql(query, [], function(tx, results){
        var models = [];
        for(var i = 0 ; i < results.rows.length; i+=1){
          models.push(JSON.parse(results.rows.item(i).JSONString));
        }
        App[tableName].reset(models);
        success();
      });
    });
  },

  read: function(tableName, id) {
    this.db.transaction(function (tx) {
      var query = "SELECT  JSONString FROM " + tableName + " WHERE id = " + id;
      tx.executeSql(query, [], function(tx, results){
        var result = results.rows.item(0).JSONString;
        console.log("read result:" + result);
      });
    });
  },

  update: function(tableName, object) {
    this.db.transaction(function (tx) {
      var query = "UPDATE " + tableName + " SET JSONString = '" + JSON.stringify(object) + "' WHERE id = " + object.get("id");
      tx.executeSql(query, [], function(tx, results){
        console.log("update result:" + results);
      });
    });
  },

  createOrUpdate: function(tableName, object) {
    if(object.id){
      this.db.transaction(function (tx) {
        var query = "INSERT OR REPLACE INTO " + tableName + " (id , JSONString) VALUES (" + object.id + ",'" + JSON.stringify(object) + "')";
        tx.executeSql(query);
      });
    }
  }
};


