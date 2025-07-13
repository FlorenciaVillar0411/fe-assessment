import { useEffect, useState } from "react";
import { fetchWorkflows } from "../data/airops.api";
import { WorkFlowsList } from "./WorkFlowsList";
import { Filter } from "./Filter";

export const WorkFlows: React.FC = () => {
  const [workflows, setWorkflows] = useState<
    WorkFlow[]
  >([]);
  const [filteredWorkflows, setFilteredWorkflows] = useState<WorkFlow[]>([]);

  useEffect(() => {
    fetchWorkflows()
      .then((data) => {
        setWorkflows(data as WorkFlow[]);
        setFilteredWorkflows(data as WorkFlow[]);
      })
      .catch((error) => {
        console.error("Error fetching workflows:", error);
      });
  }, []);

  const handleFilterChange = (value: string) => {
      let updatedWorkflows = [...filteredWorkflows];
    switch (value) {
      case 'name-asc':
        updatedWorkflows.sort((a, b) => a.name.localeCompare(b.name));
        setFilteredWorkflows(updatedWorkflows);

        return;
      case 'name-desc':
        updatedWorkflows.sort((a, b) => b.name.localeCompare(a.name));
        setFilteredWorkflows(updatedWorkflows);

        return;
      default:
        break;
    }
    if (value.trim()) {
      updatedWorkflows = [...workflows];
      updatedWorkflows = updatedWorkflows.filter((workflow) =>
        workflow.name.toLowerCase().includes(value.toLowerCase())
      );
    }
    setFilteredWorkflows(updatedWorkflows);
  };
  const handleDelete = (name: string) => {
    const updatedWorkflows = filteredWorkflows.filter(
      (workflow) => workflow.name !== name
    );
    setFilteredWorkflows(updatedWorkflows);
    setWorkflows(updatedWorkflows)
  }

  return (
    <main className="p-5 w-full">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-6">Workflows</h1>
        <Filter onSortChange={handleFilterChange} />
      </header>
      <WorkFlowsList workflows={filteredWorkflows} onDelete={handleDelete}/>
    </main>)
}