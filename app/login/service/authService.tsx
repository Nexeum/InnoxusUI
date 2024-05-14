export async function login(email: string, password: string) {
  const response = await fetch("http://localhost:8089/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData || `HTTP error! status: ${response.status}`);
  }

  const jwt = await response.text();
  document.cookie = `jwt=${jwt}; path=/; max-age=3600`;
  return "Login successful";
}