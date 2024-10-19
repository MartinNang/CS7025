let i = 0;

$.ajax({
    url: "assets/js/images.json",
    type: 'GET',
    success: function(data) {
        console.log("test");
        if (data) {
            updateSlideImage(data[i++]);
            window.setInterval(() => {
                if (i == data.length)
                {
                    i = 0;
                }
                updateSlideImage(data[i++]);
            }, 5000);            
        }
    }
});

function updateSlideImage(image) {
    console.log("updating slide image to", image.url);

    let slideshowImg = $("#slideshow-image");
    slideshowImg.attr("src", image.url);
    slideshowImg.attr("alt", image.description);

    let bgText = $("#bg-text");
    
    // make image fullscreen and remove background text if window width is smaller than 600px
    if (window.innerWidth <= 600) {
        console.log("window width", window.innerWidth);
        slideshowImg.css("object-position", `center ${image.yposition}`);
        slideshowImg.css("width", "100%");
        slideshowImg.css("height", "100%");
        slideshowImg.css("object-fit", "cover");

        bgText.text("");    
    }
    else {
        slideshowImg.css("width", "");
        slideshowImg.css("height", "700px");
        bgText.text(image.title);
    }
}
