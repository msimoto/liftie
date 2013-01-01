var cookie = require('cookie');
var classes = require('classes');

module.exports=state;

function state(nodes) {
  var MILLIS_IN_MONTH = 30 * 24 * 60 * 60 * 1000;

  function save() {
    var text = nodes
      .filter(function(node) {
        return classes(node).has('open');
      })
      .map(function(node) {
        return node.dataset.resort;
      })
      .join(',');
    cookie('resorts-open', text, {
      maxage: MILLIS_IN_MONTH,
      path: '/'
    });
  }

  return {
    save: save
  };
}