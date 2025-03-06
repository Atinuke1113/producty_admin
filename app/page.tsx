'use client';

import Layout from '../components/Layout';
import Chart from '../components/Chart';

const stats = [
  { name: 'Total Users', value: '12,345' },
  { name: 'Active Users', value: '8,234' },
  { name: 'Revenue', value: '$123,456' },
  { name: 'Growth', value: '+12.3%' },
];

export default function Page() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <p className="text-sm text-gray-600">{stat.name}</p>
              <p className="text-2xl font-semibold mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <Chart />
      </div>
    </Layout>
  );
} 