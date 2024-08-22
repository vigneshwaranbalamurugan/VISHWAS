import React from 'react';

interface ProgressTrackerProps {
  currentStage: number;
  stages: {
    title: string;
    description: string;
  }[];
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ currentStage, stages }) => {
  return (
    <div className="relative w-full h-20 bg-gray-200 rounded-full">
      <div
        className={`absolute top-0 left-0 h-full bg-green-500 rounded-full transition-width duration-500`}
        style={{ width: `${(currentStage / stages.length) * 100}%` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-between">
        {stages.map((stage, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
            style={{ width: `${100 / stages.length}%` }}
          >
            <div className={`text-center text-sm text-black`}>
              {stage.title}
            </div>
            <div className={`text-center text-xs text-black`}>
              {stage.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;