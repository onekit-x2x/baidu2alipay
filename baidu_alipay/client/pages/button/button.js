import swan from "/onekit/swan"
/**
 * @demo page component for button
 * @author lvlei
 */

/* globals Page, swan */
Page({
    onShareAppMessage() {
        return {
            title: '小程序标题',
            content: '世界很复杂，百度更懂你',
            imageUrl: 'http://imgsrc.baidu.com/forum/pic/item/d9f9d72a6059252daecdfc36309b033b5bb5b92e.jpg',
            path: '/pages/openShare/openShare',
            success(res) {
                // 分享成功
            },
            fail(err) {
                // 分享失败
            }
        };
    },
    getUserInfo(e) {
        swan.getUserInfo({
            success: res => {
                swan.showModal({
                    title: '获取成功',
                    content: JSON.stringfy(res)
                });
            },
            fail: err => {
                swan.showToast({
                    title: '获取失败'
                });
            }
        });
    }
});
