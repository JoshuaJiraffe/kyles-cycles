import React, { useEffect, useState } from 'react';
// import { Motorcycle, getMotos } from './classes';

export function Home() {
  const [motorcycles, setMotorcycles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/motorcycles');
        const motorcyclesData = await response.json();
        localStorage.setItem('motorcycles', JSON.stringify(motorcyclesData));
        setMotorcycles(motorcyclesData);
      } catch (error) {
        const motorcyclesText = localStorage.getItem('motorcycles');
        if (motorcyclesText) {
          const motorcyclesData = JSON.parse(motorcyclesText);
          setMotorcycles(motorcyclesData);
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (userName) {
      document.querySelector("#admin").style.display = 'none';
      document.querySelector("#logout").style.display= 'block';
    } else {
      document.querySelector("#admin").style.display = 'block';
      document.querySelector("#logout").style.display= 'none';
    }
  }, []);

  const updateViewsDisplay = async (motorcycleId, card) => {
    try {
      await fetch(`/incrementViews/${motorcycleId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const viewsResponse = await fetch(`/motorcycles/${motorcycleId}/views`);
      const views = await viewsResponse.json();

      card.querySelector('.views').textContent = views;
    } catch (error) {
      console.error('Error updating views:', error);
    }
  };

  const sortMotorcycles = (property, order) => {
    const sortedMotorcycles = [...motorcycles].sort((a, b) => {
      const valueA = getValue(a, property);
      const valueB = getValue(b, property);

      if (order === 'asc') {
        return valueA - valueB;
      } else {
        return valueB - valueA;
      }
    });

    setMotorcycles(sortedMotorcycles);
  };

  const getValue = (motorcycle, property) => {
    switch (property) {
      case 'price':
        return parseFloat(motorcycle.price.replace('$', '').replace(',', ''));
      case 'year':
        return parseInt(motorcycle.year);
      case 'views':
        return parseInt(motorcycle.views);
      default:
        return 0;
    }
  };

  return (
    <main className="main-content">
      <div className="justify-content-end top-0 right-0 p-0 d-flex align-items-center" style={{ top: '10px', marginRight: '25px' }}>
        <span id="sortLabel" className="me-2">
          Sort by:
        </span>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="filterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            --
          </button>
          <ul className="dropdown-menu" aria-labelledby="filterDropdown">
            <li>
              <a className="dropdown-item" href="#" onClick={() => sortMotorcycles('price', 'asc')}>
                Price Low to High
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => sortMotorcycles('price', 'desc')}>
                Price High to Low
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => sortMotorcycles('year', 'asc')}>
                Oldest
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => sortMotorcycles('year', 'desc')}>
                Newest
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => sortMotorcycles('views', 'desc')}>
                Popular
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="motorcycle-list">
        {motorcycles.map((motorcycle, index) => (
          <div className="motorcycle-card" key={index}>
            <a
              href="#"
              className="motorcycle-link"
              data-motorcycle={motorcycle.name}
              onClick={async (event) => {
                event.preventDefault();
                const motorcycleId = motorcycle.id;
                const card = event.currentTarget.parentElement;

                await updateViewsDisplay(motorcycleId, card);

                const url = `motorcycle.html?id=${motorcycleId}`;
                window.location.href = url;
              }}
            >
              {/* ... */}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
