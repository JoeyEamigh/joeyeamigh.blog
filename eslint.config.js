import eslint from '@eslint/js';
import astroEslintParser from 'astro-eslint-parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import * as mdxPlugin from 'eslint-plugin-mdx';
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['src/**/*.astro'],
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: true,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
  {
    ...mdxPlugin.flat,
    files: ['src/**/*.mdx', 'src/**/*.md'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.js', '**/*.md', '**/*.mdx'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    ignores: ['src/env.d.ts', '.astro', 'README.md'],
  },
];
