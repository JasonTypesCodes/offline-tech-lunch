require('typopro-web/web/TypoPRO-Montserrat/TypoPRO-Montserrat.css');
require('typopro-web/web/TypoPRO-SinkinSans/TypoPRO-SinkinSans.css');
require('typopro-web/web/TypoPRO-SourceCodePro/TypoPRO-SourceCodePro.css');

require('reveal.js/css/reveal.css');
// require('highlight.js/styles/tomorrow-night.css');
require('highlight.js/styles/hybrid.css');
// require('highlight.js/styles/atelier-savanna-dark.css');

require('./my-theme.scss');
require('./style.scss');

require('script-loader!reveal.js/lib/js/head.min.js');
require('script-loader!reveal.js/js/reveal.js');

Reveal.initialize({
  center: true,
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
