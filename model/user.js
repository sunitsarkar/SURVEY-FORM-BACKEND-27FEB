const mongoose=require('mongoose');

/*
this model is for storing the user profile details when one tryes to registrer
such as name,password,

when someonr tries to login we shall compare his credentials with the db and will authorise the user

*/

const User=mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    profession : String,
    password: Number,
    confirmPassword: Number

})

module.exports=mongoose.model('User',User)