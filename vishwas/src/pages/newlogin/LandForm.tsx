import React, { ChangeEvent, useContext } from 'react';
import { FormContext } from '../../context/LandDetailsContext'; // Adjust the import path as necessary
import FormControl from "./formControl";
import './landcontainer.css'
import Button from './Button'
const LandEntry: React.FC<{ index: number }> = ({ index }) => {
    const { formDetails, handleLandInputChange, handleLandFileChange, removeLand } = useContext(FormContext);

    const land = formDetails.lands[index];

    return (

        <div className="land-entry">
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
                    value={land.location || ''}
                    valid={true}
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
                    onClick={() => console.log('Verify land', index)}
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
