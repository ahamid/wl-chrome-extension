$.noConflict();
jQuery(function() {
  var REPLACE = [];
  REPLACE['Wikipedia'] = 'WikiLeaks';
  REPLACE['Jimmy Wales'] = 'Julian Assange';
  var WL_SUPPORT = 'http://wikileaks.ch/Support.html';
  var MAX_ATTEMPTS = 5;
  var attempts = 0;
  var update = function() {
    attempts++;
    msg = jQuery('#cn-bold-blue-text');
    if (msg.length > 0) {
      attempts = MAX_ATTEMPTS; // stop trying
      jQuery('#JABanner25A a').first().attr('href', WL_SUPPORT);
      msg_content = msg.html();
      for (var t in REPLACE) {
        msg_content = msg_content.replace(new RegExp(t, 'g'), REPLACE[t]);  
      }
      msg.html(msg_content);
      jQuery('#thermometer-wrapper').hide();
      jQuery('#notice-button2').unbind();
      jQuery('#notice-button2').bind("click", function() {
        document.location(WL_SUPPORT);
        return true;
      });
    } else {
      if (attempts < MAX_ATTEMPTS) {
        setTimeout(update, 20);
      }
    }
  };
  update();
});
