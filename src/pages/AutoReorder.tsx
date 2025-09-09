import React from 'react';
import { ShoppingCart, AlertCircle, CheckCircle, Clock, Package } from 'lucide-react';
import Card from '../components/Card';

const AutoReorder: React.FC = () => {
  const pendingOrders = [
    {
      id: 'PO001',
      product: 'Fresh Eggs (12)',
      supplier: 'Farm Fresh',
      currentStock: 0,
      reorderLevel: 25,
      suggestedQuantity: 100,
      unitPrice: 60,
      totalAmount: 6000,
      urgency: 'critical',
      estimatedDelivery: '2025-01-26'
    },
    {
      id: 'PO002',
      product: 'Bread Loaf',
      supplier: 'Daily Bread Ltd',
      currentStock: 15,
      reorderLevel: 30,
      suggestedQuantity: 75,
      unitPrice: 50,
      totalAmount: 3750,
      urgency: 'high',
      estimatedDelivery: '2025-01-27'
    },
    {
      id: 'PO003',
      product: 'Organic Honey 500g',
      supplier: 'Pure Organics',
      currentStock: 8,
      reorderLevel: 20,
      suggestedQuantity: 50,
      unitPrice: 250,
      totalAmount: 12500,
      urgency: 'medium',
      estimatedDelivery: '2025-01-28'
    },
    {
      id: 'PO004',
      product: 'Premium Olive Oil 1L',
      supplier: 'Mediterranean Co',
      currentStock: 12,
      reorderLevel: 25,
      suggestedQuantity: 60,
      unitPrice: 450,
      totalAmount: 27000,
      urgency: 'medium',
      estimatedDelivery: '2025-01-29'
    }
  ];

  const recentOrders = [
    {
      id: 'PO098',
      product: 'Organic Milk 1L',
      supplier: 'Fresh Farm Co',
      quantity: 150,
      amount: 22500,
      status: 'delivered',
      orderDate: '2025-01-20',
      deliveryDate: '2025-01-22'
    },
    {
      id: 'PO099',
      product: 'Premium Rice 5kg',
      supplier: 'Golden Grains',
      quantity: 80,
      amount: 40000,
      status: 'in-transit',
      orderDate: '2025-01-21',
      deliveryDate: '2025-01-24'
    },
    {
      id: 'PO100',
      product: 'Greek Yogurt',
      supplier: 'Dairy Plus',
      quantity: 120,
      amount: 9600,
      status: 'confirmed',
      orderDate: '2025-01-22',
      deliveryDate: '2025-01-25'
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'in-transit': return 'bg-blue-100 text-blue-800';
      case 'confirmed': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'in-transit': return <Package className="w-4 h-4" />;
      case 'confirmed': return <Clock className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const totalPendingAmount = pendingOrders.reduce((sum, order) => sum + order.totalAmount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Auto Reorder System</h1>
          <p className="text-gray-600 mt-2">Automated purchase orders based on stock levels and ML predictions</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
            <CheckCircle className="w-4 h-4" />
            <span>Approve All</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            <ShoppingCart className="w-4 h-4" />
            <span>Create Manual Order</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-red-600 mb-1">Pending Orders</p>
              <p className="text-2xl font-bold text-red-900">{pendingOrders.length}</p>
            </div>
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-amber-600 mb-1">Total Value</p>
              <p className="text-2xl font-bold text-amber-900">₹{(totalPendingAmount / 1000).toFixed(0)}k</p>
            </div>
            <ShoppingCart className="w-8 h-8 text-amber-500" />
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 mb-1">Critical Items</p>
              <p className="text-2xl font-bold text-blue-900">
                {pendingOrders.filter(order => order.urgency === 'critical').length}
              </p>
            </div>
            <AlertCircle className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 mb-1">Auto Generated</p>
              <p className="text-2xl font-bold text-green-900">85%</p>
            </div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Orders */}
      <Card title="Pending Purchase Orders" subtitle="Orders awaiting approval">
        <div className="space-y-4">
          {pendingOrders.map((order) => (
            <div key={order.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{order.product}</h3>
                    <p className="text-sm text-gray-600">{order.id} • {order.supplier}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getUrgencyColor(order.urgency)}`}>
                  {order.urgency} urgency
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Current Stock</p>
                  <p className={`text-lg font-bold ${order.currentStock === 0 ? 'text-red-600' : order.currentStock < order.reorderLevel ? 'text-amber-600' : 'text-green-600'}`}>
                    {order.currentStock}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Reorder Level</p>
                  <p className="text-lg font-bold text-gray-900">{order.reorderLevel}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Suggested Qty</p>
                  <p className="text-lg font-bold text-blue-600">{order.suggestedQuantity}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">Total Amount</p>
                  <p className="text-lg font-bold text-green-600">₹{order.totalAmount.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Unit Price: ₹{order.unitPrice}</span>
                  <span>•</span>
                  <span>Est. Delivery: {order.estimatedDelivery}</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Modify
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Approve Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Orders */}
      <Card title="Recent Orders" subtitle="Order history and tracking">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-mono text-sm text-gray-900">{order.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="font-medium text-gray-900">{order.product}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {order.supplier}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-900">{order.quantity}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-semibold text-gray-900">₹{order.amount.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className={`flex items-center space-x-1 px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span>{order.status.replace('-', ' ')}</span>
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {order.deliveryDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* ML Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="AI Reorder Insights" subtitle="Machine learning recommendations">
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg">
              <h4 className="font-medium text-purple-800 mb-2">Optimal Order Timing</h4>
              <p className="text-sm text-purple-700 mb-2">Order Bread Loaf 2 days earlier to prevent stockouts</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-xs text-purple-600">92% confidence</span>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">Demand Prediction</h4>
              <p className="text-sm text-green-700 mb-2">Organic Milk demand will increase 20% next week</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-green-600">87% confidence</span>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg">
              <h4 className="font-medium text-amber-800 mb-2">Cost Optimization</h4>
              <p className="text-sm text-amber-700 mb-2">Bulk order Rice to save 12% on unit costs</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-xs text-amber-600">Potential savings: ₹5,400</span>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Supplier Performance" subtitle="Delivery and reliability metrics">
          <div className="space-y-4">
            {[
              { name: 'Fresh Farm Co', onTime: 98, reliability: 96, avgDelivery: '1.2 days' },
              { name: 'Golden Grains', onTime: 94, reliability: 92, avgDelivery: '2.1 days' },
              { name: 'Daily Bread Ltd', onTime: 89, reliability: 88, avgDelivery: '1.8 days' },
              { name: 'Pure Organics', onTime: 91, reliability: 89, avgDelivery: '2.5 days' }
            ].map((supplier, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{supplier.name}</p>
                  <p className="text-sm text-gray-600">Avg delivery: {supplier.avgDelivery}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs text-gray-600">On-time:</span>
                    <span className={`text-xs font-medium ${supplier.onTime >= 95 ? 'text-green-600' : supplier.onTime >= 90 ? 'text-amber-600' : 'text-red-600'}`}>
                      {supplier.onTime}%
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-600">Reliability:</span>
                    <span className={`text-xs font-medium ${supplier.reliability >= 95 ? 'text-green-600' : supplier.reliability >= 90 ? 'text-amber-600' : 'text-red-600'}`}>
                      {supplier.reliability}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AutoReorder;