
require('reveal.js/css/reveal.css');

require('reveal.js/css/theme/beige.css');
require('./style.scss');

require('script-loader!reveal.js/js/reveal.js');

require("html-loader!./index.html");

Reveal.initialize({
  center: false,
  progress: false,
  controls: false
});
