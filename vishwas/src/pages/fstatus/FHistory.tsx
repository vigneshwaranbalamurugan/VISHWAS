import React from 'react';
import FDispatchHistory from './FDispatchHistory';

function FHistory({ stages, onStageComplete }) {
  return (
    <div className="container mx-auto p-4">
      <FDispatchHistory stages={stages} onStageComplete={onStageComplete} />
    </div>
  );
}

export default FHistory;
