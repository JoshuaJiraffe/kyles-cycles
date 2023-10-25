document.addEventListener("DOMContentLoaded", function () {
    const motorcycleList = document.querySelector(".motorcycle-list");
    const filterButton = document.getElementById('filterDropdown');
    const filterPriceLowToHigh = document.getElementById("filterPriceLowToHigh");
    const filterPriceHighToLow = document.getElementById("filterPriceHighToLow");
    const filterYearOldToNew = document.getElementById("filterYearOldToNew");
    const filterYearNewToOld = document.getElementById("filterYearNewToOld");
    const filterViewsHighToLow = document.getElementById("filterViewsHighToLow");

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
