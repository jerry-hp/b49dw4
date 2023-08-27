//import package/framework
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

//setup template engine (handlebars)
app.set("view engine", "html");
app.engine("html", require("hbs").__express);
app.set("views", path.join(__dirname, "src/views"));

//accessing static file
app.use(express.static("src/assets"));

//parsing data from client
app.use(express.urlencoded({ extended: false }));

// routing
app.get("/", home);
app.get("/myProject", myProject);
app.post("/myProject", addProject);
app.get("/myTestimonials", myTestimonials);
app.get("/contact", contact);
app.get("/blogDetail", blogDetail);

//setup localhost
app.listen(port, () => console.log(`server udah jalan pada port ${port}`));

//callback
function home(req, res) {
  res.render("index");
}
function myProject(req, res) {
  res.render("myProject");
}
function addProject(req, res) {
  const title = req.body.title;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const content = req.body.content;
  const nodejs = req.body.nodejs;
  const reactjs = req.body.reactjs;
  const nextjs = req.body.nextjs;
  const typescript = req.body.typescript;

  console.log(title);
  console.log(startDate);
  console.log(endDate);
  console.log(content);
  console.log(nodejs);
  console.log(reactjs);
  console.log(nextjs);
  console.log(typescript);
}
function myTestimonials(req, res) {
  res.render("My Testimonials");
}
function contact(req, res) {
  res.render("contactMe");
}
function blogDetail(req, res) {
  res.render("blogDetail");
}
