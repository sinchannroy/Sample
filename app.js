const mongoose = require ("mongoose");

main().catch (err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test" , { useNewUrlParser: true });
}


const fruitSchema = new mongoose.Schema ( {
    name: {
        type: String,
        required: [true , "Please check your data entry, no name specified!"]
    },

    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model ("Fruit" , fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 34,
    review: "Pretty solid as a fruit."
});

fruit.save ();

const kiwi = new Fruit ({
    name: "Kiwi",
    score: 10,
    review: "The best fruit"
});

const orange = new Fruit ({
    name: "Orange",
    score: 4,
    review: "Too sour for me"
});

const banana = new Fruit ({
    name: "Banana",
    score: 3,
    review: "Weird texture"
});

Fruit.insertMany ([kiwi , orange, banana]).then(function (err) {
    if (err) {
        console.log (err);
    }

    else {
        console.log ("Succesfully saved all the fruits to fruitsDB");
    }
});

const personSchema = new mongoose.Schema ( {
    name: {
        type: String,
        required: [true , "Please check your data entry, no name specified!"]
    },
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model ("Person" , personSchema);

const pineapple = new Fruit ({
    name: "Pineapple",
    score: 9,
    review: "Great fruit"
});

pineapple.save ();

const person = new Person ({
    name: "John",
    age: 37,
    favouriteFruit: pineapple
});

person.save ();

const mango = new Fruit ({
    name: "Mango",
    score: 8,
    review: "Yummy"
});

mango.save ();

const amy = new Person ({
    name: "Amy",
    age: 28,
    favouriteFruit: mango
});

amy.save ();

