const notFound = ((req, res, next)=>{
    const error = new Error(`Not Found - ${req.originalUrl}`); //Creating a new error for 404 messages
    res.status(404);
    next(error);
});

const errorHandler  = ((err, req, res, next)=>{
    const statusCode = res.statusCode === 200 ? 500:res.statusCode;
    res.status(statusCode); //setting the status code, there are chances that errors can occur even with 200 status
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack, //We only need this in production mode 
    })
});

export {notFound, errorHandler};