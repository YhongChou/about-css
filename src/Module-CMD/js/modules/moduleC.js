define(function(require, exports, module) {
    let name = 'moduleC';
    function getmoduleC() {
        console.log(name)
    }

    // 暴露模块
    exports.moduleCCC = {getmoduleC}
});