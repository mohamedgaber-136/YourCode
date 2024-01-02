import mongoose from "mongoose";

const dataBaseURL =
  "mongodb+srv://admin:UtgPRvEFDb2r8Qc@YourCodeDB.pi3ksah.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(dataBaseURL, { dbName: "DatabaseName" })
  .then(() => {
    console.log("connected to database successfully");
  })
  .catch(() => {
    console.log("error connecting to database, something went wrong");
  });

const schema = mongoose.Schema;

const bookModel = new schema({
  title: String,
  author: String,
  pages: Number,
  language: Array,
  description: String,
});
export const booksTable = mongoose.model("book", bookModel);

const productModel = new schema({
  name: String,
  description: String,
  price: Number,
  rate: Number,
  country: String,
  reviews: Array,
});

export const productsTable = mongoose.model("product", productModel);
