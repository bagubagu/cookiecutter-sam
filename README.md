# Cookiecutter template for SAM

This repo is to be used with `sam init --location`.

Generate a new SAM based serverless app.

``` bash
sam init --location gh:bagubagu/cookiecutter-sam

# make changes
# ...

# initial deployment as per template.yaml
npm run deploy

# upload lambda. run this anytime you modify lambda function
npm run upload
```

## Template design goal

- exclude `aws-sdk` and other unused packages from the zipped deployment bundle
- use typescript to leverage static typing, interface, autocompletion, `aws-lambda` definition
- automate deployment. Make changes and just run `npm run deploy` 

### Exclude `aws-sdk` from the zipped deployment bundle

`aws-sdk` is already pre-installed in lambda environment. For that reason we do not have to and we do not want to bundle `aws-sdk` into the deployment zip file. We use `lambpack` to help with that.

The pre-configured `node_module/aws-sdk` in `package.json` is of version `2.249.1`. Which is the same version as what is is installed in the aws lambda container (according to  https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html).
