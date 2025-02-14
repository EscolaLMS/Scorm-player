// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js",
        format: "es",
        sourcemap: true,
      },
    ],
    // Mark peer deps as external so they won't be bundled
    external: ["react", "react-dom"],

    plugins: [
      resolve(),
      // Convert TS to JS
      typescript({
        tsconfig: "./tsconfig.json",
        // If you want a separate declaration pass, see below.
        // Or keep "declaration": true in tsconfig.
      }),
      postcss({
        inject: true,
      }),
      copy({
        targets: [
          // Copy everything from public/ into dist/public
          { src: "public/*", dest: "dist/public" },
        ],
      }),
    ],
  },
]);
