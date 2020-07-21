const mongoose = require('mongoose');
const uri = process.env.MONGO_URI

const connectDatabase = () => {
    mongoose.connect(uri, {

        useNewUrlParser: true,
        useFindAndModify : false,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Bağladın');
        })
        .catch(err =>{
            console.log(err)
        })
}

module.exports = connectDatabase; 