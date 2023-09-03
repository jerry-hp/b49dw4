//import package/framework
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bcrypt = require("bcrypt"); //used to hash pasword
const session = require("express-session");
const flash = require("express-flash");

//setup template engine (handlebars)
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

//accessing static file
app.use(express.static("src/assets"));

//parsing data from client
app.use(express.urlencoded({ extended: false }));

// Sequelize init(connect to postgresql)
const config = require("./src/config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);

// Flash setup
app.use(flash());

//setup session
app.use(
  session({
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 2,
    },
    store: new session.MemoryStore(),
    saveUninitialized: true,
    resave: false,
    secret: "secretValue",
  })
);

// routing
app.get("/", home);
app.get("/myProject", myProject);
app.post("/myProject", addProject);
app.get("/contact", contact);
app.get("/blogDetail/:id", blogDetail);
app.get("/delete-blog/:id", deleteBlog);
app.get("/edit-blog/:id", updateBlog);
app.post("/edit-blog/:id", editProject);
//routing for register and login
app.get("/register", register);
app.post("/register", dataRegister);
app.get("/login", login);
app.post("/login", dataLogin);
app.get("/logout", logout);

//setup localhost
app.listen(port, () => console.log(`server udah jalan pada port ${port}`));

//callback
async function home(req, res) {
  try {
    const query = `SELECT * FROM db_projects;`;
    let obj = await sequelize.query(query, { type: QueryTypes.SELECT });
    // console.log(obj);
    const data = obj.map((res) => ({
      ...res,
      isLogin: req.session.isLogin,
      user: req.session.user,
    }));
    res.render("index", { projectData: data, isLogin: req.session.isLogin, user: req.session.user });
  } catch (error) {
    console.log(error);
  }
}

function register(req, res) {
  res.render("register");
}

async function dataRegister(req, res) {
  try {
    const { name, email, password } = req.body;
    const salt = 10;

    await bcrypt.hash(password, salt, (err, hashPassword) => {
      sequelize.query(`INSERT INTO users(name,email,password,"createdAt","updatedAt")
      Values('${name}','${email}','${hashPassword}',NOW(),NOW())`);
    });
    res.redirect("login");
  } catch (error) {
    console.log(error);
  }
}

function login(req, res) {
  res.render("login");
}

async function dataLogin(req, res) {
  try {
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE email='${email}'`;
    const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
    console.log(obj);

    if (!obj.length) {
      req.flash("danger", "User has not registered yet!");
      return res.redirect("/login");
    }

    await bcrypt.compare(password, obj[0].password, (err, result) => {
      if (!result) {
        req.flash("danger", "Password is wrong!");
        return res.redirect("/login");
      } else {
        req.session.isLogin = true;
        req.session.user = obj[0].name;
        req.flash("succes", "Login succes!");
        res.redirect("/");
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function myProject(req, res) {
  res.render("myProject", { isLogin: req.session.isLogin, user: req.session.user });
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

async function addProject(req, res) {
  try {
    var { title, startdate, enddate, content, nodejs, nextjs, reactjs, typescript } = req.body;

    const Duration = duration(startdate, enddate);

    if (nodejs == "on") {
      nodejs = true;
    } else {
      nodejs = false;
    }
    if (nextjs == "on") {
      nextjs = true;
    } else {
      nextjs = false;
    }
    if (reactjs == "on") {
      reactjs = true;
    } else {
      reactjs = false;
    }
    if (typescript == "on") {
      typescript = true;
    } else {
      typescript = false;
    }

    await sequelize.query(
      `INSERT INTO db_projects(title, start_date, end_date, duration, content, nodejs, reactjs, nextjs, typescript, image, "createdAt", "updatedAt") 
      VALUES ('${title}', '${startdate}', '${enddate}', '${Duration}','${content}', '${nodejs}', '${reactjs}', '${nextjs}', '${typescript}', 'https://media.istockphoto.com/id/1455657729/id/foto/peretas-afrika-amerika-menanam-virus-trojan-untuk-mencuri-data.jpg?s=612x612&w=0&k=20&c=NsFCuo56A8ztXRsJfNpHIGtxe791Zp039iWzK-cJ4PI=', NOW(), NOW())`
    );

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
}

async function deleteBlog(req, res) {
  try {
    const { id } = req.params;

    await sequelize.query(`DELETE FROM db_projects WHERE id=${id}`);

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
}

async function updateBlog(req, res) {
  try {
    const id = req.params.id;
    const query = `SELECT * FROM db_projects WHERE id=${id}`;

    let obj = await sequelize.query(query, { type: QueryTypes.SELECT });
    res.render("editProject", { home: obj[0], isLogin: req.session.isLogin, user: req.session.user });
  } catch (error) {
    console.log(error);
  }
}

async function editProject(req, res) {
  const { id } = req.params;
  let { title, startdate, enddate, content, nodejs, nextjs, reactjs, typescript } = req.body;
  const Duration = duration(startdate, enddate);

  if (nodejs == "on") {
    nodejs = true;
  } else {
    nodejs = false;
  }
  if (nextjs == "on") {
    nextjs = true;
  } else {
    nextjs = false;
  }
  if (reactjs == "on") {
    reactjs = true;
  } else {
    reactjs = false;
  }
  if (typescript == "on") {
    typescript = true;
  } else {
    typescript = false;
  }

  await sequelize.query(`UPDATE public.db_projects
    SET id=${id}, title='${title}', start_date='${startdate}', end_date='${enddate}', duration='${Duration}', content='${content}', nodejs='${nodejs}', reactjs='${reactjs}', nextjs='${nextjs}', typescript='${typescript}', image='https://media.istockphoto.com/id/1455657729/id/foto/peretas-afrika-amerika-menanam-virus-trojan-untuk-mencuri-data.jpg?s=612x612&w=0&k=20&c=NsFCuo56A8ztXRsJfNpHIGtxe791Zp039iWzK-cJ4PI=', "createdAt"=NOW(), "updatedAt"=NOW()
    WHERE id=${id};`);

  res.redirect("/");
}
function contact(req, res) {
  res.render("contactMe", { isLogin: req.session.isLogin, user: req.session.user });
}
async function blogDetail(req, res) {
  try {
    let { id } = req.params;
    id++;
    const query = `SELECT * FROM db_projects Where id='${id}';`;
    let obj = await sequelize.query(query, { type: QueryTypes.SELECT });
    console.log(obj);
    res.render("blogDetail", { data: obj[0], isLogin: req.session.isLogin, user: req.session.user });
  } catch (error) {
    console.log(error);
  }
}

function logout(req, res) {
  req.session.destroy();
  res.redirect("/");
}
