# eslint-plugin-quizizz

ESLint plugin for Quizizz projects

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-quizizz`:

```sh
npm i https://github.com/quizizz/eslint-plugin-quizizz --save-dev
```

## Usage

Add `quizizz` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "quizizz"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "quizizz/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


