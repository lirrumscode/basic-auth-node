const { logInUser } = require("../controllers/auth/login.js");
const { registerUser } = require("../controllers/auth/register.js");
const colors = require("colors");

/* ==========================================
 * A test for the register and login functions.
 * ===========================================
 */
setTimeout(() => {
  registerUser([
    {
      name: "User",
      lastname: "New",
      email: "user@mail.com",
      password: "admin1234567",
      job_position: ["FullStack Developer"],
      tools: ["NodeJS", "PHP", "Ubuntu Touch", "Linux"],
      birthday: "1996-12-10",
    },
  ])
    .then((res) => console.log(colors.bgGreen(res)))
    .catch((res) => console.log(colors.bgRed(res)));

  logInUser("lirrumscode@mail.com", "admin12345")
    .then((res) => {
      console.log(colors.bgBlue(res));
    })
    .catch((res) => {
      console.log(colors.bgRed(res));
    });
}, 2000);
