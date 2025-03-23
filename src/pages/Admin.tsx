
import React, { useState } from 'react';
import LoginForm from '@/components/admin/LoginForm';
import FeedbackDashboard from '@/components/admin/FeedbackDashboard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const handleLoginSuccess = (token: string) => {
    setToken(token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold">FirstJob Admin</h1>
          </div>
          {isLoggedIn && (
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {isLoggedIn && token ? (
          <FeedbackDashboard token={token} />
        ) : (
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mt-8">
              <LoginForm onLoginSuccess={handleLoginSuccess} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
