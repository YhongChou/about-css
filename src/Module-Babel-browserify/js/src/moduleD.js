define(function(require, factory) {
    let name = 'moduleD';
    // 同步引入
    let moduleA = require('./moduleA');
    moduleA.showName();

    // 异步引入
    require.async('./moduleC', function (moduleC) {
        moduleC.moduleCCC.getmoduleC()
    });

    function getName() {
        console.log(name)
    }

    exports.fuOfD = getName;
    
    
});