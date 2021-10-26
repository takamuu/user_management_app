module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb-typescript',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
    //     // disable the rule for all files
    //     '@typescript-eslint/explicit-module-boundary-types': 'off',
    // },
    // overrides: [
    //     {
    //         // enable the rule specifically for TypeScript files
    //         files: ['*.ts', '*.tsx'],
    //         rules: {
    //             '@typescript-eslint/explicit-module-boundary-types': ['error'],
    //         },
    //     },
    // ],
};
