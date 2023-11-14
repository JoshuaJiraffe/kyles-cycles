import { Motorcycle } from './classes.js';
import { getMotos } from './classes.js';

document.addEventListener('DOMContentLoaded', async function() {
    const params = new URLSearchParams(window.location.search);
    const motorcycleId = params.get("id");

    try
    {
        // Fetch motorcycle details from the server based on the ID
        const response = await fetch(`/motorcycle/${motorcycleId}`);
        const selectedMotorcycle = await response.json();

        // Update the motorcycle title on the page
        const motorcycleTitleElement = document.getElementById('motorcycle-title');
        motorcycleTitleElement.textContent = `${selectedMotorcycle.year} ${selectedMotorcycle.make} ${selectedMotorcycle.model}`;

        // Update other info
        const yearElement = document.getElementById('glance-year');
        yearElement.textContent = `Year: ${selectedMotorcycle.year}`;

        const makeElement = document.getElementById('glance-make');
        makeElement.textContent = `Make: ${selectedMotorcycle.make}`;

        const modelElement = document.getElementById('glance-model');
        modelElement.textContent = `Model: ${selectedMotorcycle.model}`;

        const typeElement = document.getElementById('glance-type');
        typeElement.textContent = `Type: ${selectedMotorcycle.type}`;

        const priceElement = document.getElementById('glance-price');
        priceElement.textContent = `Price: ${selectedMotorcycle.price}`;

        const conditionElement = document.getElementById('glance-condition');
        conditionElement.textContent = `Condition: ${selectedMotorcycle.condition}`;

        const mileageElement = document.getElementById('glance-mileage');
        mileageElement.textContent = `Mileage: ${selectedMotorcycle.mileage}`;

        const engineElement = document.getElementById('glance-engine');
        engineElement.textContent = `Engine: ${selectedMotorcycle.engine}`;

        const workListElement = document.getElementById('glance-work');
        const recentWorkDone = selectedMotorcycle.recentWorkDone;
        workListElement.innerHTML = recentWorkDone.map(work => `<li>${work}</li>`).join('');

        // Update Description
        const descriptionElement = document.getElementById('description');
        descriptionElement.textContent = selectedMotorcycle.description;

        // Update the schedule button URL to include the motorcycle ID
        const scheduleButton = document.querySelector('.btn.custom-btn-purple');
        const scheduleButtonURL = `schedule.html?id=${motorcycleId}`;
        scheduleButton.href = scheduleButtonURL;
    }
    catch (error)
    {
        console.error('Error fetching motorcycle details:', error);
    }
});
