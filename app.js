const Koa = require("koa");
const app = new Koa();
const json = require("koa-json");
const bodyparser = require("koa-bodyparser");
const log4 = require('./utils/log4')
const users = require("./routes/users");

//加载数据库
require('./config/db')
// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(require("koa-static")(__dirname + "/public"));

// routes
app.use(users.routes(), users.allowedMethods());

app.on("error", (err, ctx) => {
  log4.error(err)
});

module.exports = app;
