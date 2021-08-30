(function () {

    requirejs.config({
        baseUrl: 'js/', // 基本路径
        paths: {      // 配置模块对应的路径
            contentOfMe: './modules/content',
            shower: './modules/show'
        }
    })

    requirejs([
        'shower'
    ], function(shower) {
        shower.showName();
    })
})