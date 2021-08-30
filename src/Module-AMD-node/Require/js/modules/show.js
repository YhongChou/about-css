// 有依赖的模块
define([
    'contentOfMe',
], function (contentOfMe) {
    let name = 'show.js';
    function showName() {
        console.log(contentOfMe.getContent())
    }

    // 暴露模块
    return {showName}

    // 取window.contentOfMe中的内容
});