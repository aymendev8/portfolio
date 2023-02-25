import React, {useState} from 'react'

const info = () => {
  function GithubRepoCount() {
    const [repoCount, setRepoCount] = useState(null);
  
    fetch(`https://api.github.com/users/aymendev8/repos`)
      .then(response => response.json())
      .then(data => {
        setRepoCount(data.length);
      });
  
    return (
      <div>
        {repoCount !== null ? (
           <span className="about__subtitle">{repoCount} repos Github</span>
        ) : (
          <span>Chargement...</span>
        )}
      </div>
    );
  }  
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="uil uil-university"></i>
            <h3 className="about__title">Etudes</h3>
            <span className="about__subtitle">2éme année</span>
        </div>
        <div className="about__box">
            <i className="uil uil-check-circle"></i>
            <h3 className="about__title">Accomplis</h3>
            {GithubRepoCount()}
        </div>
        <div className="about__box">
            <i className="uil uil-calendar-alt"></i>
            <h3 className="about__title">Disponibilité</h3>
            <span className="about__subtitle">24/7</span>
        </div>
    </div>
  )
}

export default info