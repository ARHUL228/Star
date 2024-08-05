import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugin: [react(), tsconfigPaths()],
  test: {
    globals: true, 
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
        coverage: {
                 include: ['src/**/*.{js,jsx,ts,tsx}'],
                 exclude: ['src/generated/**/*.ts'],  
                  reporter: ['text', 'html']  
  },
},
});