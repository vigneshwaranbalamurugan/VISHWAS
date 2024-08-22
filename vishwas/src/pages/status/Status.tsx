import React from 'react';
import ProgressTracker from './ProgressTracker'; // Assuming the component is in a separate file
import History from './History';

function Status() {
    const stages = [
        { title: 'Seed Selection', description: 'Choosing the right seeds for the crop.' },
        { title: 'Soil Preparation', description: 'Preparing the land for planting.' },
        { title: 'Planting', description: 'Sowing the seeds into the prepared soil.' },
        { title: 'Germination', description: 'The seeds start to grow and sprout.' },
        { title: 'Growth', description: 'The plants continue to grow and develop.' },
        { title: 'Flowering', description: 'The plants produce flowers.' },
        { title: 'Fruiting', description: 'The plants start to produce fruits or vegetables.' },
        { title: 'Harvesting', description: 'Picking the mature fruits or vegetables.' },
        { title: 'Post-Harvest Processing', description: 'Preparing the harvested produce for sale or storage.' },
        { title: 'Shipped', description: 'Your order has been shipped.' },
        { title: 'Delivered', description: 'Your order has been delivered.' },
      ];

  return (
    <div className="container mx-auto p-4">
      <ProgressTracker currentStage={5} stages={stages} />
      <History/>
    </div>
  );
}

export default Status;