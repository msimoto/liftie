var domutil = require('../../tools/domutil');
var entities = require('../../tools/entities');
var debug = require('debug')('liftie:resort:silver-star');

function parse(dom) {
  var liftStatus = domutil.collect(dom, '.view-lift-status tbody tr', function(node) {
    return {
      name: entities(domutil.childText(node, '1')),
      status: domutil.findText(node.children[2])
    };
  });

  debug('Silver Star Lift Status:', liftStatus);
  return liftStatus;
}

module.exports = parse;
