import js from '@eslint/js';
import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default [
  {
    ignores: ['dist/**', 'lib/**', 'node_modules/**'],
  },

  js.configs.recommended,

  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'], // React 17+ の新しいJSX変換用（react-in-jsx-scopeルールを自動で無効化）

  reactHooksPlugin.configs.flat.recommended,

  jsxA11yPlugin.flatConfigs.recommended,

  eslintConfigPrettier,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        // ESLint 10でcontext.getFilename()が削除され、'detect'指定時のバージョン自動検出が
        // eslint-plugin-react@7.37.5では動作しないため、明示的にバージョンを指定
        version: '18.3.1',
      },
    },
    rules: {
      'react/prop-types': 'off',
      // 関数コンポーネントは関数宣言を強制
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'function-expression',
        },
      ],
      'jsx-a11y/label-has-associated-control': 'off',
      'react/no-children-prop': 'off',
    },
  },

  // プロジェクトにJavaScriptとTypeScriptが共存しているため、
  // ts, tsxの拡張子のファイルは別途TypeScript用のルールを適用
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      // 未使用変数を禁止（ただし_プレフィックスは許可）
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      // 定義前の変数の使用に警告
      '@typescript-eslint/no-use-before-define': 'warn',
      // any型の使用を許可
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
