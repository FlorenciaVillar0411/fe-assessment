import React from "react";

interface FilterProps {
    onSortChange: (value: string) => void;
}

export const Filter: React.FC<FilterProps> = ({ onSortChange }) => {

    return (
        <form className="flex">
            <fieldset className="bg-white border border-gray-300 rounded-md p-0 h-9 text-xs">
                <select
                    id="sort"
                    className="w-min p-2 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                    onChange={(e) => onSortChange(e.target.value)}
                    defaultValue={""}
                >
                    <option value="" disabled>
                        Sort By
                    </option>
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                </select>
            </fieldset>
            <fieldset className="text-xs flex-1 ml-2 h-9" >
                <input
                    type="text"
                    id="search"
                    placeholder="Search workflows"
                    className="h-9 w-min p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => onSortChange(e.target.value)}
                />
            </fieldset>

        </form>
    );
};