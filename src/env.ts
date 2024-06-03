import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

// docs: https://env.t3.gg/docs/nextjs#use-your-schema
export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    DATABASE_AUTH_TOKEN: z.string(),
  },

  // For Next.js >= 13.4.4, you only need to destructure client variables:
  client: {},
  experimental__runtimeEnv: {},
});
