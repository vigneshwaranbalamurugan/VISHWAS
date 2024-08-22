import React from 'react';
import FarmingOrders from './FarmingOrders'; // Assuming the component is in a separate file

function Contracts() {
    const orders = [
        {
          contractorName: "John Doe",
          institution: "ABC Farms",
          orderDate: "2023-12-15",
          deliveryDate: "2024-01-10",
          commodity: "Wheat",
          quantity: 10,
        },
        {
          contractorName: "Jane Smith",
          institution: "XYZ Agriculture",
          orderDate: "2023-11-20",
          deliveryDate: "2023-12-05",
          commodity: "Rice",
          quantity: 5,
        },
        {
          contractorName: "Michael Johnson",
          institution: "DEF Crops",
          orderDate: "2024-01-08",
          deliveryDate: "2024-02-02",
          commodity: "Corn",
          quantity: 8,
        },
      ];

  return (
    <div>
      <FarmingOrders orders={orders} />
    </div>
  );
}

export default Contracts;