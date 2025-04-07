import React, { useContext, useEffect } from "react";
import { GlobalNLContex } from "../../context/nlGlobalContext";
import DbControl from "./dropdownControl";
import FormControl from "./formControl";
import Button from "./Button";
import { Backend_URL } from "../../url/backendURL";
const LocationDetails = () => {
    const {
        states,
        setStates,
        districts,
        setDistricts,
        selectedState,
        pincode,
        setPincode,
        selectedDistrict,
        setSelectedDistrict,
        setSelectedState,
        lantitude,
        setLantidude,
        longitude,
        setLongitude,
        address,
        setAddress,
        locationValid,
    } = useContext(GlobalNLContex);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { longitude, latitude } = position.coords;
                    setLongitude(longitude.toFixed(6));
                    setLantidude(latitude.toFixed(6));
                },
                (error) => {
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            console.error("User denied the request for geolocation.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            console.error("Location information is unavailable.");
                            break;
                        case error.TIMEOUT:
                            console.error("The request to get user location timed out.");
                            break;
                        case error.UNKNOWN_ERROR:
                            console.error("An unknown error occurred.");
                            break;
                    }
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await fetch(`${Backend_URL}/api/v1/requirement/get-state`);
                const data = await response.json();
                setStates(data.states);
            } catch (error) {
                console.error('Error fetching states:', error);
            }
        };

        fetchStates();
    }, []);

    useEffect(() => {
        const fetchDistricts = async () => {
            try {
                const response = await fetch(`${Backend_URL}/api/v1/requirement/get-city`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ state: selectedState }),
                });
                const data = await response.json();
                setDistricts(data.cities);
            } catch (error) {
                console.error('Error fetching districts:', error);
            }
        };

        if (selectedState) {
            fetchDistricts();
        }
    }, [selectedState]);

    return (
        <>
            <div>
                <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
                    Location Info
                </h1>
                <h3 className="text-gray-400 mt-2">
                    Please provide your location details.
                </h3>

                <div className="md:mt-7 mt-5 space-y-4">
                    <DbControl
                        id="state"
                        label="State"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        errorLabel="Please select a state"
                        options={states}
                        name={"name"}
                        valid={selectedState!=="" || locationValid}
                    />
                    <DbControl
                        id="District"
                        label="District"
                        value={selectedDistrict}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                        errorLabel="Please select a district"
                        options={districts}
                        name={"name"}
                        valid={selectedDistrict!==""||locationValid}
                        disabled={selectedState == ""}
                    />
                    <FormControl
                        label={"Pincode"}
                        type={"number"}
                        id={"pincode"}
                        placeholder={"e.g. 636202"}
                        onChange={(e) => { setPincode(e.target.value) }}
                        value={pincode}
                        valid={pincode.length == 6 || locationValid}
                        errorLabel={"This field is required and must be in length 6"}
                    />
                    <FormControl
                        label={"Longitude"}
                        type={"number"}
                        id={"Longitude"}
                        placeholder={"e.g. 13.067439"}
                        onChange={(e) => { setLongitude(e.target.value) }}
                        value={longitude}
                        valid={longitude.length >= 3 || locationValid}
                        errorLabel={"This field is required and must be in length 3"}
                        disabled={true}
                    />
                    <FormControl
                        label={"Latitude"}
                        type={"number"}
                        id={"Latitude"}
                        placeholder={"e.g. 80.237617"}
                        onChange={(e) => { setLantidude(e.target.value) }}
                        value={lantitude}
                        valid={lantitude.length >= 3 || locationValid}
                        errorLabel={"This field is required and must be in length 3"}
                        disabled={true}
                    />
                    <Button
                        text={"Get Location"}
                        className={"bg-green-500  text-white mt-5"}
                        onClick={getLocation}
                    />
                    <FormControl
                        label={"Address"}
                        type={"textarea"}
                        id={"address"}
                        placeholder={"e.g. 123 Main St, Springfield"}
                        onChange={(e) => { setAddress(e.target.value) }}
                        value={address}
                        valid={address.length > 10 || locationValid}
                        errorLabel={"This field is required and cannot be empty also length minimum 10"}
                    />
                </div>

            </div>
        </>
    )
}

export default LocationDetails