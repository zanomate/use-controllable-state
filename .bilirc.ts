import { Config } from 'bili'

const config: Config = {
  plugins: {
    typescript2: {
      // Override the config in `tsconfig.json`
      tsconfigOverride: {
        include: ['src'],
        exclude: ['src/**/*.test.ts']
      },
    },
  },
  input: 'src/useControllableState.ts',
  output: {
    format: ['cjs', 'esm'],
  },
}

export default config
