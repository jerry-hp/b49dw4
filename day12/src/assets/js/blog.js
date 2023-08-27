let dataBlog = [];

function postToBlog(event) {
  event.preventDefault();
  let title = document.getElementById("projectName-input").value;
  let startDate = document.getElementById("startDate-input").value;
  let endDate = document.getElementById("endDate-input").value;
  let description = document.getElementById("description-input").value;
  let nodeJs = document.getElementById("nodeJs-input").checked ? `<i class="fa-brands fa-node"></i>` : "";
  let reactJs = document.getElementById("reactJs-input").checked ? `<i class="fa-brands fa-react"></i>` : "";
  let nextJs = document.getElementById("nextJs-input").checked ? `<i>next JS</i>` : "";
  let typescript = document.getElementById("typescript-input").checked ? `<i class="bx bxl-typescript"></i>` : "";
  let image = document.getElementById("image-input").files;
  image = URL.createObjectURL(image[0]);

  if (title == "") {
    return alert("fill your Project Name,Please!");
  } else if (startDate == "") {
    return alert("fill start date!");
  } else if (endDate == "") {
    return alert("fill end date!");
  } else if (description == "") {
    return alert("fill your Masage,Please!");
  } else if (nodeJs == "") {
    if (reactJs == "") {
      if (nextJs == "") {
        if (typescript == "") {
          return alert("fill at less one Technology!");
        }
      }
    }
  } else if (image == "") {
    return alert("insert a image, Please!");
  }

  if (startDate > endDate) {
    return alert("you filled impossile date (start > end )");
  }

  let mulai = new Date(startDate);
  let berakhir = new Date(endDate);

  let distance = berakhir.getTime() - mulai.getTime();
  let days = distance / (1000 * 3600 * 24);
  let weeks = Math.floor(days / 7);
  let months = Math.floor(weeks / 4);
  let years = Math.floor(months / 12);
  let duration = "";

  if (days > 0) {
    duration = days + " Hari";
  }
  if (weeks > 0) {
    duration = weeks + " Minggu";
  }
  if (months > 0) {
    duration = months + " Bulan";
  }
  if (years > 0) {
    duration = years + " Tahun";
  }

  let Blog = {
    title,
    duration,
    description,
    nodeJs,
    reactJs,
    nextJs,
    typescript,
    image,
  };

  dataBlog.unshift(Blog);
  renderBlog();
}

function renderBlog() {
  document.querySelector("div.blogsContainer").innerHTML = "";

  for (let i = 0; i < dataBlog.length; i++) {
    document.querySelector("div.blogsContainer").innerHTML += `<div class="cardContainer">
  <img src="${dataBlog[i].image}" />
  <h4> ${dataBlog[i].title}</h4>
  <h6>${dataBlog[i].duration}</h6>
  <p>
  ${dataBlog[i].description}
  </p>
  <p>${dataBlog[i].reactJs} ${dataBlog[i].nodeJs}${dataBlog[i].nextJs}${dataBlog[i].typescript}</p>
  <div class="buttonContainer">
    <button>Edit</button>
    <button>Delete</button>
  </div>
</div>`;
  }
}
