import React, { useState } from 'react';

const Investment = () => {
  const [stocks, setStocks] = useState([]);
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [totalNetProfit, setTotalNetProfit] = useState(0);

  const handleAddStock = () => {
    const newStock = { buyPrice: parseFloat(buyPrice), sellPrice: parseFloat(sellPrice) };
    setStocks([...stocks, newStock]);
    setBuyPrice('');
    setSellPrice('');
  };

  const handleCalculateTotalNetProfit = () => {
    const totalProfit = stocks.reduce((acc, stock) => acc + (stock.sellPrice - stock.buyPrice), 0);
    setTotalNetProfit(totalProfit.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Stock Investment</h2>
      <div className="flex items-center mb-4">
        <input
          type="number"
          placeholder="Buy Price"
          className="w-1/2 p-3 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Sell Price"
          className="w-1/2 p-3 ml-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
        />
        <button
          onClick={handleAddStock}
          className="ml-2 bg-blue-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
        >
          Add Stock
        </button>
      </div>
      <div className="mb-4">
        <button
          onClick={handleCalculateTotalNetProfit}
          className="bg-green-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-600 transition duration-300"
        >
          Calculate Total Net Profit
        </button>
      </div>
      <div className="text-xl font-semibold text-green-600">
        Total Net Profit: ${totalNetProfit}
      </div>
      <div className="mt-4">
        {stocks.map((stock, index) => (
          <div key={index} className="mb-2">
            Stock {index + 1}: Buy Price - ${stock.buyPrice}, Sell Price - ${stock.sellPrice}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investment;
