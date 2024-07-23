const errorMiddleware = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.message = error.message || "Internal Server baby dude Error!!!";

  res.status(error.statusCode).json({
    message: error.message,
    status: error.statusCode
  })
}

export default errorMiddleware
