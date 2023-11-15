import { Motorcycle } from './classes.js';
import { getMotos } from './classes.js';

// // Creating the first motorcycle object
// const firstMotorcycle = new Motorcycle(
//     2009,
//     'Kawasaki',
//     'Vulcan 500',
//     '$2,390',
//     'Cruiser',
//     'Good',
//     '30,000 miles',
//     'Inline twin',
//     ['New chain installed', 'Seat reupholstered', 'Carburetors cleaned and synced'],
//     "Selling my beautiful red 2009 Kawasaki Vulcan 500. She's an absolute blast to ride and super zippy. Starts easy and runs amazing :). I've had quite a few Vulcan 500s and I can't stop buying them because they're so light and fun to ride. This is the best beginner cruiser in my opinion, really easy to ride and super forgiving. Has a few flaws cosmetically, but she's as sound mechanically as they come. Just cleaned and synced the carbs. I just finished reupholstering the seat this week with marine grade vinyl. Brakes are awesome and tires still have good life on them. Clean title, only 15k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides, thanks!"
// );

// // Creating the second motorcycle object
// const secondMotorcycle = new Motorcycle(
//     2010,
//     'Ducati',
//     'Multistrada 1200S',
//     '$6,890',
//     'Touring',
//     'Like New',
//     '51,000 miles',
//     'Inline twin',
//     ['Repaired ferrings', 'New chain, sprockets, and tires'],
//     "Selling my brilliant white 2010 Ducati Multistrada 1200S. She's been an absolute joy to ride and nothing but reliable. Everything works perfectly and I've been religious about maintenance. Desmo valves were done 3k miles ago, the chain, sprockets, and tires are all pretty new as well. The Multistrada has a million features, notably Ducati traction control, dual ABS, electronic suspension, hand warmers, and 4 preset modes. I have the 3 hardbag panniers that snap on if you're planning on touring. This bike runs like new, and will continue to do so as long as you take good care of her. Clean title, only 51k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides, thanks!"
// );

// // Creating the third motorcycle object
// const thirdMotorcycle = new Motorcycle(
//     2007,
//     'Suzuki',
//     'Boulevard 800',
//     '$3,590',
//     'Cruiser',
//     'Like New',
//     '7,000 miles',
//     'V-twin',
//     ['Fixed dents', 'Repainted tank'],
//     "Selling my beautiful black 2007 Suzuki Boulevard C50 (800cc). She's one of the first mid-sized cruisers to get fuel-injection and runs like a champ! Really stable and easy to control, this is a perfect beginner bike for someone who wants something bigger than a 250. The paint and chrome are in absolutely fantastic condition, she really glistens under the sun. The seat is the comfiest saddle you'll ever come across. Has highway bars and pegs installed too so you don't have to worry about dropping it. Clean title, only 7k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides, thanks!"
// );

// const fourthMotorcycle = new Motorcycle(
//     2004,
//     'Honda',
//     'VTX 1300',
//     '$3,890',
//     'Cruiser',
//     'Great',
//     '24,000 miles',
//     'V-twin',
//     ['Cleaned extensive water spot damage'],
//     "Selling my gorgeous red 2004 Honda VTX 1300. She runs fantastic and looks absolutely amazing. If you're looking for a reliable, comfortable cruiser this is the bike for you. The chrome and paint are in fantastic condition. Tires still have tons of tread left. Comes with a massive windshield and Vikingbags hard saddlebags. The best part is the Mustang seat that'll turn any ride into a luxury. Clean title, only 24k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides, thanks!"
// );

// const fifthMotorcycle = new Motorcycle(
//     2007,
//     'Suzuki',
//     'Boulevard S40',
//     '$2,690',
//     'Cruiser',
//     'Like New',
//     '22,000 miles',
//     'Inline twin',
//     ['Carburetor rebuild', 'New tires'],
//     "Selling my beautiful blue 2007 Suzuki Boulevard S40. She rides fantastic and is really easy to control. Super beginner friendly and the blue really stands out on the street. This bike is a phenomenal example of everything that makes a great motorcycle, without all the extra bells and whistles. The paint and chrome are in great condition. The tires still have tons of tread. The windshield comes off super easily if that's not your style as well. Her single-cylinder 650cc engine and belt drive means maintenance is minimal and easy. Clean title, only 22k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides, thanks!"
// );

// const sixthMotorcycle = new Motorcycle(
//     2018,
//     'Yamaha',
//     'Vstar 250',
//     '$3,490',
//     'Cruiser',
//     'Like New',
//     '3,300 miles',
//     'V-twin',
//     ['Reupholstered seat', 'New headlight'],
//     "Selling my gorgeous purple 2018 Yamaha Vstar 250. This is the quintessential beginner cruiser and she runs amazing. Super lightweight and easy to handle. Gets 80 miles to the gallon and is super comfortable. She has a super low seat height which is perfect for shorter riders. I can't recommend the Vstar high enough for someone getting into riding. This bike is practically new with only 3300 miles. Starts really easy and runs incredibly well. New LED headlight and blinkers. If you want something you can just pick up and ride, this is the bike for you. Clean title, only 3.3k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides."
// );

// const seventhMotorcycle = new Motorcycle(
//     1998,
//     'Kawasaki',
//     'KLR 650',
//     '$2,890',
//     'Adventure',
//     'Good',
//     '33,000',
//     'Single cylinder',
//     ['New paint', 'New fork seals', 'New mirrors'],
//     "Selling my beautiful blue 1998 Kawasaki KLR 650. These bikes have a reputation for being bulletproof and this one lives up to that every bit. She starts easy and runs like a dream every time. Super fun to take off-roading but also really easy to ride on the street, I can't recommend this bike enough. New fork seals, new mirrors, new lever guards. Knobby tires are in great shape with 90% life on them. The seat is in fantastic shape and is honestly one of the comfiest to ride. She's ready to rip just needs a new home! Clean title, only 33k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides, thanks!"
// );

// const eighthMotorcycle = new Motorcycle(
//     2005,
//     'Kawasaki',
//     'Concours 1000',
//     '$2,790',
//     'Cruiser',
//     'Like New',
//     '35,000 miles',
//     'Inline four',
//     ['New seat', 'Oil change'],
//     "Selling my beautiful bronze 2005 Kawasaki Concours 1000. These things have a reputation for absurd reliability, and this one lives up to it every bit. Starts and runs super smoothly, shifts strong. I've had over 100 bikes and this one is hands down the comfiest, the saddle makes you forget it's there. Seriously, if you're looking for a good bike to commute on, look no further. It's an inline 4 and revs a lot better than most touring bikes. Super comfortable and stable, and the biggest handbags around. Clean title, only 35k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I have other bikes I'm selling too! Cash in hand required for test rides."
// );


// // Saving motorcycle objects to local storage
// localStorage.setItem('motorcycle1', JSON.stringify(firstMotorcycle));
// localStorage.setItem('motorcycle2', JSON.stringify(secondMotorcycle));
// localStorage.setItem('motorcycle3', JSON.stringify(thirdMotorcycle));
// localStorage.setItem('motorcycle4', JSON.stringify(fourthMotorcycle));
// localStorage.setItem('motorcycle5', JSON.stringify(fifthMotorcycle));
// localStorage.setItem('motorcycle6', JSON.stringify(sixthMotorcycle));
// localStorage.setItem('motorcycle7', JSON.stringify(seventhMotorcycle));
// localStorage.setItem('motorcycle8', JSON.stringify(eighthMotorcycle));

function updateViewsDisplay(card, views) {
    card.querySelector('.views').textContent = views;
}
    
document.addEventListener("DOMContentLoaded", async function () {
    const filterButton = document.getElementById('filterDropdown');
    const filterPriceLowToHigh = document.getElementById("filterPriceLowToHigh");
    const filterPriceHighToLow = document.getElementById("filterPriceHighToLow");
    const filterYearOldToNew = document.getElementById("filterYearOldToNew");
    const filterYearNewToOld = document.getElementById("filterYearNewToOld");
    const filterViewsHighToLow = document.getElementById("filterViewsHighToLow");

    // Get the motorcycle list container
    const motorcycleList = document.querySelector('.motorcycle-list');
    let motorcycles = [];
    try {
        // Fetch motorcycles from the server
        const response = await fetch('/api/motorcycles');
        motorcycles = await response.json();

        // Save the motorcycles in case we go offline in the future
        localStorage.setItem('motorcycles', JSON.stringify(motorcycles));
    } catch {
        // If there was an error, then just use the last saved motorcycles
        const motorcyclesText = localStorage.getItem('motorcycles');
        if (motorcyclesText) {
            motorcycles = JSON.parse(motorcyclesText);
        }
    }

    // Create motorcycle cards
    motorcycles.forEach(function(motorcycle, index) {
        const motorcycleCard = document.createElement('div');
        motorcycleCard.classList.add('motorcycle-card');

        // Set motorcycle card content
        motorcycleCard.innerHTML = `
            <a href="#" class="motorcycle-link" data-motorcycle="${motorcycle.name}">
                <img src="Vulcanjpeg.jpeg" alt="Motorcycle ${index + 1}">
                <h4><span class="year">${motorcycle.year}</span> ${motorcycle.make} ${motorcycle.model}</h4>
                <p class="price">${motorcycle.price}</p>
                <p>Views: <span class="views">${motorcycle.views}</span></p>
            </a>
        `;
        motorcycleCard.addEventListener('click', async function(event) {
            event.preventDefault();
            // Increment views in the database
            await fetch(`/incrementViews/${motorcycle.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const views = await fetch(`/motorcycles/${motorcycle.id}/views`)
            updateViewsDisplay(motorcycleCard, views);
    
            // Update URL with motorcycle ID
            const motorcycleId = motorcycle.id;
            const url = `motorcycle.html?id=${motorcycleId}`;
            window.location.href = url;
        });

        // Append the motorcycle card to the motorcycle list
        motorcycleList.appendChild(motorcycleCard);
    });

    // Add event listener to each motorcycle link
    // const motorcycleLinks = document.querySelectorAll('.motorcycle-link');
    // motorcycleLinks.forEach(function(link) {
    //     link.addEventListener('click', function(event) {
    //         event.preventDefault();
    //         const motorcycleName = link.getAttribute('data-motorcycle');
    //         const url = `motorcycle.html?motorcycle=${encodeURIComponent(motorcycleName)}`;
    //         window.location.href = url;
    //     });
    // });

    filterPriceLowToHigh.addEventListener("click", function (event) {
        event.preventDefault();
        sortMotorcycles("price", "asc");
        filterButton.innerHTML = 'Price Low to High';
    });

    filterPriceHighToLow.addEventListener("click", function (event) {
        event.preventDefault();
        sortMotorcycles("price", "desc");
        filterButton.innerHTML = 'Price High to Low';
    });

    filterYearOldToNew.addEventListener("click", function (event) {
        event.preventDefault();
        sortMotorcycles("year", "asc");
        filterButton.innerHTML = 'Oldest';
    });

    filterYearNewToOld.addEventListener("click", function (event) {
        event.preventDefault();
        sortMotorcycles("year", "desc");
        filterButton.innerHTML = 'Newest';
    });

    filterViewsHighToLow.addEventListener("click", function (event) {
        event.preventDefault();
        sortMotorcycles("views", "desc");
        filterButton.innerHTML = 'Popular';
    });

    function sortMotorcycles(property, order) {
        const sortedMotorcycles = Array.from(motorcycleList.children).sort(function (a, b) {
            const valueA = getValue(a, property);
            const valueB = getValue(b, property);

            if (order === "asc") {
                return valueA - valueB;
            } else {
                return valueB - valueA;
            }
        });

        motorcycleList.innerHTML = "";
        sortedMotorcycles.forEach(function (motorcycle) {
            motorcycleList.appendChild(motorcycle);
        });
    }

    function getValue(motorcycle, property) {
        switch (property) {
            case "price":
                return parseFloat(motorcycle.querySelector(".price").textContent.replace("$", "").replace(",", ""));
            case "year":
                return parseInt(motorcycle.querySelector(".year").textContent);
            case "views":
                return parseInt(motorcycle.querySelector(".views").textContent);
            default:
                return 0;
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the class 'motorcycle-link'
    const motorcycleLinks = document.querySelectorAll('.motorcycle-link');

    // Add event listener to each motorcycle link
    motorcycleLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default behavior of the anchor tag
            event.preventDefault();

            // Get the motorcycle name from the data-motorcycle attribute
            const motorcycleName = link.getAttribute('data-motorcycle');

            // Dynamically generate the URL with the motorcycle parameter
            const url = `motorcycle.html?motorcycle=${encodeURIComponent(motorcycleName)}`;

            // Navigate to the motorcycle.html page with the dynamically generated URL
            window.location.href = url;
        });
    });
});
