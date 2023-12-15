import React from 'react';

export function About() {
  return (
    <main className='main-content'>
      <div className="container" id="moto-gallery">
        <div className="row">
          <div className="col-md-2 mb-3">
            <img src="Vulcanjpeg.jpeg" alt="motorcycle1pic" width="200px" className="img-fluid" />
          </div>
          <div className="col-md-2 mb-3">
            <img src="Ducati.jpg" alt="motorcycle2pic" width="200px" className="img-fluid" />
          </div>
          <div className="col-md-2 mb-3">
            <img src="Vulcanjpeg.jpeg" alt="motorcycle3pic" width="200px" className="img-fluid" />
          </div>
          <div className="col-md-2 mb-3">
            <img src="Ducati.jpg" alt="motorcycle4pic" width="200px" className="img-fluid" />
          </div>
          <div className="col-md-2 mb-3">
            <img src="Vulcanjpeg.jpeg" alt="motorcycle5pic" width="200px" className="img-fluid" />
          </div>
          <div className="col-md-2 mb-3">
            <img src="Ducati.jpg" alt="motorcycle6pic" width="200px" className="img-fluid" />
          </div>
          {/* Add more columns for other images */}
        </div>
      </div>

      <p id="company-description">
        Kyle's Cycles is a local motorcycle shop located in Provo, UT directly south of BYU campus.
        We are mechanics that specialize in fixing and selling motorcycles.
        We guarantee that the motorcycles we sell have had all major work and maintenance done on them.
        Whether you're a beginner looking to buy your first bike or a seasoned veteran just looking for something
        new to ride, we've got a bike for you.
        If you don't find what you're looking for today, make sure to check back in a few weeks.
        We've always got new bikes on the market.
      </p>
      <hr />
      <h2>Reviews</h2>
      <p className="review">
        "Super helpful! Anytime I find an issue they fix it. I just had a problem and I expected it to take
        a few days for them to get around to fixing it but it was done within the hour. Super quick to respond
        to issues"
        <span className="reviewer">- Brooke</span>
      </p>
      <br />
      <p className="review">
        "Extremely reliable and trustworthy, I'd buy from them again"
        <span className="reviewer">- Daniel</span>
      </p>
      <hr />
    </main>
  );
}