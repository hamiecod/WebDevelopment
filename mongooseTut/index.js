const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hargunCart', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.log.bind(console.log, 'connection error'));
db.once('open', ()=>{
    console.log("We are connected bro...");
});