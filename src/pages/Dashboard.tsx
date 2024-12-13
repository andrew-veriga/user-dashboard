import { Layout } from '../components/Layout';
import { useAuthStore } from '../stores/authStore';

export const Dashboard = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <Layout>
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Welcome back, {user?.name}!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h2 className="text-lg font-medium text-indigo-900 mb-2">Profile</h2>
            <p className="text-indigo-600">View and edit your profile information</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-lg font-medium text-green-900 mb-2">Settings</h2>
            <p className="text-green-600">Manage your account settings</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h2 className="text-lg font-medium text-purple-900 mb-2">Security</h2>
            <p className="text-purple-600">Update your security preferences</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};