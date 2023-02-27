//config.js for using our database and node environment

/*
The benefit of using config.js is that when we deploy our app than our secret key 
as well as our database will work globally not locally that we are using now.

*/

const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default: {
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb://localhost:27017/Users'
    }
}


exports.get = function get(env) {
    return config[env] || config.default
}



