import React from "react";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="selectors">
                <div className="step-number">
                    <h1>1</h1>
                </div>
                <div className="step-info">
                    <h3>STEP 1</h3>
                    <h2>YOUR INFO</h2>
                </div>

            </div>
            <div className="selectors">
                <div className="step-number">
                    <h1>2</h1>
                </div>
                <div className="step-info">
                    <h3>STEP 2</h3>
                    <h2>SELECT PLAN</h2>
                </div>

            </div>
            <div className="selectors">
                <div className="step-number">
                    <h1>3</h1>
                </div>
                <div className="step-info">
                    <h3>STEP 3</h3>
                    <h2>ADD-ONS</h2>
                </div>

            </div>
            <div className="selectors">
                <div className="step-number">
                    <h1>4</h1>
                </div>
                <div className="step-info">
                    <h3>STEP 4</h3>
                    <h2>SUMMARY</h2>
                </div>

            </div>

        </div>
    )
}

export default Sidebar;