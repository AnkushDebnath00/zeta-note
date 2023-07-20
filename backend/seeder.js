import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import notes from "./data/notes.js";
import User from "./models/userModel.js";
import Note from "./models/noteModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Note.deleteMany(); // delete all notes
    await User.deleteMany(); // delete all users

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id; // get admin user id

    const sampleNotes = notes.map((note) => {
      return { ...note, user: adminUser }; // add admin user to each note
    });

    await Note.insertMany(sampleNotes); // insert sample notes

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Note.deleteMany(); // delete all notes
    await User.deleteMany(); // delete all users

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData(); // destroy data
} else {
  importData(); // import data
}
