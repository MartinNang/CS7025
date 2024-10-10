let randomPosterUrls = [
  "https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-montague/usr/images/artists/group_images_override/items/bd/bd762670799d447a8742b8145f614b0d/dsc_5932-1.jpg",
  "https://d7hftxdivxxvm.cloudfront.net/?height=536&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2Fwd1IN7ZwWgdSbCnpIhYEZA%2Flarger.jpg&width=445",
  "https://contemporaryand.com/wp-content/uploads/2024/05/WANJI-IN-BETWEEN-VISITS-2024.jpg"
];

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hi console!");

  let posterImage = document.getElementById("randomPoster");
  let button = document.getElementById("randomPosterButton");

  button.addEventListener("click", () => {
    // this happens when you click the button
    let randomNumber = generateRandomNumber(3);
    let randomPosterUrl = randomPosterUrls[randomNumber];
    
    posterImage.setAttribute("src", randomPosterUrl);
  }
  );
});

// generate a random integer between zero and max (including zero, but not including max)
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
};