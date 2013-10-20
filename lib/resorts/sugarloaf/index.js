var select = require('../../select');
var coerce = require('../../tools/coerce');

function parse(dom) {
  var liftStatus = {};

  select(dom, '#liftstatus span').forEach(function(node) {
    var name = node.children[0].data,
      status = node.attribs['class'];
      if (status.indexOf('sprite-') === 0) {
        liftStatus[name] = coerce(status, 'sprite-');
      }
  });

  return liftStatus;
}

module.exports = parse;