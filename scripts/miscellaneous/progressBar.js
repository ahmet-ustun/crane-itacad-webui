$(document).on("scroll", function () {
    
    let pixels = $(document).scrollTop();
    let height = $(document).height() - $(window).height();
    let progress = 100 * pixels / height;

    $("div.progress").css("width", progress + "%");
});