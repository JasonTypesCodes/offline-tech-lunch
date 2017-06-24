require('normalize.css/normalize.css');

require('typopro-web/web/TypoPRO-SourceCodePro/TypoPRO-SourceCodePro.css');
require('typopro-web/web/TypoPRO-Comme/TypoPRO-Comme.css');
require('typopro-web/web/TypoPRO-TeXGyre/TypoPRO-TeXGyre.css');

require('reveal.js/css/reveal.css');
require('highlight.js/styles/hybrid.css');

require('./my-theme.scss');
require('./style.scss');

require('script-loader!reveal.js/lib/js/head.min.js');
require('script-loader!reveal.js/js/reveal.js');

Reveal.initialize({
  center: false,
  progress: false,
  controls: true,

  dependencies: [
    {
      src: 'plugin/highlight/highlight.js', 
      async: true, 
      callback: function() { 
        hljs.initHighlightingOnLoad();
      }
    }
  ]
});
