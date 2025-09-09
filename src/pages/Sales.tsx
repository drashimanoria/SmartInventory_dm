import React, { useState } from 'react';
import { TrendingUp, DollarSign, CreditCard, Calendar, Filter } from 'lucide-react';
import Card from '../components/Card';
import MetricCard from '../components/MetricCard';

const Sales: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const salesMetrics = [
    {
      title: 'Total Revenue',
      value: '₹2,45,680',
      change: '+18.2%',
      isPositive: true,
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Total Transactions',
      value: '1,247',
      change: '+12.5%',
      isPositive: true,
      icon: TrendingUp,
      color: 'bg-blue-500'
    },
    {
      title: 'Avg Transaction',
      value: '₹197',
      change: '+5.1%',
      isPositive: true,
      icon: CreditCard,
      color: 'bg-purple-500'
    },
    {
      title: 'Daily Average',
      value: '₹35,097',
      change: '+8.7%',
      isPositive: true,
      icon: Calendar,
      color: 'bg-amber-500'
    }
  ];

  const recentSales = [
    { id: 'S001', product: 'Organic Milk 1L', quantity: 5, amount: 750, mode: 'card', time: '10:30 AM' },
    { id: 'S002', product: 'Bread Loaf', quantity: 2, amount: 100, mode: 'cash', time: '10:28 AM' },
    { id: 'S003', product: 'Premium Rice 5kg', quantity: 1, amount: 500, mode: 'upi', time: '10:25 AM' },
    { id: 'S004', product: 'Greek Yogurt', quantity: 3, amount: 240, mode: 'card', time: '10:22 AM' },
    { id: 'S005', product: 'Fresh Eggs (12)', quantity: 4, amount: 240, mode: 'cash', time: '10:20 AM' },
  ];

  const dailySales = [
    { day: 'Mon', sales: 32500, transactions: 165 },
    { day: 'Tue', sales: 28900, transactions: 142 },
    { day: 'Wed', sales: 41200, transactions: 198 },
    { day: 'Thu', sales: 35600, transactions: 178 },
    { day: 'Fri', sales: 48300, transactions: 225 },
    { day: 'Sat', sales: 52400, transactions: 245 },
    { day: 'Sun', sales: 45100, transactions: 210 },
  ];

  const paymentModes = [
    { mode: 'UPI', amount: 98650, percentage: 40, color: 'bg-blue-500' },
    { mode: 'Card', amount: 73995, percentage: 30, color: 'bg-green-500' },
    { mode: 'Cash', amount: 49320, percentage: 20, color: 'bg-yellow-500' },
    { mode: 'Others', amount: 23715, percentage: 10, color: 'bg-gray-500' },
  ];

  const getPaymentModeIcon = (mode: string) => {
    switch (mode.toLowerCase()) {
      case 'card': return '💳';
      case 'cash': return '💰';
      case 'upi': return '📱';
      default: return '💳';
    }
  };

  const getPaymentModeColor = (mode: string) => {
    switch (mode.toLowerCase()) {
      case 'card': return 'bg-blue-100 text-blue-800';
      case 'cash': return 'bg-green-100 text-green-800';
      case 'upi': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sales Tracking</h1>
          <p className="text-gray-600 mt-2">Monitor sales performance and payment analytics</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Filter className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {salesMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <Card title="Daily Sales Trend" subtitle="Last 7 days performance" className="lg:col-span-2">
          <div className="h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
            <div className="flex items-end justify-center space-x-4 h-full">
              {dailySales.map((day, index) => {
                const maxSales = Math.max(...dailySales.map(d => d.sales));
                const height = (day.sales / maxSales) * 100;
                
                return (
                  <div key={index} className="flex flex-col items-center space-y-2 group">
                    <div className="bg-white p-2 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <p className="text-xs font-medium">₹{(day.sales / 1000).toFixed(1)}k</p>
                      <p className="text-xs text-gray-600">{day.transactions} orders</p>
                    </div>
                    <div 
                      className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg w-12 transition-all duration-500 hover:from-blue-600 hover:to-purple-600 cursor-pointer"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-sm text-gray-600 font-medium">{day.day}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Payment Methods */}
        <Card title="Payment Methods" subtitle="Distribution by mode">
          <div className="space-y-4">
            {paymentModes.map((payment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${payment.color}`} />
                  <div>
                    <p className="font-medium text-gray-900">{payment.mode}</p>
                    <p className="text-sm text-gray-600">{payment.percentage}%</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">₹{(payment.amount / 1000).toFixed(1)}k</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-900">Total</span>
              <span className="text-lg font-bold text-gray-900">
                ₹{(paymentModes.reduce((sum, p) => sum + p.amount, 0) / 1000).toFixed(1)}k
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Sales */}
      <Card title="Recent Transactions" subtitle="Latest sales activity">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentSales.map((sale) => (
                <tr key={sale.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-mono text-sm text-gray-900">{sale.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="font-medium text-gray-900">{sale.product}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-900">{sale.quantity}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-semibold text-green-600">₹{sale.amount}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{getPaymentModeIcon(sale.mode)}</span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPaymentModeColor(sale.mode)}`}>
                        {sale.mode.toUpperCase()}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {sale.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Sales Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Top Products" subtitle="Best sellers this week">
          <div className="space-y-4">
            {[
              { name: 'Organic Milk 1L', sales: 145, revenue: 21750, growth: '+12%' },
              { name: 'Bread Loaf', sales: 132, revenue: 6600, growth: '+8%' },
              { name: 'Premium Rice 5kg', sales: 89, revenue: 44500, growth: '+15%' },
              { name: 'Fresh Eggs (12)', sales: 76, revenue: 4560, growth: '+3%' },
            ].map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.sales} units sold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">₹{product.revenue.toLocaleString()}</p>
                  <p className="text-sm text-green-600 font-medium">{product.growth}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Sales Goals" subtitle="Monthly targets and achievements">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Monthly Target</span>
                <span className="text-sm text-gray-600">82% achieved</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{ width: '82%' }}></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">₹2,45,680</span>
                <span className="font-medium text-gray-900">₹3,00,000</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-2xl font-bold text-green-600">18</p>
                <p className="text-sm text-green-700">Days left</p>
              </div>
              <div className="text-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">₹54,320</p>
                <p className="text-sm text-blue-700">Remaining</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Sales;