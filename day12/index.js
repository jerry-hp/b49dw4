//import package/framework
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

//setup template engine (handlebars)
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

//accessing static file
app.use(express.static("src/assets"));

//parsing data from client
app.use(express.urlencoded({ extended: false }));

//dummy data
const projectData = [
  {
    //  id: 1,
    image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "Ayo ngoding!",
    Duration: "8 days",
    startdate: "2023-08-26",
    enddate: "2023-09-03",
    content:
      "Coding adalah salah satu tindakan dari langkah-langkah pemrograman dengan menuliskan kode atau skrip dalam bahasa pemrograman. Supaya skrip tersebut dapat dipahami oleh komputer, maka saat proses coding kamu harus mengikuti aturan sintaks yang berlaku.Sempat disinggung sebelumnya, bahwa saat kamu menuliskan kode saat ngoding kamu harus memperhatikan aturan sintaks. Aturan sintaks ini sangat penting untuk kamu patuhi. Karena komputer merupakan mesin yang hanya mampu menerima kode atau perintah yang kamu masukkan. Apabila kamu tidak menuliskan kode sesuai dengan aturan sintaks dan ada kode yang salah kamu tulis, maka perintah yang kamu tulis tidak dapat dijalankan oleh komputer.",
    nodejs: "on",
    reactjs: "on",
    nextjs: "",
    typescript: "",
  },
  {
    // id: 2,
    image: "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "become a fullstack developer",
    Duration: "3 days",
    startdate: "2023-08-27",
    enddate: "2023-08-30",
    content:
      "A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets.The world of full-stack development is large, and many new and evolving technologies continually push the limits of what a full-stack developer can create. Staying on top of cutting-edge technology and techniques in the full-stack development field is one of the many exciting aspects of working in this role.",
    nextjs: "",
    nodejs: "",
    reactjs: "",
    nextjs: "",
    typescript: "on",
  },
];

// routing
app.get("/", home);
app.get("/myProject", myProject);
app.post("/myProject", addProject);
app.get("/myTestimonials", myTestimonials);
app.get("/contact", contact);
app.get("/blogDetail/:id", blogDetail);
app.get("/delete-blog/:id", deleteBlog);
app.get("/edit-blog/:id", updateBlog);
app.post("/edit-blog/:id", editProject);

//setup localhost
app.listen(port, () => console.log(`server udah jalan pada port ${port}`));

//callback
function home(req, res) {
  res.render("index", { projectData });
}
function myProject(req, res) {
  res.render("myProject");
}

function duration(startDate, endDate) {
  let start = new Date(startDate);
  let end = new Date(endDate);

  let difference = end - start;
  let day = difference / (1000 * 3600 * 24);
  let week = Math.floor(day / 7);
  let month = Math.floor(week / 4);
  let year = Math.floor(month / 12);
  var durasi = "";

  if (day > 0) {
    durasi = `${day} days`;
  }
  if (week > 0) {
    durasi = `${week} weeks`;
  }
  if (month > 0) {
    durasi = `${month} months`;
  }
  if (year > 0) {
    durasi = `${year} years`;
  }
  return durasi;
}

function addProject(req, res) {
  var { title, startdate, enddate, content, nodejs, nextjs, reactjs, typescript } = req.body;
  const Duration = duration(startdate, enddate);

  const blog = {
    image: "https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title,
    content,
    Duration,
    startdate,
    enddate,
    nodejs,
    nextjs,
    reactjs,
    typescript,
  };

  res.redirect("/");
}
function deleteBlog(req, res) {
  const { id } = req.params;

  projectData.splice(id, 1);
  res.redirect("/");
}
function updateBlog(req, res) {
  const { id } = req.params;

  res.render("editProject", { home: projectData[id] });
}

function editProject(req, res) {
  const { id } = req.params;
  var { title, startdate, enddate, content, nodejs, nextjs, reactjs, typescript } = req.body;
  const Duration = duration(startdate, enddate);

  const editedData = {
    image: "https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title,
    content,
    Duration,
    startdate,
    enddate,
    nodejs,
    nextjs,
    reactjs,
    typescript,
  };
 
  projectData[id] = editedData;
  res.redirect("/");
}

function myTestimonials(req, res) {
  res.render("My Testimonials");
}
function contact(req, res) {
  res.render("contactMe");
}
function blogDetail(req, res) {
  const { id } = req.params;
  res.render("blogDetail", { data: projectData[id] });
}
