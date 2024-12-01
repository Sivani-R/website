import React from 'react';
import './ConversationHistory.css';

const ConversationHistory = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <p>Conversation</p>
        <p>Attachment</p>
      </div>
      <div className="chat-messages">
        <div className="message received">
          <div className="avatar">CB</div>
          <div className="message-content">
            <div className="message-header">
              <span className="name">Rachel Adams</span>
              <span className="timestamp">9:08 PM · Received By WhatsApp</span>
            </div>
            <div className="message-body">
              Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.
            </div>
          </div>
        </div>
        <div className="message sent">
          <div className="avatar">HK</div>
          <div className="message-content">
            <div className="message-header">
              <span className="name">You</span>
              <span className="timestamp">27Jul, 2024 9:08 PM · Sent By WhatsApp</span>
            </div>
            <div className="message-body">
              Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.
            </div>
          </div>
        </div>
      </div>
      <div className="chat-input">
        <div className="input-options">
          <label>
            <input type="checkbox" checked /> SMS
          </label>
          <label>
            <input type="checkbox" checked /> WhatsApp
          </label>
          <label>
            <input type="checkbox" /> Email
          </label>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Type a message..." />
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
};
export default ConversationHistory;
