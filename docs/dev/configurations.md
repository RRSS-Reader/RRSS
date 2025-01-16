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

## Ignored Files

Prettier will automatically ignore files in `.gitignore` if there is one in `cwd`.

`.prettierignore` is also used as complementary.

# ESLint

ESLint config located at:

```
eslint.config.ts
```

> To use a `.ts` config file, `jiti` devDependency is required, and it added to `package.json`.

## Ignored Files

ESLint of this project is also configured to respect `.gitignore`. However, ESLint itself has a complete configuration rules that allows user to includes and ignore files.

## Debugging

To debug this config file, use:

```shell
pnpm eslint --debug .
```

# Pre-commit Hook

RRSS use `husky` as the Git Pre-Commit hooks, Pre-Commit hooks could be edit in file:

```
.husky/pre-commit
```

Currently, pre-commit hooks including two works:

- **ESLint** file checks&fix.
- **Prettier** file formatting.

## Add New Hook Task

It's recommended to add the task into `package.json` scripts first, then use `husky` to trigger that script.

```shell
pnpm run your_custom_script
```
