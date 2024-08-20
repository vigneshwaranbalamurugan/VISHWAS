import React, { useState, useEffect } from 'react';

const states = [
  { value: 'Andhra Pradesh', districts: ['Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Kadapa', 'Krishna', 'Kurnool', 'Nellore', 'Prakasam', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram', 'West Godavari'] },
  { value: 'Arunachal Pradesh', districts: ['Tawang', 'West Kameng', 'East Kameng', 'Papum Pare', 'Kurung Kumey', 'Kra Daadi', 'Lower Subansiri', 'Upper Subansiri', 'West Siang', 'East Siang', 'Siang', 'Upper Siang', 'Lower Siang', 'Lower Dibang Valley', 'Upper Dibang Valley', 'Anjaw', 'Lohit', 'Namsai', 'Changlang', 'Tirap', 'Longding'] },
  { value: 'Assam', districts: ['Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Dima Hasao', 'Sivasagar', 'Sonitpur', 'South Salmara-Mankachar', 'Tinsukia', 'Udalguri', 'West Karbi Anglong'] },
  { value: 'Bihar', districts: ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'] },
  { value: 'Chhattisgarh', districts: ['Balod', 'Baloda Bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Gariaband', 'Gaurela-Pendra-Marwahi', 'Janjgir-Champa', 'Jashpur', 'Kabirdham', 'Kanker', 'Kondagaon', 'Korba', 'Koriya', 'Mahasamund', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sukma', 'Surajpur', 'Surguja'] },
  { value: 'Goa', districts: ['North Goa', 'South Goa'] },
  { value: 'Gujarat', districts: ['Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota Udaipur', 'Dahod', 'Dang', 'Devbhoomi Dwarka', 'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kheda', 'Kutch', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada', 'Navsari', 'Panchmahal', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha', 'Surat', 'Surendranagar', 'Tapi', 'Vadodara', 'Valsad'] },
  { value: 'Haryana', districts: ['Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Mewat', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'] },
  { value: 'Himachal Pradesh', districts: ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul and Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una'] },
  { value: 'Jharkhand', districts: ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 'Sahibganj', 'Seraikela Kharsawan', 'Simdega', 'West Singhbhum'] },
  { value: 'Karnataka', districts: ['Bagalkot', 'Ballari', 'Belagavi', 'Bengaluru Rural', 'Bengaluru Urban', 'Bidar', 'Chamarajanagar', 'Chikballapur', 'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kalaburagi', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysuru', 'Raichur', 'Ramanagara', 'Shivamogga', 'Tumakuru', 'Udupi', 'Uttara Kannada', 'Vijayapura', 'Yadgir'] },
  { value: 'Kerala', districts: ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'] },
  { value: 'Madhya Pradesh', districts: ['Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Mandla', 'Mandsaur', 'Morena', 'Narsinghpur', 'Neemuch', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha'] },
  { value: 'Maharashtra', districts: ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai City', 'Mumbai Suburban', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'] },
  { value: 'Manipur', districts: ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal East', 'Imphal West', 'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Noney', 'Pherzawl', 'Senapati', 'Tamenglong', 'Tengnoupal', 'Thoubal', 'Ukhrul'] },
  { value: 'Meghalaya', districts: ['East Garo Hills', 'East Jaintia Hills', 'East Khasi Hills', 'North Garo Hills', 'Ri-Bhoi', 'South Garo Hills', 'South West Garo Hills', 'South West Khasi Hills', 'West Garo Hills', 'West Jaintia Hills', 'West Khasi Hills'] },
  { value: 'Mizoram', districts: ['Aizawl', 'Champhai', 'Hnahthial', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Saitual', 'Serchhip'] },
  { value: 'Nagaland', districts: ['Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Noklak', 'Peren', 'Phek', 'Tuensang', 'Wokha', 'Zunheboto'] },
  { value: 'Odisha', districts: ['Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur', 'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Sonepur', 'Sundargarh'] },
  { value: 'Punjab', districts: ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Muktsar', 'Nawanshahr', 'Pathankot', 'Patiala', 'Rupnagar', 'Sangrur', 'SAS Nagar', 'Tarn Taran'] },
  { value: 'Rajasthan', districts: ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh', 'Rajsamand', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Sri Ganganagar', 'Tonk', 'Udaipur'] },
  { value: 'Sikkim', districts: ['East Sikkim', 'North Sikkim', 'South Sikkim', 'West Sikkim', 'Pakyong', 'Soreng'] },
  { value: 'Tamil Nadu', districts: ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kancheepuram', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupattur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'] },
  { value: 'Telangana', districts: ['Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem Asifabad', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal-Malkajgiri', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal Rural', 'Warangal Urban', 'Yadadri Bhuvanagiri'] },
  { value: 'Tripura', districts: ['Dhalai', 'Gomati', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'Unakoti', 'West Tripura'] },
  { value: 'Uttar Pradesh', districts: ['Agra', 'Aligarh', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Ayodhya', 'Azamgarh', 'Badaun', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddh Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kheri', 'Kushinagar', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Prayagraj', 'Raebareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shamli', 'Shrawasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'] },
  { value: 'Uttarakhand', districts: ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'] },
  { value: 'West Bengal', districts: ['Alipurduar', 'Bankura', 'Birbhum', 'Cooch Behar', 'Dakshin Dinajpur', 'Darjeeling', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Kolkata', 'Malda', 'Murshidabad', 'Nadia', 'North 24 Parganas', 'Paschim Bardhaman', 'Paschim Medinipur', 'Purba Bardhaman', 'Purba Medinipur', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur'] },
  { value: 'Andaman and Nicobar Islands', districts: ['Nicobar', 'North and Middle Andaman', 'South Andaman'] },
  { value: 'Chandigarh', districts: ['Chandigarh'] },
  { value: 'Dadra and Nagar Haveli and Daman and Diu', districts: ['Dadra and Nagar Haveli', 'Daman', 'Diu'] },
  { value: 'Lakshadweep', districts: ['Lakshadweep'] },
  { value: 'Delhi', districts: ['Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'North East Delhi', 'North West Delhi', 'Shahdara', 'South Delhi', 'South East Delhi', 'South West Delhi', 'West Delhi'] },
  { value: 'Puducherry', districts: ['Karaikal', 'Mahe', 'Puducherry', 'Yanam'] }
];


const farmingTypes = [
  { value: 'Organic Farming', label: 'Organic', description: 'Farming without synthetic chemicals, focusing on natural processes and biodiversity.' },
  { value: 'Conventional Farming', label: 'Conventional', description: 'Farming using modern techniques and chemicals to maximize yield and efficiency.' },
  { value: 'Sustainable Farming', label: 'Sustainable', description: 'Farming practices that maintain the health of the environment, economy, and society.' },
  { value: 'Hydroponic Farming', label: 'Hydroponic', description: 'Growing plants in nutrient-rich water solutions without soil.' },
  { value: 'Aquaponic Farming', label: 'Aquaponic', description: 'Combining aquaculture (raising fish) with hydroponics to grow plants.' },
  { value: 'Permaculture Farming', label: 'Permaculture', description: 'Designing agricultural ecosystems that are sustainable and self-sufficient.' },
  { value: 'Biodynamic Farming', label: 'Biodynamic', description: 'A holistic approach to farming that includes organic practices and considers the farm as a living organism.' },
  { value: 'Agroforestry', label: 'Agroforestry', description: 'Integrating trees and shrubs into crop and livestock systems to enhance biodiversity and productivity.' },
  { value: 'Urban Farming', label: 'Urban', description: 'Growing food in urban areas, often using innovative techniques like vertical farming.' },
  { value: 'Vertical Farming', label: 'Vertical', description: 'Growing crops in vertically stacked layers, often in controlled indoor environments.' },
  { value: 'Regenerative Farming', label: 'Regenerative', description: 'Farming practices that restore soil health, increase biodiversity, and improve the water cycle.' },
  { value: 'Precision Farming', label: 'Precision', description: 'Using technology to monitor and manage field variability in crops to optimize returns on inputs while preserving resources.' },
  { value: 'Integrated Farming', label: 'Integrated', description: 'Combining different agricultural practices, such as crop and livestock farming, to create a more efficient and sustainable system.' },
  { value: 'Conservation Agriculture', label: 'Conservation', description: 'Practices that aim to achieve sustainable and profitable agriculture by minimizing soil disturbance and maintaining soil cover.' },
  { value: 'Dryland Farming', label: 'Dryland', description: 'Farming in arid regions without irrigation, relying on moisture-conserving techniques.' },
  { value: 'Organic Aquaculture', label: 'Organic Aquaculture', description: 'Raising fish and other aquatic organisms using organic practices.' },
  { value: 'Silvopasture', label: 'Silvopasture', description: 'Combining forestry and grazing of domesticated animals in a mutually beneficial way.' },
];


const FarmerDetailsForm = () => {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [districts, setDistricts] = useState([]);
  const [cv, setVillage] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  // No mobile number state
  const [ftype, setFType] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [lands, setLands] = useState([
    { soilType: '', landSize: '', landLocation: '' },
  ]);

  useEffect(() => {
    const matchedState = states.find((state) => state.value === selectedState);
    setDistricts(matchedState ? matchedState.districts : []);
  }, [selectedState]);

  const handleLandChange = (index, field, value) => {
    const newLands = [...lands];
    newLands[index][field] = value;
    setLands(newLands);
  };

  const addLand = () => {
    setLands([...lands, { soilType: '', landSize: '', landLocation: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', fname, lname);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Email:', email);
    console.log('Location:', selectedState, selectedDistrict);
    console.log('Farming Type:', ftype);
    console.log('Lands:', lands);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="w-full h-full rounded overflow-hidden shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Farmer Details </h2>
        <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4">
          <div className="grid grid-cols-2 gap-4">
            {/* First Name */}
            <div className="form-group">
              <label htmlFor="fname" className="block text-gray-700 text-sm font-bold mb-2">
                First Name:
              </label>
              <input
                type="text"
                id="fname"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
                required
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* Last Name */}
            <div className="form-group">
              <label htmlFor="lname" className="block text-gray-700 text-sm font-bold mb-2">
                Last Name:
              </label>
              <input
                type="text"
                id="lname"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
                required
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* State */}
            <div className="form-group">
              <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
                State:
              </label>
              <select
                id="state"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                required
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.value}
                  </option>
                ))}
              </select>
            </div>

            {/* District */}
            <div className="form-group">
              <label htmlFor="district" className="block text-gray-700 text-sm font-bold mb-2">
                District:
              </label>
              <select
                id="district"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                required
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            {/* District */}
            <div className="form-group">
              <label htmlFor="cv" className="block text-gray-700 text-sm font-bold mb-2">
                City/Village :
              </label>
              <input
                type="text"
                id="cv"
                value={setVillage}
                onChange={(e) => setLName(e.target.value)}
                required
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Date of Birth */}
            <div className="form-group">
              <label htmlFor="dateOfBirth" className="block text-gray-700 text-sm font-bold mb-2">
                Date of Birth:
              </label>
              <input
                type="date"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Farming Type */}
            <div className="form-group">
              <label htmlFor="ftype" className="block text-gray-700 text-sm font-bold mb-2">
                Farming Type:
              </label>
              <select
                id="ftype"
                value={ftype}
                onChange={(e) => setFType(e.target.value)}
                required
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Farming Type</option>
                {farmingTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Dynamic Land Details */}
            {lands.map((land, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 border p-4 rounded-lg bg-gray-50">
                <h3 className="font-bold text-lg mb-4 col-span-2">Land {index + 1}</h3>

                {/* Type of Soil */}
                <div className="form-group">
                  <label
                    htmlFor={`soilType-${index}`}
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Type of Soil:
                  </label>
                  <input
                    type="text"
                    id={`soilType-${index}`}
                    value={land.soilType}
                    onChange={(e) => handleLandChange(index, 'soilType', e.target.value)}
                    required
                    className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-7700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                {/* Size of Land */}
                <div className="form-group">
                  <label
                    htmlFor={`landSize-${index}`}
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Size of Land:
                  </label>
                  <input
                    type="text"
                    id={`landSize-${index}`}
                    value={land.landSize}
                    onChange={(e) => handleLandChange(index, 'landSize', e.target.value)}
                    required
                    className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                {/* Location of Land */}
                <div className="form-group">
                  <label
                    htmlFor={`landLocation-${index}`}
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Location of Land:
                  </label>
                  <input
                    type="text"
                    id={`landLocation-${index}`}
                    value={land.landLocation}
                    onChange={(e) => handleLandChange(index, 'landLocation', e.target.value)}
                    required
                    className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between   
 mb-6 col-span-2">
              <button
                type="button"
                onClick={addLand}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add   
 Another Land
              </button>
            </div>

            <div className="flex items-center justify-between col-span-2">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"   

              >
                Submit
              </button>
            </div>   

          </div>
        </form>
      </div>
    </div>
  );
};

export default FarmerDetailsForm;
