
import  { useContext, useState } from "react";
import { GlobalNLContex } from "../../context/nlGlobalContext";
import FaceRecognition from "../../facedetection/facedetection";
import FormControl from "./formControl";
import Button from "./Button";
import OtpPopup from "../otp/otpPopup";

const Identification = () => {
  const {
    aadhaar,
    setAadhaar,
    setValidAadhaar
  } = useContext(GlobalNLContex);

  const [otpSend, setOtpSend] = useState(false);
  const [otp, setOtp] = useState("");

  const verifyOTP = async () => {
    if (otp.length === 6) {
      try {
        const response = await fetch('http://localhost:5000/api/v1/farmer/verify-aadhaar-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ aadhaar,otp }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Success:', data.message);
          alert(data.message);
          setValidAadhaar(true);
          setOtpSend(false);
          setOtp("");
        } else {
          alert(data.message || 'Wrong OTP');
        }
      } catch (error) {
        alert('An error occurred. Please try again later.');
        console.error('Error:', error);
      }

    } else {
      alert("Please enter a 6-digit OTP.");
    }
  }

  const handleClose = () =>{
    setOtpSend(false);
    setOtp("");
  }
  const setAadharLogic = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAadhaar(e.target.value);
    setValidAadhaar(false);
};

  const handleGetAadharOtp = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); 
    if (aadhaar.length != 12) {
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/v1/farmer/get-aadhaar-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ AadhaarNumber: aadhaar }),
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

  return (
    <>
      {otpSend &&
        <OtpPopup
          onClose={handleClose}
          setOtp={setOtp}
          OTP={otp}
          onSubmit={verifyOTP}
        />
      }
      <div>
        <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
          Personal identification
        </h1>
        <h3 className="text-gray-400 mt-2">
          Please provide your profile pic and aadhaar..
        </h3>
        <div className="md:mt-7 mt-5 space-y-4">
          <FaceRecognition />
          <FormControl
            label={"Aadhaar Number"}
            type={"number"}
            id={"aadhaar"}
            placeholder={"e.g. 123456789123"}
            onChange={setAadharLogic}
            value={aadhaar}
            valid={true}
            errorLabel={"This field is required and must be in minimum length 3"}
          />
          <div>
            <Button
              text={"Verify Aadhaar"}
              className={"bg-green-500  text-white"}
              onClick={handleGetAadharOtp}
              disabled={aadhaar.length != 12}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Identification;
