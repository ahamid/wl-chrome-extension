$.noConflict();
var ja_extension = ja_extension || {};
ja_extension.REPLACE = [];
ja_extension.REPLACE['Wikipedia'] = 'WikiLeaks';
ja_extension.REPLACE['Jimmy Wales'] = 'Julian Assange';
ja_extension.WL_SUPPORT = 'http://wikileaks.ch/Support.html';

jQuery(function() {
  jQuery('#JABanner25A a').first().attr('href', ja_extension.WL_SUPPORT);
  msg = jQuery('#cn-bold-blue-text');
  msg_content = msg.html();
  for (var t in ja_extension.REPLACE) {
    msg_content = msg_content.replace(new RegExp(t, 'g'), ja_extension.REPLACE[t]);  
  }
  msg.html(msg_content);
  jQuery('#thermometer-wrapper').hide();
  jQuery('#notice-button2').unbind();
  jQuery('#notice-button2').bind("click", function() {
    document.location(ja_extension.WL_SUPPORT);
    return true;
  });
});
