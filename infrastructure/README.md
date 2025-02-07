# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Deprecations
$ cross-env NODE_ENV=Development DOTENV_CONFIG_PATH=./.env.development CDK_MODE=ONLY_DEV cdk deploy
[WARNING] aws-cdk-lib.aws_ec2.VpcProps#cidr is deprecated.
  Use ipAddresses instead
  This API will be removed in the next major release.
[WARNING] aws-cdk-lib.aws_ec2.SubnetType#PRIVATE_WITH_NAT is deprecated.
  use `PRIVATE_WITH_EGRESS`
  This API will be removed in the next major release.
[WARNING] aws-cdk-lib.aws_cloudfront_origins.S3Origin is deprecated.
  Use `S3BucketOrigin` or `S3StaticWebsiteOrigin` instead.
  This API will be removed in the next major release.
[WARNING] aws-cdk-lib.aws_cloudfront_origins.S3Origin#bind is deprecated.
  Use `S3BucketOrigin` or `S3StaticWebsiteOrigin` instead.
  This API will be removed in the next major release.
[WARNING] aws-cdk-lib.aws_ec2.VpcProps#cidr is deprecated.
  Use ipAddresses instead
  This API will be removed in the next major release.
[WARNING] aws-cdk-lib.aws_ec2.SubnetType#PRIVATE_WITH_NAT is deprecated.
  use `PRIVATE_WITH_EGRESS`
  This API will be removed in the next major release.
[WARNING] aws-cdk-lib.aws_cloudfront_origins.S3Origin is deprecated.
  Use `S3BucketOrigin` or `S3StaticWebsiteOrigin` instead.
  This API will be removed in the next major release.
[WARNING] aws-cdk-lib.aws_cloudfront_origins.S3Origin#bind is deprecated.
  Use `S3BucketOrigin` or `S3StaticWebsiteOrigin` instead.
  This API will be removed in the next major release.

## CORS
[Error] Origin https://dev-frontend-cdk-book.krishgu.click is not allowed by Access-Control-Allow-Origin. Status code: 502
[Error] XMLHttpRequest cannot load https://dev-backend-cdk-book.krishgu.click/ due to access control checks.
[Error] Failed to load resource: Origin https://dev-frontend-cdk-book.krishgu.click is not allowed by Access-Control-Allow-Origin. Status code: 502 (dev-backend-cdk-book.krishgu.click, line 0)
[Error] Unhandled Promise Rejection: AxiosError: Network Error
	dispatchException (main.62dc67a6.js:2:203826)
	(anonymous function) (main.62dc67a6.js:2:200010)
	qe (main.62dc67a6.js:2:205572)
	l (main.62dc67a6.js:2:205815)