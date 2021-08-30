// 无依赖的模块
(function (window) {
    let name = 'content';
    function getContent() {
        return name
    }
    window.contentOfMe = {getContent}
})(window)