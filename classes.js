export class Motorcycle {
    id;
    year;
    make;
    model;
    price;
    type;
    condition;
    mileage;
    engine;
    recentWorkDone;
    views;
    description;
    name;

    constructor(year, make, model, price, type, condition, mileage, engine, recentWorkDone, description, views=Math.floor(Math.random()*100)) {
        this.id = Math.floor(100000 + Math.random() * 900000); // 6-digit random ID
        this.year = year;
        this.make = make;
        this.model = model;
        this.price = price;
        this.type = type;
        this.condition = condition;
        this.mileage = mileage;
        this.engine = engine;
        this.recentWorkDone = recentWorkDone;
        this.views = views; // Default views to 0
        this.description = description;
        this.name = `${this.year} ${this.make} ${this.model}`; // Construct name string
    }

    // Getter methods
    getId() {
        return this.id;
    }

    getYear() {
        return this.year;
    }

    getMake() {
        return this.make;
    }

    getModel() {
        return this.model;
    }

    getPrice() {
        return this.price;
    }

    getType() {
        return this.type;
    }

    getCondition() {
        return this.condition;
    }

    getMileage() {
        return this.mileage;
    }

    getEngine() {
        return this.engine;
    }

    getRecentWorkDone() {
        return this.recentWorkDone;
    }

    getViews() {
        return this.views;
    }

    getDescription() {
        return this.description;
    }

    getName() {
        return this.name;
    }

    // Method to increase view count by 1
    increaseViews() {
        this.views++;
    }

    // Method to serialize the object for saving to local storage
    // toJSON() {
    //     return {
    //         id: this.#id,
    //         year: this.#year,
    //         make: this.#make,
    //         model: this.#model,
    //         price: this.#price,
    //         type: this.#type,
    //         condition: this.#condition,
    //         mileage: this.#mileage,
    //         engine: this.#engine,
    //         recentWorkDone: this.#recentWorkDone,
    //         views: this.#views,
    //         description: this.#description,
    //         name: this.#name
    //     };
    // }

    // Method to create a Motorcycle object from a JSON object
    static fromJSON(json) {
        const data = JSON.parse(json);
        const {
            id,
            year,
            make,
            model,
            price,
            type,
            condition,
            mileage,
            engine,
            recentWorkDone,
            views,
            description,
            name
        } = data;
        const motorcycle = new Motorcycle(
            year,
            make,
            model,
            price,
            type,
            condition,
            mileage,
            engine,
            recentWorkDone,
            description
        );
        motorcycle.id = id;
        motorcycle.views = views;
        motorcycle.name = name;
        return motorcycle;
    }
}

// Function to retreive motorcycles from local storage and put them into an array
function getMotos()
{
    const motorcycles = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("motorcycle")) {
            const motorcycleJSON = localStorage.getItem(key);
            if (motorcycleJSON) {
                const motorcycle = Motorcycle.fromJSON(motorcycleJSON);
                motorcycles.push(motorcycle);
            }
        }
    }
    return motorcycles;
}

export { getMotos };