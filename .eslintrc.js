module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
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
        "no-extra-semi": "error",
        "no-console": ["error", { allow: ["warn", "error"] }],
        "curly": "error",
        "comma-spacing": [
            "error",
            {"before":false, "after": true}
        ],
        "no-var": "error",
        "prefer-const": "error",
        "space-in-parens": ["error", "never"]
    }
};
