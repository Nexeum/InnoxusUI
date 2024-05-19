import { Bucket } from "@/app/domain/model/bucket/bucket";

const API_BASE_URL = "http://localhost:8090/v1/buckets";

export async function createBucket(name: string, owner: string) {
  const response = await fetch(`${API_BASE_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      owner,
    }),
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return "Bucket created successful";
}

export async function getBuckets(): Promise<Bucket[]> {
  const response = await fetch(`${API_BASE_URL}/get`);

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function getBucket(name: string): Promise<Bucket[]> {
  const response = await fetch(`${API_BASE_URL}/get`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();
  return [data];
}
