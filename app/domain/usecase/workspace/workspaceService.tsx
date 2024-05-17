export const getWorkspaces = () => {
  return fetch("http://localhost:8080/v1/workspaces/all")
    .then((response) => response.json());
}

export const createWorkspace = (workspace: string, description: string, password: string) => {
  return fetch("http://localhost:8080/v1/workspaces/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: workspace,
      description: description,
      password: password,
    }),
  });
}