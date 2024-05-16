export async function createBucket(name: string) {
  const response = await fetch("http://localhost:8090/v1/buckets/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });

  if (!response.ok) {
    throw new Error("Bucket creation failed");
  }

  return response;
}

export async function getBuckets() {
  const response = await fetch("http://localhost:8090/v1/buckets/get");

  if (!response.ok) {
    throw new Error("Error fetching buckets");
  }

  const data = await response.json();
  return data;
}

export async function getBucket(name: string) {
  const response = await fetch(`http://localhost:8090/v1/buckets/get/${name}`);

  if (!response.ok) {
    throw new Error("Error fetching bucket");
  }

  const data = await response.json();
  return data;
}
