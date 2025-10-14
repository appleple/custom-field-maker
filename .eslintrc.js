module.exports = {
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // React 17+ の新しいJSX変換用（react-in-jsx-scopeルールを自動で無効化）
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  plugins: ['react', 'jsx-a11y'],
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
  overrides: [
    // プロジェクトにJavaScriptとTypeScriptが共存しているため、
    // ts, tsxの拡張子のファイルは別途TypeScript用のルールを適用
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      rules: {
        // 未使用変数を禁止
        '@typescript-eslint/no-unused-vars': 'error',
        // 定義前の変数の使用に警告
        '@typescript-eslint/no-use-before-define': 'warn',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      webpack: {
        config: 'webpack.prod.js',
      },
    },
  },
  parser: '@typescript-eslint/parser',
};
