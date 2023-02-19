import React from 'react';
import Fronted from './Fronted';
import Backend from './Backend';
import './skills.css';

const Skills = () => {
  return (
   <section className="skills section" id="skills">
        <h2 className="section__title">Compétences</h2>
        <span className="section__subtitle">Langages</span>

        <div className="skills__container container grid">
            <Fronted />
            <Backend />
        </div>
   </section>
  )
}

export default Skills