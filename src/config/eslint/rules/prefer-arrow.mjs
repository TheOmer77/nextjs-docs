import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';

/** @type {import("typescript-eslint").ConfigWithExtends} */
export const preferArrow = {
  name: 'Prefer arrow functions',
  // eslint-plugin-prefer-arrow-functions export is weird (.default)
  plugins: { 'prefer-arrow-functions': preferArrowFunctions.default },
  rules: {
    'prefer-arrow-callback': 'warn',
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        allowNamedFunctions: false,
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'implicit',
        singleReturnOnly: false,
      },
    ],
  },
};
