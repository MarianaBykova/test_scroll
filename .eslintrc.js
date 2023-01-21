module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'import',
    'jsdoc',
  ],
  rules: {
    'linebreak-style': 0,
    'max-len': 'off',
    'no-restricted-globals': ['error', 'event'],
    'arrow-body-style': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'node/file-extension-in-import': [
      0,
      '.js',
      '.jsx',
    ],
    'import/no-useless-path-segments': 0,
    'import/no-unresolved': [
      2,
      { commonjs: true, caseSensitive: false },
    ],
    'jsdoc/no-undefined-types': 1,
    'import/no-extraneous-dependencies': [
      'error',
      {
        projectDependencies: false,
      },
    ],
  },
};
