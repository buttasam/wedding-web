const sh = require('shelljs');
const upath = require('upath');

const destPath = upath.resolve(upath.dirname(__filename), '../docs');

sh.rm('-rf', `${destPath}/assets`)
sh.rm('-rf', `${destPath}/css`)
sh.rm('-rf', `${destPath}/js`)
sh.rm('-rf', `${destPath}/index.html`)