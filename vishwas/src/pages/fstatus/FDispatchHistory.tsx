import React from 'react';

interface Stage {
  title: string;
  description: string;
  completed: boolean;
  dateCompleted?: string;
}

interface FDispatchHistoryProps {
  stages: Stage[];
  onStageComplete: (stageIndex: number) => void;
}

const FDispatchHistory: React.FC<FDispatchHistoryProps> = ({ stages, onStageComplete }) => {
  return (
    <div className="mt-4">
      <ul className="list-disc pl-6">
        {stages.map((stage, index) => (
          <li key={index} className="mb-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                disabled={index > 0 && !stages[index - 1].completed}
                checked={stage.completed}
                onChange={() => {
                  if (!stage.completed && (index === 0 || stages[index - 1].completed)) {
                    onStageComplete(index);
                  }
                }}
              />
              <div className="text-base font-medium">
                {stage.title}
                {stage.completed && (
                  <span className="text-gray-500 ml-2">({stage.dateCompleted ?? 'N/A'})</span>
                )}
              </div>
            </div>
            <div className="ml-4 text-gray-500 text-base">{stage.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FDispatchHistory;
