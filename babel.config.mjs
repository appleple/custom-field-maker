export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { ie: '11' }, // Babel 8でtargets省略時は"defaults"相当になるため、従来のES5出力を維持するために明示
        modules: 'commonjs', // package.jsonがCommonJS想定(mainフィールド)のため明示
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }], // React 17+の新しいJSX変換を有効化
    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
