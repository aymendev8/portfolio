import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class="uil uil-university"></i>
            <h3 className="about__title">Etudes</h3>
            <span className="about__subtitle">2éme année</span>
        </div>
        <div className="about__box">
            <i class="uil uil-check-circle"></i>
            <h3 className="about__title">Accomplis</h3>
            <span className="about__subtitle">10 + Projets</span>
        </div>
        <div className="about__box">
            <i class="uil uil-calendar-alt"></i>
            <h3 className="about__title">Disponibilité</h3>
            <span className="about__subtitle">24/7</span>
        </div>
    </div>
  )
}

export default info