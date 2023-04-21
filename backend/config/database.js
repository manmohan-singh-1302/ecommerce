const mongoose = require("mongoose");

const connectDataBase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      //   useNewunifiedParser: true,
      //   UseCreateIndex: true,s
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb Connected with server: ${data.connection.host}`);
    });
  // .catch((err) => {
  //   console.log(err);
  // });
};

module.exports = connectDataBase;
