import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'out/**',
      'coverage/**',
      'public/**',
      'vite.config.js',
      'postcss.config.js',
      'tailwind.config.js'
    ]
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: './tsconfig.json' 
      }
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
			...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
			'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { "varsIgnorePattern": "^styled$|^styles$" }],
    }
  }
];
