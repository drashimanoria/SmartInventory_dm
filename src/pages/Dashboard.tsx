import React from 'react';
import { Package, Warehouse, AlertTriangle, TrendingUp, Users, DollarSign, Calendar, Brain } from 'lucide-react';
import MetricCard from '../components/MetricCard';
import Card from '../components/Card';

const Dashboard: React.FC = () => {
  const metrics = [
    {
      title: 'Total Products',
      value: '1,247',
      change: '+12%',
      isPositive: true,
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      title: 'Low Stock Items',
      value: '23',
      change: '-8%',
      isPositive: true,
      icon: Warehouse,
      color: 'bg-amber-500'
    },
    {
      title: 'Expiring Soon',
      value: '15',
      change: '+5%',
      isPositive: false,
      icon: AlertTriangle,
      color: 'bg-red-500'
    },
    {
      title: 'Monthly Sales',
      value: '₹2.4L',
      change: '+18%',
      isPositive: true,
      icon: TrendingUp,
      color: 'bg-green-500'
    }
  ];

  const recentAlerts = [
    { id: 1, product: 'Organic Milk 1L', expiry: '2025-01-28', status: 'critical' },
    { id: 2, product: 'Bread Loaf', expiry: '2025-01-29', status: 'warning' },
    { id: 3, product: 'Greek Yogurt', expiry: '2025-01-30', status: 'warning' },
  ];

  const topProducts = [
    { name: 'Organic Milk 1L', sales: 145, revenue: '₹21,750' },
    { name: 'Bread Loaf', sales: 132, revenue: '₹6,600' },
    { name: 'Premium Rice 5kg', sales: 89, revenue: '₹44,500' },
    { name: 'Fresh Eggs (12)', sales: 76, revenue: '₹4,560' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your inventory.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Today: Jan 25, 2025</span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <Card title="Sales Trend" subtitle="Last 7 days" className="lg:col-span-2">
          <div className="h-80 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 flex items-end justify-center space-x-2">
            {[65, 45, 78, 52, 89, 67, 82].map((height, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div 
                  className="bg-blue-500 rounded-t-lg w-8 transition-all duration-500 hover:bg-blue-600"
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs text-gray-600">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* ML Predictions */}
        <Card title="ML Insights" action={
          <div className="flex items-center space-x-2 text-purple-600">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">AI Powered</span>
          </div>
        }>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-lg">
              <h4 className="font-medium text-green-800">Sales Forecast</h4>
              <p className="text-2xl font-bold text-green-900 mt-1">+15.2%</p>
              <p className="text-sm text-green-700">Expected growth next week</p>
            </div>
            <div className="bg-gradient-to-r from-amber-100 to-amber-200 p-4 rounded-lg">
              <h4 className="font-medium text-amber-800">Spoilage Risk</h4>
              <p className="text-2xl font-bold text-amber-900 mt-1">8 Items</p>
              <p className="text-sm text-amber-700">Require immediate attention</p>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800">Discount Suggestions</h4>
              <p className="text-2xl font-bold text-blue-900 mt-1">5-15%</p>
              <p className="text-sm text-blue-700">For expiring products</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Expiry Alerts */}
        <Card title="Critical Expiry Alerts" subtitle="Items expiring within 7 days">
          <div className="space-y-3">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                <div>
                  <p className="font-medium text-gray-900">{alert.product}</p>
                  <p className="text-sm text-gray-600">Expires: {alert.expiry}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  alert.status === 'critical' 
                    ? 'bg-red-200 text-red-800' 
                    : 'bg-amber-200 text-amber-800'
                }`}>
                  {alert.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Products */}
        <Card title="Top Selling Products" subtitle="This month">
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.sales} units sold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{product.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;