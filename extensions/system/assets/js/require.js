var require = (function() {

    var url = pagekit.url, vers = pagekit.version;

    return {
        baseUrl: url.replace(/\/index.php$/i, '') || '/',
        paths: {
            'jquery':     'vendor/assets/jquery/jquery.js?ver=2.1.0',
            'codemirror': 'vendor/assets/codemirror/codemirror.js?ver=3.22',
            'handlebars': 'vendor/assets/handlebars/handlebars.js?ver=2.0.0',
            'marked':     'vendor/assets/marked/marked.js?ver=0.3.1',
            'md5':        'vendor/assets/requirejs/plugins/md5.js?ver=0.0.5',
            'gravatar':   'vendor/assets/requirejs/plugins/gravatar',
            'uikit':      'vendor/assets/uikit/js/uikit.min',
            'rowselect':  'extensions/system/assets/js/rowselect.js?ver=' + vers,
            'editor':     'extensions/system/modules/editor/assets/js/editor.js?ver=' + vers
        },
        shim: {
            'uikit': {
                deps: ['jquery']
            },
            'codemirror': {
                deps: ['css!vendor/assets/codemirror/codemirror', 'css!vendor/assets/codemirror/hint']
            },
            'handlebars': {
                exports: 'Handlebars'
            }
        },
        config: {
            'uikit': {
                base: 'vendor/assets/uikit/js'
            },
            'tmpl': {
                url: url + '/system/tmpl/'
            },
            'system': {
                base: 'extensions/system/assets/js/system/',
                link: url + '/admin/system/link'
            }
        }
    };

})();
