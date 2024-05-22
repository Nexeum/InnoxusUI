import { User } from "@/app/domain/model/user/user";

const API_URL = "http://localhost:8089/v1/auth";
const JWT_COOKIE_NAME = "jwt";

export const getJwtFromCookie = () => {
  const jwtCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${JWT_COOKIE_NAME}=`));
  return jwtCookie ? jwtCookie.split("=")[1] : null;
};

const fetchFromApi = async (endpoint: string, token: string) => {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.text();
};

const fetchUser = async (endpoint: string, email: string) => {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.text();
};

export const validateToken = async (token: string) => {
  const data = await fetchFromApi("validate", token);
  return data === "true";
};

export const removeJwtCookie = () => {
  document.cookie = `${JWT_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const getEmailFromJWT = async (token: string) => {
  return await fetchFromApi("email", token);
};

export const getUsername = async (email: string) => {
  return await fetchUser("user", email);
};
