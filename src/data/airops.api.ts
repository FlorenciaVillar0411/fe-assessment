import AirOps from "@airops/airops-js";

const airopsInstance = new AirOps();
const appId = import.meta.env.appId;

export const fetchWorkflows = async (): Promise<WorkFlow[]> => {
  try {
    const response = await airopsInstance.apps.execute({
      appId,
    });
    const result = await response.result();
    if (result.output && typeof result.output === 'string') {
      return JSON.parse(result.output) as WorkFlow[];
    }
    return result.output as WorkFlow[]; 
  } catch (error) {
    console.error("Error executing app:", error);
    throw error; 
  }
};
