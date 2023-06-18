const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://mishraajay2656:mahi@cluster0.elph3fd.mongodb.net/YourFoodCart?retryWrites=true&w=majority`;

const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('connection is successfully established');
        //creating connection with the collection. Display its data
        const fetched_data = await mongoose.connection.db.collection(
          'food_items'
        ); //passing the collection name

        console.log(
          fetched_data.find({}).toArray(function (err, data) {
            if (err) console.log(err);
            //console.log(data);
            else console.log(data.length);
          })
        );
      }
    }
  );
};

//exporting
module.exports = mongoDB;
