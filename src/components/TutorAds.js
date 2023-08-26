import React from 'react';

function TutorAds( { imageSrc, name, description, experience, price }) {
  return (
    <div className='Tutor-Ads'>
        <img src={imageSrc} alt={name} className="App-logo" />
        <div className="add-content">
            <h3 className="app-header">{name}</h3>
            <p className="add-description">{description}</p>
            <p className="add-experience">Experience: {experience}</p>
            <div className="add-price">{price}</div>
            </div>
        
    </div>
  );
}

export default TutorAds;