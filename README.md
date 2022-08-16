# @opi-pib/eslint-plugin-assertions

## Dependencies

### Install dependencies

```
npm install -D @opi-pib/eslint-plugin-assertions
```

### Install peerDependencies

```
npm install -D eslint

```

## Config

.eslintrc.json

```
"plugins": ["@opi-pib/assertions"],
"rules": {
    "@opi-pib/assertions/assertions-code": [
        "error",
        "^[a-z0-9]{8}$"
    ],
    "@opi-pib/assertions/assertions-condition": ["error"]
}
```
