#!/usr/bin/env node

var copy = require('ncp').ncp;
var fs = require('fs');
var argv = require('yargs').argv;
var componentName = argv.name;

var rootDir = __dirname;
var colors = require('colors');
 
colors.setTheme({
     info: 'green',
     warn: 'yellow',
     debug: 'blue',
     error: 'red'
});


function fileExists(filePath) {
    try {
        return fs.statSync(filePath).isFile() || fs.statSync(filePath).isDirectory();
    } catch (err) {
        return false;
    }
}

function initComponentName(name) {
    if (/^wbg-/.test(name)) {
        return name;
    } else {
        return 'wbg-' + name;
    }
}
if (!componentName) {
    console.log('请输入组件名称,格式：--name [/^[-\\da-zA-Z]+$/]'.error);
    return;
}
if (!/^[-\da-zA-Z]+$/.test(componentName)) {
    console.log('name 参数格式错误，格式：/^[-\\da-zA-Z]+$/'.error);
    return;
}
componentName = initComponentName(componentName);
if (fileExists(componentName)) {
    console.log(('路径' + componentName + '已存在，请修改名称或删除路径文件').error);
    return;
}
var mkdirp = require('mkdirp');
var jsonfile = require('jsonfile')


mkdirp(componentName, function (err) {
    if (err) console.log(colors.error(err));
    var appPath = rootDir + '/app';

    copy(appPath, componentName, function(err, files) {
        if (err) console.log(colors.error(err));
        var packJson = jsonfile.readFileSync(appPath + '/package.json');

        packJson.name = componentName;
        jsonfile.writeFile(componentName + '/package.json', packJson, {spaces: 2},  function (err) {
            if (err) console.log(colors.error(err));
        })
    });
})
