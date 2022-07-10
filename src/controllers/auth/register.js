const userAuthentication = require("../../models/model");

/**
 * The function registerUser() takes an array of objects as an argument, and returns a string with the
 * user's name and lastname if the user is registered successfully, or a string with an error message
 * if the user can't be registered
 * @param data - This is the data that is passed to the function.
 * @returns a string with the name of the user and a message.
 */

const registerUser = async (data) => {
  try {
    const stores = await data.reduce((element) => element);
    if (
      stores.name &&
      stores.lastname &&
      stores.email &&
      stores.password &&
      stores.job_position &&
      stores.tools &&
      stores.birthday
    ) {
      const store = [userAuthentication, ...data];
      if (store) {
        return `User: ${stores.name} ${stores.lastname}, register succesfully, Please signIn in loginApp!`;
      } else {
        return `User can't register, please fill the required fields`;
      }
    } else {
      throw `User can't register, please fill all the required fields`;
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { registerUser };
