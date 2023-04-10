import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
//import pkg from './package.json' assert { type: 'json' };

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const isProd = process.env.ROLLUP_WATCH ?? false;
const ext = ['.js', '.jsx', '.ts', '.tsx', '.json'];

/**
 * @type{import('rollup').RollupOptions}
 */
export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: isProd,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: isProd,
      },
      {
        file: 'dist/umd/index.js',
        format: 'umd',
        sourcemap: isProd,
        name: 'ReactDropdown',
        global: {
          react: '^18.2.0',
        },
      },
    ],
    plugins: [
      commonjs(),
      resolve({ extensions: ext }),
      typescript({ tsconfig: './tsconfig.json' }),
      !isProd && terser(),
    ],
  },
];
