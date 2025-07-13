import React from 'react';

interface TagsProps {
    tags: string[];
}

export const Tags: React.FC<TagsProps> = ({ tags }) => {
    return (
        <div className="flex items-center space-x-2">
            {tags.length >= 2 ?
                <span className="flex items-center text-xs px-2 py-1 rounded-full outline outline-1 outline-gray-300">
                    <div className="w-2 h-2 mr-1 bg-blue-500 rounded"></div>
                    <div className="w-2 h-2 mr-1 bg-pink-500 rounded"></div>
                    {tags.length} tags
                </span>
                :
                <span className="flex items-center text-xs px-2 py-1 rounded-full outline outline-1 outline-gray-300">
                    <div className="w-2 h-2 mr-1 bg-blue-500 rounded"></div>{tags[0]}
                </span>
            }
        </div>
    );
};