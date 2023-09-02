const testimonialsData = [
  {
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Well done broo!",
    author: "- Justin Nasrul ",
    rating: 4,
  },
  {
    img: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "ya elah, apaaan tuh?",
    author: "- Anonymous",
    rating: 1,
  },
  {
    img: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Good Job abangku,diluar prediksi nasa",
    author: "- Albert Dermawan",
    rating: 5,
  },
  {
    img: "https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Hmmm",
    author: "- Rahmawati",
    rating: 3,
  },
  {
    img: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600",
    quote: "Artinya apa bang messi?",
    author: "- Vinicius jr.",
    rating: 4,
  },
];

function allTestimonials() {
  document.getElementById("testimonials").innerHTML = "";
  testimonialsData.forEach(function (e) {
    document.getElementById("testimonials").innerHTML += `
    <div class="testimonial">
              <img src="${e.img}" alt="foto">
              <i>"${e.quote}"</i>
              <b>${e.author}</b>
              <b>${e.rating}<i class="fa-solid fa-star"></i></b>
          </div>`;
  });
}
allTestimonials();

function filter(rating) {
  document.getElementById("testimonials").innerHTML = "";

  const filteredData = testimonialsData.filter(function (e) {
    return e.rating === rating;
  });

  if (filteredData.length === 0) {
    document.getElementById("testimonials").innerHTML = `<h4>There is no Data with this star</h4>`;
  } else {
    filteredData.forEach(function (e) {
      document.getElementById("testimonials").innerHTML += `
        <div class="testimonial">
                  <img src="${e.img}" alt="foto">
                  <i>"${e.quote}"</i>
                  <b>${e.author}</b>
                  <b>${e.rating}<i class="fa-solid fa-star"></i></b>
              </div>`;
    });
  }
}
