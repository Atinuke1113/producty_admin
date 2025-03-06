'use client';

import { useState } from 'react';
import Layout from '../../components/Layout';
import Chart from '../../components/Chart';
import { CalendarIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const metrics = [
  { name: 'Page Views', value: '2.4M', change: '+14.6%', trend: 'up' },
  { name: 'Bounce Rate', value: '42.3%', change: '-3.2%', trend: 'down' },
  { name: 'Average Session', value: '2m 56s', change: '+12.3%', trend: 'up' },
  { name: 'Conversion Rate', value: '3.24%', change: '+2.8%', trend: 'up' },
];

const dateRanges = [
  { label: 'Last 7 days', value: '7d' },
  { label: 'Last 30 days', value: '30d' },
  { label: 'Last 90 days', value: '90d' },
  { label: 'Year to date', value: 'ytd' },
  { label: 'Custom', value: 'custom' },
];

export default function AnalyticsPage() {
  const [selectedRange, setSelectedRange] = useState('7d');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header with Date Range */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-semibold text-gray-900">Analytics Overview</h1>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <select
                className="rounded-lg border border-gray-300 py-2 pl-3 pr-10 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedRange}
                onChange={(e) => setSelectedRange(e.target.value)}
              >
                {dateRanges.map((range) => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
              {selectedRange === 'custom' && (
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    className="rounded-lg border border-gray-300 py-2 px-3 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="date"
                    className="rounded-lg border border-gray-300 py-2 px-3 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              )}
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <ArrowDownTrayIcon className="h-5 w-5" />
              Export
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div key={metric.name} className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-sm text-gray-600">{metric.name}</p>
              <p className="text-2xl font-semibold mt-2">{metric.value}</p>
              <p className={`text-sm mt-2 ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Traffic Overview</h2>
              <select className="rounded-lg border border-gray-300 py-1.5 pl-3 pr-10 text-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500">
                <option>All Traffic</option>
                <option>Organic</option>
                <option>Direct</option>
                <option>Referral</option>
              </select>
            </div>
            <Chart />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Conversion Rate</h2>
              <select className="rounded-lg border border-gray-300 py-1.5 pl-3 pr-10 text-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500">
                <option>All Sources</option>
                <option>Mobile</option>
                <option>Desktop</option>
                <option>Tablet</option>
              </select>
            </div>
            <Chart />
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Top Pages</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-900">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { page: '/home', views: '12,234', conversion: '2.3%' },
              { page: '/products', views: '8,734', conversion: '3.1%' },
              { page: '/about', views: '6,543', conversion: '1.5%' },
              { page: '/contact', views: '5,432', conversion: '4.2%' },
            ].map((item) => (
              <div key={item.page} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{item.page}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-900">{item.views} views</span>
                  <span className="text-sm text-green-600">{item.conversion} conv.</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 