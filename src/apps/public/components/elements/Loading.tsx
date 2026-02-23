import React from 'react';

const Loading: React.FC = () => {

    return (
        <div className="loader-container">
            {/* Background World Map Pattern */}
            <div className="loader-bg-map" />

            <div className="loader-content">
                {/* Logo Section */}
                <div className="g-circle-wrapper">
                    <div className="g-circle-outer"></div>
                    <div className="g-circle-spinner"></div>
                    <span className="g-logo-text">G</span>
                </div>

                {/* Text Section */}
                <h2 className="loading-title">Loading...</h2>

                <div className="progress-container">
                    <div className="progress-bar"></div>
                </div>

                <p className="loading-subtitle">
                    Initializing services.... Please wait.
                </p>
            </div>
        </div>
    );
};

export default Loading;