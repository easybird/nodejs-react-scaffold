/* eslint-disable */

const gUtil = require('gulp-util');

function getArgument(key) {
  return gUtil.env[key] ? gUtil.env[key] : null;
}

function onError(err) {
  gUtil.log('\n', gUtil.colors.bold(gUtil.colors.red('Error ocurred: ') + err.message + ' @ ' + err.fileName + ':' + err.lineNumber), '\n');
  gUtil.beep();
  this.emit('end');
}

exports.getArgument = getArgument;
exports.onError = onError;
