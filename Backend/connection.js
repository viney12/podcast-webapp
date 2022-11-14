const mongoose = require('mongoose');

const dbName = "myprojectdb";
const url = `mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;
