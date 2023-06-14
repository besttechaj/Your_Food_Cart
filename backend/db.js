const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://mishraajay2656:mahi@cluster0.elph3fd.mongodb.net/?retryWrites=true&w=majority`;

const mongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('connection is successfully established');
    }
  });
};

//exporting
module.exports = mongoDB;
