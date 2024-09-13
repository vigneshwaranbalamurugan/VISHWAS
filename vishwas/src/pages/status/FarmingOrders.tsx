import React from 'react';
import { Link } from 'react-router-dom';

interface Order {
  contractorName: string;
  institution: string;
  orderDate: string;
  deliveryDate: string;
  commodity: string;
  quantity: number;
}

const FarmingOrders: React.FC<Props> = ({ orders }) => {
  const role=localStorage.getItem('role');
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Farming Orders</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {orders.map((order, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2">{order.contractorName}</h2>
            <p className="text-gray-500 mb-2">{order.institution}</p>
            <p className="text-gray-500 mb-2">Commodity: {order.commodity}</p>
            <p className="text-gray-500 mb-2">Quantity: {order.quantity} quintals</p>
            <p className="text-gray-500 mb-2">Order Date: {order.orderDate}</p>
            <p className="text-gray-500 mb-2">Delivery Date: {order.deliveryDate}</p>
            <Link to={role==='farmer' ?"/fstatus":"/status" }className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
              View Status
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmingOrders;