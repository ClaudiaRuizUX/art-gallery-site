import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
 let navigate = useNavigate();
  return (
    <div className="align-center">
      <h2>The project has been deleted</h2>
    </div>
  )
}

export default ConfirmationPage
