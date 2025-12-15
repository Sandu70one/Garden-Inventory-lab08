import React from 'react';

interface BannerProps {
    children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
    return (
        <div className="container my-3">
            <div className="p-4 bg-light rounded-3 border shadow-sm">
                <h2 className="mb-0">{children}</h2>
            </div>
        </div>
    );
};

export default Banner;
