# Welcome to Chapter Node CDK project presentation

The `cdk.json` file tells the CDK Toolkit how to execute your app.

# How to use

Export AWS Credentials:

- `export AWS_ACCESS_KEY_ID="..."`
- `export AWS_SECRET_ACCESS_KEY="..."`
- `export AWS_SESSION_TOKEN="..."`


### With docker:

```docker
docker build -t chapter-nodejs:latest .
```

Synthesize CloudFormation Template:

```docker
docker run \
-e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
-e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
-e AWS_SESSION_TOKEN=$AWS_SESSION_TOKEN \
-v $PWD/template:/usr/src/chapter-nodejs/template \
-i chapter-nodejs:latest \
synth --app "node src/app/ci/app.js"
```

Deploy specified CDK Application:

```docker
docker run \
-e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
-e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
-e AWS_SESSION_TOKEN=$AWS_SESSION_TOKEN \
-v $PWD/template:/usr/src/chapter-nodejs/template \
-i chapter-nodejs:latest \
deploy --app "node src/app/ci/app.js"
```

### Available commands

#### CI component

- synth:

```docker
docker run \
-e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
-e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
-e AWS_SESSION_TOKEN=$AWS_SESSION_TOKEN \
-v $PWD/template:/usr/src/chapter-nodejs/template \
-i chapter-nodejs:latest \
synth --app "node src/app/ci/app.js"
```

- deploy:

```docker
docker run \
-e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
-e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
-e AWS_SESSION_TOKEN=$AWS_SESSION_TOKEN \
-v $PWD/template:/usr/src/chapter-nodejs/template \
-i chapter-nodejs:latest \
deploy --app "node src/app/ci/app.js" --require-approval=never
```

# In Development

This project uses CDK with NodeJS.

Install CDK CLI:

```
$ npm install -g aws-cdk@2.30.0
```

Check CDK version:

```
$ cdk version
```

Generate initial development bundle:

```
$ npm run bundle
```

#### CI component

- `cdk synth --app "node dist/src/app/ci/app.js"`
- `cdk deploy --app "node dist/src/app/ci/app.js"`

- `npm run compile`


## Useful commands

- `npm run compile` compile typescript to js
- `npm run build` generate distribution build with .js and .py files without running tests
- `npm run watch` watch for changes and compile
- `npm test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template


