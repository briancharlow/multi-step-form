import React from "react";
import { useState } from "react";

const Step1 = () => {
  const handleSubmit = () => {
    nav;
  };
  return (
    <div className="step1">
      <form onSubmit={handleSubmit}>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number</p>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="e.g. Stephen King" />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="e.g.stephenking@lorem.com"
        />

        <label htmlFor="phone">Phone Number</label>
        <input type="number" id="phone" placeholder="e.g.+1 234 567 890" />

        <button type="submit">Next Step</button>
      </form>
    </div>
  );
};

export default Step1;
