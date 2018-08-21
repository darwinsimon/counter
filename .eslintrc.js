module.exports = {
    parser: 'babel-eslint',
    extends: "airbnb",
    env: {
        "jest": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        "react/prop-types": ["error", {
            "ignore": ["navigation"]
        }],
        "no-console": ["error", { "allow": ["log", "warn", "error"] }]
    }
};