const express = require('express');
const app = express();

const generateUniqueId = require('generate-unique-id');

const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

//GetMotorcycles
class Motorcycle {
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
        this.id = generateUniqueId({length: 6, useLetters: false});
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
    increaseViews() {
        this.views++;
    }
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
const motorcycles = [
    new Motorcycle(
    2009,
    'Kawasaki',
    'Vulcan 500',
    '$2,390',
    'Cruiser',
    'Good',
    '30,000 miles',
    'Inline twin',
    ['New chain installed', 'Seat reupholstered', 'Carburetors cleaned and synced'],
    "Selling my beautiful red 2009 Kawasaki Vulcan 500. She's an absolute blast to ride and super zippy. Starts easy and runs amazing :). I've had quite a few Vulcan 500s and I can't stop buying them because they're so light and fun to ride. This is the best beginner cruiser in my opinion, really easy to ride and super forgiving. Has a few flaws cosmetically, but she's as sound mechanically as they come. Just cleaned and synced the carbs. I just finished reupholstering the seat this week with marine grade vinyl. Brakes are awesome and tires still have good life on them. Clean title, only 15k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides, thanks!"
    ),
    new Motorcycle(
    2010,
    'Ducati',
    'Multistrada 1200S',
    '$6,890',
    'Touring',
    'Like New',
    '51,000 miles',
    'Inline twin',
    ['Repaired ferrings', 'New chain, sprockets, and tires'],
    "Selling my brilliant white 2010 Ducati Multistrada 1200S. She's been an absolute joy to ride and nothing but reliable. Everything works perfectly and I've been religious about maintenance. Desmo valves were done 3k miles ago, the chain, sprockets, and tires are all pretty new as well. The Multistrada has a million features, notably Ducati traction control, dual ABS, electronic suspension, hand warmers, and 4 preset modes. I have the 3 hardbag panniers that snap on if you're planning on touring. This bike runs like new, and will continue to do so as long as you take good care of her. Clean title, only 51k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides, thanks!"
    ),
    new Motorcycle(
    2007,
    'Suzuki',
    'Boulevard 800',
    '$3,590',
    'Cruiser',
    'Like New',
    '7,000 miles',
    'V-twin',
    ['Fixed dents', 'Repainted tank'],
    "Selling my beautiful black 2007 Suzuki Boulevard C50 (800cc). She's one of the first mid-sized cruisers to get fuel-injection and runs like a champ! Really stable and easy to control, this is a perfect beginner bike for someone who wants something bigger than a 250. The paint and chrome are in absolutely fantastic condition, she really glistens under the sun. The seat is the comfiest saddle you'll ever come across. Has highway bars and pegs installed too so you don't have to worry about dropping it. Clean title, only 7k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides, thanks!"
    ),
    new Motorcycle(
    2004,
    'Honda',
    'VTX 1300',
    '$3,890',
    'Cruiser',
    'Great',
    '24,000 miles',
    'V-twin',
    ['Cleaned extensive water spot damage'],
    "Selling my gorgeous red 2004 Honda VTX 1300. She runs fantastic and looks absolutely amazing. If you're looking for a reliable, comfortable cruiser this is the bike for you. The chrome and paint are in fantastic condition. Tires still have tons of tread left. Comes with a massive windshield and Vikingbags hard saddlebags. The best part is the Mustang seat that'll turn any ride into a luxury. Clean title, only 24k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides, thanks!"
    ),
    new Motorcycle(
    2007,
    'Suzuki',
    'Boulevard S40',
    '$2,690',
    'Cruiser',
    'Like New',
    '22,000 miles',
    'Inline twin',
    ['Carburetor rebuild', 'New tires'],
    "Selling my beautiful blue 2007 Suzuki Boulevard S40. She rides fantastic and is really easy to control. Super beginner friendly and the blue really stands out on the street. This bike is a phenomenal example of everything that makes a great motorcycle, without all the extra bells and whistles. The paint and chrome are in great condition. The tires still have tons of tread. The windshield comes off super easily if that's not your style as well. Her single-cylinder 650cc engine and belt drive means maintenance is minimal and easy. Clean title, only 22k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides, thanks!"
    ),
    new Motorcycle(
    2018,
    'Yamaha',
    'Vstar 250',
    '$3,490',
    'Cruiser',
    'Like New',
    '3,300 miles',
    'V-twin',
    ['Reupholstered seat', 'New headlight'],
    "Selling my gorgeous purple 2018 Yamaha Vstar 250. This is the quintessential beginner cruiser and she runs amazing. Super lightweight and easy to handle. Gets 80 miles to the gallon and is super comfortable. She has a super low seat height which is perfect for shorter riders. I can't recommend the Vstar high enough for someone getting into riding. This bike is practically new with only 3300 miles. Starts really easy and runs incredibly well. New LED headlight and blinkers. If you want something you can just pick up and ride, this is the bike for you. Clean title, only 3.3k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides."
    ),
    new Motorcycle(
    1998,
    'Kawasaki',
    'KLR 650',
    '$2,890',
    'Adventure',
    'Good',
    '33,000',
    'Single cylinder',
    ['New paint', 'New fork seals', 'New mirrors'],
    "Selling my beautiful blue 1998 Kawasaki KLR 650. These bikes have a reputation for being bulletproof and this one lives up to that every bit. She starts easy and runs like a dream every time. Super fun to take off-roading but also really easy to ride on the street, I can't recommend this bike enough. New fork seals, new mirrors, new lever guards. Knobby tires are in great shape with 90% life on them. The seat is in fantastic shape and is honestly one of the comfiest to ride. She's ready to rip just needs a new home! Clean title, only 33k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides, thanks!"
    ),
    new Motorcycle(
    2005,
    'Kawasaki',
    'Concours 1000',
    '$2,790',
    'Cruiser',
    'Like New',
    '35,000 miles',
    'Inline four',
    ['New seat', 'Oil change'],
    "Selling my beautiful bronze 2005 Kawasaki Concours 1000. These things have a reputation for absurd reliability, and this one lives up to it every bit. Starts and runs super smoothly, shifts strong. I've had over 100 bikes and this one is hands down the comfiest, the saddle makes you forget it's there. Seriously, if you're looking for a good bike to commute on, look no further. It's an inline 4 and revs a lot better than most touring bikes. Super comfortable and stable, and the biggest handbags around. Clean title, only 35k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides."
    )
];

apiRouter.get('/motorcycles', (req, res) => {
    res.send(motorcycles);
});

// Endpoint to get motorcycle details
app.get('/motorcycle/:id', (req, res) => {
    const motorcycleId = req.params.id;
    const motorcycleDetails = motorcycles.find(motorcycle => motorcycle.id == motorcycleId);

    if (motorcycleDetails) {
        res.send(motorcycleDetails);
    } else {
        res.status(404).json({ error: 'Motorcycle not found' });
    }
});

// Initialize an array to store appointments in memory
const appointments = [];

// Endpoint for Scheduling Appointments (POST)
app.post('/api/appointments', (req, res) => {
    // Extract appointment data from the request body
    const { date, time, name, email, motorcycles, termsAgreed } = req.body;

    // Perform validation on the data (you can customize this based on your requirements)
    if (!date || !time || !name || !email || !motorcycles || !termsAgreed) {
        return res.status(400).json({ error: 'Incomplete or invalid appointment data' });
    }

    // Store the appointment data in the in-memory array
    const appointment = {
        id: generateUniqueId({length: 8, useLetters: false}),
        date,
        time,
        name,
        email,
        motorcycles,
        termsAgreed
    };

    appointments.push(appointment);

    // Respond with the created appointment details
    res.status(201).json(appointment);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  
app.listen(port, () => {
console.log(`Listening on port ${port}`);
});

