const API_BASE_URL = "http://localhost:8090/v1/buckets";

async function fetchJson(url: string, options?: RequestInit) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

export async function createBucket(name: string) {
  const response = await fetchJson(`${API_BASE_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });

  return response;
}

export async function getBuckets() {
  return fetchJson(`${API_BASE_URL}/get`);
}

export async function getBucket(name: string) {
  return fetchJson(`${API_BASE_URL}/get/${name}`);
}