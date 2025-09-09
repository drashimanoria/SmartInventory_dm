import React from 'react';
import { Brain, TrendingUp, TrendingDown, AlertCircle, Target } from 'lucide-react';
import Card from '../components/Card';

const MLPredictions: React.FC = () => {
  const salesForecasts = [
    { product: 'Organic Milk 1L', currentSales: 145, predictedSales: 168, confidence: 92, trend: 'up' },
    { product: 'Bread Loaf', currentSales: 132, predictedSales: 127, confidence: 88, trend: 'down' },
    { product: 'Premium Rice 5kg', currentSales: 89, predictedSales: 95, confidence: 85, trend: 'up' },
    { product: 'Greek Yogurt', currentSales: 76, predictedSales: 82, confidence: 90, trend: 'up' },
  ];

  const spoilageRisks = [
    { product: 'Greek Yogurt', riskScore: 85, daysToExpiry: 2, currentStock: 65, reason: 'Low daily sales vs stock' },
    { product: 'Vegetable Oil 1L', riskScore: 72, daysToExpiry: 7, currentStock: 22, reason: 'Seasonal demand drop' },
    { product: 'Organic Honey', riskScore: 68, daysToExpiry: 12, currentStock: 18, reason: 'Slower than usual sales' },
    { product: 'Whole Grain Cereal', riskScore: 45, daysToExpiry: 25, currentStock: 31, reason: 'Normal risk level' },
  ];

  const discountRecommendations = [
    { product: 'Greek Yogurt', currentPrice: 80, suggestedPrice: 60, discount: 25, expectedSales: '+40%', reasoning: 'High spoilage risk, quick turnover needed' },
    { product: 'Organic Milk 1L', currentPrice: 150, suggestedPrice: 120, discount: 20, expectedSales: '+25%', reasoning: 'Moderate expiry risk, maintain margins' },
    { product: 'Vegetable Oil 1L', currentPrice: 120, suggestedPrice: 108, discount: 10, expectedSales: '+15%', reasoning: 'Low risk, gentle discount sufficient' },
  ];

  const getRiskColor = (score: number) => {
    if (score >= 80) return 'text-red-600 bg-red-100';
    if (score >= 60) return 'text-amber-600 bg-amber-100';
    return 'text-green-600 bg-green-100';
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? <TrendingUp className="w-4 h-4 text-green-500" /> : <TrendingDown className="w-4 h-4 text-red-500" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">ML Predictions</h1>
          <p className="text-gray-600 mt-2">AI-powered insights for sales forecasting, spoilage prediction, and dynamic pricing</p>
        </div>
        <div className="flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg">
          <Brain className="w-5 h-5" />
          <span className="font-medium">AI Powered</span>
        </div>
      </div>

      {/* Model Performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-blue-900">Sales Forecasting</h3>
            <Target className="w-6 h-6 text-blue-600" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-blue-700">Accuracy</span>
              <span className="font-bold text-blue-900">89.2%</span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '89%' }}></div>
            </div>
            <p className="text-xs text-blue-600">XGBoost Regressor</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-amber-900">Spoilage Prediction</h3>
            <AlertCircle className="w-6 h-6 text-amber-600" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-amber-700">Precision</span>
              <span className="font-bold text-amber-900">91.5%</span>
            </div>
            <div className="w-full bg-amber-200 rounded-full h-2">
              <div className="bg-amber-600 h-2 rounded-full" style={{ width: '91%' }}></div>
            </div>
            <p className="text-xs text-amber-600">Random Forest Classifier</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-green-900">Discount Optimization</h3>
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-green-700">ROI Improvement</span>
              <span className="font-bold text-green-900">+23%</span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '76%' }}></div>
            </div>
            <p className="text-xs text-green-600">Regression Model</p>
          </div>
        </div>
      </div>

      {/* Sales Forecasting */}
      <Card title="Sales Forecasting" subtitle="Next week predictions based on historical data">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Predicted Sales</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confidence</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {salesForecasts.map((forecast, index) => {
                const change = ((forecast.predictedSales - forecast.currentSales) / forecast.currentSales * 100);
                return (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {forecast.product}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                      {forecast.currentSales}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900">{forecast.predictedSales}</span>
                        {getTrendIcon(forecast.trend)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`font-medium ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {change >= 0 ? '+' : ''}{change.toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${forecast.confidence}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">{forecast.confidence}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full hover:bg-blue-200 transition-colors">
                        Adjust Stock
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Spoilage Prediction */}
      <Card title="Spoilage Risk Analysis" subtitle="Items at risk of expiring before being sold">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {spoilageRisks.map((risk, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{risk.product}</h4>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(risk.riskScore)}`}>
                  {risk.riskScore}% Risk
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Days to expiry:</span>
                  <span className="font-medium">{risk.daysToExpiry} days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Current stock:</span>
                  <span className="font-medium">{risk.currentStock} units</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                <p className="text-xs text-gray-600 mb-1">Risk Factor:</p>
                <p className="text-sm font-medium text-gray-900">{risk.reason}</p>
              </div>
              
              <button className="w-full px-3 py-2 bg-amber-100 text-amber-700 text-sm rounded-lg hover:bg-amber-200 transition-colors">
                Apply Preventive Actions
              </button>
            </div>
          ))}
        </div>
      </Card>

      {/* Dynamic Discount Recommendations */}
      <Card title="Dynamic Discount Recommendations" subtitle="AI-optimized pricing to maximize revenue">
        <div className="space-y-4">
          {discountRecommendations.map((rec, index) => (
            <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">{rec.product}</h4>
                <span className="text-2xl font-bold text-purple-600">{rec.discount}% OFF</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Current Price</p>
                  <p className="text-xl font-bold text-gray-900 line-through">₹{rec.currentPrice}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Suggested Price</p>
                  <p className="text-xl font-bold text-green-600">₹{rec.suggestedPrice}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Expected Sales Boost</p>
                  <p className="text-xl font-bold text-blue-600">{rec.expectedSales}</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-600 mb-1">AI Reasoning:</p>
                <p className="text-sm font-medium text-gray-900">{rec.reasoning}</p>
              </div>
              
              <div className="flex space-x-3">
                <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Apply Discount
                </button>
                <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                  Simulate Impact
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default MLPredictions;