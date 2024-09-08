import React, { useState } from 'react';
import FProgressTracker from './FProgressTracker';
import FHistory from './FHistory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Function to send updated stages to the backend
const updateStagesInBackend = async (stages: any[]) => {
  try {
    const response = await fetch('http://localhost:5000/api/v1/farmer/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ stages }),
    });

    if (!response.ok) {
      throw new Error('Failed to update stages');
    }

    const result = await response.json();
    console.log('Update successful:', result);
  } catch (error) {
    console.error('Error updating stages:', error);
  }
};

function FStatus() {
  const [stages, setStages] = useState([
    { title: 'Seed Selection', description: 'Choosing the right seeds for the crop.', completed: false },
    { title: 'Soil Preparation', description: 'Preparing the land for planting.', completed: false },
    { title: 'Planting', description: 'Sowing the seeds into the prepared soil.', completed: false },
    { title: 'Germination', description: 'The seeds start to grow and sprout.', completed: false },
    { title: 'Growth', description: 'The plants continue to grow and develop.', completed: false },
    { title: 'Flowering', description: 'The plants produce flowers.', completed: false },
    { title: 'Fruiting', description: 'The plants start to produce fruits or vegetables.', completed: false },
    { title: 'Harvesting', description: 'Picking the mature fruits or vegetables.', completed: false },
    { title: 'Post-Harvest Processing', description: 'Preparing the harvested produce for sale or storage.', completed: false },
    { title: 'Shipped', description: 'Your order has been shipped.', completed: false },
    { title: 'Delivered', description: 'Your order has been delivered.', completed: false },
  ]);

  // Handle stage completion and update progress bar
  const handleStageComplete = (index: number) => {
    const newStages = [...stages];
    if (!newStages[index].completed) {
      newStages[index].completed = true;
      newStages[index].dateCompleted = new Date().toLocaleDateString();

      // Disable the current stage
      const disabledStages = [...newStages];
      disabledStages[index].disabled = true;

      // Enable the next stage
      if (index + 1 < newStages.length) {
        disabledStages[index + 1].disabled = false;
      }

      setStages(disabledStages);

      // Update backend with new stages
      updateStagesInBackend(disabledStages);
    }
  };

  // Calculate the number of completed stages for progress tracking
  const completedStagesCount = stages.filter(stage => stage.completed).length;

  return (
    <div className="container mx-auto p-4 relative">
      {/* Pass the completed stages count to adjust the progress bar */}
      <FProgressTracker currentStage={completedStagesCount} stages={stages} />
      <FHistory stages={stages} onStageComplete={handleStageComplete} />

      {/* Chat Icon Button */}
      <Link to="/chat">
        <button className="fixed bottom-8 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none">
          <FontAwesomeIcon icon={faComments} size="2x" />
        </button>
      </Link>
    </div>
  );
}

export default FStatus;
