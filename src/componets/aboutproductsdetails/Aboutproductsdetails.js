import React, { useState } from 'react';
import './aboutproductsdetails.css';
import tire1 from "./../../pages/about/Asgaard sofa 3.png";
import tire2 from "./Cloud sofa three seater + ottoman_2 1.png";

const Aboutproductsdetails = () => {
    const [activeTab, setActiveTab] = useState('description');

    const renderContent = () => {
        switch (activeTab) {
            case 'description':
                return (
                    <div>
                        <p>
                            The Mirage AT MR-172 265/65 R17 is a multipurpose all-terrain light truck tyre. 
                            It has been engineered to deliver high mileage. Mirage MR AT-172 Performs best 
                            in on road and off road driving conditions. The Mirage AT MR-172 265/65 R17 has 
                            an aggressive tread design. Its aggressive tread delivers excellent wet and dry 
                            traction. It also offers even tread wear hence longer tread life is achieved. 
                            Stable tread block design provides better traction and improves cornering and 
                            braking in all weather conditions. Mirage AT MR-172 265/65 R17 Lateral sipes 
                            also help in improving mud snow and wet qualities.
                        </p>
                    </div>
                );
            case 'additionalInfo':
                return <div><p>The Mirage AT MR-172 265/65 R17 is a multipurpose all-terrain light truck tyre. 
                It has been engineered to deliver high mileage. Mirage MR AT-172 Performs best 
                in on road and off road driving conditions. The Mirage AT MR-172 265/65 R17 has 
                an aggressive tread design. Its aggressive tread delivers excellent wet and dry 
                traction. It also offers even tread wear hence longer tread life is achieved. 
                Stable tread block design provides better traction and improves cornering and 
                braking in all weather conditions. Mirage AT MR-172.</p></div>;
            case 'reviews':
                return <div><p> The Mirage AT MR-172 265/65 R17 is a multipurpose all-terrain light truck tyre. 
                It has been engineered to deliver high mileage. Mirage MR AT-172 Performs best 
                in on road and off road driving conditions. The Mirage AT MR-172 265/65 R17 has 
                an aggressive tread design.</p></div>;
            default:
                return null;
        }
    };

    return (
        <div className="product-details">
            <div className="tabs">
                <button 
                    className={`tab ${activeTab === 'description' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('description')}
                >
                    Description
                </button>
                <button 
                    className={`tab ${activeTab === 'additionalInfo' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('additionalInfo')}
                >
                    Additional Information
                </button>
                <button 
                    className={`tab ${activeTab === 'reviews' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('reviews')}
                >
                    Reviews [5]
                </button>
            </div>
            <div className="tab-content">
                {renderContent()}
            </div>
            <div className="product-images">
                <div className='tire1'>
                <img src={tire2} alt="" />
                </div>
                <div className='tire2'>
                <img src={tire1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Aboutproductsdetails;
