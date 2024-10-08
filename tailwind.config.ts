import typography from '@tailwindcss/typography';

// importing '@/config/tailwind' doesn't work here
import {
  animations,
  autofillOverride,
  stateLayer,
} from './src/config/tailwind';

import type { Config } from 'tailwindcss';

const shades = [50, ...[...Array(9).keys()].map(key => (key + 1) * 100), 950];

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.mdx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-family)', 'sans-serif'],
        mono: ['var(--font-family-mono)', 'monospace'],
      },
      maxWidth: { '8xl': '90rem' },
      spacing: { inherit: 'inherit' },
      height: { screen: '100dvh' },
      maxHeight: { screen: '100dvh' },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(var(--color-neutral-700))',
            '--tw-prose-headings': 'rgb(var(--color-neutral-900))',
            '--tw-prose-lead': 'rgb(var(--color-neutral-700))',
            '--tw-prose-links': 'rgb(var(--color-neutral-900))',
            '--tw-prose-bold': 'rgb(var(--color-neutral-900))',
            '--tw-prose-counters': 'rgb(var(--color-neutral-500))',
            '--tw-prose-bullets': 'rgb(var(--color-neutral-300))',
            '--tw-prose-hr': 'rgb(var(--color-neutral-300))',
            '--tw-prose-quotes': 'rgb(var(--color-neutral-900))',
            '--tw-prose-quote-borders': 'rgb(var(--color-neutral-300))',
            '--tw-prose-captions': 'rgb(var(--color-neutral-600))',
            '--tw-prose-code': 'rgb(var(--color-neutral-900))',
            '--tw-prose-pre-code': 'rgb(var(--color-neutral-100))',
            '--tw-prose-pre-bg': 'rgb(var(--color-neutral-900))',
            '--tw-prose-th-borders': 'rgb(var(--color-neutral-300))',
            '--tw-prose-td-borders': 'rgb(var(--color-neutral-200))',
            '--tw-prose-invert-body': 'rgb(var(--color-neutral-200))',
            '--tw-prose-invert-headings': 'rgb(var(--color-neutral-50))',
            '--tw-prose-invert-lead': 'rgb(var(--color-neutral-200))',
            '--tw-prose-invert-links': 'rgb(var(--color-neutral-50))',
            '--tw-prose-invert-bold': 'rgb(var(--color-neutral-50))',
            '--tw-prose-invert-counters': 'rgb(var(--color-neutral-400))',
            '--tw-prose-invert-bullets': 'rgb(var(--color-neutral-600))',
            '--tw-prose-invert-hr': 'rgb(var(--color-neutral-700))',
            '--tw-prose-invert-quotes': 'rgb(var(--color-neutral-100))',
            '--tw-prose-invert-quote-borders': 'rgb(var(--color-neutral-700))',
            '--tw-prose-invert-captions': 'rgb(var(--color-neutral-400))',
            '--tw-prose-invert-code': 'rgb(var(--color-neutral-50))',
            '--tw-prose-invert-pre-code': 'rgb(var(--color-neutral-300))',
            '--tw-prose-invert-pre-bg': 'rgb(var(--color-neutral-900))',
            '--tw-prose-invert-th-borders': 'rgb(var(--color-neutral-600))',
            '--tw-prose-invert-td-borders': 'rgb(var(--color-neutral-700))',

            code: {
              fontWeight: 'inherit',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              backgroundColor: 'rgb(var(--color-neutral-100))',
              '@media (prefers-color-scheme: dark)': {
                backgroundColor: 'rgb(var(--color-neutral-800))',
              },
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          },
        },
      }),
    },
    colors: {
      inherit: 'inherit',
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
      ...['primary', 'neutral', 'danger'].reduce(
        (obj, colorName) => ({
          ...obj,
          [colorName]: [...shades].reduce(
            (obj, shade) => ({
              ...obj,
              [shade]: `rgb(var(--color-${colorName}-${shade}) / <alpha-value>)`,
              main: `rgb(var(--color-${colorName}-main) / <alpha-value>)`,
              light: `rgb(var(--color-${colorName}-light) / <alpha-value>)`,
              dark: `rgb(var(--color-${colorName}-dark) / <alpha-value>)`,
              contrast: `rgb(var(--color-${colorName}-contrast) / <alpha-value>)`,
            }),
            {}
          ),
        }),
        {}
      ),
    },
  },
  plugins: [animations, autofillOverride, stateLayer, typography],
};

export default config;
