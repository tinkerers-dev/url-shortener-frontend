/// <reference types="vitest" />
import {defineConfig} from 'vite';
import path from "path";
import react from '@vitejs/plugin-react';
import {defaultExclude, defaultInclude} from "vitest/config";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        exclude: [...defaultExclude, "tests/e2e/**/*"],
        include: [...defaultInclude],
        setupFiles: ["setupTests.ts"],
    }
})
