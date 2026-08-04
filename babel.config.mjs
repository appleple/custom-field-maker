export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { ie: '11' }, // Babel 8でtargets省略時は"defaults"相当になるため、従来のES5出力を維持するために明示
        modules: 'commonjs', // package.jsonがCommonJS想定(mainフィールド)のため明示
      },
    ],
    [
      '@babel/preset-react',
      // development: 未指定だとBABEL_ENV/NODE_ENVの実行時環境変数で自動判定されるため、
      // 実行環境によってlib/にjsx-dev-runtime(jsxDEV)呼び出しが紛れ込むことがある。
      // React 19の本番ビルドはjsxDEVを未定義にするため、配布物のlib/は常に本番用のjsx-runtimeを使う。
      { runtime: 'automatic', development: false },
    ], // React 17+の新しいJSX変換を有効化
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
