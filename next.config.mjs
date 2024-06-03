import { fileURLToPath } from "node:url";
import createJiti from "jiti";

// Validate env schema on build
const jiti = createJiti(fileURLToPath(import.meta.url));
jiti("./src/env");

/** @type {import('next').NextConfig} */
const nextConfig = {};
export default nextConfig;
