/** @type {import("typescript-eslint").ConfigWithExtends} */
export const restrictedImports = {
  name: 'Next.js restricted imports',
  rules: {
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'next/router',
            message: "Import from 'next/navigation' instead.",
          },
        ],
        patterns: [
          {
            group: ['lucide-react'],
            importNamePattern: '^(Lucide.*|(?:(?!.*Icon$).+))$',
            message:
              "Only import icons that end with 'Icon' and don't start with 'Lucide'.",
            allowTypeImports: true,
          },
        ],
      },
    ],
  },
};
