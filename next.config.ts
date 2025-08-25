import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {unoptimized: true},
};

const withMDX = createMDX({
  // Add Markdown plugins here , as desired 
});

export default withMDX(nextConfig);