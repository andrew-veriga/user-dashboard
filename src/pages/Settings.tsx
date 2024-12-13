import { useState } from 'react';
import { Layout } from '../components/Layout';

export const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save the settings here
    alert('Settings saved successfully!');
  };

  return (
    <Layout>
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Account Settings</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Notifications</h2>
            <div className="flex items-center">
              <input
                id="email-notifications"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
              />
              <label
                htmlFor="email-notifications"
                className="ml-2 block text-sm text-gray-700"
              >
                Receive email notifications
              </label>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Appearance</h2>
            <div className="flex items-center">
              <input
                id="dark-mode"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
              />
              <label htmlFor="dark-mode" className="ml-2 block text-sm text-gray-700">
                Enable dark mode
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};