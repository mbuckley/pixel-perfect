/* See license.txt for terms of usage */

define(function(require, exports, module) {

// Dependencies
const React = require("react");
const { PopupLayout } = require("popup-layout");

// xxxHonza: temporary JSON data. Should be stored within
// the current profile directory.
var data = {
  selection:  null,
  overlays: [{
    opacity: 50,
    x: 0,
    y: 0,
    scale: 1,
    url: "https://www.google.cz/images/srpr/logo11w.png"
  }, {
    opacity: 50,
    x: 0,
    y: 0,
    scale: 1,
    url: "http://getfirebug.com/img/firebug-large.png"
  }, {
    opacity: 50,
    x: 0,
    y: 0,
    scale: 1,
    url: "http://upload.wikimedia.org/wikipedia/en/7/74/FTP_Voyager_16_Screenshot.png"
  }, {
    opacity: 50,
    x: 0,
    y: 0,
    scale: 1,
    url: "https://www.google.cz/images/srpr/logo11w.png"
  }]
}

React.render(PopupLayout(data), document.body);

// Display the page content when it's ready to avoid flashing
// during the page load.
document.addEventListener("load", event => {
  document.body.removeAttribute("collapsed");
}, true);

// End of main.js
});
