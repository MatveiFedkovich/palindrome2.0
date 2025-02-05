import withMDX from "@next/mdx";

const nextConfig = withMDX({
  extension: /\.mdx?$/
})({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"]
});

export default nextConfig;
