import { type PluginUtils } from 'tailwindcss/types/config'

export default function typographyStyles({ theme }: PluginUtils) {
  return {
    DEFAULT: {
      css: {
        '--tw-prose-body': theme('colors.black'),
      },
    },
  }
}
