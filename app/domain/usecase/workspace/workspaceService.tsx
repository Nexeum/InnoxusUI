import { Workspace } from "@/app/domain/model/workspace/workspace";

const BASE_URL = "http://localhost:8088/v1/workspaces";


export const getWorkspaces = async (): Promise<any> => {
  const response = await fetch(`${BASE_URL}/all`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export const createWorkspace = async (workspace: Workspace): Promise<any> => {
  const response = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(workspace),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
}