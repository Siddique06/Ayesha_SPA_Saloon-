const {DB_Username,DB_Password,DB_Name}=process.env;

export const URI="mongodb+srv://"+DB_Username+":"+DB_Password+"@cluster0.ubfegbg.mongodb.net/"+DB_Name+"?retryWrites=true&w=majority";