import React from 'react';

interface Stage {
  title: string;
  description: string;
  completed: boolean;
  dateCompleted?: string;
}

interface DispatchHistoryProps {
  stages: Stage[];
}

const DispatchHistory: React.FC<DispatchHistoryProps> = ({ stages }) => {
  return (
    <div className="mt-4">
      <ul className="list-disc pl-6">
        {stages.map((stage, index) => (
          <li key={index}>
            <div className="flex items-center">
              <div className="mr-2">
                {stage.completed ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75l7.5-7.5 7.5 7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m4 3H12"
                    />
                  </svg>
                )}
              </div>
              <div className="text-base font-medium"> {/* Text size and font weight adjusted */}
                <span>{stage.title}</span>
                {stage.completed && (
                  <span className="text-gray-500 ml-2">({stage.dateCompleted})</span>
                )}
              </div>
            </div>
            <div className="ml-4 text-gray-500 text-base"> {/* Text size adjusted */}
              {stage.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DispatchHistory;