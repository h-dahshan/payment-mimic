/// <reference types="vitest" />

import { defineConfig, type UserConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig(
  (): UserConfig => ({
    plugins: [
      react(),
      dts({
        rollupTypes: true,
        include: ["src/lib"],
        // exclude: [],
        // outDir: "dist/types",
        tsconfigPath: path.join(__dirname, "tsconfig.package.json"),
      }),
    ],

    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "src") },
        { find: "@lib", replacement: path.resolve(__dirname, "src/lib") },
      ],
    },

    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/setupTests.ts"],
      coverage: {
        provider: "v8",
        thresholds: {
          // set this value later, break if not met!
          // functions: 100,
        },
        include: ["src/**/!(*index).[jt]s?(x)"],
      },
    },

    build: {
      lib: {
        name: "payment-mimic",
        formats: ["es"],
        entry: path.resolve(__dirname, "src/lib"),
        fileName: (format) => `payment-mimic.${format}.js`,
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
      sourcemap: true,
      emptyOutDir: true,
    },
  })
);
