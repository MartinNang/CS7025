let i = 1; // starting with the second image, because the page is already loaded with the first image

$.ajax({
    url: "assets/js/images.json",
    type: 'GET',
    success: function(data) {
        console.log("test");
        if (data) {
            updateSlideImage(data[i++]);
            console.log("url:", data[i].url);
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
    
    // check if window width is smaller than 600px
    if (window.innerWidth <= 600) {
        console.log("window width", window.innerWidth);
        slideshowImg.css("object-position", "center " + image.yposition);
        slideshowImg.css("width", "100%");
        slideshowImg.css("object-fit", "cover");
        slideshowImg.css("overflow", "hidden");
    }
}
