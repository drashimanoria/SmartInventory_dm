import React from 'react';
import { AlertTriangle, Clock, Package, Percent } from 'lucide-react';
import Card from '../components/Card';

const ExpiryAlerts: React.FC = () => {
  const alerts = [
    { 
      id: 'A001', 
      product: 'Greek Yogurt', 
      quantity: 65, 
      expiry: '2025-01-27', 
      daysLeft: 2, 
      estimatedLoss: 3900, 
      suggestedDiscount: 25,
      priority: 'critical'
    },
    { 
      id: 'A002', 
      product: 'Organic Milk 1L', 
      quantity: 120, 
      expiry: '2025-01-28', 
      daysLeft: 3, 
      estimatedLoss: 18000, 
      suggestedDiscount: 20,
      priority: 'critical'
    },
    { 
      id: 'A003', 
      product: 'Bread Loaf', 
      quantity: 15, 
      expiry: '2025-01-29', 
      daysLeft: 4, 
      estimatedLoss: 750, 
      suggestedDiscount: 15,
      priority: 'high'
    },
    { 
      id: 'A004', 
      product: 'Fresh Eggs (12)', 
      quantity: 35, 
      expiry: '2025-01-30', 
      daysLeft: 5, 
      estimatedLoss: 2100, 
      suggestedDiscount: 15,
      priority: 'high'
    },
    { 
      id: 'A005', 
      product: 'Vegetable Oil 1L', 
      quantity: 22, 
      expiry: '2025-02-01', 
      daysLeft: 7, 
      estimatedLoss: 2640, 
      suggestedDiscount: 10,
      priority: 'medium'
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDaysColor = (days: number) => {
    if (days <= 2) return 'text-red-600 font-bold';
    if (days <= 5) return 'text-amber-600 font-semibold';
    return 'text-yellow-600 font-medium';
  };

  const totalEstimatedLoss = alerts.reduce((sum, alert) => sum + alert.estimatedLoss, 0);
  const criticalAlerts = alerts.filter(alert => alert.priority === 'critical').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Expiry Alerts</h1>
        <p className="text-gray-600 mt-2">Monitor products nearing expiry and take proactive actions</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-red-600 mb-1">Critical Alerts</p>
              <p className="text-2xl font-bold text-red-900">{criticalAlerts}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-amber-600 mb-1">Total Alerts</p>
              <p className="text-2xl font-bold text-amber-900">{alerts.length}</p>
            </div>
            <Clock className="w-8 h-8 text-amber-500" />
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 mb-1">Items at Risk</p>
              <p className="text-2xl font-bold text-blue-900">{alerts.reduce((sum, alert) => sum + alert.quantity, 0)}</p>
            </div>
            <Package className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 mb-1">Potential Loss</p>
              <p className="text-2xl font-bold text-purple-900">₹{(totalEstimatedLoss / 1000).toFixed(1)}k</p>
            </div>
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">₹</span>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts Table */}
      <Card title="Active Expiry Alerts" subtitle="Products requiring immediate attention">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expires</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days Left</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Est. Loss</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Suggested Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {alerts.map((alert) => (
                <tr key={alert.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(alert.priority)}`}>
                      {alert.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                        <Package className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{alert.product}</p>
                        <p className="text-sm text-gray-500">{alert.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-lg font-semibold text-gray-900">{alert.quantity}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {alert.expiry}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getDaysColor(alert.daysLeft)}>
                      {alert.daysLeft} days
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-red-600 font-semibold">₹{alert.estimatedLoss.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="flex items-center space-x-1 px-3 py-1 bg-amber-100 text-amber-700 text-xs rounded-full hover:bg-amber-200 transition-colors">
                        <Percent className="w-3 h-3" />
                        <span>{alert.suggestedDiscount}% off</span>
                      </button>
                      <button className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full hover:bg-blue-200 transition-colors">
                        Move to Sale
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Quick Actions" subtitle="Take immediate action on expiring items">
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span className="font-medium text-red-900">Apply Bulk Discount</span>
              </div>
              <span className="text-red-600 text-sm">2 critical items</span>
            </button>
            
            <button className="w-full flex items-center justify-between p-4 bg-amber-50 border border-amber-200 rounded-lg hover:bg-amber-100 transition-colors">
              <div className="flex items-center space-x-3">
                <Package className="w-5 h-5 text-amber-600" />
                <span className="font-medium text-amber-900">Move to Clearance</span>
              </div>
              <span className="text-amber-600 text-sm">3 high priority</span>
            </button>
            
            <button className="w-full flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-blue-900">Schedule Alerts</span>
              </div>
              <span className="text-blue-600 text-sm">Set reminders</span>
            </button>
          </div>
        </Card>

        <Card title="Expiry Prevention Tips" subtitle="ML-powered recommendations">
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">Optimal Reorder Timing</h4>
              <p className="text-sm text-green-700">Order Greek Yogurt 3 days earlier to reduce expiry risk by 40%</p>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Demand Pattern</h4>
              <p className="text-sm text-blue-700">Organic Milk sales increase by 25% on weekends - adjust pricing accordingly</p>
            </div>
            
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <h4 className="font-medium text-purple-800 mb-2">Bundle Opportunity</h4>
              <p className="text-sm text-purple-700">Create breakfast bundle with expiring bread and eggs for faster turnover</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ExpiryAlerts;