// prettier-ignore
module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    'overrides': [{
        'files': 'src/util/starterPalettes.ts',
        'rules': {
            'max-lines': 'off'
        }
    }],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 9,
        'sourceType': 'module'
    },
    'plugins': ['simple-import-sort', 'react', '@typescript-eslint'],
    'rules': {
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-use-before-define': 'warn',
        'camelcase': 'error',
        'eqeqeq': 'error',
        'max-lines': ['warn', 200],
        'no-console': 'warn',
        'no-trailing-spaces': 'error',
        'no-unused-vars': ['error', {
            'argsIgnorePattern': '^(resource|props)$',
            'varsIgnorePattern': 'React'
        }],
        'no-var': 'error',
        'react/boolean-prop-naming': 'error',
        'react/jsx-key': 'warn',
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'error',
        'react/prefer-stateless-function': 'warn',
        'react/prop-types': 'off',
        'require-await': 'error',
        'simple-import-sort/sort': 'error'
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
};
