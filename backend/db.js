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
        //creating connection with the remote collection. Displaying the newly connected collection data
        //passing the newly remote collection name
        const fetched_data = await mongoose.connection.db.collection(
          'food_items'
        );

        fetched_data.find({}).toArray(function (err, data) {
          if (err) console.log(err);
          //console.log(data);
          else {
            //By declaring global variable, we can use/update it anywhere in our application
            global.foodItems = data;
            console.log(global.foodItems);
          }
        });
      }
    }
  );
};

//exporting
module.exports = mongoDB;
