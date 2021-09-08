# fat.dog-pixel
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Bardiches/fat.dog-pixel/Build%20and%20Deploy%20Site)

`fat.dog-pixel` is a simple portfolio website located at [fat.dog](https://fat.dog). It is based off of [create-react-app](https://github.com/facebook/create-react-app) and features a retro gaming theme.

## Build Configuration

### `config.json`
`config.json` defines the content that will be displayed within the website. It should be placed within `src/`. An example `config.json` is provided for ease of use. Images referenced in `config.json` should be placed in `public/`.

### Images
There are three different types of images that can be customized.

#### `portrait.png`
`portrait.png` should be a 40x48 image. It should be placed within `public/`.

#### Experience Logos
Experience logos should be 32x32 images. They should be placed within `public/` and referrenced accordingly in `config.json`.

#### External Link Logos
External link logos should be 24x24 images. They should be placed within `public/` and referrenced accordingly in `config.json`.

## Deployment Configuration

`fat.dog-pixel` is built using GitHub actions and deployed to [AWS S3](https://aws.amazon.com/s3/).

### Travis `env` values

#### `AWS_ACCESS_KEY_ID`/`AWS_ACCESS_KEY_ID`

These values should be configured in your Travis CI build as a user that has access to write to your S3 bucket.

#### `AWS_S3_BUCKET`

This value should be set to the name of the bucket your files should be uploaded to. Currently, they are uploaded to the root directory.

#### `AWS_DISTRIBUTION_ID`

This value should be set to the CloudFront distribution id to invalidate.
