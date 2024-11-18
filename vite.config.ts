import { resolve } from 'path';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig, Plugin } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    preserveDirectives() as Plugin,
    dts({ include: 'src', exclude: ['**/*.test.ts'], insertTypesEntry: true }),
    tsconfigPaths(),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : format}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'dayjs',
        'dayjs/plugin/localizedFormat',
        'dayjs/plugin/relativeTime',
        'dayjs/plugin/isToday',
        'dayjs/plugin/isYesterday',
      ],
      output: {
        preserveModules: true,
        globals: {
          dayjs: 'dayjs',
          'dayjs/plugin/localizedFormat': 'dayjs/plugin/localizedFormat',
          'dayjs/plugin/relativeTime': 'dayjs/plugin/relativeTime',
          'dayjs/plugin/isToday': 'dayjs/plugin/isToday',
          'dayjs/plugin/isYesterday': 'dayjs/plugin/isYesterday',
        },
      },
    },
  },
});
