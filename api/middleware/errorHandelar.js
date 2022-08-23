

//error handelar
const errorHandelar = (error, req, res, next) =>{

    const errorStatus = error.status || 500;
    const errorMessage = error.message || 'unKnown error';

    return res.status(errorStatus).json({
        message : errorMessage,
        status : errorStatus,
        stack : error.stack
    })

};

//export errorHandelar
export default errorHandelar;