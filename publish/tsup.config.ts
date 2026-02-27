import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/math.ts'],
  format: ['esm', 'cjs'],
  dts: {
    resolve: true,
  },
  clean: true,
});
