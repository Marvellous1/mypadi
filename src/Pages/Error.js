import React from "react";
import  NotFound  from "../images/NotFound.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center">
      <img src={NotFound} alt="404" />
      <h3 className="text-secondary">Oops, Something Is Not Right</h3>
      <small className="text-muted">I think you're lost. Please go back Home</small>
      <br/>
      <button className="btn btn-primary mt-5">
        <Link to="/dashboard">Dashboard</Link>
      </button>
    </div>
  );
};

export default Error;
