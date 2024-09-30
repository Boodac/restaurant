const menu = {
    specials: {
        hours: {
            start: 1000,
            end: 1600,
        },
    },
    appetizers: [
        {
            name: "Cheese Sticks",
            price: "5.99",
            description: "Logs of mozarella, breaded in-house, and deep fried. Served with choice of dipping sauce."
        },
        {
            name: "Onion Rings",
            price: "5.99",
            description: "Thick slices of sweet Vidalia onions in our tempura-inspired beer batter, served with our zesty horseradish sauce."
        },
        {
            name: "Hummus",
            price: "6.99",
            description: "Garnished roasted garlic and mint. Served with bakery-fresh pita."
        },
        {
            name: "Wing-Dings",
            price: "8.99",
            description: "Eight (8) boneless or bone-in wings, served with celery sticks. Your choice of sauce, wet or dry."
        },
        {
            name: "Super Nachos",
            price: "12.99",
            description: "A mountain of tortilla chips, seasoned ground beef, jalapeno, black olives, tomato, onion, salsa, sour cream, and cheese. (Serves 2.)"
        },
        {
            name: "Loaded Fries",
            price: "7.99",
            description: "Our famous french fries loaded with ground beef, chili, onions, cheese, and bacon."
        },
        {
            name: "Fries",
            price: "4.99",
            description: "A serving of our famous french fries (or tots!)"
        },
        {
            name: "Bowl of Soup or House Salad",
            price: "3.99",
            description: "Ask your server about our fresh, daily soup options and our home-made dressings."
        }
    ],
    breakfast: [

    ],
    lunch: [

    ],
    entrees: [

    ],
    dessert: [

    ],
    kids: [

    ]
};

const menuStructure = Object.getOwnPropertyNames(menu);

const phone = {
    tollfree: "18005551234",
    local: "15555551234"
};

const email = {
    catering: "catering@this.cafe",
    restaurant: "contact@this.cafe",
    owner: "owner@this.cafe",
};

const hours = {
    mon: {
        open: 700,
        close: 2100,
    },
    tue: {
        open: 700,
        close: 2100,
    },
    wed: {
        open: 700,
        close: 2100,
    },
    thu: {
        open: 700,
        close: 2100,
    },
    fri: {
        open: 700,
        close: 2300,
    },
    sat: {
        open: 600,
        close: 2300,
    },
    sun: {
        open: 600,
        close: 1700,
    },
    holidays: ["New Year's Day", "Christmas", "Christmas Eve", "Thanksgiving", "Easter Sunday", "Memorial Day", "Labor Day"],
};

const address = {
    name: "Pesto's Besto",
    number: "123",
    street: "E Main Blvd",
    city: "Hometown",
    state: "DN",
    zip: "12345-1234"
};

export { menu, menuStructure, address, hours, email, phone };