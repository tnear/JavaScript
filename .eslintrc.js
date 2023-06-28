module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "eqeqeq": ["error", "always"],
        "arrow-body-style": ["error", "as-needed"],
        "dot-notation": "error",
        "eol-last": ["error", "always"],
        "no-duplicate-imports": "error",
        "no-shadow": "error",
        "no-useless-concat": "error",
        "no-use-before-define": "error",
        "semi": ["error", "always"],
    }
};
