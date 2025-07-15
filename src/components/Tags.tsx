import React from 'react';

interface TagsProps {
    tags: string[];
}

const TagColors: Record<string, string> = {
    'Content Creation': 'bg-blue-500',
    'Test': 'bg-pink-500',
    '2 tags': 'bg-green-500',
    'Sales': 'bg-yellow-500',
    'Marketing': 'bg-red-500',
    'default': 'bg-gray-300',
}

export const Tags: React.FC<TagsProps> = ({ tags }) => {
    return (
        <div className="flex items-center space-x-2">
            {tags.length >= 2 ?
                <span className="flex items-center text-xs px-2 py-1 rounded-full outline outline-1 outline-gray-300">
                    <div className="w-2 h-2 mr-1 bg-blue-500 rounded"></div>
                    <div className="w-2 h-2 mr-1 rounded bg-pink-500"></div>
                    {tags.length} tags
                </span>
                :
                <span className="flex items-center text-xs px-2 py-1 rounded-full outline outline-1 outline-gray-300">
                    <div className={`w-2 h-2 mr-1 rounded ${TagColors[tags[0]] ?? TagColors.default}`}></div>{tags[0]}
                </span>
            }
        </div>
    );
};