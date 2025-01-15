# Prettier

Prettier rules is placed in `package.json` at workspace root directory.

```json
{
  // other configs
  "prettier": {
    "singleQuote": false,
    "endOfLine": "lf",
    "tabWidth": 2
    // ...
  }
}
```

# ESLint

ESLint config located at:

```
eslint.config.ts
```

> To use a `.ts` config file, `jiti` devDependency is required, and it added to `package.json`.

## Debugging

To debug this config file, use:

```shell
pnpm eslint --debug .
```
