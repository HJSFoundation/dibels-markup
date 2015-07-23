
App.database = {

  init: function(){
    this.db = openDatabase('tnp2', '', 'Teacher Notepad 2 database', 15 * 1024 * 1024);
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
        result = results.rows.item(0).JSONString;
        console.log("read result:" + result);
      });
    });
  }
}


