import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>RISK HAWK</h1>
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <span>📋</span> Internal Audit
        </li>
        <li className="menu-item">
          <span>📄</span> UAT Testing
        </li>
        <li className="menu-item">
          <span>🔗</span> Intract
        </li>
        <li className="menu-item">
          <span>👤</span> Queue
        </li>
        <li className="menu-item">
          <span>🔀</span> Workflow
        </li>
        <li className="menu-item">
          <span>⚙️</span> Admin
        </li>
        <li className="menu-item">
          <span>📦</span> Asset
        </li>
        <li className="menu-item">
          <span>👥</span> Parent
        </li>
        <li className="menu-item">
          <span>1️⃣</span> Option One
        </li>
        <li className="menu-item">
          <span>2️⃣</span> Option Two
        </li>
        <li className="menu-item">
          <span>🔧</span> All Accessories
        </li>
        <li className="menu-item">
          <span>📋</span> Internal Audit
        </li>
        <li className="menu-item">
          <span>✨</span> Decorating
        </li>
        <li className="menu-item">
          <span>🎁</span> Presenting
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
