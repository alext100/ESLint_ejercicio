module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb-base', 'prettier',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {},
};