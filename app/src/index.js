'use strict';

const cssModel = require('./base.scss');
const moduleName = 'wbgComponent';

try {
    angular.module(moduleName);
} catch (error) {
    angular.module(moduleName, ['ngSanitize']);
}
angular.module(moduleName).directive('test', function () {
    return {
        restrict: 'EA',
        template: require('./main.html'),
        link: function (scope, element, attr) {
            //组件局域css
            scope.className = cssModel.className;
        }
    }
})
