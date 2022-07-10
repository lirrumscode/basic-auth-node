const userAuthentication = require("../../models/model");

/**
 * It takes two parameters, email and password, and returns a string with a message if the email and
 * password are correct or not
 * @param email - The email of the user.
 * @param password - The password of the user.
 * @returns a string with the name of the user if the email and password are corrects, if not, it will
 * return a string with an error message.
 */

const logInUser = async (email, password) => {
  try {
    const validation = await userAuthentication.filter(
      (element) => element.email === email && element.password === password
    );
    if (validation !== []) {
      const data = validation.find((res) => res);
      if (data !== undefined) {
        return `Email and Password are corrects, WELCOME TO LoginApp user: ${data.name}${data.lastname}`;
      } else {
        return `Email or Password incorrect, please try again`;
      }
    } else {
      throw `Email or Password incorrect, please try again`;
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { logInUser };
