import { resolve, isAbsolute } from 'path';
import { copyFileSync, renameSync } from 'node:fs';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    preserveDirectives(),
    dts({
      include: 'src',
      exclude: ['**/*.test.ts'],
      insertTypesEntry: true,
      rollupTypes: true,
      afterBuild: () => {
        copyFileSync('dist/index.d.ts', 'dist/index.d.cts');
        renameSync('dist/index.d.ts', 'dist/index.d.mts');
      },
    }),
    tsconfigPaths(),
  ],
  build: {
    copyPublicDir: false,
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'mjs' : format}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
      },
      external: (id) => !(isAbsolute(id) || id.startsWith('.')),
    },
  },
});
