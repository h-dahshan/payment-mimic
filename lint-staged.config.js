const config = {
  "**/*": ["pnpm prettify"],
  "**/*.{js,ts,jsx,tsx}": ["eslint --fix"],
  // "**/*.{json,md,html,css,scss}": ["pnpm prettify"],
};

export default config;
