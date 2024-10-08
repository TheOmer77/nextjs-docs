import plugin from 'tailwindcss/plugin';

//@ts-expect-error No type decleration
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
//@ts-expect-error No type decleration
import toColorValue from 'tailwindcss/lib/util/toColorValue';

export const autofillOverride = plugin(({ matchUtilities, theme }) => {
  const themeColors = flattenColorPalette(theme('colors'));
  matchUtilities(
    {
      'autofill-override': value => ({
        '--tw-autofill-override-bg': toColorValue(value),
        '&:-webkit-autofill': {
          WebkitBoxShadow: `0 0 0px 1000px var(--tw-autofill-override-bg) inset,
var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
var(--tw-shadow, 0 0 #0000) !important`,
        },
      }),
    },
    { values: themeColors, type: 'color' }
  );
});
