export default function TransactionCard({ date, action, points }) {
  const isPositive = points > 0;

  return (
    <li className="p-4 bg-white rounded-xl shadow flex justify-between items-center transition hover:shadow-lg">
      <div className="text-sm text-gray-500">{date}</div>
      <div className="text-base font-medium text-gray-800">{action}</div>
      <div className={`text-base font-bold ${isPositive ? 'text-teal-600' : 'text-red-500'}`}>
        {isPositive ? `+${points}` : points}
      </div>
    </li>
  );
}
