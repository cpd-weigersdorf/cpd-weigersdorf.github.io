function toogleSmNavigation() {
    
    if ($(".fr-left-bar").hasClass("hidden-xs")) {
        $(".fr-left-bar").removeClass("hidden-xs");
        $(".fr-left-bar").css("display", "none");
    }
    if ($(".fr-left-bar").hasClass("hidden-sm")) {
        $(".fr-left-bar").removeClass("hidden-sm");
        $(".fr-left-bar").css("display", "none");
    }
    
    $(".fr-left-bar").css("width", "100%");
    $(".fr-left-bar").toggle(200);
}