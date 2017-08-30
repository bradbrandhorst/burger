var orm = require("../config/orm.js");

console.log("In burger.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(result) {
      cb(result);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(cols, vals, cb) {
    orm.delete("burgers", cols, vals, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;