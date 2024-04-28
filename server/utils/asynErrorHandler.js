
const asyncErrorHandler = (passedFunc) => {

    return (req, res, next) => {
        Promise.resolve(passedFunc(req, res, next)).catch(err => next(err))
    }

}

export default asyncErrorHandler;