const publicRoutes = ["./", "/auth/new-verification"];
const protectedRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];
const apiAuthPrefix = "/api/auth";
const DEFAULT_LOGIN_REDIRECT = "/settings";

export { publicRoutes, protectedRoutes, apiAuthPrefix, DEFAULT_LOGIN_REDIRECT };
