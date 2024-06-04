import React from 'react';


interface CardProps {
    title: string;
    content: string;
}
const  SmallCard: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4 h-full">
            <h2 className="text-xl font-[500] mb-2">{title}</h2>
            <p className="text-gray-500">{content}</p>
        </div>
    );
}

export default SmallCard;
