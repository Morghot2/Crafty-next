const publicRoutes = ["./"];
const protectedRoutes = ["/auth/login", "/auth/register", "/auth/error"];
const apiAuthPrefix = "/api/auth";
const DEFAULT_LOGIN_REDIRECT = "/settings";

export { publicRoutes, protectedRoutes, apiAuthPrefix, DEFAULT_LOGIN_REDIRECT };
