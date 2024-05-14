export const getJwtFromCookie = () => {
  const jwtCookie = document.cookie.split("; ").find((row) => row.startsWith("jwt="));
  return jwtCookie ? jwtCookie.split("=")[1] : null;
};

export const validateToken = async (token: string) => {
  try {
    const response = await fetch("http://localhost:8089/v1/auth/validate", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: token,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.text();
    return data === "true";
  } catch (error) {
    console.error("Failed to validate token:", error);
    return false;
  }
};