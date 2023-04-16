import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

export const getAuthTokens = () => {
  const token = localStorage.getItem("token");

  if(!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration <= 0) {
    return "EXPIRED";
  }

  return token;
};

export const tokenLoader = () => {
  return getAuthTokens();
};

export const checkAuthLoader = () => {
  const token = getAuthTokens();

  if (!token) {
    return redirect("/login");
  }

  return null;
};
