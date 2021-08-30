// 有依赖的模块
(function (window, contentOfMe) {
    let name = 'show.js';
    function showName() {
        console.log(contentOfMe.getContent())
    }
    // 引入shower模块时，可以得到哪些属性
    window.shower = {showName, name}
    // 取window.contentOfMe中的内容
})(window, contentOfMe)