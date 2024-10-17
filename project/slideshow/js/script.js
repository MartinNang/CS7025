let i = 0;

$.ajax({
    url: "js/images.json",
    type: 'GET',
    success: function(data) {
        if (data) {
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
    let slideShowDiv = $("#slideshow-image");
    slideShowDiv.css("background-image", `url(${image.url})`);
    
    // check if window width is smaller than 400px
    if (window.innerWidth <= 400) {
        slideShowDiv.css("background-position-x", image.xposition);
    }
}
