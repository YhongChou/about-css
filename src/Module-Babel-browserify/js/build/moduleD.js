'use strict';

define(function (require, factory) {
    var name = 'moduleD';
    // 同步引入
    var moduleA = require('./moduleA');
    moduleA.showName();

    // 异步引入
    require.async('./moduleC', function (moduleC) {
        moduleC.moduleCCC.getmoduleC();
    });

    function getName() {
        console.log(name);
    }

    exports.fuOfD = getName;
});