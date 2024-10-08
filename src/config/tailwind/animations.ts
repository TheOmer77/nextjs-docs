import { kebabCase } from 'change-case';
import plugin from 'tailwindcss/plugin';

const DEFAULT_TW_TRANSFORM = `translate(var(--tw-translate-x),
var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`;
const getTransform = (
  transform: {
    translateX?: string;
    translateY?: string;
    rotate?: string;
    skewX?: string;
    skewY?: string;
    scaleX?: string;
    scaleY?: string;
  } = {}
) =>
  Object.entries(transform).reduce(
    (cssTransform, [key, value]) =>
      cssTransform.replace(`var(--tw-${kebabCase(key)})`, value),
    DEFAULT_TW_TRANSFORM
  );

export const animations = plugin(
  ({ matchUtilities, theme }) => {
    matchUtilities(
      { duration: value => ({ '--animation-duration': value }) },
      { values: theme('transitionDuration') }
    );
    matchUtilities(
      { duration: value => ({ '--animation-timing-function': value }) },
      { values: theme('transitionTimingFunction') }
    );
  },
  {
    theme: {
      extend: {
        animation: ({ theme }) => {
          const duration = `var(
  --animation-duration,
  ${theme('transitionDuration.DEFAULT')}
)`,
            timingFunction = `var(
  --animation-timing-function,
  ${theme('transitionTimingFunction.DEFAULT')}
)`;
          return {
            'collapse-in': `collapse-in ${duration} ${timingFunction}`,
            'collapse-out': `collapse-out ${duration} ${timingFunction}`,
            'fade-in': `fade-in ${duration} ${timingFunction}`,
            'fade-out': `fade-out ${duration} ${timingFunction}`,
            'scale-x-in': `scale-x-in ${duration} ${timingFunction}`,
            'scale-x-out': `scale-x-out ${duration} ${timingFunction}`,
            'scale-y-in': `scale-y-in ${duration} ${timingFunction}`,
            'scale-y-out': `scale-y-out ${duration} ${timingFunction}`,
            'slide-in': `slide-in ${duration} ${timingFunction}`,
            'slide-out': `slide-out ${duration} ${timingFunction}`,
            'tooltip-in': `tooltip-in 150ms ${timingFunction}`,
            'tooltip-out': `fade-out 150ms ${timingFunction}`,
            'zoom-in': `zoom-in ${duration} ${timingFunction}`,
            'zoom-out': `zoom-out ${duration} ${timingFunction}`,
          };
        },
        keyframes: {
          'collapse-in': {
            from: { height: '0', overflow: 'hidden' },
            to: {
              height: 'var(--radix-collapsible-content-height)',
              overflow: 'hidden',
            },
          },
          'collapse-out': {
            from: {
              height: 'var(--radix-collapsible-content-height)',
              overflow: 'hidden',
            },
            to: { height: '0', overflow: 'hidden' },
          },
          'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
          'fade-out': { from: { opacity: '1' }, to: { opacity: '0' } },
          'scale-x-in': {
            from: {
              opacity: '0',
              transform: getTransform({
                scaleX: 'calc(var(--tw-scale-x) * 0.95)',
              }),
            },
            to: { opacity: '1', transform: getTransform() },
          },
          'scale-x-out': {
            from: { opacity: '1', transform: getTransform() },
            to: {
              opacity: '0',
              transform: getTransform({
                scaleX: 'calc(var(--tw-scale-x) * 0.95)',
              }),
            },
          },
          'scale-y-in': {
            from: {
              opacity: '0',
              transform: getTransform({
                scaleY: 'calc(var(--tw-scale-y) * 0.95)',
              }),
            },
            to: { opacity: '1', transform: getTransform() },
          },
          'scale-y-out': {
            from: { opacity: '1', transform: getTransform() },
            to: {
              opacity: '0',
              transform: getTransform({
                scaleY: 'calc(var(--tw-scale-y) * 0.95)',
              }),
            },
          },
          'slide-in': {
            from: {
              transform: getTransform({
                translateX: 'var(--slide-translate-origin-x, 0%)',
                translateY: 'var(--slide-translate-origin-y, 0%)',
              }),
            },
            to: { transform: getTransform() },
          },
          'slide-out': {
            from: { transform: getTransform() },
            to: {
              transform: getTransform({
                translateX: 'var(--slide-translate-origin-x, 0%)',
                translateY: 'var(--slide-translate-origin-y, 0%)',
              }),
            },
          },
          'tooltip-in': {
            from: {
              opacity: '0',
              transform: getTransform({
                translateX: 'var(--slide-translate-origin-x, 0%)',
                translateY: 'var(--slide-translate-origin-y, 0%)',
              }),
            },
            to: { opacity: '1', transform: getTransform() },
          },
          'zoom-in': {
            from: {
              opacity: '0',
              transform: getTransform({
                scaleX: 'calc(var(--tw-scale-x) * 0.95)',
                scaleY: 'calc(var(--tw-scale-y) * 0.95)',
              }),
            },
            to: { opacity: '1', transform: getTransform() },
          },
          'zoom-out': {
            from: { opacity: '1', transform: getTransform() },
            to: {
              opacity: '0',
              transform: getTransform({
                scaleX: 'calc(var(--tw-scale-x) * 0.95)',
                scaleY: 'calc(var(--tw-scale-y) * 0.95)',
              }),
            },
          },
        },
        transitionTimingFunction: { DEFAULT: 'cubic-bezier(0.2, 1, 0.4, 1)' },
      },
    },
  }
);
