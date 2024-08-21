// cpt.tsx

export interface Contract {
    id: number;
    title: string;
    status: string; // "Active" or "Completed"
    description: string;
  }
  
  export interface Contractor {
    id: number;
    name: string;
    companyName: string;
    contactInfo: {
      phone: string;
      email: string;
    };
    location: string;
    experience: number;
    specialties: string[];
    contracts: Contract[]; // Add this property
  }
  
  export const contractors: Contractor[] = [
    {
      id: 1,
      name: "Nesamani",
      companyName: "Nesamani Traders",
      contactInfo: {
        phone: "9424145414",
        email: "nesamani@outlook.com",
      },
      location: "Tamil Nadu, India",
      experience: 10,
      specialties: ["Organic Farming", "Crop Rotation"], // Changed to an array
      contracts: [
        {
          id: 1,
          title: "Spring Crop 2024",
          status: "Active",
          description: "Managing organic crop production for the spring season.",
        },
        {
          id: 2,
          title: "Winter Wheat 2023",
          status: "Completed",
          description: "Successfully managed wheat production for the winter season.",
        },
        {
          id: 3,
          title: "Summer Corn 2023",
          status: "Completed",
          description: "Completed corn production and delivery for summer 2023.",
        },
      ],
    },
    // Add more contractors if needed
  ];
  