define(function(require, exports) {
    //jquery
    var $ = require('jquery');
    require('bootstrap')($);

    //backbone
    var Backbone = require('backbone');

    //tpl
    var tpl = require('./tpl/container.html');
    var _ = require('underscore');

    var Bookmark = new (Backbone.View.extend({
        tagName : 'div',
        initialize:function(){
        		this.render();
        },
        render : function() {
            $(this.el).html(_.template(tpl));
            return this;
        }
    }))({el:$('#Container')});
    
    //var test = new Bookmark();
    //console.log(test);

});
