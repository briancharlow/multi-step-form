import React from "react";
import Arcade from "../images/icon-arcade.svg";
import Advanced from "../images/icon-advanced.svg";
import Pro from "../images/icon-pro.svg";

const Step2 = () => {
  const handleClick = () => {};
  return (
    <div>
      <h1>Select your plan</h1>
      <h3>You have the option of monthly or yearly billing.</h3>

      <div className="plans">
        <div className="plan">
          <img src={Arcade} alt="arcade" />

          <div className="info">
            <h3>Arcade</h3>
            <span>$9/mo </span>
          </div>
        </div>
        <div className="plan">
          <img src={Advanced} alt="Advanced" />
          <div className="info">
            <h3>Advanced</h3>
            <span>$12/mo</span>
          </div>
        </div>
        <div className="plan">
          <img src={Pro} alt="Pro" />
          <div className="info">
            <h3>Pro</h3>
            <span>$15/mo</span>
          </div>
        </div>
      </div>

      <div className="duration">
        <p>Monthly</p>
        <p>Yearly</p>
      </div>
      <div className="buttons">
        <a href="#">
          <h3> Go Back</h3>
        </a>
        <button type="submit" onClick={handleClick}>
          Next step
        </button>
      </div>
    </div>
  );
};

export default Step2;
