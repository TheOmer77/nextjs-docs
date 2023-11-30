import typography from '@tailwindcss/typography';
import plugin from 'tailwindcss/plugin';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import toColorValue from 'tailwindcss/lib/util/toColorValue';
import type { Config } from 'tailwindcss';

const shades = [50, ...[...Array(9).keys()].map(key => (key + 1) * 100), 950];

const stateLayer = plugin(({ addUtilities, matchUtilities, theme }) => {
  const themeColors = flattenColorPalette(theme('colors'));
  const colors = Object.fromEntries(
    Object.entries(themeColors).map(([k, v]) => [k, toColorValue(v)])
  );

  addUtilities({
    '.state-layer': {
      position: 'relative',
      overflow: 'hidden',
      '&.fixed': { position: 'fixed' },
      '&.absolute': { position: 'absolute' },
      '&::after': {
        content: '""',
        position: 'absolute',
        insetBlockStart: '0',
        insetInlineStart: '0',
        width: '100%',
        height: '100%',
        zIndex: '1',
        transition: 'background-color 75ms cubic-bezier(0.2, 1, 0.4, 1)',
      },
      '&:active::after': { transitionDuration: '0ms' },
    },
  });
  matchUtilities(
    { 'state-layer': value => ({ '&::after': { backgroundColor: value } }) },
    { values: colors, type: 'color' }
  );
});

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
            '--tw-prose-body': 'rgb(var(--color-neutral-800))',
            '--tw-prose-headings': 'rgb(var(--color-neutral-900))',
            '--tw-prose-lead': 'rgb(var(--color-neutral-700))',
            '--tw-prose-links': 'rgb(var(--color-neutral-900))',
            '--tw-prose-bold': 'rgb(var(--color-neutral-900))',
            '--tw-prose-counters': 'rgb(var(--color-neutral-600))',
            '--tw-prose-bullets': 'rgb(var(--color-neutral-400))',
            '--tw-prose-hr': 'rgb(var(--color-neutral-300))',
            '--tw-prose-quotes': 'rgb(var(--color-neutral-900))',
            '--tw-prose-quote-borders': 'rgb(var(--color-neutral-300))',
            '--tw-prose-captions': 'rgb(var(--color-neutral-700))',
            '--tw-prose-code': 'rgb(var(--color-neutral-900))',
            '--tw-prose-pre-code': 'rgb(var(--color-neutral-100))',
            '--tw-prose-pre-bg': 'rgb(var(--color-neutral-900))',
            '--tw-prose-th-borders': 'rgb(var(--color-neutral-300))',
            '--tw-prose-td-borders': 'rgb(var(--color-neutral-200))',
            '--tw-prose-invert-body': 'rgb(var(--color-neutral-200))',
            '--tw-prose-invert-headings': 'rgb(var(--color-neutral-50))',
            '--tw-prose-invert-lead': 'rgb(var(--color-neutral-300))',
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
              color: 'rgb(var(--color-neutral-800))',
              '@media (prefers-color-scheme: dark)': {
                backgroundColor: 'rgb(var(--color-neutral-800))',
                color: 'rgb(var(--color-neutral-200))',
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
      keyframes: {
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'fade-out': { from: { opacity: '1' }, to: { opacity: '0' } },
        'collapse-in': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapse-out': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' },
        },
        'slide-in': {
          from: {
            transform: `translate(
  var(--slide-translate-origin-x, 0%),
  var(--slide-translate-origin-y, 0%)
)`,
          },
          to: { transform: 'translate(0%, 0%)' },
        },
        'slide-out': {
          from: { transform: 'translate(0%, 0%)' },
          to: {
            transform: `translate(
  var(--slide-translate-origin-x, 0%),
  var(--slide-translate-origin-y, 0%)
)`,
          },
        },
        'zoom-in': {
          from: {
            opacity: '0',
            transform: `translate(
  var(--zoom-translate-x, 0%),
  var(--zoom-translate-y, 0%)
) scale(0.95)`,
          },
          to: {
            opacity: '1',
            transform: `translate(
  var(--zoom-translate-x, 0%),
  var(--zoom-translate-y, 0%)
) scale(1)`,
          },
        },
        'zoom-out': {
          from: {
            opacity: '1',
            transform: `translate(
  var(--zoom-translate-x, 0%),
  var(--zoom-translate-y, 0%)
) scale(1)`,
          },
          to: {
            opacity: '0',
            transform: `translate(
  var(--zoom-translate-x, 0%),
  var(--zoom-translate-y, 0%)
) scale(0.95)`,
          },
        },
      },
      animation: {
        'collapse-in': 'collapse-in 300ms cubic-bezier(0.2, 1, 0.4, 1)',
        'collapse-out': 'collapse-out 300ms cubic-bezier(0.2, 1, 0.4, 1)',
        'fade-in': 'fade-in 300ms cubic-bezier(0.2, 1, 0.4, 1)',
        'fade-out': 'fade-out 300ms cubic-bezier(0.2, 1, 0.4, 1)',
        'slide-in': 'slide-in 300ms cubic-bezier(0.2, 1, 0.4, 1)',
        'slide-out': 'slide-out 300ms cubic-bezier(0.2, 1, 0.4, 1)',
        'zoom-in': 'zoom-in 300ms cubic-bezier(0.2, 1, 0.4, 1)',
        'zoom-out': 'zoom-out 300ms cubic-bezier(0.2, 1, 0.4, 1)',
      },
      transitionTimingFunction: { DEFAULT: 'cubic-bezier(0.2, 1, 0.4, 1)' },
      transitionDuration: { 50: '50ms' },
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
  plugins: [typography, stateLayer],
};

export default config;
