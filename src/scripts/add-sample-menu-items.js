
require('dotenv').config();

const mongoose = require('mongoose');

const MenuItem = require('../models/menu.model');

// Sample menu items based on Cocina Bimpsy's menu

const menuItems = [

  {

    name: 'Jollof Rice with Chicken and Dodo',

    description: 'Flavorful West African rice dish cooked in tomato sauce, served with grilled chicken and sweet plantains (dodo).',

    price: 15.99,

    category: 'Main Dishes',

    imageUrl: 'https://via.placeholder.com/300',

    ingredients: ['Rice', 'Tomatoes', 'Chicken', 'Plantains', 'Spices'],

    isPopular: true,

    nutritionInfo: {

      calories: 650,

      protein: 35,

      carbs: 80,

      fats: 18

    },

    preparationTime: 25

  },

  {

    name: 'Grilled Chicken and Boli',

    description: 'Marinated grilled chicken served with roasted plantains (boli).',

    price: 13.99,

    category: 'Main Dishes',

    imageUrl: 'https://via.placeholder.com/300',

    ingredients: ['Chicken', 'Plantains', 'Spices', 'Herbs'],

    isPopular: false,

    nutritionInfo: {

      calories: 550,

      protein: 40,

      carbs: 45,

      fats: 15

    },

    preparationTime: 20

  },

  {

    name: 'Fried Rice with Dodo and Chicken',

    description: 'Perfectly seasoned fried rice complemented with fried sweet plantains and spicy chicken.',

    price: 14.99,

    category: 'Main Dishes',

    imageUrl: 'https://via.placeholder.com/300',

    ingredients: ['Rice', 'Mixed Vegetables', 'Chicken', 'Plantains', 'Spices'],

    isPopular: true,

    nutritionInfo: {

      calories: 680,

      protein: 32,

      carbs: 85,

      fats: 20

    },

    preparationTime: 22

  },

  {

    name: 'Plantain and Potato Asaro with Chicken',

    description: 'Traditional yam porridge made with plantains and potatoes, served with grilled chicken.',

    price: 12.99,

    category: 'Main Dishes',

    imageUrl: 'https://via.placeholder.com/300',

    ingredients: ['Plantains', 'Potatoes', 'Chicken', 'Palm Oil', 'Spices'],

    isPopular: false,

    nutritionInfo: {

      calories: 580,

      protein: 28,

      carbs: 75,

      fats: 16

    },

    preparationTime: 30

  },

  {

    name: 'Puff Puff with Grilled Chicken',

    description: 'African fried dough balls served with specially seasoned grilled chicken.',

    price: 11.99,

    category: 'Side Dishes',

    imageUrl: 'https://via.placeholder.com/300',

    ingredients: ['Flour', 'Sugar', 'Yeast', 'Chicken', 'Spices'],

    isPopular: true,

    nutritionInfo: {

      calories: 530,

      protein: 25,

      carbs: 65,

      fats: 22

    },

    preparationTime: 20

  },

  {

    name: 'Sopa Africana with Trigo Okele',

    description: 'Traditional African soup served with wheat dumplings.',

    price: 10.99,

    category: 'Side Dishes',

    imageUrl: 'https://via.placeholder.com/300',

    ingredients: ['Vegetables', 'Spices', 'Wheat Flour', 'Herbs'],

    isPopular: false,

    nutritionInfo: {

      calories: 420,

      protein: 12,

      carbs: 60,

      fats: 14

    },

    preparationTime: 25

  }

];

// Connect to MongoDB

mongoose.connect(process.env.MONGODB_URI)

  .then(async () => {

    console.log('Connected to MongoDB Atlas');

    

    try {

      // First delete any existing menu items

      await MenuItem.deleteMany({});

      console.log('Cleared existing menu items');

      

      // Insert the new menu items

      const result = await MenuItem.insertMany(menuItems);

      console.log(`Added ${result.length} menu items to the database`);

      

      mongoose.disconnect();

      console.log('Database connection closed');

    } catch (error) {

      console.error('Error adding menu items:', error);

    }

  })

  .catch(err => {

    console.error('Could not connect to MongoDB', err);

  });

