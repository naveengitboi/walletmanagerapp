export const errorHandler = async (msg, code, res) => {
    const errorObj = {
        message: msg,
        statusCode: code,
        response: res
    }
    return errorObj
}
