import TransactionHistory from './components/TransactionHistory';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-roboto p-6">
      <main className="max-w-3xl mx-auto space-y-8">
        <section className="text-center">
          <h1 className="text-4xl font-montserrat font-bold text-teal-700 mb-2">
            Transaction History
          </h1>
          <p className="text-gray-600 text-sm">
            View and manage your recent loyalty point activity
          </p>
        </section>

        <TransactionHistory />
      </main>
    </div>
  );
}

export default App;
