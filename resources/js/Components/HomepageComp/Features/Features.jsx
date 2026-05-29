import "./Features.css"
import { useState, useEffect } from "react";

export default function Features(){

  const [current, setCurrent] = useState(0);
  const slides = [
    '/assets/carousal/banner1.webp',
    '/assets/carousal/banner2.webp',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return(
    <aside>
      <div className="features">
        <div className="sidebar">
          <ul className="feature-list">
            <div className="items">
              <li>Topup & recharge</li>
            </div>

            <div className="items">
              <li>Electricity & Water</li>
              
            </div>

            <div className="items">
              <li>TV Payment</li>
              
            </div>

            <div className="items">
              <li>Bus Ticket/Tours and Travels</li>
              
            </div>

            <div className="items">
              <li>Education Payment</li>
              
            </div>

            <div className="items">
              <li>DOFE/Insurance Payment</li>
              
            </div>

            <div className="items">
              <li>Financial Services</li>
              
            </div>

            <div className="items">
              <li>Movies & Entertainment</li>
              
            </div>
          </ul>
        </div>

        <div className="slideshow">
          <img
            src={slides[current]}
            alt={`Slide ${current + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.5s ease" }}
          />
        </div>
      </div>

      
    </aside>
  )
}