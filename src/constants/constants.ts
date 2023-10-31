// Cloudinary
export const CLOUD_NAME = "dqhfx5f07";
export const UPLOAD_PRESET = "americana_grill";

export const API_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
    : "http://localhost:3000/api";
