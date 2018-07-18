# Cookiecutter template for SAM

This repo is to be used with `sam init --location`.

Generate a new SAM based serverless app.

``` bash
sam init --location gh:bagubagu/cookiecutter-sam

```

## Template design goal

- exclude `aws-sdk` from the zipped deployment bundle
- enable vscode autocompletion of `*.js` files by leveraging `jsconfig.json`

### Exclude `aws-sdk` from the zipped deployment bundle

We do not want to bundle `aws-sdk` into our deployment zip file. For that we put the `aws-sdk` in the `node_modules` parent directory of `src`.

The pre-configured `node_module/aws-sdk` is of version `2.249.1`. Which is the same version as what is is installed in the aws lambda container (according to  https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html).

### Enable vscode autocompletion

By having `jsconfig.json` in the project directory, `vscode` enables autocompletion for `js` files. The autocompletion uses definition from `**.d.ts` files from project directory including `node_modules` directories.


