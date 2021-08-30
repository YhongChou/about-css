// 无依赖的模块
define(function (require, exports, module) {
    let name = 'moduleB';
    function getContent() {
        return name
    }
    // 暴露模块 只导出一个
    module.exports = name;
});