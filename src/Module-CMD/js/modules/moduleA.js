// 有依赖的模块
define(function (require, exports, module) {
    let name = 'moduleA';
    function showName() {
        console.log(name)
    }

    // 暴露模块 导出一个对象
    module.exports = {showName}

    // 取window.contentOfMe中的内容
});