let base =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "https://bijliaudit-amhgdqfgdhbzcehx.eastasia-01.azurewebsites.net";

if (!base.startsWith("http://") && !base.startsWith("https://")) {
  base = `https://${base}`;
}

export const API_BASE = base.replace(/\/+$/, "");