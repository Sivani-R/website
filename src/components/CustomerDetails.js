import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './CustomerDetails.css';

const CustomerDetails = () => {
  return (
    <div className="customer-card">
      <div className="customer-header">
        <div className="customer-image">CB</div>
        <div className="customer-info">
          <h2>Hannibal Smith</h2>
          <p><FaMapMarkerAlt/> 1 Market Street San Francisco, CA 94105</p>
        </div>
      </div>

      <div className="customer-section">
        <div className="customer-row">
          <span>Customer ID</span>
          <strong>12345</strong>
          <div className="menu-icon">⋮</div>
        </div>
        <div className="customer-row">
          <span>Email Address</span>
          <strong>rachel@sample.com</strong>
          <div className="menu-icon">⋮</div>
        </div>
        <div className="customer-row">
          <span>Phone Number</span>
          <strong>8051298905</strong>
          <div className="menu-icon">⋮</div>
        </div>
        <button className="add-btn">+ Add</button>
      </div>

      <div className="customer-section">
        <div className="customer-row">
          <span>Loyalty Tier</span>
          <strong>Silver</strong>
          <div className="menu-icon">⋮</div>
        </div>
        <div className="customer-row">
          <span>Segment</span>
          <strong>Sleepy Customer</strong>
          <div className="menu-icon">⋮</div>
        </div>
        <button className="add-btn">+ Add</button>
      </div>

      <div className="customer-section">
        <div className="customer-row">
          <span>Lifetime Value</span>
          <strong>$1M</strong>
          <div className="menu-icon">⋮</div>
        </div>
        <div className="customer-row">
          <span>Propensity to Purchase</span>
          <strong>
            <span className="propensity">75%</span>
          </strong>
          <div className="menu-icon">⋮</div>
        </div>
        <button className="add-btn">+ Add</button>
      </div>

      <div className="customer-section">
        <div className="customer-row">
          <span>Engagement Score</span>
          <strong>
            <span className="engagement">80%</span>
          </strong>
          <div className="menu-icon">⋮</div>
        </div>
        <button className="add-btn">+ Add</button>
      </div>

      <button className="assign-agent-btn">Assign other Agent</button>
      <button className="add-widget-btn">Add New Widget</button>
    </div>
  );
};

export default CustomerDetails;
