import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Completed'); // Default tab

  const tabs = ['Completed', 'Active', 'Available'];

  return (
    <div className="relative w-full mx-auto my-4 p-4 bg-white rounded-lg shadow-md border-t-4 border-blue-500">
      {/* Tab Buttons moved to the top-left corner */}
      <div className="absolute top-0 left-0 mt-2 ml-2 flex space-x-4">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 font-semibold ${
              activeTab === tab
                ? 'text-black border-b-2 border-teal-600'
                : 'text-gray-600 hover:text-teal-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-12">
        {/* Push down the content to leave space for buttons */}
        {activeTab === 'Completed' && <p className="text-gray-800">This is the Completed tab content.</p>}
        {activeTab === 'Active' && <p className="text-gray-800">This is the Active tab content.</p>}
        {activeTab === 'Available' && <p className="text-gray-800">This is the Available tab content.</p>}
      </div>
      
    </div>
  );
};

export default Tabs;
