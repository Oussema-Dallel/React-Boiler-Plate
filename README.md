# Simple Time Tracking Application

A simple Time Tracking Application built with React, Redux and Material UI.

## Getting Started

In root directory, run:

```npm install```

```npm run dev```

## Linting

For best compatibility with vscode and eslint, install the following extension:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

then add the following to your vscode settings.json:

```json
{
    "eslint.enable": true,
    "eslint.alwaysShowStatus": true,
    "eslint.options": {
        "extensions": [ ".ts", ".tsx"]
    },
    "eslint.validate": [
        "typescript",
        "typescriptreact"
    ],
    "eslint.workingDirectories": [
        "./src"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Testing

To run tests, run:

```npm run test```
