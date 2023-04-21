const app = require("./app");
const dotenv = require("dotenv");
const connectDataBase = require("./config/database");

//Handling uncaught exception

process.on("uncaughtException",(err)=>{
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught exception`);
  process.exit(1);
})
//config

dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDataBase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

//Handling unhandled  promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error; ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
