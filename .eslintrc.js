const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "plugin:@next/next/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-jsdoc",
        "eslint-plugin-prefer-arrow",
        "@typescript-eslint"
    ],
    "rules": {
        "eqeqeq": [
            "error",
            "always"
        ],
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "semi": [
            "error",
            "always"
        ],
        "indent": ["error", 2],
        "no-trailing-spaces": "error",
        "no-extra-semi": "error",
        "no-console": isProd ? ["error", { allow: ["warn", "error"] }] : "off",
        "curly": "error",
        "comma-spacing": [
            "error",
            {"before":false, "after": true}
        ],
        "no-var": "error",
        "prefer-const": "error",
        "space-in-parens": ["error", "never"]
    },
    "ignorePatterns": ['.eslintrc.js']
};
