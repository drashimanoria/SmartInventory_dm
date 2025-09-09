import React from 'react';
import { Package, AlertTriangle, Clock, TrendingDown } from 'lucide-react';
import Card from '../components/Card';
import MetricCard from '../components/MetricCard';

const Inventory: React.FC = () => {
  const inventoryMetrics = [
    {
      title: 'Total Items',
      value: '1,247',
      change: '+3%',
      isPositive: true,
      icon: Package,
      color: 'bg-blue-500'
    },
    {
      title: 'Low Stock',
      value: '23',
      change: '-12%',
      isPositive: true,
      icon: AlertTriangle,
      color: 'bg-amber-500'
    },
    {
      title: 'Expiring Soon',
      value: '15',
      change: '+8%',
      isPositive: false,
      icon: Clock,
      color: 'bg-red-500'
    },
    {
      title: 'Out of Stock',
      value: '5',
      change: '-40%',
      isPositive: true,
      icon: TrendingDown,
      color: 'bg-gray-500'
    }
  ];

  const inventoryItems = [
    { id: 'I001', name: 'Organic Milk 1L', quantity: 120, expiry: '2025-01-28', daysLeft: 3, status: 'expiring' },
    { id: 'I002', name: 'Bread Loaf', quantity: 15, expiry: '2025-01-29', daysLeft: 4, status: 'low-stock' },
    { id: 'I003', name: 'Premium Rice 5kg', quantity: 45, expiry: '2025-03-15', daysLeft: 49, status: 'good' },
    { id: 'I004', name: 'Fresh Eggs (12)', quantity: 0, expiry: '2025-01-30', daysLeft: 5, status: 'out-of-stock' },
    { id: 'I005', name: 'Greek Yogurt', quantity: 65, expiry: '2025-01-27', daysLeft: 2, status: 'expiring' },
    { id: 'I006', name: 'Whole Wheat Pasta', quantity: 88, expiry: '2025-06-20', daysLeft: 146, status: 'good' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-green-100 text-green-800';
      case 'low-stock': return 'bg-amber-100 text-amber-800';
      case 'expiring': return 'bg-red-100 text-red-800';
      case 'out-of-stock': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDaysColor = (days: number) => {
    if (days <= 3) return 'text-red-600 font-semibold';
    if (days <= 7) return 'text-amber-600 font-medium';
    return 'text-green-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Inventory Monitoring</h1>
        <p className="text-gray-600 mt-2">Track stock levels, expiry dates, and inventory health</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {inventoryMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Inventory Table */}
      <Card title="Current Inventory" subtitle="Real-time stock monitoring with expiry tracking">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days Left</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inventoryItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                        <Package className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-lg font-semibold ${
                      item.quantity === 0 ? 'text-red-600' : 
                      item.quantity < 20 ? 'text-amber-600' : 'text-green-600'
                    }`}>
                      {item.quantity}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {item.expiry}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getDaysColor(item.daysLeft)}>
                      {item.daysLeft} days
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                      {item.status.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      {item.status === 'expiring' && (
                        <button className="px-3 py-1 bg-amber-100 text-amber-700 text-xs rounded-full hover:bg-amber-200 transition-colors">
                          Apply Discount
                        </button>
                      )}
                      {(item.status === 'low-stock' || item.status === 'out-of-stock') && (
                        <button className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full hover:bg-blue-200 transition-colors">
                          Reorder
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Category Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Stock by Category" subtitle="Current inventory distribution">
          <div className="space-y-4">
            {[
              { category: 'Dairy', items: 235, percentage: 32 },
              { category: 'Bakery', items: 189, percentage: 26 },
              { category: 'Grains', items: 156, percentage: 21 },
              { category: 'Beverages', items: 98, percentage: 13 },
              { category: 'Others', items: 67, percentage: 8 },
            ].map((cat, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${
                    ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500'][index]
                  }`} />
                  <span className="font-medium text-gray-900">{cat.category}</span>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{cat.items} items</p>
                  <p className="text-sm text-gray-500">{cat.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Expiry Timeline" subtitle="Items expiring in next 30 days">
          <div className="space-y-3">
            {[
              { period: 'Next 3 days', count: 15, color: 'bg-red-500' },
              { period: '4-7 days', count: 23, color: 'bg-amber-500' },
              { period: '8-15 days', count: 31, color: 'bg-yellow-500' },
              { period: '16-30 days', count: 45, color: 'bg-green-500' },
            ].map((period, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${period.color}`} />
                  <span className="font-medium text-gray-900">{period.period}</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">{period.count}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Inventory;