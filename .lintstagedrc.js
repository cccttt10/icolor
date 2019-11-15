module.exports = {
    './src/**/*.{ts,tsx}': [
        'prettier --config ./.prettierrc.json --write',
        'eslint --fix',
        'tsc --project ./tsconfig.json',
        'git add'
    ],
    './src/**/*.{js}': [
        'prettier --config ./.prettierrc.json --write',
        'eslint --fix',
        'git add'
    ]
};
