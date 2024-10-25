import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import checkFile from 'eslint-plugin-check-file';
import importX from 'eslint-plugin-import-x';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import tailwind from 'eslint-plugin-tailwindcss';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...tailwind.configs['flat/recommended'],
  prettier,

  {
    plugins: { 'check-file': checkFile },
    rules: {
      'check-file/filename-naming-convention': [
        'warn',
        { '**/*.{ts,tsx}': 'KEBAB_CASE' },
        { ignoreMiddleExtensions: true },
      ],
      'check-file/folder-naming-convention': [
        'warn',
        {
          'src/app/**': 'NEXT_JS_APP_ROUTER_CASE',
          'src/!(app)/**': 'KEBAB_CASE',
        },
      ],
    },
  },
  {
    plugins: { 'prefer-arrow-functions': preferArrowFunctions },
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
  },
  {
    rules: {
      'prefer-template': 'warn',
      'import-x/order': [
        'warn',
        {
          alphabetize: {
            order: 'asc',
            orderImportKind: 'asc',
          },

          distinctGroup: false,

          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
            'type',
          ],

          'newlines-between': 'always',

          pathGroups: [
            {
              group: 'external',
              pattern: 'react',
              position: 'before',
            },
            {
              group: 'external',
              pattern: 'react/**',
              position: 'before',
            },
            {
              group: 'external',
              pattern: 'next',
              position: 'before',
            },
            {
              group: 'external',
              pattern: 'next/**',
              position: 'before',
            },
            {
              group: 'internal',
              pattern: '@/components/ui/**',
            },
            {
              group: 'internal',
              pattern: '@/components/**',
              position: 'after',
            },
            {
              group: 'internal',
              pattern: '@/hooks/**',
              position: 'after',
            },
            {
              group: 'internal',
              pattern: '@/lib/**',
              position: 'after',
            },
            {
              group: 'internal',
              pattern: '@/config/**',
              position: 'after',
            },
            {
              group: 'internal',
              pattern: '@/constants/**',
              position: 'after',
            },
            {
              group: 'internal',
              pattern: '@/styles/**',
              position: 'after',
            },
            {
              group: 'internal',
              pattern: '@/types/**',
              position: 'after',
            },
          ],

          pathGroupsExcludedImportTypes: ['builtin'],
          warnOnUnassignedImports: true,
        },
      ],
      'no-restricted-imports': [
        'warn',
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
            },
          ],
        },
      ],
    },
  },
  { settings: { tailwindcss: { callees: ['clsx', 'cn', 'cva'] } } }
);

export default config;
