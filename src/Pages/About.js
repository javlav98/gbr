import React from 'react'
import './About.css';

function AboutContent () {
  return (
    <div className="aboutContent">
      <h1>GBRentals</h1>
      <img src="/gbr3.png" alt="trailer" />
      <h2>Are you in need of reliable and affordable trailer rentals? Look no further! Our dedicated team is here to provide you with top-notch trailer solutions, tailored to suit your specific needs. Whether you're moving, transporting goods, or embarking on an adventure, we've got you covered.</h2>
      <h2>Why choose us?</h2>

      <ul>
        <li>Unbeatable Prices: We believe that quality service shouldn't come with a hefty price tag. Our trailer rentals are competitively priced, ensuring you get the best value for your money.</li>
        <li>Convenient Hours: We understand that life can be busy, and that's why we're open 7 days a week from 5 am to 9 pm. Our flexible hours ensure you can pick up or drop off your rental at a time that suits your schedule.</li>
        <li>Top-Notch Customer Service: Your satisfaction is our priority. Our friendly and knowledgeable staff are always ready to assist you and ensure a smooth rental experience from start to finish.</li>
        <li>Well-Maintained Trailers: Safety is paramount, and we take it seriously. All our trailers undergo regular maintenance checks to ensure they are in excellent condition and ready for your journey.</li>
        <li>Convenient Booking: Renting a trailer with us is a breeze! Give us a call, and we'll have everything prepared for you when you arrive.</li>
      </ul>
    </div>
  )
}

export default function About() {
  return (
    <div>
      <AboutContent />
    </div>
  )
}
