module.exports = {
    "extends": [
        "standard",
        "plugin:react/recommended",
    ],
    "plugins": ["prettier", "react"],
    "rules": {
      "react/jsx-filename-extension": [
        1,
        {
          "extensions": [".js", ".jsx"]
        }
      ],
      "react/prop-types": 0,
      "no-underscore-dangle": 0,
      "import/imports-first": ["error", "absolute-first"],
      "import/newline-after-import": "error",
      "react/jsx-uses-react": "error",   
      "react/jsx-uses-vars": "error",
    },
    "globals": {
      "window": true,
      "document": true,
      "localStorage": true,
      "FormData": true,
      "FileReader": true,
      "Blob": true,
      "navigator": true
    },
    "parser": "babel-eslint"
};