

// create error
const errorCreate = (status, msg) =>{
    const err = new Error();
    err.status = status;
    err.message = msg;
    return err;
};

// export error
export default errorCreate;