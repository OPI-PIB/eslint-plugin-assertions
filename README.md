# @opi_pib/eslint-plugin-assertions

## Dependencies

### Install

```
npm install -D eslint @opi_pib/eslint-plugin-assertions
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
