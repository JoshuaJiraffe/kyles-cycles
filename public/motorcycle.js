import { Motorcycle } from './classes.js';
import { getMotos } from './classes.js';

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const motorcycleId = params.get("id");

    const motorcycles = getMotos();

    // Find the motorcycle object in your motorcycles array based on the ID
    const selectedMotorcycle = motorcycles.find(motorcycle => motorcycle.getId() === parseInt(motorcycleId));

    // Update the motorcycle title on the page
    const motorcycleTitleElement = document.getElementById('motorcycle-title');
    motorcycleTitleElement.textContent = `${selectedMotorcycle.getYear()} ${selectedMotorcycle.getMake()} ${selectedMotorcycle.getModel()}`;

    // Update other info
    const yearElement = document.getElementById('glance-year');
    yearElement.textContent = `Year: ${selectedMotorcycle.getYear()}`;

    const makeElement = document.getElementById('glance-make');
    makeElement.textContent = `Make: ${selectedMotorcycle.getMake()}`;

    const modelElement = document.getElementById('glance-model');
    modelElement.textContent = `Model: ${selectedMotorcycle.getModel()}`;

    const typeElement = document.getElementById('glance-type');
    typeElement.textContent = `Type: ${selectedMotorcycle.getType()}`;

    const priceElement = document.getElementById('glance-price');
    priceElement.textContent = `Price: ${selectedMotorcycle.getPrice()}`;

    const conditionElement = document.getElementById('glance-condition');
    conditionElement.textContent = `Condition: ${selectedMotorcycle.getCondition()}`;

    const mileageElement = document.getElementById('glance-mileage');
    mileageElement.textContent = `Mileage: ${selectedMotorcycle.getMileage()}`;

    const engineElement = document.getElementById('glance-engine');
    engineElement.textContent = `Engine: ${selectedMotorcycle.getEngine()}`;

    const workListElement = document.getElementById('glance-work');
    const recentWorkDone = selectedMotorcycle.getRecentWorkDone();
    workListElement.innerHTML = recentWorkDone.map(work => `<li>${work}</li>`).join('');

    // Update Description
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = selectedMotorcycle.getDescription();

    // Update the schedule button URL to include the motorcycle ID
    const scheduleButton = document.querySelector('.btn.custom-btn-purple');
    const scheduleButtonURL = `schedule.html?id=${motorcycleId}`;
    scheduleButton.href = scheduleButtonURL;
});
