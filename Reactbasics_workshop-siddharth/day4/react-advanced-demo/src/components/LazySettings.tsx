import React from 'react';

const LazySettings: React.FC = () => {
  return (
    <div className="settings">
      <h2>Settings Panel</h2>
      <p>This component is lazy-loaded using React.lazy and Suspense.</p>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="theme">Theme:</label>
          <select id="theme" name="theme">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="notifications">
            <input type="checkbox" id="notifications" name="notifications" />
            Enable Notifications
          </label>
        </div>
        <button type="button">Save Settings</button>
      </form>
    </div>
  );
};

export default LazySettings;