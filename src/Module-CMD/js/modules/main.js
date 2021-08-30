define(function(require, exports, module) {
    let moduleA = require('./moduleA');
    moduleA.showName();
    let moduleD = require('./moduleD');
    moduleA.getName();
});