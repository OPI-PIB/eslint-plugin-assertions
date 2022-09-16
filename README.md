# @opi_pib/eslint-plugin-assertions

## Dependencies

### Install dependencies

```
npm install -D @opi_pib/eslint-plugin-assertions
```

### Install peerDependencies

```
npm install -D eslint

```

## Config

.eslintrc.json

```
"plugins": ["@opi_pib/assertions"],
"rules": {
    "@opi_pib/assertions/assertions-code": [
        "error",
        "^[a-z0-9]{8}$"
    ],
    "@opi_pib/assertions/assertions-condition": ["error"]
}
```
