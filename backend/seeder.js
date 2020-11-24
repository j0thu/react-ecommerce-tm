import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

//Feeding Data 
const importData = async()=>{
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users); //inserting the users data into the table
        const adminUser = createdUsers[0]._id; //The admin user is in the first position
        const sampleProducts = products.map(product=>{
            return {...product, user:adminUser} //creating a new field user and adding the admin user as the user
        })
        await Product.insertMany(sampleProducts);
        console.log('Data Imported'.green.inverse);
        process.exit();
    }
    catch(err){
        console.log(`Error: ${err}`.red.inverse);
        process.exit(1); //exiting with failure
    }
}

//Destroying Data
const destroyData = async()=>{
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed'.red.inverse);
        process.exit();
    }
    catch (err) {
       console.log(`Error: ${err}`.red.inverse);
       process.exit(1); 
    }
}

if(process.argv[2]=== '-d'){
    destroyData();
}
else{
    importData();
}