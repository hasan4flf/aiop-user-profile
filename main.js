jQuery(document).ready(function($) {
    
  $('.user-profile-tab').click(function(){
      $('.user-profile-tab').removeClass("user-profile-tab-selected");
      $(this).addClass("user-profile-tab-selected");
      
      
      if( $(this).index() == 0 ){
          $('#about_tab_content').attr('style','display: flex');
          $('#field_tab_content').hide();
          $('#achievements_tab_content').hide();
          $('#map_tab_content').hide();
      }
      if( $(this).index() == 1 ){
          $('#about_tab_content').hide();
          $('#field_tab_content').attr('style','display: flex');
          $('#achievements_tab_content').hide();
          $('#map_tab_content').hide();
      }
      if( $(this).index() == 2 ){
          $('#about_tab_content').hide();
          $('#field_tab_content').hide();
          $('#achievements_tab_content').attr('style','display: flex');
          $('#map_tab_content').hide();
      }
      if( $(this).index() == 3 ){
          $('#about_tab_content').hide();
          $('#field_tab_content').hide();
          $('#achievements_tab_content').hide();
          $('#map_tab_content').attr('style','display: flex');
      }
      
      
  });
    
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 50, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
    
});