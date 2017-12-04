/**
 * Vendors
 */

// Bootstrap
//= include 'bootstrap-sass/assets/javascripts/bootstrap/transition.js'
//= include 'bootstrap-sass/assets/javascripts/bootstrap/alert.js'
//= include 'bootstrap-sass/assets/javascripts/bootstrap/button.js'
//= include 'bootstrap-sass/assets/javascripts/bootstrap/carousel.js'
//= include 'bootstrap-sass/assets/javascripts/bootstrap/collapse.js'
//= include 'bootstrap-sass/assets/javascripts/bootstrap/dropdown.js'
//= include 'bootstrap-sass/assets/javascripts/bootstrap/modal.js'
//= include 'bootstrap-sass/assets/javascripts/bootstrap/tooltip.js'
//= include 'bootstrap-sass/assets/javascripts/bootstrap/popover.js'
//= include 'bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js'
//= include 'bootstrap-sass/assets/javascripts/bootstrap/tab.js'
//= include 'bootstrap-sass/assets/javascripts/bootstrap/affix.js'

// FitVids
//= include 'FitVids/jquery.fitvids.js'

// Moment
//= include 'moment/min/moment.min.js'
//= include 'moment/locale/pt-br.js'

/**
 *  Main
 */

jQuery(document).ready(function($) {

  /**
   * Responsive wp_video_shortcode().
   */

  $( '.wp-video-shortcode' ).parent( 'div' ).css( 'width', 'auto' );

  /**
   * Fluid width video embeds.
   * @link http://fitvidsjs.com
   */

  $( '.entry-content' ).fitVids();

  /**
   * Relative time to date posts.
   * @link http://momentjs.com
   */

  moment.locale( $('html').attr('lang') );

  $( '.entry-date' ).each(function() {
      $(this).text( moment( $(this).children('time').attr('datetime'), moment.ISO_8601 ).startOf('hour').fromNow() );
  });

  /**
   * Odin Core shortcodes.
   */

  // Tabs.
  //$( '.odin-tabs a' ).click(function(e) {
  //  e.preventDefault();
  //  $(this).tab( 'show' );
  //});

  // Tooltip.
  //$( '.odin-tooltip' ).tooltip();

});
