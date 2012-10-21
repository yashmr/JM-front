//Seajs
//Config

//load Bootstrap
seajs.config({
    alias : {
        'jquery' : '1.8.1', // 指定使用的 jQuery 版本
        'backbone' : '0.9.2',
        'underscore' : '1.3.3',
        'bootstrap' : 'bootstrap/js/bootstrap'
    },
    preload : ['jquery', 'seajs/plugin-text'],
    debug : true,
});

seajs.use('./app/src/main');
//init