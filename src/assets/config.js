// helper method for handling properties that are lists of strings
function joinList(list) {
    return list.map((element) => { 
        return element.split(" ").map((word) => {
            return word.charAt(0).toUpperCase()+word.substring(1);
        }).join(" ");
    }).join(", ");
}

/* Menu Section Schema
sectionName: {
    title: "",
    header: "",
    options: [
        {
            name: "",
            price: "",
            description: "",
        },
    ],
  footer: "",
}

the menu is iterable with menu[menu.structure[index]];

*/

const menu = {
    specials: {
        title: "Specials",
        get header() {
            return `Specials are available from ${hours.specials.open} to ${hours.specials.close}`
        },
        options: [
            {
                name: "Breakfast Special",
                price: "7.99",
                description: "Two eggs, hash browns. Choice of: bacon, sausage (links or patty), or ham steak"
            },
            {
                name: "The Real Breakfast Special",
                price: "9.99",
                description: "Three eggs, bacon, sausage (two links or one patty), ham steak, hash browns, and toast. Free coffee!"
            },
            {
                name: "Cheeseburger Combo",
                price: "9.99",
                description: "Our quarter pound (1/4 lbs.) all-beef patty, cooked to order, and topped with American cheese - twice! Comes with fries and your choice of beverage"
            }
        ],
        get footer() {
            return "No substitutions."
        }
    },
    appetizers: {
        title: "Starters, Sides n' More",
        get header() {
            return `Sauces Available: ${menu.meta.sauces}`;
        },
        options: [
            {
                name: "Cheese Sticks",
                price: "6.49",
                description: "Logs of mozarella, breaded in-house, and deep fried. Served with choice of dipping sauce"
            },
            {
                name: "Onion Rings",
                price: "4.49",
                description: "Thick slices of sweet Vidalia onions in our tempura-inspired beer batter, served with our zesty horseradish sauce"
            },
            {
                name: "Hummus",
                price: "5.99",
                description: "Garnished roasted garlic and mint. Served with bakery-fresh pita"
            },
            {
                name: "Wing-A-Dings",
                price: "7.99",
                description: "Half-pound (1/2 lb.) boneless or bone-in wings, served with celery sticks. Your choice of sauce, wet or dry"
            },
            {
                name: "Super Nachos",
                price: "12.99",
                description: "A mountain of tortilla chips, seasoned ground beef, pickled jalapenos, black olives, pico de gallo, sour cream, and cheese. (Serves 2)"
            },
            {
                name: "Loaded Fries",
                price: "6.99",
                description: "Our famous french fries loaded with ground beef, chili, onions, cheese, and bacon"
            },
            {
                name: "Potato Fries or Tots",
                price: "3.99",
                description: "A serving of our famous french fries (or tots!)"
            },
            {
                name: "Cup of Soup or House Salad",
                price: "3.49",
                get description() {
                    return `Soups available: ${menu.meta.soups}. Dressings: ${menu.meta.dressings}. Be sure to ask your server about seasonal options`
                }
            }
        ],
        footer: "",
    },
    breakfast: {
        title: "Breakfast",
        header: "Available all day",
        options: [
            {
                name: "Build-Your-Own Omelette",
                price: "7.99",
                description: "A three-egg omelette with cheese, served with hash browns and toast. Add any meat for 0.99 and any vegetable for 0.49. Substitute egg-whites for 1.49"
            },
            {
                name: "Off The Griddle",
                price: "7.49",
                description: "Your choice of extra-large belgian waffle (1), hot cakes (3), or french toast (2). Add your choice of toppings for 1.99, add two eggs for 2.49"
            },
            {
                name: "Breakfast Meat",
                price: "4.49",
                description: "Choose between pork sausage links or patties, bacon, grilled ham steak, or turkey patties"
            },
            {
                name: "Corned Beef Hash",
                price: "6.49",
                description: "Fresh chopped, never canned"
            },
            {
                name: "Biscuits n' Gravy",
                price: "4.99 / 7.49",
                description: "A half- or full-order of our country style buttermilk biscuits topped with our homemade sausage gravy"
            }
        ],
        get footer() {
            return `${menu.meta.warnings.raw} ${menu.meta.warnings.server}`;
        },
    },
    lunch: {
        title: "Lunch",
        header: "Available all day",
        options: [
            {
                name: "BLT Sandwich",
                price: "6.99",
                description: "Bacon, Lettuce, Tomato and Mayonnaise on your choice of toast."
            },
            {
                name: "Patty Melt",
                price: "8.99",
                description: "A hamburger patty grilled between your choice of toast, with sauteed onions."
            },
            {
                name: "Chicken Pita Wrap",
                price: "7.99",
                description: "Chicken fingers, swiss and American cheese, mayonnaise, lettuce and tomato."
            },
            {
                name: "Greek Salad",
                price: "9.99",
                description: "Tomato, cucumber, feta, onion, pepperoncini, pickled beets and olives. Served with homemade greek dressing"
            },
        ],
        footer: "",
    },
    entrees: {
        title: "Dinners",
        header: "Available after noon. Unless otherwise noted, dinners come with your choice of 2 sides and a dinner roll.",
        options: [
            {
                name: "Fish n' Chips",
                price: "9.39",
                description: "Our famous tempura-inspired beer batter covering three pieces of fried Atlantic cod. No sides; served with fries and tartar sauce",
            },
            {
                name: "Chicken Monterrey",
                price: "12.99",
                description: "Grilled chicken, covered in our monterrey jack sauce and bacon."
            },
            {
                name: "Spaghetti al Foodstuff",
                price: "10.49",
                description: "Our slow-simmered marinara meets the finest boiled wheat."
            }
        ],
        get footer() {
            return `Sides Available: ${menu.meta.sides}`;
        },
    },
    kids: {
        title: "Little Options",
        header: "All kid's meals come with a child-sized beverage",
        options: [
            {
                name: "Just a Lil' Breakfast",
                price: "5.99",
                description: "With a sausage or bacon, and some potatoes"
            },
            {
                name: "Pancake or French Toast",
                price: "5.99",
                description: "With a sausage or bacon"
            },
            {
                name: "Grilled Cheese",
                price: "4.99",
                description: "Served with fries and a pickle"
            },
            {
                name: "Cheeseburger & Fries",
                price: "6.99",
                description: "A little less burger, a little less fries"
            },
            {
                name: "Hot Dog",
                price: "5.49",
                description: "With fries, applesauce, and mandarin orange slices"
            },
            {
                name: "Tender Nuggies",
                price: "7.49",
                description: "Real chicken chunks, fries, and their choice of dipping sauce."
            },
            {
                name: "Spaghetti, but cut in half",
                price: "6.99",
                description: "Served with a slice of texas toast."
            }
        ],
        footer: ""
    },
    dessert: {
        title: "Dessert",
        header: "",
        options: [
            {
                name: "Sundae",
                price: "4.49",
                description: "Hot Fudge, Caramel, or Strawberry"
            },
            {
                name: "Slice of Pie or Cake",
                price: "4.99",
                description: "Apple pie or chocolate cake."
            },
            {
                name: "Rice Pudding",
                price: "3.99",
                description: "Staff pick! Arroz con leche inspired, topped with a cinnamon crumble."
            }
        ],
        footer: "Ask your server about our seasonal options!",
    }, 
    beverages: {
        title: "Beverages",
        header: "",
        options: [
            {
                name: "24oz Soft Drink",
                price: "2.99",
                description: "We exclusively serve Tab products."
            },
            {
                name: "Coffee or Hot Tea",
                price: "2.49",
                description: "Decaf available upon request"
            },
            {
                name: "Milk or Chocolate Milk",
                price: "2.49 / 2.99",
                description: "2% only. Available in 16oz and 24oz"
            },
            {
                name: "Bottled Water",
                price: "3.99",
                description: "Sourced from only the finest of municipal aquifers."
            }
        ],
        footer: "Free refills on soda, coffee and tea",
    },
    meta: {
        title: "Menu",
        warnings: {
            raw: "Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illnesses.",
            allergen: "Be advised that food prepared here may contain these ingredients: milk, eggs, wheat, soy, peanuts, tree nuts, fish, and shellfish.",
            nutrition: "Regarding the nutritional value of these items, written information is available on request.",
            server: "Please ask your server about any questions or concerns.",
            gluten: "This is not a gluten-free establishment."
        },
        finePrint: "20% gratuity will be added for parties of 7 or more. All photos are for illustrative purposes only; reality may appear different.",
        sideList: [
            "mixed vegetables",
            "cole slaw",
            "baked potato",
            "baked beans",
            "french fries",
            "onion rings",
            "house salad",
            "cup of soup",
        ],
        get sides() { 
            return joinList(this.sideList);
        },
        dressingList: [
            "ranch",
            "italian",
            "thousand island",
            "caesar",
            "blue cheese",
            "greek"
        ],
        get dressings() {
            return joinList(this.dressingList);
        },
        soupList: [
            "broccoli cheddar",
            "chicken noodle"
        ],
        get soups() {
            return joinList(this.soupList);
        },
        sauceList: [
            "ranch",
            "barbecue",
            "honey mustard",
            "sweet n sour",
            "ketchup"
        ],
        get sauces() {
            return joinList(this.sauceList);
        },
        get itemList() { // gets an array of every item name on the menu
            let sectionArray = [];
            menu.structure.forEach(section => {
                sectionArray.push(...menu[section].options);
            });
            let itemArray = [];
            sectionArray.forEach(item => {
                itemArray.push(item.name);
            });
            return itemArray;
        },
        get items() {
            return joinList(this.itemList);
        }
    },
    get structure() { // menu.structure is an array of all this.property keys that AREN'T the meta property or the structure array itself.
        return Object.getOwnPropertyNames(this).slice(0,-2);
    }
};

const phone = {
    tollfree: "(800) 555-1234",
    local: "(555) 555-1234"
};

const email = {
    catering: "catering@this.cafe",
    restaurant: "contact@this.cafe",
    owner: "owner@this.cafe",
};

const hours = { // keys of length===3 are days
    mon: {
        day: "Monday",
        open: 700,
        close: 2100,
    },
    tue: {
        day: "Tuesday",
        open: 700,
        close: 2100,
    },
    wed: {
        day: "Wednesday",
        open: 700,
        close: 2100,
    },
    thu: {
        day: "Thursday",
        open: 700,
        close: 2100,
    },
    fri: {
        day: "Friday",
        open: 700,
        close: 2300,
    },
    sat: {
        day: "Saturday",
        open: 600,
        close: 2300,
    },
    sun: {
        day: "Sunday",
        open: 600,
        close: 1700,
    },
    holidayList: ["new year's day", "christmas", "christmas eve", "thanksgiving", "easter sunday", "memorial day", "labor day"],
    get holidays() {
        return joinList(this.holidayList);
    },
    specials: {
        open: "7am",
        close: "4pm",
    },
};

const address = {
    name: "Take It Cheesy",
    number: "123",
    street: "E Main Blvd",
    city: "Hometown",
    state: "DN",
    zip: "12345-1234",
    get full() {
        return [
            `${this.name}`,
            `${this.number} ${this.street}`,
            `${this.city}, ${this.state} ${this.zip}`
        ];
    }
};

export { menu, address, hours, email, phone };