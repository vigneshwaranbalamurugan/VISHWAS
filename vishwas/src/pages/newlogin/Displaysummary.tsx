import React from 'react';

interface DisplayControlProps {
    Label: string;
    Value: string;
}

const DisplayControl: React.FC<DisplayControlProps> = ({ Label, Value }) => {
    return (
        <>

            <div className="mr-auto">
                <h3 className="text-primary-marineBlue font-medium ">
                    {Label}
                </h3>
            </div>
            <div>
                <h3 className="text-black md:text-lg text-[15px]">
                    {Value}
                </h3>
            </div>

        </>
    );
};

export default DisplayControl;
