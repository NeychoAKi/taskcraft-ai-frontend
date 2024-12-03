import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  /* config options here */
  reactStrictMode: true,
  env: {
    ANVIL_RPC_URL: "http://127.0.0.1:8545",
    ANVIL_PRIVATE_KEY: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
  }

};

export default nextConfig;
