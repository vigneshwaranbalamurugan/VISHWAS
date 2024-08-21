import React, { useState, useEffect } from 'react';
import './contract.css'

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

interface FormData {
  contractorName: string;
  commodity: string;
  specifications: string;
  deliveryType: string;
  estimatedPrice: number;
  paymentType: string;
  methodOfCultivation: string;
  cropName: string;
  cropType: string;
  category: string;
  price: number;
  quantity: number;
  state: string;
  district: string;
}

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    contractorName: 'VISHWAS',
    commodity: 'Wheat',
    specifications: 'Shape-Oval\nColor-brown',
    deliveryType: 'By owm',
    estimatedPrice: 0,
    paymentType: '',
    methodOfCultivation: '',
    cropName: 'Wheat',
    cropType: 'Sharbathi',
    category: 'Food Crops',
    price: 0,
    quantity: 0,
    state: '',
    district: '',
  });

  const [districts, setDistricts] = useState<string[]>([]);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    const selectedState = states.find((state) => state.value === formData.state);
    setDistricts(selectedState ? selectedState.districts : []);
  }, [formData.state]);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.contractorName) newErrors.contractorName = 'Contractor name is required';
    if (!formData.commodity) newErrors.commodity = 'Commodity is required';
    if (!formData.deliveryType) newErrors.deliveryType = 'Delivery type is required';
    if (formData.estimatedPrice <= 0) newErrors.estimatedPrice = 'Estimated price must be greater than zero';
    if (!formData.paymentType) newErrors.paymentType = 'Payment type is required';
    if (!formData.methodOfCultivation) newErrors.methodOfCultivation = 'Method of cultivation is required';
    if (!formData.cropName) newErrors.cropName = 'Crop name is required';
    if (!formData.cropType) newErrors.cropType = 'Crop type is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (formData.price <= 0) newErrors.price = 'Price must be greater than zero';
    if (formData.quantity <= 0) newErrors.quantity = 'Quantity must be greater than zero';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.district) newErrors.district = 'District is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
<form onSubmit={handleSubmit} className="contract-form">
  <h1 className="form-title">Contract Form</h1>
  <div className="form-group">
    <label>Contractor Name:</label>
    <input
      type="text"
      name="contractorName"
      value={formData.contractorName}
      onChange={handleChange}
    />
    {errors.contractorName && <p className="error-message">{errors.contractorName}</p>}
    <label>Commodity:</label>
    <input
      type="text"
      name="commodity"
      value={formData.commodity}
      onChange={handleChange}
    />
    {errors.commodity && <p className="error-message">{errors.commodity}</p>}
    <label>Specifications:</label>
    <textarea
      name="specifications"
      value={formData.specifications}
      onChange={handleChange}
    />

    <label>Delivery Type:</label>
    <input
      type="text"
      name="deliveryType"
      value={formData.deliveryType}
      onChange={handleChange}
    />
    {errors.deliveryType && <p className="error-message">{errors.deliveryType}</p>}
 
    <label>Estimated Price:</label>
    <input
      type="number"
      name="estimatedPrice"
      value={formData.estimatedPrice}
      onChange={handleChange}
    />
    {errors.estimatedPrice && <p className="error-message">{errors.estimatedPrice}</p>}
 
    <label>Type of Payment:</label>
    <input
      type="text"
      name="paymentType"
      value={formData.paymentType}
      onChange={handleChange}
    />
    {errors.paymentType && <p className="error-message">{errors.paymentType}</p>}
 
    <label>Method of Cultivation:</label>
    <input
      type="text"
      name="methodOfCultivation"
      value={formData.methodOfCultivation}
      onChange={handleChange}
    />
    {errors.methodOfCultivation && <p className="error-message">{errors.methodOfCultivation}</p>}
 
    <label>Crop Name:</label>
    <input
      type="text"
      name="cropName"
      value={formData.cropName}
      onChange={handleChange}
    />
    {errors.cropName && <p className="error-message">{errors.cropName}</p>}
 
    <label>Crop Type:</label>
    <input
      type="text"
      name="cropType"
      value={formData.cropType}
      onChange={handleChange}
    />
    {errors.cropType && <p className="error-message">{errors.cropType}</p>}
 
    <label>Category:</label>
    <input
      type="text"
      name="category"
      value={formData.category}
      onChange={handleChange}
    />
    {errors.category && <p className="error-message">{errors.category}</p>}
  </div>
  <div className="form-group">
    <label>Price:</label>
    <input
      type="number"
      name="price"
      value={formData.price}
      onChange={handleChange}
    />
    {errors.price && <p className="error-message">{errors.price}</p>}
 
    <label>Quantity:</label>
    <input
      type="number"
      name="quantity"
      value={formData.quantity}
      onChange={handleChange}
    />
    {errors.quantity && <p className="error-message">{errors.quantity}</p>}
 
    <label>State:</label>
    <select
      name="state"
      value={formData.state}
      onChange={handleChange}
    >
      <option value="">Select a state</option>
      {states.map((state) => (
        <option key={state.value} value={state.value}>
          {state.value}
        </option>
      ))}
    </select>
    {errors.state && <p className="error-message">{errors.state}</p>}
  
    <label>District:</label>
    <select
      name="district"
      value={formData.district}
      onChange={handleChange}
      disabled={!formData.state}
    >
      <option value="">Select a district</option>
      {districts.map((district) => (
        <option key={district} value={district}>
          {district}
        </option>
      ))}
    </select>
    {errors.district && <p className="error-message">{errors.district}</p>}
  </div>
  <button type="submit" className="submit-button">
    Submit
  </button>
</form>

  );
};

export default OrderForm;
