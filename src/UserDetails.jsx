import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

export function UserDetails() {
  const { id } = useParams();
  const [ucard, setUcard] = useState({});
  useEffect(()=>{fetch(`https://63d75fb85dbd723244249ea0.mockapi.io/items/${id}`)
  .then((data) => data.json())
  .then((crd) => setUcard(crd));},[]);
  
  return (
    <div className="userdetails">
      <div className="card">
        <div className="title">
          <p>Name: {ucard.Username}</p>
        </div>
        <div className="cardinner">
          <p><b>Password:</b> {ucard.Password}</p>
          <p><b>Email:</b> {ucard.Email}</p>
          <p><b>Date of birth:</b> {ucard.Dateofbirth}</p>
          <p><b>phone number:</b> {ucard.phonenumber}</p>
        </div>
      </div>
    </div>
  );
}
