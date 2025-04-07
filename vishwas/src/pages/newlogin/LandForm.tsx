import React, { ChangeEvent, useContext,useState } from 'react';
import { FormContext } from '../../context/LandDetailsContext'; // Adjust the import path as necessary
import FormControl from "./formControl";
import OtpPopup from "../otp/otpPopup"
import './landcontainer.css'
import Button from './Button'
import { Backend_URL } from '../../url/backendURL';

const LandEntry: React.FC<{ index: number }> = ({ index }) => {
    const { formDetails, handleLandInputChange, handleLandFileChange, setFormDetails, removeLand } = useContext(FormContext);

    const land = formDetails.lands[index];

    const [otpSend, setOtpSend] = useState(false);
    const [otp, setOtp] = useState("");
    const [indexx,setIndex] = useState("");
    const updateLandDetails = (index, soilType, landSize, landLocation) => {
        setFormDetails(prevDetails => {
            const updatedLands = [...prevDetails.lands];
            updatedLands[index] = {
              ...updatedLands[index],
              soilType,
              landSize,
              landLocation
            };
      
            return {
              ...prevDetails,
              lands: updatedLands
            };
          });
        
        
    };


    const verifyLand = async (index, event) => {
        setIndex(index);
        event.preventDefault();
        try {
            const { surveyNumber, subdivisionNumber } = formDetails.lands[index];
            const response = await fetch(`${Backend_URL}/api/v1/requirement/get-land-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ surveyNumber: surveyNumber, subdivisionNumber: subdivisionNumber }),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                console.log(data);
                setOtpSend(true);
            } else {
                alert("Error sending OTP");
                console.error('Error sending data:', response.statusText);
            }

        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleClose = () =>{
        setOtpSend(false);
        setOtp("");
      }

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${Backend_URL}/api/v1/requirement/verify-land-otp`, { // Adjust the endpoint according to your setup
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    surveyNumber: formDetails.lands[indexx].surveyNumber,
                    subdivisionNumber: formDetails.lands[indexx].subdivisionNumber,
                    otp
                }),
            });

            const data = await response.json();
            console.log(data.landdetails);
            if (response.ok) {
                updateLandDetails(indexx,data.landdetails.soil,data.landdetails.acre,data.landdetails.address);
                setOtpSend(false);
                setOtp("");
            } else {
                alert(data.message || 'An error occurred');
            }
        } catch (error) {
             console.log(error);
            alert('Failed to fetch data');
        }
    };

    return (

        <div className="land-entry">
        {otpSend &&  <OtpPopup
          onClose={handleClose}
          setOtp={setOtp}
          OTP={otp}
          onSubmit={handleVerifyOtp}
        /> }
            <label className="text-primary-marineBlue font-medium" >
                Land {index + 1}
            </label>
            <div className="land-form-group">
                <FormControl
                    label={"Survey Number"}
                    type={"text"}
                    id={`surveyNumber`}
                    placeholder={"eg. TN12ABC34"}
                    onChange={(e) => handleLandInputChange(index, e)}
                    value={land.surveyNumber || ''}
                    valid={true}
                    errorLabel={"This field is required and must be in minimum length 3"}
                />
            </div>

            <div className="land-form-group">
                <FormControl
                    label={"Subdivision Number"}
                    type={"text"}
                    id={`subdivisionNumber`}
                    placeholder={"eg. TN1"}
                    onChange={(e) => handleLandInputChange(index, e)}
                    value={land.subdivisionNumber || ''}
                    valid={true}
                    errorLabel={"This field is required and must be in minimum length 3"}
                />
            </div>

            <div className="land-form-group">

                <FormControl
                    label={"Soil Type"}
                    type={"text"}
                    id={`soilType`}
                    placeholder={"eg. Red Soil"}
                    onChange={(e) => handleLandInputChange(index, e)}
                    value={land.soilType || ''}
                    valid={true}
                    disabled={true}
                    errorLabel={"This field is required and must be in minimum length 3"}
                />
            </div>

            <div className="land-form-group">
                <FormControl
                    label={"landSize"}
                    type={"text"}
                    id={`landSize`}
                    placeholder={"eg. 5 acres"}
                    onChange={(e) => handleLandInputChange(index, e)}
                    value={land.landSize || ''}
                    valid={true}
                    disabled={true}
                    errorLabel={"This field is required and must be in minimum length 3"}
                />
            </div>

            <div className="land-form-group">
                <FormControl
                    label={"Location"}
                    type={"text"}
                    id={`location`}
                    placeholder={"eg. Erode"}
                    onChange={(e) => handleLandInputChange(index, e)}
                    value={land.landLocation || ''}
                    valid={true}
                    disabled={true}
                    errorLabel={"This field is required and must be in minimum length 3"}
                />
            </div>

            <div className="land-form-group">
                <label htmlFor={`landImage-${index}`} className="text-primary-marineBlue font-medium" >
                    Upload Image
                </label>
                <input
                    type="file"
                    id={`landImage-${index}`}
                    name="landImage"
                    accept="image/*"
                    onChange={(e) => handleLandFileChange(index, e)}
                />
                {land.filePreviewUrl && (
                    <div className="land-image-preview">
                        <img src={land.filePreviewUrl} alt="Land" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                    </div>
                )}
            </div>

            <div className="land-form-group">
                <Button
                    text={"Verify Land"}
                    type={"button"}
                    onClick={(e) => { verifyLand(index,e) }}
                    className={"bg-green-500  text-white"}
                />
                {formDetails.lands.length > 1 && (
                    <Button
                        text={"Remove Land"}
                        type={"button"}
                        onClick={() => removeLand(index)}
                        className={"bg-green-500 text-white"}
                    />
                )}
            </div>
        </div>
    );
};

export default LandEntry;
