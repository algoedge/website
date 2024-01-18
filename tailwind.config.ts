import typographyPlugin from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import typographyStyles from './typography'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-custom)'],
      },
      typography: typographyStyles,
    },
  },
  plugins: [typographyPlugin],
}
export default config
