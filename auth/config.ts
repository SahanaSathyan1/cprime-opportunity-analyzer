import dotenv from "dotenv";
dotenv.config();

// Helper to enforce presence of required env vars
function requiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

// Now these are guaranteed to be strings
export const AZURE_CLIENT_ID = requiredEnv("AZURE_CLIENT_ID");
export const AZURE_CLIENT_SECRET = requiredEnv("AZURE_CLIENT_SECRET");
export const AZURE_REDIRECT_URI = requiredEnv("AZURE_REDIRECT_URI");
export const AZURE_TENANT_ID = requiredEnv("AZURE_TENANT_ID");

export const AZURE_AUTHORITY = `https://login.microsoftonline.com/${AZURE_TENANT_ID}`;
export const AZURE_SCOPES = (process.env.AZURE_SCOPES || "openid profile email offline_access").split(" ");
export const JWT_SECRET = requiredEnv("JWT_SECRET");
