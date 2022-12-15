import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
 let navigate = useNavigate();
  return (
    <div>
      <h3 className="align-center">The project has been deleted</h3>
    </div>
  )
}

export default ConfirmationPage
