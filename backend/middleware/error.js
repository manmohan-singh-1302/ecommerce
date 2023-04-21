const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server error";

  //Handaling wrong mongodb ids errors

  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;

    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    //message:err.stack,  this will give the type of error and the location where the error has happened
    message: err.message,
  });
};
