import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './motorcycle.css';

export function Motorcycle() {
    const { id } = useParams();

  useEffect(() => {
    const fetchMotorcycleDetails = async () => {
      try {
        const response = await fetch(`/motorcycle/${id}`);
        const selectedMotorcycle = await response.json();

        // Update DOM elements with motorcycle details
        document.title = `Kyle's Cycles - ${selectedMotorcycle.year} ${selectedMotorcycle.make} ${selectedMotorcycle.model}`;

        // Update other info
        document.getElementById('motorcycle-title').textContent = `${selectedMotorcycle.year} ${selectedMotorcycle.make} ${selectedMotorcycle.model}`;
        document.getElementById('glance-year').textContent = `Year: ${selectedMotorcycle.year}`;
        document.getElementById('glance-make').textContent = `Make: ${selectedMotorcycle.make}`;
        document.getElementById('glance-model').textContent = `Model: ${selectedMotorcycle.model}`;
        document.getElementById('glance-type').textContent = `Type: ${selectedMotorcycle.type}`;
        document.getElementById('glance-price').textContent = `Price: ${selectedMotorcycle.price}`;
        document.getElementById('glance-condition').textContent = `Condition: ${selectedMotorcycle.condition}`;
        document.getElementById('glance-mileage').textContent = `Mileage: ${selectedMotorcycle.mileage}`;
        document.getElementById('glance-engine').textContent = `Engine: ${selectedMotorcycle.engine}`;

        const workListElement = document.getElementById('glance-work');
        const recentWorkDone = selectedMotorcycle.recentWorkDone;
        workListElement.innerHTML = recentWorkDone.map(work => `<li>${work}</li>`).join('');

        // Update Description
        document.getElementById('description').textContent = selectedMotorcycle.description;

        // Update the schedule button URL to include the motorcycle ID
        const scheduleButton = document.querySelector('.btn.custom-btn-purple');
        const scheduleButtonURL = `schedule.html?id=${id}`;
        scheduleButton.href = scheduleButtonURL;

        // Show/hide schedule button based on user login
        const userName = localStorage.getItem('userName');
        const scheduleButtonContainer = document.querySelector('.schedule-button');
        scheduleButtonContainer.style.display = userName ? 'block' : 'none';
      } catch (error) {
        console.error('Error fetching motorcycle details:', error);
      }
    };

    fetchMotorcycleDetails();
  }, [id]);
  return (
    <main className='main-content'>
      <div className="container mx-0">
        <div className="row">
          <div className="col-md-6">
            <div id="motorcycleCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="Vulcanjpeg.jpeg" className="d-block w-100" alt="Image 1" />
                </div>
                <div className="carousel-item">
                  <img src="Ducati.jpg" className="d-block w-100" alt="Image 2" />
                </div>
                {/* Add more carousel items with additional images */}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#motorcycleCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#motorcycleCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <h2 id="motorcycle-title" className="motorcycle-title">2009 Kawasaki Vulcan 500</h2>
            <h3 style={{ margin: '0 10px' }}>At a Glance:</h3>
            <div id="glance">
              <div className="glance-info">
                <p className="glance-item" id="glance-year"><b>Year:</b> 2009</p>
                <p className="glance-item" id="glance-make"><b>Make:</b> Kawasaki</p>
                <p className="glance-item" id="glance-model"><b>Model:</b> Vulcan 500</p>
                <p className="glance-item" id="glance-type"><b>Type:</b> Cruiser</p>
                <p className="glance-item" id="glance-price"><b>Price:</b> $2,390</p>
                <p className="glance-item" id="glance-condition"><b>Condition:</b> Good</p>
                <p className="glance-item" id="glance-mileage"><b>Mileage:</b> 30,000 miles</p>
                <p className="glance-item" id="glance-engine"><b>Engine:</b> Inline twin</p>
                <p>
                  <b>Recent Work Done:</b>
                  <ul className="work" id="glance-work">
                    <li>New chain installed</li>
                    <li>Seat reupholstered</li>
                    <li>Carburetors cleaned and synced</li>
                  </ul>
                </p>
              </div>
              <div className="schedule-button" style={{ display: 'none' }}>
                <div className="text-end">
                  <a href="schedule.html" className="btn custom-btn-purple btn-lg">Schedule a time to come look at this bike</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
  
      <div>
        <h3 style={{ marginTop: '15px' }}>Description:</h3>
        <hr />
        <p id="description">
          Selling my beautiful red 2009 Kawasaki Vulcan 500. She's an absolute blast to ride and super
          zippy. Starts easy and runs amazing :). I've had quite a few Vulcan 500s and I can't stop
          buying them because they're so light and fun to ride. This is the best beginner cruiser in my
          opinion, really easy to ride and super forgiving.
          <br />
          <br />
          Has a few flaws cosmetically, but she's as sound mechanically as they come. Just cleaned and
          synced the carbs. I just finished reupholstering the seat this week with marine grade vinyl.
          Brakes are awesome and tires still have good life on them.
          <br />
          <br />
          Clean title, only 15k miles, ready to ride. Cash or Venmo, no trades. Come take a look, I
          have other bikes I'm selling too! Cash in hand required for test rides, thanks!
        </p>
      </div>
      <hr />
    </main>
  );
  
}