const testimonialsData = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "https://api.npoint.io/87611df24b90198261c3", true);
  xhr.onload = () => {
    if (xhr.status == 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("error loading data");
    }
  };
  xhr.onerror = () => {
    reject("network error");
  };

  xhr.send();
});

async function allTestimonials() {
  try {
    document.getElementById("testimonials").innerHTML = "";
    const response = await testimonialsData;
    response.forEach(function (e) {
      document.getElementById("testimonials").innerHTML += `
      <div class="testimonial">
                <img src="${e.img}" alt="foto">
                <i>"${e.quote}"</i>
                <b>${e.author}</b>
                <b>${e.rating}<i class="fa-solid fa-star"></i></b>
            </div>`;
    });
  } catch (error) {
    console.log("error bos");
  }
}
allTestimonials();

async function filter(rating) {
  try {
    document.getElementById("testimonials").innerHTML = "";
    const response = await testimonialsData;
    const dataFiltered = response.filter((e) => {
      return e.rating == rating;
    });

    if (dataFiltered.length == 0) {
      document.getElementById("testimonials").innerHTML = `<h4>There is no Data with this star</h4>`;
    } else {
      dataFiltered.forEach((e) => {
        document.getElementById("testimonials").innerHTML += `
        <div class="testimonial">
                  <img src="${e.img}" alt="foto">
                  <i>"${e.quote}"</i>
                  <b>${e.author}</b>
                  <b>${e.rating}<i class="fa-solid fa-star"></i></b>
              </div>`;
      });
    }
  } catch (error) {
    console.log(error);
  }
}
