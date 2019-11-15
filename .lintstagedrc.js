module.exports = {
    './src/**/*.{ts,tsx}': [
        'prettier --config ./.prettierrc.json --write',
        'eslint --fix',
        'tsc',
        'git add'
    ],
    './src/**/*.{js}': [
        'prettier --config ./.prettierrc.json --write',
        'eslint --fix',
        'git add'
    ]
};
