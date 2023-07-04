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
        //creating connection with the remote collection known as food_items. Displaying the newly connected collection data
        //passing the newly remote collection name
        const fetched_data = await mongoose.connection.db.collection(
          'food_items'
        );

        fetched_data.find({}).toArray(async function async(err, data) {
          if (err) {
            console.log(
              'server error - unable to connect to food_items collection :',
              err
            );
          } else {
            console.log('successfully connected to food_items collection');

            //By declaring global variable, we can use/update it anywhere in our application
            global.foodItems = data;
            // console.log(global.foodItems);
          }
        });
        //creating another connection with the another remote collection known as foodCategory. Displaying the newly connected collection data.
        //passing the newly remote collection name
        const foodCategoryItems = await mongoose.connection.db.collection(
          'food_category'
        );

        foodCategoryItems.find({}).toArray(function (err, catData) {
          if (err) {
            console.log(
              'server error - unable to connect to food_category collection :',
              err
            );
          } else {
            console.log('successfully connected to food_category collection');
            global.foodCategory = catData;
          }
        });
      }
    }
  );
};

//exporting
module.exports = mongoDB;
