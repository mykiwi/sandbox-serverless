# Serverless sandbox

Different examples of code working with serverless technologies

## Step by step commands to setup a project

### PHP

```bash
echo '{}' > package.json
npm install --save serverless

composer require bref/bref
vendor/bin/bref init

# customize serverless.yml, index.php

./node_modules/.bin/serverless deploy
```
