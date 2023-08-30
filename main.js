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
    
    
});