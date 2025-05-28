import React, { useEffect, useState } from 'react';
import TransactionHistory from './components/TransactionHistory';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enabled = saved === 'dark' || (!saved && prefersDark);

    setDarkMode(enabled);
    document.documentElement.classList.toggle('dark', enabled);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-neutral-light dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-roboto transition-colors duration-300">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow bg-white dark:bg-gray-800">
        <h1 className="text-xl font-montserrat font-semibold text-primary">
          KonnectImpact
        </h1>
        <button
          onClick={toggleDarkMode}
          className="text-sm px-4 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto p-6 space-y-8">
        <section className="text-center">
          <h2 className="text-4xl font-montserrat font-bold text-primary mb-2">
            Transaction History
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            View and manage your recent loyalty point activity
          </p>
        </section>

        <TransactionHistory />
      </main>
    </div>
  );
}

export default App;
