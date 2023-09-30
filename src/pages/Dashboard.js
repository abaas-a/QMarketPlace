import React, { useState } from 'react';
import TutorAds from '../components/TutorAds';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom";

function Dashboard() {
  const [error, setError] = useState()
  const {currentUser, logout} = useAuth()
  const history = useHistory()
  
  async function handleLogOut(){
    setError("")

    try {
      await logout()
      history.push("/login")
    }catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <div>
        <h2>This is the landing page and the dashboard for the quran market place</h2>
        <TutorAds 
        imageSrc={logo}
        name="Abaas Ahmed"
        description= "Tall fit and handsome Quran teacher"
        experience="2 years"
        price= "£10/30mins"
        /> 
          
      </div>
      <div classname="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogOut}>
          Log Out
        </Button>
        
      </div>
    </>
      
  );
}

export default Dashboard;