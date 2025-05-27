import { useState, useEffect } from 'react';
import TransactionCard from './TransactionCard';
import Spinner from './Spinner';

const mockData = [
  { date: '2025-05-10', action: 'Redeemed Points', points: -100 },
  { date: '2025-05-09', action: 'Earned Points', points: 200 },
  { date: '2025-05-08', action: 'Donated Points', points: -50 },
];

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setTransactions(prev => [...prev, ...mockData]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
      <ul className="space-y-4">
        {transactions.map((txn, index) => (
          <TransactionCard key={index} {...txn} />
        ))}
      </ul>

      <div className="mt-6 text-center">
        <button
          className="bg-teal-600 text-white px-6 py-2 rounded-md font-medium hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={loadMore}
          disabled={loading}
        >
          {loading ? <Spinner /> : 'Load More'}
        </button>
      </div>
    </div>
  );
}
