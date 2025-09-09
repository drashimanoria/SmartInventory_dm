import React from 'react';
import { Users, Star, Phone, Mail, MapPin } from 'lucide-react';
import Card from '../components/Card';

const Suppliers: React.FC = () => {
  const suppliers = [
    {
      id: 'S001',
      name: 'Fresh Farm Co',
      category: 'Dairy',
      contact: '+91 98765 43210',
      email: 'contact@freshfarm.com',
      address: 'Mumbai, Maharashtra',
      rating: 4.8,
      products: 15,
      lastOrder: '2025-01-20',
      status: 'active'
    },
    {
      id: 'S002',
      name: 'Golden Grains Ltd',
      category: 'Grains & Cereals',
      contact: '+91 87654 32109',
      email: 'orders@goldengrains.com',
      address: 'Punjab, India',
      rating: 4.6,
      products: 28,
      lastOrder: '2025-01-18',
      status: 'active'
    },
    {
      id: 'S003',
      name: 'Daily Bread Bakery',
      category: 'Bakery',
      contact: '+91 76543 21098',
      email: 'sales@dailybread.com',
      address: 'Delhi, India',
      rating: 4.2,
      products: 12,
      lastOrder: '2025-01-15',
      status: 'active'
    },
    {
      id: 'S004',
      name: 'Organic Harvest',
      category: 'Organic Products',
      contact: '+91 65432 10987',
      email: 'info@organicharvest.com',
      address: 'Bangalore, Karnataka',
      rating: 4.9,
      products: 22,
      lastOrder: '2025-01-22',
      status: 'active'
    },
    {
      id: 'S005',
      name: 'Quality Beverages',
      category: 'Beverages',
      contact: '+91 54321 09876',
      email: 'contact@qualitybev.com',
      address: 'Pune, Maharashtra',
      rating: 3.8,
      products: 18,
      lastOrder: '2025-01-10',
      status: 'inactive'
    }
  ];

  const topPerformers = suppliers
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const getStatusColor = (status: string) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-gray-100 text-gray-800';
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Suppliers Management</h1>
          <p className="text-gray-600 mt-2">Manage supplier relationships and performance metrics</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Users className="w-4 h-4" />
          <span>Add Supplier</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 mb-1">Total Suppliers</p>
              <p className="text-2xl font-bold text-blue-900">{suppliers.length}</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 mb-1">Active Suppliers</p>
              <p className="text-2xl font-bold text-green-900">
                {suppliers.filter(s => s.status === 'active').length}
              </p>
            </div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">✓</span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-yellow-600 mb-1">Avg Rating</p>
              <p className="text-2xl font-bold text-yellow-900">
                {(suppliers.reduce((sum, s) => sum + s.rating, 0) / suppliers.length).toFixed(1)}
              </p>
            </div>
            <Star className="w-8 h-8 text-yellow-500 fill-current" />
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 mb-1">Total Products</p>
              <p className="text-2xl font-bold text-purple-900">
                {suppliers.reduce((sum, s) => sum + s.products, 0)}
              </p>
            </div>
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">#</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Suppliers List */}
        <div className="lg:col-span-2">
          <Card title="Supplier Directory" subtitle="Complete list of your business partners">
            <div className="space-y-4">
              {suppliers.map((supplier) => (
                <div key={supplier.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{supplier.name}</h3>
                        <p className="text-sm text-gray-600">{supplier.id} • {supplier.category}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(supplier.status)}`}>
                      {supplier.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{supplier.contact}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{supplier.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{supplier.address}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {renderStars(supplier.rating)}
                      <span className="text-sm text-gray-600 ml-2">{supplier.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="text-sm text-gray-600">
                      <span>{supplier.products} products • Last order: {supplier.lastOrder}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full hover:bg-blue-200 transition-colors">
                        View Products
                      </button>
                      <button className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full hover:bg-green-200 transition-colors">
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Top Performers */}
        <div className="space-y-6">
          <Card title="Top Performers" subtitle="Highest rated suppliers">
            <div className="space-y-4">
              {topPerformers.map((supplier, index) => (
                <div key={supplier.id} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{supplier.name}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      {renderStars(supplier.rating)}
                      <span className="text-sm text-gray-600 ml-1">{supplier.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Quick Actions" subtitle="Manage supplier operations">
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center space-x-2 p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 font-medium">Add New Supplier</span>
              </button>
              
              <button className="w-full flex items-center justify-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors">
                <Star className="w-4 h-4 text-green-600" />
                <span className="text-green-700 font-medium">Rate Suppliers</span>
              </button>
              
              <button className="w-full flex items-center justify-center space-x-2 p-3 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors">
                <Mail className="w-4 h-4 text-purple-600" />
                <span className="text-purple-700 font-medium">Send Bulk Message</span>
              </button>
            </div>
          </Card>

          <Card title="Categories" subtitle="Supplier distribution">
            <div className="space-y-3">
              {Array.from(new Set(suppliers.map(s => s.category))).map((category, index) => {
                const count = suppliers.filter(s => s.category === category).length;
                const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500'];
                return (
                  <div key={category} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${colors[index]}`} />
                      <span className="text-sm font-medium text-gray-900">{category}</span>
                    </div>
                    <span className="text-sm text-gray-600">{count}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;