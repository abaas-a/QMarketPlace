import React from 'react';
import TutorAds from '../components/TutorAds';
import logo from '../logo.svg';

function Dashboard() {
  return (
    <div>
      <h2>This is the landing page and the dashboard for the quran market place</h2>
      <TutorAds 
      imageSrc={logo}
      name="Abaas Ahmed"
      description= "ijaazah in riwaya Hafs"
      experience="2 years"
      price= "£10/30mins"
      /> 
        
    </div>
    
  );
}

export default Dashboard;