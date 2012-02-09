if (!com) { var com = {}; }
if (!com.wintondeshong) { com.wintondeshong = {}; }
if (!com.wintondeshong.util) { com.wintondeshong.util = {}; }

com.wintondeshong.util.TemplateManager = function () {
    var api = {
        initialize : function () {
            var $hamlTemplates = $('script[type="text/haml-js-tmpl"]');
            $hamlTemplates.each(_.bind(function (i, template) {
                api[template.id] = Haml($.trim($(template).html()));
            }, this));
        }
    };
    return api;
};
