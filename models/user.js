const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const UserModel= new Schema({
    UserName:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
        minlength: 6,
        maxlenght: 64,
        select: false // Kullanıcı çekince şifrenin gözükmesini enelliyor
    },
    email:{
        type: String,
        require: true,
        unique: true, //Tek mail ile kayd olunacak bunu sağlıyor
        // Burası sadece gmail hotmail olmasını sağlıyor
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/] 
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        default: 'Kullanıcı'
    },
    Block: {
        type: Boolean,  
        default: false
    }
});

UserModel.pre('save', function(next){

    //Kullanıcı modeli kayd olmadan hemen once burası çalışacak
    //sonra model kaydolacak

     if(!this.isModified("password")){

         //parola değişmemişse burası çalışacak
         //Diğer işlemler değişmişse
         return next();
     }

     bcrypt.genSalt(10, (err, salt) => {
        if(err) next(err);
        bcrypt.hash(this.password, salt, (err, hash) => {
            if(err) next(err);
            this.password = hash;
             next();
         });
     })
});
const User = mongoose.model("User",UserModel);

module.exports = User;