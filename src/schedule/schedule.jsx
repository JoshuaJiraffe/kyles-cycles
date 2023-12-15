import React, { useState, useEffect } from 'react';
import './schedule.css';
import { useNavigate } from 'react-router-dom';

export function Schedule() {
    const navigate = useNavigate();
    const [motorcycles, setMotorcycles] = useState([]);
    const [selectedMotorcycle, setSelectedMotorcycle] = useState({});
    const [formData, setFormData] = useState({
      date: '',
      time: '',
      name: '',
      email: '',
      motorcycles: [],
      termsAgreed: false,
    });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const responseMotorcycles = await fetch('/api/motorcycles');
          if (!responseMotorcycles.ok) {
            throw new Error(`Error fetching motorcycles: ${responseMotorcycles.statusText}`);
          }
          const motorcyclesData = await responseMotorcycles.json();
          setMotorcycles(motorcyclesData);
  
          const params = new URLSearchParams(window.location.search);
          const motorcycleId = params.get('id');
  
          const responseDetails = await fetch(`/motorcycle/${motorcycleId}`);
          if (!responseDetails.ok) {
            throw new Error(`Error fetching motorcycle details: ${responseDetails.statusText}`);
          }
          const selectedMotorcycleData = await responseDetails.json();
          setSelectedMotorcycle(selectedMotorcycleData);
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleFormSubmission = async (event) => {
      event.preventDefault();
      
      try {
        const schedulingResponse = await fetch('/api/appointment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (schedulingResponse.ok) {
          const scheduledAppointment = await schedulingResponse.json();
          //alert(`Appointment scheduled successfully!\nAppointment ID: ${scheduledAppointment.id}`);
          navigate('/formcomplete');
        } else {
          alert('Error scheduling appointment. Please try again.');
        }
      } catch (error) {
        console.error('An error occurred during form submission:', error);
        // Handle the error (e.g., display an error message to the user)
      }
    };
  
    return (
      <main className="main-content">
        <h2 className="appointment-title">Appointment for {selectedMotorcycle.name}</h2>
        <form action="formcomplete.html" method="get" className="custom-form" onSubmit={handleFormSubmission}>
          <div className="form-group">
            <label htmlFor="date">Select a Date:</label>
            <input
              type="date"
              id="date"
              name="appointment_date"
              required
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Select a Time:</label>
            <select
              id="time"
              name="appointment_time"
              required
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            >
                <option value="08:00 AM">08:00 AM</option>
                <option value="08:30 AM">08:30 AM</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="09:30 AM">09:30 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="12:30 PM">12:30 PM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="01:30 PM">01:30 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="02:30 PM">02:30 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="03:30 PM">03:30 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="04:30 PM">04:30 PM</option>
                <option value="05:00 PM">05:00 PM</option>
                <option value="05:30 PM">05:30 PM</option>
                <option value="06:00 PM">06:00 PM</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="client_name"
              required
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="client_email"
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="additional-options">
            {/* ... (checkboxes for additional options) */}
          </div>
          <div className="form-group">
            <label htmlFor="terms">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                onChange={(e) => setFormData({ ...formData, termsAgreed: e.target.checked })}
              />
              I understand that in order to test ride any motorcycle, I must bring, in cash, the full price of that motorcycle.
              An employee will hold this money while I test ride the motorcycle as liability coverage in case I crash or otherwise damage the motorcycle.
            </label>
          </div>
          <div className="form-group">
            <input type="submit" value="Schedule Appointment" />
          </div>
        </form>
      </main>
  );
}