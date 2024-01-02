// const { MongoClient } = require('mongodb');
// or as an es module:
import { MongoClient } from "mongodb";

// Connection URL
const url =
  "mongodb+srv://admin:UtgPRvEFDb2r8Qc@yourcode.pi3ksah.mongodb.net/?retryWrites=true&w=majority";

// Database Name
const dbName = "YourCodeDB";

// Create Mongo Client
const client = new MongoClient(url);

// Use connect method to connect to the server
await client
  .connect()
  .then(() => {
    console.log("Connected successfully to server");
  })
  .catch(() => {
    console.log("Failed to connect to server");
  });

// Create Database
const db = client.db(dbName);

// create table tor food menu
export const usersTable = db.collection("user");
