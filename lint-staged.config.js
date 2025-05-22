const config = {
  "**/*.{js,ts,jsx,tsx}": ["pnpm lint", "pnpm prettify"],
  "**/*.{json,md,html,css,scss}": ["pnpm prettify"],
  "**/*": "pnpm prettify",
};

export default config;
