const {
  addUser,
  getAllUsers,
  updateUser,
  getUserById,
} = require("./singletables/users");

async function seed() {
  //creating a new user
  try {
    console.log("creating user one");
    const user1 = await addUser({
      firstName: "Nicolas",
      lastName: "Olivares",
      isAdmin: true,
      isUser: true,
      email: "myemail@you.com",
      password: "mypassword",
      addressLine1: "4545 street",
      addressLine2: "",
      city: "Jax",
      state: "Fl",
      zipcode: "32210",
      country: "USA",
      phone: "555-555-5555",
      creditCard: 45454545454545455,
    });
    console.log("this is user 1 ", user1);

    console.log("creating user two, login in with minimum info ");
    const user2 = await addUser({
      firstName: "Joe",
      lastName: "Moe",
      isAdmin: null,
      isUser: null,
      email: "myemail2@you.com",
      password: "password",
      addressLine1: null,
      addressLine2: null,
      city: null,
      state: null,
      zipcode: null,
      country: null,
      phone: null,
      creditCard: null,
    });
    console.log("user2 with minimum data ", user2);

    console.log(
      "creating user three, login in with minimum info and repeated email "
    );
    const user3 = await addUser({
      firstName: "Joe",
      lastName: "Moe",
      isAdmin: null,
      isUser: null,
      email: "myemail2@you.com",
      password: "password",
      addressLine1: null,
      addressLine2: null,
      city: null,
      state: null,
      zipcode: null,
      country: null,
      phone: null,
      creditCard: null,
    });
    console.log("user3 with minimum data ", user3);

    console.log("creating user four, missing info ");
    const user4 = await addUser({
      firstName: "Joe",
      lastName: "Moe",
      isAdmin: null,
      isUser: null,
      email: null,
      password: "password",
      addressLine1: null,
      addressLine2: null,
      city: null,
      state: null,
      zipcode: null,
      country: null,
      phone: null,
      creditCard: null,
    });
    console.log("user4 with minimum data ", user4);

    console.log("Running getAllUsers...");
    const allUsers = await getAllUsers();
    console.log("all users result: ", allUsers);

    console.log("Updating User 1...");
    const user5 = await updateUser({
      id: 2,
      isAdmin: false,
      isUser: true,
      email: "myemail2@you.com",
      password: "password",
      firstName: "Joe",
      lastName: "Moe",
      addressLine1: "1234 Anywhere",
      addressLine2: null,
      city: "Anywhere",
      state: "Florida",
      zipcode: "12345",
      country: null,
      phone: "123-456-7890",
      creditCard: 1234567891234567,
    });
    console.log("Updated User2", user5);

    console.log("Getting User By Id...");
    const user = await getUserById(1);
    console.log("Got user by id 1", user);
  } catch (error) {
    throw error;
  }
}

module.exports = { seed };
