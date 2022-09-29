module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'plugin:react/recommended',
      'airbnb',
   ],
   overrides: [],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: [
      'react',
      '@typescript-eslint',
   ],
   rules: {
      'react/jsx-indent': [2, 3],
      'react/jsx-indent-props': [2, 3],
      indent: ['error', 3],
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
      'linebreak-style': ['error', 'windows'],
      'react/react-in-jsx-scope': 'off',
      'max-len': ['error', { ignoreComments: true, code: 120 }],
      'no-undef': 'warn',
      'jsx-quotes': ['error', 'prefer-single'],
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'react/function-component-definition': 'off',
      'arrow-body-style': 'off',
   },
};
