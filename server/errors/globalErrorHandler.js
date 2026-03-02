import dotenv from "dotenv";
dotenv.config();

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  // during development send stack trace
  if (process.env.NODE_ENV === "development") {
    return res.json({
      status: "error",
      message: err.message,
      stack: err.stack,
      error: err,
    });
  }

  // for production send just important information
  res.status(err.statusCode).json({
    status: "error",
    message: err.isOperational ? err.message : "Something went wrong",
  });
};

export default globalErrorHandler;
