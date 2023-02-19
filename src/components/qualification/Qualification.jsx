import React, {useState} from 'react';
import './qualification.css';

const Qualification = () => {
    const[Toggle, setToggle] = React.useState(1);
  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">Mon Parcours</h2>
        <span className="section__subtitle">Formations et stage </span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={Toggle === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => setToggle(1)} >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Parcours scolaire 
                </div>
                <div className={Toggle === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => setToggle(2)} >
                    <i className="uil uil-briefcase qualification__icon"></i> Parcours professionnel
                </div>
            </div>

            <div className="qualification__sections">
                <div className={Toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"} onClick={() => setToggle(1)}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">License informatique</h3>
                            <span className="qualification__subtitle">Université catholique de Lille</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> septembre 2021 - encore en cours
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Bacalauréat</h3>
                            <span className="qualification__subtitle">Lycée Lyautey Casablanca</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2014 - 2021 
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"} onClick={() => setToggle(2)}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Recherche Alternance</h3>
                            <span className="qualification__subtitle">???</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> septembre 2023 - juin 2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Stage de développeur </h3>
                            <span className="qualification__subtitle">HPS - Maroc</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Mai 2022 - juin 2022 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification