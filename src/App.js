import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import CustomerDetails from './components/CustomerDetails';
import ConversationHistory from './components/ConversationHistory';
import ActionLauncher from './components/ActionLauncher';
import CaseFavorite from './components/CaseFavorite';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <div className="content">
          <div className="details-conversation">
            <CustomerDetails />
            <ConversationHistory />
            <div className="actions-favorites">
              <ActionLauncher />
              <CaseFavorite /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
