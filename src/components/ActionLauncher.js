import React, { useState } from 'react';
import './ActionLauncher.css';

const ActionLauncher = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const actions = [
    { id: 1, name: "Add Action", primary: true },
    { id: 2, name: "Fee Reversal" },
    { id: 3, name: "Retail Onboarding" },
    { id: 4, name: "Address Update" },
  ];

  const filteredActions = actions.filter((action) =>
    action.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="action-launcher">
      <h2>Action Launcher</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search actions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="actions-container">
        {filteredActions.map((action) => (
          <button
            key={action.id}
            className={`action-button ${action.primary ? "primary" : ""}`}
          >
            {action.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActionLauncher;
