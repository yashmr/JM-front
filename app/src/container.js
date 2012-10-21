define(function(require, exports) {
    //jquery
    var $ = require('jquery');
    require('bootstrap')($);

    //backbone
    var Backbone = require('backbone');
    var _ = require('underscore');

    //tpl
    var tpl = require('./tpl/container.html');

    C = new Backbone.View.extend({
    		el:$('#Container'), //填充Container Div
        initialize : function() {
            this.render();
        },
        render : function() {
            $(this.el).html(_.template(tpl));
            return this;
        }
    });
    
    var Container = new C();

}); 