import { Motorcycle } from './classes.js';
import { getMotos } from './classes.js';

// Creating the first motorcycle object
const firstMotorcycle = new Motorcycle(
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
);

// Creating the second motorcycle object
const secondMotorcycle = new Motorcycle(
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
);

// Creating the third motorcycle object
const thirdMotorcycle = new Motorcycle(
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
);

localStorage.clear();
// Saving motorcycle objects to local storage
localStorage.setItem('motorcycle1', JSON.stringify(firstMotorcycle));
localStorage.setItem('motorcycle2', JSON.stringify(secondMotorcycle));
localStorage.setItem('motorcycle3', JSON.stringify(thirdMotorcycle));

function updateViewsDisplay(card, views) {
    card.querySelector('.views').textContent = views;
}
    
document.addEventListener("DOMContentLoaded", function () {
    const filterButton = document.getElementById('filterDropdown');
    const filterPriceLowToHigh = document.getElementById("filterPriceLowToHigh");
    const filterPriceHighToLow = document.getElementById("filterPriceHighToLow");
    const filterYearOldToNew = document.getElementById("filterYearOldToNew");
    const filterYearNewToOld = document.getElementById("filterYearNewToOld");
    const filterViewsHighToLow = document.getElementById("filterViewsHighToLow");

    // Get the motorcycle list container
    const motorcycleList = document.querySelector('.motorcycle-list');
    const motorcycles = getMotos();


    // Create motorcycle cards
    motorcycles.forEach(function(motorcycle, index) {
        const motorcycleCard = document.createElement('div');
        motorcycleCard.classList.add('motorcycle-card');

        // Set motorcycle card content
        motorcycleCard.innerHTML = `
            <a href="#" class="motorcycle-link" data-motorcycle="${motorcycle.getName()}">
                <img src="Vulcanjpeg.jpeg" alt="Motorcycle ${index + 1}">
                <h4><span class="year">${motorcycle.getYear()}</span> ${motorcycle.getMake()} ${motorcycle.getModel()}</h4>
                <p class="price">${motorcycle.getPrice()}</p>
                <p>Views: <span class="views">${motorcycle.getViews()}</span></p>
            </a>
        `;
        motorcycleCard.addEventListener('click', function(event) {
            event.preventDefault();
            motorcycle.increaseViews();
            updateViewsDisplay(motorcycleCard, motorcycle.getViews());
    
            // Update URL with motorcycle ID
            const motorcycleId = motorcycle.getId();
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
