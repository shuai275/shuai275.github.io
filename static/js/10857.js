/* 
 * Make Time: 2024-03-24 21:34:27 
 * Kefu Type: 新版本客服 
 * 本客服系统由张家界鼎尖网络科技有限公司开发，已申请计算机软件著作权。
 * 受《国家计算机软件著作权法》保护，禁止任何形式的抄袭盗用，否则我们将依法追究相关法律责任。
 * 合作电话：0744-8383800 微信：18074477180 网址：www.zjjdj.com  法律顾问：代可律师
 * 功能列表：
 * 1、客服智能随机展示，一个页面可设置多个客服，访客访问会随机展现一个；
 * 2、客服展现智能锁定：访客访问，展示A客服后，不管刷新，还是分享链接给微信好友，都是显示A客服；
 * 3、手机，电脑，小程序，快速控制客服上下线；
 * 4、客服24小时自动排班上下线；
 * 5、客服可指定手机端和电脑端分开展现；
 * 6、客服信息加密，防止客服资料泄露，加密内容如下：
 */
var $_STORAGENAME = '1682392246';
var $_KFDEBUG = '0';
var $_KFLOCK = '1';
var $_KFINFO = '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';