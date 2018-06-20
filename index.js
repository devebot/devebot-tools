'use strict';

var packageMap = {
  'colors': 'colors/safe',
  'traverse': 'traverse'
}
for(var packageName in packageMap) {
  module.exports[packageName] = require(packageMap[packageName]);
}
