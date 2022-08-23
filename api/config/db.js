import mongoose from "mongoose";


// create a mongdb connection
const mongdbConnect =async () =>{
    try{
        const connection = await mongoose.connect(process.env.MONGDB_KEY);
        console.log(`MONGDB Connect Successfull`.bgBlue.black);
    }catch(error){
        console.log(error);
    }
}

// export default 
export default mongdbConnect;