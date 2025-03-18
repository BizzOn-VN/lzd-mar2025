'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
	
});



// $("#md-popup-3").fancybox().trigger('click');
// $("#md-popup-4").fancybox().trigger('click');


const copySpan = document.getElementById('copySpan');
const tooltipSpan = document.getElementById('tooltipac');
  copySpan.addEventListener('click', function() {
    const text = copySpan.textContent;

    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard:', text);
        
      })
      .catch(err => {
        console.error('Could not copy text: ', err);        
      });
      tooltipSpan.classList.add('active-tt');
      setTimeout(function() {
         tooltipSpan.classList.remove('active-tt');
       }, 1500);
  });