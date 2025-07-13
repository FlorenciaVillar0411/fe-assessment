import React from "react";
import { Tags } from "./Tags";

interface WorkflowListProps {
    onDelete: (value: string) => void;
    workflows: WorkFlow[];
}

export const WorkFlowsList : React.FC<WorkflowListProps> = ({ workflows, onDelete }) => {
    const handleDelete = (workflow: WorkFlow) => {
        onDelete(workflow.name);
    };
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead>
                <tr>
                    <th className="w-1/12 px-2 py-3 text-left text-sm font-medium text-black-600">
                        Type
                    </th>
                    <th className="w-6/12 px-6 py-3 text-left text-sm font-medium text-black-600">
                        Name
                    </th>
                    <th className="w-2/12 px-6 py-3 text-left text-sm font-medium text-black-600">
                        Tags
                    </th>
                    <th className="w-1/12 px-6 py-3 text-left text-sm font-medium text-black-600 whitespace-nowrap ">
                        Last Updated
                    </th>
                    <th className="w-1/12 px-6 py-3 text-left text-sm font-medium text-black-600">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {(
                    workflows.map((workflow, index) => (
                        <tr key={index} className="text-sm">
                            <td className="px-6 py-5 whitespace-nowrap">
                                {workflow.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {workflow.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Tags tags={workflow.tags} />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {workflow.lastUpdated}
                            </td>
                            <td className="py-4 px-6 flex">
                                <button className="bg-gray-300 text-gray-700 hover:bg-gray-400  w-5 h-5 text-xs rounded mr-2"
                                >
                                    <span className="material-icons text-sm">edit</span>
                                </button>
                                <button className="bg-gray-300 text-gray-700 hover:bg-gray-400  w-5 h-5  text-xs rounded"
                                onClick={()=>handleDelete(workflow)}>

                                    <span className="material-icons text-sm">delete</span>
                                </button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}