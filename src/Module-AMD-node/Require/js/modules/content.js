// 无依赖的模块
define(function () {
    let name = 'content';
    function getContent() {
        return name
    }
    // window.contentOfMe = {getContent}
    // 暴露模块
    return {getContent}
});