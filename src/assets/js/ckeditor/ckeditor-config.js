(function(){
    CKEDITOR.basePath = '/assets/js/ckeditor/'
    CKEDITOR.plugins.addExternal('wordcount', 'plugins/wordcount/');
    CKEDITOR.plugins.addExternal('notification', 'plugins/notification/');
    CKEDITOR.editorConfig = function( config ) {
        config.extraPlugins = 'wordcount,notification';
    }
})();