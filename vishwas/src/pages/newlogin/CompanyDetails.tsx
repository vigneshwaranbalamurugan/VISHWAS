import React, { useContext } from "react";
import { CompanyContext } from "../../context/CompanyContext";
import FormControl from "./formControl";
import Button from './Button'

const CompanyDetails = () => {
    const {
        companyDetails,
        handleFieldChange
    } = useContext(CompanyContext);

    return (
        <>
            <div>
                <h1 className="text-primary-marineBlue font-bold text-[1.6rem] md:text-4xl leading-9">
                    Company Details
                </h1>
                <h3 className="text-gray-400 mt-2">
                    Please provide your Company details.
                </h3>
                <div className="md:mt-7 mt-5 space-y-4">
                    <FormControl
                        type={"text"}
                        id={"name"}
                        label={"Company Name"}
                        placeholder={"e.g : TVK"}
                        value={companyDetails.name}
                        onChange={handleFieldChange}
                        valid={true}
                        errorLabel={"The field is required"}
                    />
                    <FormControl
                        type={"text"}
                        id={"address"}
                        label={"Company Address"}
                        placeholder={"e.g : panaiyur"}
                        value={companyDetails.address}
                        onChange={handleFieldChange}
                        valid={true}
                        errorLabel={"The field is required"}
                    />
                    <FormControl
                        type={"number"}
                        id={"establishedYear"}
                        label={"Company Established year"}
                        placeholder={"e.g : 2024"}
                        value={companyDetails.establishedYear}
                        onChange={handleFieldChange}
                        valid={true}
                        errorLabel={"The field is required"}
                    />
                    <FormControl
                        type={"text"}
                        id={"tinNumber"}
                        label={"Company Tin Number"}
                        placeholder={"e.g : TN07CM2026"}
                        value={companyDetails.tinNumber}
                        onChange={handleFieldChange}
                        valid={true}
                        errorLabel={"The field is required"}
                    />
                    <FormControl
                        type={"text"}
                        id={"phoneNumber"}
                        label={"Company Phone Number"}
                        placeholder={"e.g : 9323456789"}
                        value={companyDetails.phoneNumber}
                        onChange={handleFieldChange}
                        valid={true}
                        errorLabel={"The field is required"}
                    />
                     <FormControl
                        type={"text"}
                        id={"email"}
                        label={"Company Email"}
                        placeholder={"e.g : tvk@gmail.com"}
                        value={companyDetails.email}
                        onChange={handleFieldChange}
                        valid={true}
                        errorLabel={"The field is required"}
                    />
                     <FormControl
                        type={"text"}
                        id={"website"}
                        label={"Company Website"}
                        placeholder={"e.g : tvk.family"}
                        value={companyDetails.website}
                        onChange={handleFieldChange}
                        valid={true}
                        errorLabel={"The field is required"}
                    />
                     <FormControl
                        type={"text"}
                        id={"ceoName"}
                        label={"Company CEO"}
                        placeholder={"e.g : Thalapathy"}
                        value={companyDetails.ceoName}
                        onChange={handleFieldChange}
                        valid={true}
                        errorLabel={"The field is required"}
                    />
                     <FormControl
                        type={"text"}
                        id={"headquartersLocation"}
                        label={"Company Headquaters"}
                        placeholder={"e.g : Chennai"}
                        value={companyDetails.headquartersLocation}
                        onChange={handleFieldChange}
                        valid={true}
                        errorLabel={"The field is required"}
                    />

                </div>
            </div>
        </>
    );
};

export default CompanyDetails;